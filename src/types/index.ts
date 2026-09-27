export type Jurisdiction = 'india' | 'international';

export type IPType =
  | 'all'
  | 'patent'
  | 'trademark'
  | 'copyright'
  | 'geographical_indication'
  | 'traditional_knowledge'
  | 'abs'
  | 'other';

export type ConfidenceLevel = 'high' | 'medium' | 'low';

export interface Citation {
  id: string;
  title: string;
  sourceType: 'Statute / Act' | 'Rule / Regulation' | 'Registry Guideline' | 'Treaty / Convention' | 'Case Law' | 'Official Database';
  publisher: string;
  jurisdiction: Jurisdiction;
  sectionOrArticle?: string;
  dateOrVersion?: string;
  officialUrl?: string;
  summary: string;
  verificationStatus: 'Official Government Repository' | 'WIPO Treaty Archive' | 'Statutory Database' | 'Registry Portal';
}

export interface AssistantAnswer {
  id: string;
  question: string;
  jurisdiction: Jurisdiction;
  ipType: IPType;
  answerSummary: string;
  keyPoints: string[];
  fullExplanation: string;
  confidence: ConfidenceLevel;
  confidenceNote: string;
  citations: Citation[];
  relatedQuestions: string[];
  timestamp: string;
  retrievalStages?: {
    queryAnalysis: string;
    classification: string;
    jurisdictionIdentified: string;
    sourcesMatchedCount: number;
    verificationNotes: string;
  };
}

export interface IPTypeDetail {
  id: IPType;
  name: string;
  shortName?: string;
  iconName?: string;
  tagline: string;
  description: string;
  indianStatute: string;
  governingBody: string;
  internationalTreaty: string;
  keyElements: string[];
  sampleQuestions: string[];
}

export interface KnowledgeItem {
  id: string;
  title: string;
  category: 'Laws' | 'Rules' | 'Case Law' | 'Treaties' | 'Guidelines' | 'Traditional Knowledge' | 'ABS' | 'IP Registries';
  jurisdiction: Jurisdiction | 'both';
  ipType: IPType;
  yearOrVersion: string;
  publisher: string;
  officialReference: string;
  description: string;
  primarySections?: string[];
  externalUrl?: string;
}

export interface AuthoritativeSource {
  id: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  coverage: string;
  officialPortal: string;
  status: 'Potential / Integrated Knowledge Source';
}

export interface UseCase {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  typicalNeed: string;
  recommendedWorkflow: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  status?: 'Operational' | 'Planned' | 'Integrated Knowledge Base';
}
