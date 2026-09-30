import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User
} from '../services/firebase';

export const ADMIN_EMAIL = 'adminYK26@gmail.com';
export const ADMIN_PASSWORD = 'Sih@2026';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  loginAdmin: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logoutAdmin: () => void;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAdmin: false,
  signInWithGoogle: async () => {},
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
  loginAdmin: async () => ({ success: false }),
  logoutAdmin: () => {},
  logout: async () => {},
  resetPassword: async () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [adminSession, setAdminSession] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('yukti_admin_session') === 'true';
    }
    return false;
  });

  const isUserAdmin = Boolean(
    adminSession ||
    (user?.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase())
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginAdmin = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim();
    if (cleanEmail.toLowerCase() !== ADMIN_EMAIL.toLowerCase() || pass !== ADMIN_PASSWORD) {
      return { success: false, error: 'Invalid admin credentials. Please check Email and Password.' };
    }

    // Try authenticating with Firebase in background, or initialize account if not present
    try {
      await signInWithEmailAndPassword(auth, ADMIN_EMAIL, ADMIN_PASSWORD);
    } catch (fbErr: any) {
      if (fbErr?.code === 'auth/user-not-found' || fbErr?.code === 'auth/invalid-credential') {
        try {
          await createUserWithEmailAndPassword(auth, ADMIN_EMAIL, ADMIN_PASSWORD);
        } catch {
          // Ignored if signup restricted
        }
      }
    }

    setAdminSession(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('yukti_admin_session', 'true');
    }
    return { success: true };
  };

  const logoutAdmin = () => {
    setAdminSession(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('yukti_admin_session');
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      if (error?.code !== 'auth/popup-closed-by-user') {
        console.error('Google Sign In Error:', error);
        throw error;
      }
    }
  };

  const signInWithEmail = async (email: string, pass: string) => {
    await signInWithEmailAndPassword(auth, email.trim(), pass);
    if (email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      setAdminSession(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('yukti_admin_session', 'true');
      }
    }
  };

  const signUpWithEmail = async (email: string, pass: string, name: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email.trim(), pass);
    if (name.trim()) {
      await updateProfile(cred.user, { displayName: name.trim() });
      setUser({ ...cred.user, displayName: name.trim() });
    }
    if (email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      setAdminSession(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('yukti_admin_session', 'true');
      }
    }
  };

  const logout = async () => {
    logoutAdmin();
    await signOut(auth);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email.trim());
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAdmin: isUserAdmin,
        loginAdmin,
        logoutAdmin,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        logout,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
