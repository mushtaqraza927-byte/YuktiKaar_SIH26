import { IPType, Jurisdiction, AssistantAnswer } from '../types';

export interface UserQueryRecord {
  id: string;
  timestamp: string; // ISO string
  formattedTime: string;
  userEmail: string;
  userName: string;
  queryText: string;
  ipType: IPType;
  jurisdiction: Jurisdiction;
  status: 'Answered' | 'Pending Review' | 'Flagged' | 'Escalated to Facilitator';
  confidence: 'high' | 'medium' | 'low';
  answerSummary: string;
  keyPoints?: string[];
  citationsCount: number;
  facilitatorRequested?: boolean;
  notes?: string;
  tags?: string[];
}

const STORAGE_KEY = 'yukti_kaar_user_queries_v1';

const SEED_QUERIES: UserQueryRecord[] = [
  {
    id: 'YK-2026-901',
    timestamp: new Date(Date.now() - 1000 * 60 * 18).toISOString(),
    formattedTime: '18 mins ago',
    userEmail: 'rohit.sharma@healthlens.ai',
    userName: 'Rohit Sharma (HealthLens AI)',
    queryText: 'Can we patent an AI deep learning model for early diabetic retinopathy detection under Section 3(k) in India?',
    ipType: 'patent',
    jurisdiction: 'india',
    status: 'Answered',
    confidence: 'high',
    answerSummary: 'Pure software and algorithms per se are non-patentable under Section 3(k). However, patentability can be established if the algorithm produces a tangible technical effect or technical contribution when integrated with diagnostic hardware (CRI Guidelines 2017 & Ferid Allani precedent).',
    keyPoints: [
      'Pure code/algorithm is excluded under Section 3(k) of Patents Act 1970.',
      'Must claim the technical contribution and hardware synergy (e.g., optical sensor + GPU processing pipeline).',
      'Recommended to draft claims focusing on the computerized imaging system rather than standalone neural weights.'
    ],
    citationsCount: 3,
    facilitatorRequested: false,
    notes: 'High-value medtech AI startup from Bengaluru. Clear Section 3(k) technical contribution argument.',
    tags: ['MedTech', 'AI/ML', 'Section 3(k)', 'CRI Guidelines']
  },
  {
    id: 'YK-2026-892',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    formattedTime: '45 mins ago',
    userEmail: 'priya.nair@chairoots.co',
    userName: 'Priya Nair (ChaiRoots Beverages)',
    queryText: 'How to register our brand "ChaiBrew Express" in Class 30 and Class 43 simultaneously?',
    ipType: 'trademark',
    jurisdiction: 'india',
    status: 'Answered',
    confidence: 'high',
    answerSummary: 'File a multi-class trademark application under Form TM-A covering Class 30 (tea/packaged beverages) and Class 43 (cafes/food service), conducting prior search on IP India database for phonetic similarity under Section 11.',
    keyPoints: [
      'Multi-class application via Form TM-A allows single filing for Class 30 & 43.',
      'Official statutory fee is ₹4,500 per class for startups/MSMEs (50% reduction).',
      'Must submit user affidavit with earliest invoice date if claiming prior use.'
    ],
    citationsCount: 2,
    facilitatorRequested: true,
    notes: 'Requested expedited examination under Startup India SIPP Scheme.',
    tags: ['Trademarks', 'Class 30', 'Class 43', 'SIPP']
  },
  {
    id: 'YK-2026-880',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    formattedTime: '2 hours ago',
    userEmail: 'aniket.deshmukh@voltcraft.in',
    userName: 'Aniket Deshmukh (VoltCraft EV)',
    queryText: 'Competitor launched an identical ergonomic casing for EV charging gun. Can we file a design infringement suit under Designs Act 2000?',
    ipType: 'other',
    jurisdiction: 'india',
    status: 'Escalated to Facilitator',
    confidence: 'high',
    answerSummary: 'If registered under Section 11 of the Designs Act 2000, you have copyright in the design for 10 years (extendable to 15). Remedy lies in civil suit under Section 22 for piracy of registered design with interim injunction and statutory damages.',
    keyPoints: [
      'Section 22 provides statutory recovery of ₹25,000 to ₹50,000 per violation or actual damages.',
      'Must verify registration certificate validity and that design was novel on application date.',
      'Cease-and-desist legal notice strongly advised before civil suit.'
    ],
    citationsCount: 3,
    facilitatorRequested: true,
    notes: 'Escalated to registered IP attorney for drafting Section 22 legal cease-and-desist notice.',
    tags: ['Designs Act', 'Infringement', 'Section 22', 'EV Hardware']
  },
  {
    id: 'YK-2026-871',
    timestamp: new Date(Date.now() - 1000 * 60 * 210).toISOString(),
    formattedTime: '3.5 hours ago',
    userEmail: 'kavita.verma@ayurbio.org',
    userName: 'Dr. Kavita Verma (AyurBio Labs)',
    queryText: 'Can we patent a novel nano-encapsulated formulation of Curcumin and Ashwagandha with 10x bioavailability?',
    ipType: 'traditional_knowledge',
    jurisdiction: 'india',
    status: 'Pending Review',
    confidence: 'medium',
    answerSummary: 'Inventions involving herbal formulations encounter Section 3(p) (traditional knowledge) and Section 3(d) (mere admixture without synergism). Must demonstrate unexpected enhanced therapeutic efficacy and obtain prior NBA approval if utilizing Indian biological resources.',
    keyPoints: [
      'Section 3(p): Cannot patent traditional knowledge or mere aggregation of known plants.',
      'Section 3(d): Must provide empirical comparative clinical data proving synergistic efficacy over individual ingredients.',
      'Mandatory National Biodiversity Authority (NBA) approval under Section 6 of Biological Diversity Act 2002.'
    ],
    citationsCount: 4,
    facilitatorRequested: false,
    notes: 'Requires review of clinical trial bioavailability curves for Section 3(d) compliance.',
    tags: ['Ayurveda', 'Section 3(p)', 'Section 3(d)', 'NBA Clearance']
  },
  {
    id: 'YK-2026-865',
    timestamp: new Date(Date.now() - 1000 * 60 * 340).toISOString(),
    formattedTime: '5.5 hours ago',
    userEmail: 'dev.kulkarni@codefabric.tech',
    userName: 'Dev Kulkarni (CodeFabric)',
    queryText: 'How is proprietary backend Python code protected? Do we register copyright or file a software patent?',
    ipType: 'copyright',
    jurisdiction: 'india',
    status: 'Answered',
    confidence: 'high',
    answerSummary: 'Source code and object code are statutorily protected as "literary works" under Section 2(o) of The Copyright Act 1957 from the moment of creation. Registration with Copyright Office (Form XIV) provides prima facie proof of ownership.',
    keyPoints: [
      'Copyright Act Section 13 & 14 protects the expression of code, not the underlying functional idea.',
      'Software patents under Patents Act are barred per se unless tied to tangible hardware technical effect.',
      'Recommended approach: Copyright registration + strict trade secret NDAs for algorithm logic.'
    ],
    citationsCount: 2,
    facilitatorRequested: false,
    notes: 'Provided Form XIV guidelines and source code redaction instructions for trade secret safety.',
    tags: ['Copyright', 'Software', 'Literary Works', 'Trade Secrets']
  },
  {
    id: 'YK-2026-850',
    timestamp: new Date(Date.now() - 1000 * 60 * 500).toISOString(),
    formattedTime: '8 hours ago',
    userEmail: 'arjun.singh@robotics-hub.in',
    userName: 'Arjun Singh',
    queryText: 'What is the procedure and timeline to file a PCT International patent application after Indian provisional filing?',
    ipType: 'patent',
    jurisdiction: 'international',
    status: 'Answered',
    confidence: 'high',
    answerSummary: 'Under the Paris Convention and PCT, you have 12 months from your Indian provisional filing date (priority date) to file a PCT international application through IPO (as receiving office) or WIPO directly.',
    keyPoints: [
      'File within 12 months from priority date to claim international priority.',
      'Receive International Search Report (ISR) & Written Opinion by month 16-18.',
      'Enter National Phase in target countries (US, EU, Japan, etc.) at 30/31 months from priority date.',
      'Indian applicants resident in India require Foreign Filing License (FFL) under Section 39 if filing abroad without first filing in India.'
    ],
    citationsCount: 3,
    facilitatorRequested: true,
    notes: 'PCT international filing strategy with 31-month national phase window explained.',
    tags: ['PCT', 'International', 'WIPO', 'Section 39 FFL']
  },
  {
    id: 'YK-2026-842',
    timestamp: new Date(Date.now() - 1000 * 60 * 720).toISOString(),
    formattedTime: '12 hours ago',
    userEmail: 'sunil.mehta@varanasiweaves.org',
    userName: 'Sunil Mehta (Banaras Silk Guild)',
    queryText: 'How can an artisan weaver register as an Authorized User for Banaras Brocades and Sarees GI tag?',
    ipType: 'geographical_indication',
    jurisdiction: 'india',
    status: 'Answered',
    confidence: 'high',
    answerSummary: 'Artisan weavers can apply under Section 17 of The Geographical Indications of Goods Act 1999 using Form GI-3 to obtain Authorized User status under GI Application No. 99, valid for 10 years.',
    keyPoints: [
      'Form GI-3 filed along with statement of case and verification by registered GI proprietor.',
      'Allows legitimate use of the official GI logo on authentic handloom products.',
      'Protects against synthetic powerloom imitations from unauthorized regions under Section 21.'
    ],
    citationsCount: 2,
    facilitatorRequested: false,
    notes: 'Community artisan outreach guidance provided for weaver cluster.',
    tags: ['GI Tag', 'Handloom', 'Authorized User', 'Section 17']
  },
  {
    id: 'YK-2026-830',
    timestamp: new Date(Date.now() - 1000 * 60 * 1100).toISOString(),
    formattedTime: '18 hours ago',
    userEmail: 'farhan.q@batterynext.com',
    userName: 'Farhan Qureshi (BatteryNext)',
    queryText: 'We developed a proprietary battery electrolyte additive formula. Should we patent it or keep it as a trade secret?',
    ipType: 'other',
    jurisdiction: 'india',
    status: 'Flagged',
    confidence: 'medium',
    answerSummary: 'If the chemical composition can be reverse-engineered by chemical spectrometry, patenting is essential (providing 20-year legal monopoly). If impossible to reverse-engineer and manufacturing is strictly controlled, trade secret protection via NDAs and restrictive access provides perpetual protection without public disclosure.',
    keyPoints: [
      'Patent requires public disclosure (Section 10), trade secret requires zero disclosure.',
      'India does not have a standalone Trade Secrets Act; protection relies on Indian Contract Act 1872 (Section 27) and common law tort of breach of confidence.',
      'High risk of reverse engineering strongly favors patent filing with provisional specification.'
    ],
    citationsCount: 2,
    facilitatorRequested: true,
    notes: 'Flagged for trade secret vs patentability matrix evaluation.',
    tags: ['Trade Secrets', 'Reverse Engineering', 'Battery Tech']
  }
];

export const queryStore = {
  getAllQueries(): UserQueryRecord[] {
    if (typeof window === 'undefined') return SEED_QUERIES;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_QUERIES));
        return SEED_QUERIES;
      }
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to load user queries:', e);
      return SEED_QUERIES;
    }
  },

  addQuery(record: Omit<UserQueryRecord, 'id' | 'timestamp' | 'formattedTime'>): UserQueryRecord {
    const all = this.getAllQueries();
    const newId = `YK-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    const newRecord: UserQueryRecord = {
      ...record,
      id: newId,
      timestamp: new Date().toISOString(),
      formattedTime: 'Just now'
    };

    const updated = [newRecord, ...all];
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
    } catch (e) {
      console.error('Failed to persist user query:', e);
    }
    return newRecord;
  },

  recordFromAssistant(
    question: string,
    ipType: IPType,
    jurisdiction: Jurisdiction,
    answer: AssistantAnswer,
    user?: { email?: string | null; displayName?: string | null } | null
  ): UserQueryRecord {
    const email = user?.email || 'anonymous.innovator@user.in';
    const name = user?.displayName || (user?.email ? user.email.split('@')[0] : 'Innovator (Guest)');

    return this.addQuery({
      userEmail: email,
      userName: name,
      queryText: question,
      ipType: answer.ipType || ipType,
      jurisdiction: answer.jurisdiction || jurisdiction,
      status: 'Answered',
      confidence: answer.confidence || 'high',
      answerSummary: answer.answerSummary || '',
      keyPoints: answer.keyPoints || [],
      citationsCount: answer.citations?.length || 0,
      facilitatorRequested: false,
      notes: `Grounded in ${answer.citations?.length || 0} statutory references.`,
      tags: [ipType.toUpperCase(), jurisdiction === 'india' ? 'India IPO' : 'WIPO PCT']
    });
  },

  recordEscalation(
    name: string,
    email: string,
    question: string,
    ipType: IPType,
    jurisdiction: Jurisdiction,
    notes: string,
    referenceId: string
  ): UserQueryRecord {
    return this.addQuery({
      userEmail: email,
      userName: name || 'Innovator',
      queryText: question || `Facilitator escalation request: Ref ${referenceId}`,
      ipType,
      jurisdiction,
      status: 'Escalated to Facilitator',
      confidence: 'high',
      answerSummary: `Escalated to Registered IP Facilitator. Reference: ${referenceId}`,
      keyPoints: ['Assigned for attorney evaluation', 'Contact details dispatched to SIPP facilitator desk'],
      citationsCount: 1,
      facilitatorRequested: true,
      notes: notes ? `User notes: ${notes}` : `Escalated under SIPP scheme with ID: ${referenceId}`,
      tags: ['ESCALATION', 'FACILITATOR', ipType.toUpperCase()]
    });
  },

  updateStatus(id: string, status: UserQueryRecord['status'], notes?: string): void {
    const all = this.getAllQueries();
    const updated = all.map((q) => {
      if (q.id === id) {
        return {
          ...q,
          status,
          ...(notes !== undefined ? { notes } : {})
        };
      }
      return q;
    });
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
    } catch (e) {
      console.error('Failed to update query status:', e);
    }
  },

  deleteQuery(id: string): void {
    const all = this.getAllQueries();
    const filtered = all.filter((q) => q.id !== id);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      }
    } catch (e) {
      console.error('Failed to delete query:', e);
    }
  },

  resetToDefaultSeed(): UserQueryRecord[] {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_QUERIES));
      }
    } catch (e) {
      console.error('Failed to reset queries:', e);
    }
    return SEED_QUERIES;
  },

  getStats() {
    const queries = this.getAllQueries();
    const total = queries.length;
    const answered = queries.filter((q) => q.status === 'Answered').length;
    const escalated = queries.filter((q) => q.status === 'Escalated to Facilitator' || q.facilitatorRequested).length;
    const pending = queries.filter((q) => q.status === 'Pending Review').length;
    const flagged = queries.filter((q) => q.status === 'Flagged').length;

    // IP breakdown
    const ipCounts: Record<string, number> = {};
    queries.forEach((q) => {
      const type = q.ipType || 'other';
      ipCounts[type] = (ipCounts[type] || 0) + 1;
    });

    // Jurisdiction breakdown
    const indiaCount = queries.filter((q) => q.jurisdiction === 'india').length;
    const pctCount = queries.filter((q) => q.jurisdiction === 'pct').length;

    return {
      total,
      answered,
      escalated,
      pending,
      flagged,
      ipCounts,
      indiaCount,
      pctCount
    };
  },

  exportToCSV(): string {
    const queries = this.getAllQueries();
    const headers = [
      'Query ID',
      'Timestamp',
      'User Name',
      'User Email',
      'IP Category',
      'Jurisdiction',
      'Status',
      'Confidence',
      'Query Text',
      'Answer Summary',
      'Citations Count',
      'Facilitator Requested',
      'Admin Notes'
    ];

    const rows = queries.map((q) => [
      `"${q.id}"`,
      `"${q.timestamp}"`,
      `"${(q.userName || '').replace(/"/g, '""')}"`,
      `"${(q.userEmail || '').replace(/"/g, '""')}"`,
      `"${q.ipType}"`,
      `"${q.jurisdiction}"`,
      `"${q.status}"`,
      `"${q.confidence}"`,
      `"${(q.queryText || '').replace(/"/g, '""')}"`,
      `"${(q.answerSummary || '').replace(/"/g, '""')}"`,
      `"${q.citationsCount || 0}"`,
      `"${q.facilitatorRequested ? 'Yes' : 'No'}"`,
      `"${(q.notes || '').replace(/"/g, '""')}"`
    ]);

    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }
};
