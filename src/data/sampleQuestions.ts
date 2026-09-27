import { IPType, Jurisdiction } from '../types';

export interface SampleQuestion {
  id: string;
  question: string;
  category: IPType;
  jurisdiction: Jurisdiction;
  brief: string;
}

export const SAMPLE_QUESTIONS: SampleQuestion[] = [
  {
    id: 'q-patent-req',
    question: 'What are the statutory requirements for a patent application in India?',
    category: 'patent',
    jurisdiction: 'india',
    brief: 'Novelty, inventive step, industrial capability, and non-exclusion under Section 3'
  },
  {
    id: 'q-tm-sec9',
    question: 'What are the absolute grounds for refusal under Section 9 of the Trade Marks Act?',
    category: 'trademark',
    jurisdiction: 'india',
    brief: 'Lack of distinctiveness, descriptive character, generic terms, and public deception'
  },
  {
    id: 'q-tk-protection',
    question: 'Which Indian rules apply to traditional knowledge and Section 3(p) of the Patents Act?',
    category: 'traditional_knowledge',
    jurisdiction: 'india',
    brief: 'TKDL prior art citations, non-patentability of indigenous knowledge, and CSIR defensive disclosures'
  },
  {
    id: 'q-abs-nba',
    question: 'When is approval from the National Biodiversity Authority (NBA) required before filing a patent?',
    category: 'abs',
    jurisdiction: 'india',
    brief: 'Section 6 compliance for inventions utilizing biological resources obtained from India'
  },
  {
    id: 'q-pct-filing',
    question: 'What international agreements govern priority timelines for global patent filings (PCT)?',
    category: 'patent',
    jurisdiction: 'international',
    brief: '12-month Paris Convention priority and 30/31-month national phase entry under WIPO PCT'
  },
  {
    id: 'q-copyright-fair-dealing',
    question: 'What constitutes fair dealing under Section 52 of the Copyright Act in India?',
    category: 'copyright',
    jurisdiction: 'india',
    brief: 'Private use, research, criticism, review, and reporting of current events exceptions'
  },
  {
    id: 'q-gi-eligibility',
    question: 'Who is eligible to apply for registration of a Geographical Indication in India?',
    category: 'geographical_indication',
    jurisdiction: 'india',
    brief: 'Associations of persons, producers, or statutory bodies representing regional craftsmen'
  },
  {
    id: 'q-madrid-tm',
    question: 'How does the Madrid Protocol facilitate international trademark registration from India?',
    category: 'trademark',
    jurisdiction: 'international',
    brief: 'Filing single international application through CGPDTM to designate multiple member states'
  }
];
