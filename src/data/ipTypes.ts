import { IPTypeDetail } from '../types';

export const IP_TYPES_LIST: IPTypeDetail[] = [
  {
    id: 'patent',
    name: 'Patent',
    tagline: 'Inventions, novelty, inventive step and industrial utility',
    description: 'Inventions, innovation, patentability, applications and related information across mechanical, chemical, electrical, pharmaceutical, and digital domains.',
    indianStatute: 'The Patents Act, 1970 & Patent Rules, 2003 (as amended)',
    governingBody: 'Controller General of Patents, Designs and Trade Marks (CGPDTM), DPIIT',
    internationalTreaty: 'Patent Cooperation Treaty (PCT) & Paris Convention',
    keyElements: [
      'Novelty (not anticipated in prior art anywhere globally)',
      'Inventive step (non-obvious to person skilled in the art)',
      'Industrial applicability (capable of industrial manufacture/use)',
      'Non-patentable subject matter exclusions under Section 3 & 4'
    ],
    sampleQuestions: [
      'What are the requirements for a patent application in India?',
      'How does Section 3(d) of the Indian Patents Act impact pharmaceutical patenting?',
      'What is the priority timeline for filing an international application under PCT?'
    ]
  },
  {
    id: 'trademark',
    name: 'Trademark',
    tagline: 'Brands, trade names, logos, device marks and goodwill',
    description: 'Brands, names, logos, identity and trademark-related information to distinguish goods and services of one enterprise from those of others.',
    indianStatute: 'The Trade Marks Act, 1999 & Trade Marks Rules, 2017',
    governingBody: 'Trade Marks Registry (TMR), CGPDTM',
    internationalTreaty: 'Madrid System (Protocol Concerning the International Registration of Marks)',
    keyElements: [
      'Distinctiveness (capable of distinguishing goods/services)',
      'Nice Classification system (Classes 1–45)',
      'Absolute grounds for refusal (Section 9)',
      'Relative grounds for refusal with earlier marks (Section 11)'
    ],
    sampleQuestions: [
      'What are the absolute grounds for refusal under Section 9 of the Trade Marks Act?',
      'How does the Madrid Protocol facilitate international trademark registration from India?',
      'What is the difference between word mark and device mark registration?'
    ]
  },
  {
    id: 'copyright',
    name: 'Copyright',
    tagline: 'Literary, dramatic, musical, artistic works and software',
    description: 'Creative works, ownership, protection and related information covering original expressions, moral rights, and digital copyright management.',
    indianStatute: 'The Copyright Act, 1957 & Copyright Rules, 2013 (as amended)',
    governingBody: 'Copyright Office, DPIIT, Ministry of Commerce and Industry',
    internationalTreaty: 'Berne Convention for the Protection of Literary and Artistic Works & WIPO Copyright Treaty (WCT)',
    keyElements: [
      'Originality of expression (ideas themselves are not protected)',
      'Economic rights (reproduction, adaptation, public performance)',
      'Author moral rights (paternity and integrity under Section 57)',
      'Fair dealing exceptions under Section 52'
    ],
    sampleQuestions: [
      'What constitutes fair dealing under Section 52 of the Copyright Act in India?',
      'How is computer software protected under Indian copyright law?',
      'What is the statutory duration of copyright protection for literary works?'
    ]
  },
  {
    id: 'geographical_indication',
    name: 'Geographical Indication',
    shortName: 'GI',
    tagline: 'Origin-linked agricultural, natural and manufactured goods',
    description: 'Products associated with a specific geographical origin where a given quality, reputation or other characteristic is attributable to that location.',
    indianStatute: 'The Geographical Indications of Goods (Registration & Protection) Act, 1999',
    governingBody: 'Geographical Indications Registry (GIR), Chennai',
    internationalTreaty: 'TRIPS Agreement (Articles 22–24) & Lisbon Agreement / Geneva Act',
    keyElements: [
      'Geographical link to defined territory or locality',
      'Collective ownership by registered association or authority',
      'Authorized user certification mechanism',
      'Protection against misleading usage and unfair competition'
    ],
    sampleQuestions: [
      'Who is eligible to apply for registration of a Geographical Indication in India?',
      'How does GI protection differ from collective trademark registration?',
      'What is the role of an authorized user under the GI Act 1999?'
    ]
  },
  {
    id: 'traditional_knowledge',
    name: 'Traditional Knowledge',
    shortName: 'TKDL',
    tagline: 'Indigenous wisdom, Ayurvedic formulations and prior art defensive protection',
    description: 'Traditional knowledge, prior-art references and protection against misappropriation and bio-piracy through documented defensive repositories.',
    indianStatute: 'The Patents Act, 1970 (Section 3(p)) & CSIR TKDL Access Framework',
    governingBody: 'Traditional Knowledge Digital Library (TKDL) - CSIR & Ministry of Ayush',
    internationalTreaty: 'WIPO Intergovernmental Committee on IP and Genetic Resources, Traditional Knowledge and Folklore (IGC)',
    keyElements: [
      'Defensive publication to defeat foreign novelty claims',
      'Classification into Traditional Knowledge Resource Classification (TKRC)',
      'Section 3(p) non-patentability of traditional knowledge in India',
      'Pre-grant opposition using documented codified formulations'
    ],
    sampleQuestions: [
      'How does TKDL prevent the granting of erroneous patents worldwide?',
      'What is Section 3(p) of the Patents Act regarding traditional knowledge?',
      'How are codified systems like Ayurveda, Unani, and Siddha mapped in TKRC?'
    ]
  },
  {
    id: 'abs',
    name: 'Access & Benefit Sharing',
    shortName: 'ABS',
    tagline: 'Biological resources, prior approval and fair equitable sharing',
    description: 'Access to biological resources and benefit-sharing information under biodiversity governance for sustainable utilization and community equity.',
    indianStatute: 'The Biological Diversity Act, 2002 & Biological Diversity Rules, 2004 (amended 2023)',
    governingBody: 'National Biodiversity Authority (NBA) & State Biodiversity Boards (SBB)',
    internationalTreaty: 'Convention on Biological Diversity (CBD) & Nagoya Protocol on ABS',
    keyElements: [
      'Section 6 mandatory NBA approval prior to IP application on biological resources',
      'Equitable benefit-sharing agreements with local communities',
      'Distinction between Indian citizens/entities vs non-Indian entities',
      'Exemptions for normally traded commodities and cultivated medicinal plants'
    ],
    sampleQuestions: [
      'When is approval from the National Biodiversity Authority (NBA) required before filing a patent?',
      'What are the compliance steps under the Biological Diversity Act for commercial utilization?',
      'How does the Nagoya Protocol interface with domestic ABS obligations in India?'
    ]
  }
];
