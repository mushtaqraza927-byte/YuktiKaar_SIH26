import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Sparkles, Check, LogIn, UserPlus, LogOut, User as UserIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { AuthModal } from '../auth/AuthModal';
import { SupportedLanguage } from '../../i18n/translations';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
}

const LANGUAGES: { code: SupportedLanguage; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' }
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onLanguageChange
}) => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Auth modal state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const selectedLang = LANGUAGES.find((l) => l.code === currentLanguage) || LANGUAGES[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { label: t.navHome, path: '/' },
    { label: t.navExplore, path: '/explore' },
    { label: t.navKnowledge, path: '/knowledge' },
    { label: t.navHowItWorks, path: '/how-it-works' },
    { label: t.navAbout, path: '/about' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const handleSelectLanguage = (code: SupportedLanguage) => {
    setLanguage(code);
    if (onLanguageChange) {
      onLanguageChange(code);
    }
    setLangDropdownOpen(false);
  };

  const openAuth = (mode: 'signin' | 'signup') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  const getUserInitials = () => {
    if (user?.displayName) {
      return user.displayName
        .split(' ')
        .map((p) => p[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
    }
    if (user?.email) {
      return user.email.slice(0, 2).toUpperCase();
    }
    return 'U';
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF7] border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2 text-left group focus:outline-none"
              aria-label="YUKTI-KAAR Home"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-xs group-hover:bg-slate-800 transition-colors">
                <span className="text-amber-400 mr-0.5">Y</span>K
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                YUKTI-KAAR
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Language + Auth + Ask YUKTI-KAAR CTA) */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all shadow-2xs ${
                  langDropdownOpen
                    ? 'bg-amber-50/80 text-amber-950 border-amber-300 ring-2 ring-amber-400/20'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
                aria-label="Change language / भाषा बदलें"
              >
                <Globe className="w-3.5 h-3.5 text-amber-600" />
                <span>{selectedLang.native}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-150 ${langDropdownOpen ? 'rotate-180 text-amber-700' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 border-b border-slate-100 uppercase tracking-wider flex items-center justify-between">
                    <span>{t.navLanguageLabel}</span>
                    <span className="text-[9px] text-amber-600 font-mono font-bold">8 LANGUAGES</span>
                  </div>
                  <div className="max-h-60 overflow-y-auto py-1">
                    {LANGUAGES.map((lang) => {
                      const isSelected = currentLanguage === lang.code;
                      return (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => handleSelectLanguage(lang.code)}
                          className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                            isSelected
                              ? 'font-bold text-slate-900 bg-amber-50/70 border-l-2 border-amber-500'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="font-medium text-slate-900">{lang.native}</span>
                            <span className="text-[10px] text-slate-400">{lang.label}</span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Authentication Buttons / User Profile */}
            {!user ? (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => openAuth('signin')}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <LogIn className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sign In</span>
                </button>
                <button
                  type="button"
                  onClick={() => openAuth('signup')}
                  className="px-3 py-1.5 text-xs font-semibold text-amber-950 bg-amber-100/70 hover:bg-amber-100 border border-amber-300/80 rounded-lg transition-all shadow-2xs flex items-center gap-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5 text-amber-700" />
                  <span>Sign Up</span>
                </button>
              </div>
            ) : (
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:shadow-2xs transition-all"
                  aria-label="User Account"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="w-6 h-6 rounded-full object-cover border border-slate-200"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-[10px] font-bold">
                      {getUserInitials()}
                    </div>
                  )}
                  <span className="max-w-[100px] truncate text-slate-800">
                    {user.displayName || user.email?.split('@')[0] || 'Account'}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3.5 py-2 border-b border-slate-100">
                      <div className="text-xs font-bold text-slate-900 truncate">
                        {user.displayName || 'Registered User'}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {user.email}
                      </div>
                      <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Firebase Authenticated</span>
                      </div>
                    </div>

                    <div className="p-1">
                      <button
                        type="button"
                        onClick={async () => {
                          await logout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50 rounded-lg flex items-center gap-2 transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5 text-rose-500" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Primary Action */}
            <button
              onClick={() => handleNavClick('/assistant')}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-xs hover:shadow-sm whitespace-nowrap active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.navAskCTA}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {!user ? (
              <button
                onClick={() => openAuth('signin')}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg"
              >
                Sign In
              </button>
            ) : (
              <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-[10px] font-bold">
                {getUserInitials()}
              </div>
            )}
            <button
              onClick={() => handleNavClick('/assistant')}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
            >
              {t.heroAskButton}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-[#FAFAF7] px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          {/* User Status Bar in Mobile */}
          <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
            {!user ? (
              <div className="w-full flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openAuth('signin')}
                  className="flex-1 py-2 text-xs font-semibold text-center text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => openAuth('signup')}
                  className="flex-1 py-2 text-xs font-semibold text-center text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg transition-colors"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-xs font-bold">
                    {getUserInitials()}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 truncate max-w-[160px]">
                      {user.displayName || 'User'}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate max-w-[160px]">
                      {user.email}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    await logout();
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-semibold transition-colors"
                  aria-label="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-200/70 text-slate-900 font-semibold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200">
            <div className="text-xs font-semibold text-slate-500 mb-2 flex items-center justify-between">
              <span>{t.navLanguageLabel} (भाषा)</span>
              <span className="text-[10px] text-amber-600 font-mono">Active: {selectedLang.native}</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleSelectLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs px-2.5 py-2 rounded-lg border text-left flex items-center justify-between transition-colors ${
                    currentLanguage === lang.code
                      ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-medium">{lang.native}</span>
                  <span className="text-[10px] opacity-70">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </header>
  );
};
