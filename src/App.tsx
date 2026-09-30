import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { ExploreIPGrid } from './components/home/ExploreIPGrid';
import { HowItWorksProcess } from './components/home/HowItWorksProcess';
import { KeyFeaturesGrid } from './components/home/KeyFeaturesGrid';
import { KnowledgeHubPreview } from './components/home/KnowledgeHubPreview';
import { AuthoritativeSources } from './components/home/AuthoritativeSources';
import { RAGArchitectureSection } from './components/home/RAGArchitectureSection';
import { UseCasesSection } from './components/home/UseCasesSection';
import { RealQuestionsSection } from './components/home/RealQuestionsSection';
import { FinalCTA } from './components/home/FinalCTA';
import { AssistantWorkspace } from './components/assistant/AssistantWorkspace';
import { ExplorePage } from './components/explore/ExplorePage';
import { KnowledgeHubPage } from './components/knowledge/KnowledgeHubPage';
import { HowItWorksPage } from './components/howItWorks/HowItWorksPage';
import { AboutPage } from './components/about/AboutPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { IPType } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}

function AppContent() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  // Query parameter state for assistant & knowledge hub routing
  const [prefilledQuestion, setPrefilledQuestion] = useState<string>('');
  const [selectedIPType, setSelectedIPType] = useState<IPType>('all');
  const [knowledgeCategory, setKnowledgeCategory] = useState<string>('All');
  const [knowledgeSearchTerm, setKnowledgeSearchTerm] = useState<string>('');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top on navigation
  const navigateTo = (path: string) => {
    let cleanPath = path;
    let queryParams: URLSearchParams | null = null;

    if (path.includes('?')) {
      const parts = path.split('?');
      cleanPath = parts[0];
      queryParams = new URLSearchParams(parts[1]);
    }

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle deep link params if any
    if (queryParams) {
      if (queryParams.has('q')) {
        setPrefilledQuestion(queryParams.get('q') || '');
      }
      if (queryParams.has('cat')) {
        setKnowledgeCategory(queryParams.get('cat') || 'All');
      }
    }
  };

  const handleAskQuestionFromHome = (question?: string) => {
    if (question) {
      setPrefilledQuestion(question);
    }
    navigateTo('/assistant');
  };

  const handleSelectIPTypeFromHome = (type: IPType) => {
    setSelectedIPType(type);
    navigateTo('/explore');
  };

  const handleNavigateToKnowledge = (category?: string, searchTerm?: string) => {
    if (category) setKnowledgeCategory(category);
    if (searchTerm) setKnowledgeSearchTerm(searchTerm);
    navigateTo('/knowledge');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Global Sticky Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPath === '/' && (
          <div>
            {/* 1. Hero + Assistant Preview */}
            <Hero
              onAsk={handleAskQuestionFromHome}
              onExploreKnowledge={() => navigateTo('/knowledge')}
            />

            {/* 2. Explore Intellectual Property */}
            <ExploreIPGrid onSelectType={handleSelectIPTypeFromHome} />

            {/* 3. How IP SAKTI Works */}
            <HowItWorksProcess />

            {/* 4. Key Features */}
            <KeyFeaturesGrid />

            {/* 5. IP Knowledge Hub */}
            <KnowledgeHubPreview onNavigateToKnowledge={handleNavigateToKnowledge} />

            {/* 6. Grounded in Authoritative Sources */}
            <AuthoritativeSources />

            {/* 7. Behind Every Answer / RAG Architecture */}
            <RAGArchitectureSection />

            {/* 8. Who Can Use IP SAKTI */}
            <UseCasesSection
              onAskUseCase={(prompt) => {
                setPrefilledQuestion(prompt);
                navigateTo('/assistant');
              }}
            />

            {/* 9. Real IP Questions */}
            <RealQuestionsSection
              onSelectQuestion={(q) => {
                setPrefilledQuestion(q);
                navigateTo('/assistant');
              }}
            />

            {/* 10. Final CTA */}
            <FinalCTA
              onAsk={() => navigateTo('/assistant')}
              onExploreKnowledge={() => navigateTo('/knowledge')}
            />
          </div>
        )}

        {currentPath === '/assistant' && (
          <AssistantWorkspace
            initialQuestion={prefilledQuestion}
            initialIPType={selectedIPType}
            onNavigate={navigateTo}
          />
        )}

        {currentPath === '/explore' && (
          <ExplorePage
            initialType={selectedIPType}
            onAskQuestion={(q) => {
              setPrefilledQuestion(q);
              navigateTo('/assistant');
            }}
          />
        )}

        {currentPath === '/knowledge' && (
          <KnowledgeHubPage
            initialCategory={knowledgeCategory}
            initialSearch={knowledgeSearchTerm}
            onAskQuestion={(q) => {
              setPrefilledQuestion(q);
              navigateTo('/assistant');
            }}
          />
        )}

        {currentPath === '/how-it-works' && (
          <HowItWorksPage onAsk={() => navigateTo('/assistant')} />
        )}

        {currentPath === '/about' && (
          <AboutPage onAsk={() => navigateTo('/assistant')} />
        )}

        {currentPath === '/admin' && (
          <AdminDashboard
            onNavigateHome={() => navigateTo('/')}
            onNavigateToAssistant={() => navigateTo('/assistant')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
