import { UseCase } from '../types';

export const USE_CASES: UseCase[] = [
  {
    id: 'students',
    title: 'Students & Academia',
    targetAudience: 'Law, engineering, biotechnology, and business university students',
    description: 'Understand core IP concepts, read statutory cross-references, and learn patent claim drafting fundamentals without getting lost in legal jargon.',
    typicalNeed: 'Clarifying patent eligibility tests, trademark fair use boundaries, and thesis copyright guidelines.',
    recommendedWorkflow: 'Explore IP Types → Review statutory definitions → Ask interactive clarifying questions.'
  },
  {
    id: 'researchers',
    title: 'Scientific Researchers',
    targetAudience: 'University labs, R&D institutes, CSIR scholars, and inventors',
    description: 'Check prior-art concepts, understand novelty vs public disclosure risks before publishing papers, and verify non-patentable subject matter exclusions.',
    typicalNeed: 'Evaluating Section 3 exclusions, biological material requirements, and publication embargo rules.',
    recommendedWorkflow: 'Query Prior-Art and Section 3 eligibility → Identify relevant examination guidelines.'
  },
  {
    id: 'startups',
    title: 'Early-Stage Startups',
    targetAudience: 'Founders, technology product managers, and incubators',
    description: 'Navigate cost-effective IP strategies, understand government fee concessions (up to 80% discount for DPIIT-recognized startups), and fast-track processing.',
    typicalNeed: 'Trademark brand protection, software patentability under CRI guidelines, and trade secret hygiene.',
    recommendedWorkflow: 'Check trademark classification → Review startup fee concessions → Prepare for agent filing.'
  },
  {
    id: 'msmes',
    title: 'MSME Enterprises',
    targetAudience: 'Small and medium manufacturing and service enterprises',
    description: 'Identify commercial IP assets in business operations, utilize expedited patent examinations under Rule 24B, and safeguard industrial designs and trademarks.',
    typicalNeed: 'Securing brand identity against imitation, filing patents of addition, and Madrid system exports.',
    recommendedWorkflow: 'Select jurisdiction (India/International) → Assess Nice classification → Explore dispute escalations.'
  },
  {
    id: 'tk_stakeholders',
    title: 'Traditional Knowledge Stewards',
    targetAudience: 'Grassroots communities, Ayurvedic practitioners, and artisan collectives',
    description: 'Understand community rights over biological resources, navigate National Biodiversity Authority (NBA) benefit-sharing rules, and explore GI registrations.',
    typicalNeed: 'Defending against bio-piracy, checking Section 3(p) TKDL protections, and GI collective authorizations.',
    recommendedWorkflow: 'Browse Traditional Knowledge & ABS tabs → Verify Section 6 NBA compliance triggers.'
  },
  {
    id: 'ip_facilitators',
    title: 'IP Facilitators & Attorneys',
    targetAudience: 'Registered patent & trademark agents, incubators, legal aid clinics',
    description: 'Quickly look up exact statute citations, verify latest official rule amendments, cross-reference procedural timelines, and receive pre-screened client queries.',
    typicalNeed: 'Immediate retrieval of exact section wording, case law citations, and client briefing outlines.',
    recommendedWorkflow: 'Knowledge Hub deep-dive → Export cited statutory references → Direct client escalation handling.'
  }
];
