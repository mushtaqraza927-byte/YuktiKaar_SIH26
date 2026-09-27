import { KnowledgeItem } from '../types';

export const KNOWLEDGE_ITEMS: KnowledgeItem[] = [
  // Laws
  {
    id: 'law-patents-act',
    title: 'The Patents Act, 1970 (Act No. 39 of 1970)',
    category: 'Laws',
    jurisdiction: 'india',
    ipType: 'patent',
    yearOrVersion: 'As amended up to 2005 / 2024 amendments',
    publisher: 'Legislative Department, Ministry of Law and Justice, India Code',
    officialReference: 'Act No. 39 of 1970',
    description: 'The primary legislation governing the grant and enforcement of patents in India. Defines patentability criteria, non-patentable inventions (Section 3 and 4), compulsory licenses, and revocation proceedings.',
    primarySections: ['Section 2(1)(j) - Definition of Invention', 'Section 3 - What are not inventions', 'Section 3(d) - Incremental efficacy', 'Section 3(p) - Traditional knowledge', 'Section 54 - Patents of addition'],
    externalUrl: 'https://www.indiacode.nic.in/handle/123456789/1392'
  },
  {
    id: 'law-trademarks-act',
    title: 'The Trade Marks Act, 1999 (Act No. 47 of 1999)',
    category: 'Laws',
    jurisdiction: 'india',
    ipType: 'trademark',
    yearOrVersion: 'Enacted Dec 30, 1999 / Came into force Sept 15, 2003',
    publisher: 'Ministry of Law and Justice / CGPDTM',
    officialReference: 'Act No. 47 of 1999',
    description: 'Consolidates the law relating to trade marks, providing for registration, better protection of trademarks for goods and services, and the prevention of fraudulent marks usage.',
    primarySections: ['Section 9 - Absolute grounds for refusal', 'Section 11 - Relative grounds for refusal', 'Section 29 - Infringement of registered trademarks', 'Section 34 - Saving for vested rights'],
    externalUrl: 'https://www.indiacode.nic.in/handle/123456789/1993'
  },
  {
    id: 'law-copyright-act',
    title: 'The Copyright Act, 1957 (Act No. 14 of 1957)',
    category: 'Laws',
    jurisdiction: 'india',
    ipType: 'copyright',
    yearOrVersion: 'Substantially amended by the Copyright (Amendment) Act, 2012',
    publisher: 'Copyright Office, DPIIT',
    officialReference: 'Act No. 14 of 1957',
    description: 'Protects original literary, dramatic, musical, artistic works, cinematograph films, sound recordings, and computer programs as literary works.',
    primarySections: ['Section 13 - Works in which copyright subsists', 'Section 14 - Meaning of copyright', 'Section 52 - Acts not constituting infringement (Fair dealing)', 'Section 57 - Author special rights (Moral rights)'],
    externalUrl: 'https://copyright.gov.in/Documents/CopyrightRules1957.pdf'
  },
  {
    id: 'law-gi-act',
    title: 'Geographical Indications of Goods (Registration and Protection) Act, 1999',
    category: 'Laws',
    jurisdiction: 'india',
    ipType: 'geographical_indication',
    yearOrVersion: 'Act No. 48 of 1999',
    publisher: 'Ministry of Commerce and Industry / GI Registry Chennai',
    officialReference: 'Act No. 48 of 1999',
    description: 'Provides for registration and better protection of geographical indications relating to goods in India, preventing unauthorized exploitation of regionally rooted products.',
    primarySections: ['Section 2(1)(e) - Definition of GI', 'Section 8 - Prohibition of registration of certain GI', 'Section 11 - Application for registration', 'Section 22 - Infringement of registered GI'],
    externalUrl: 'https://ipindia.gov.in/act-1999.htm'
  },
  {
    id: 'law-biodiversity-act',
    title: 'The Biological Diversity Act, 2002 & Biodiversity (Amendment) Act, 2023',
    category: 'Laws',
    jurisdiction: 'india',
    ipType: 'abs',
    yearOrVersion: 'Act No. 18 of 2003 / Amended 2023',
    publisher: 'National Biodiversity Authority, Ministry of Environment, Forest & Climate Change',
    officialReference: 'Act No. 18 of 2003',
    description: 'Provides for conservation of biological diversity, sustainable use of its components, and fair and equitable sharing of benefits arising out of the utilization of biological resources.',
    primarySections: ['Section 3 - Requirement of approval for non-Indian citizens/entities', 'Section 6 - Mandatory approval prior to IP application', 'Section 19 - Application to NBA for obtaining biological resources', 'Section 21 - Determination of benefit sharing'],
    externalUrl: 'http://nbaindia.org/content/25/19/1/act.html'
  },

  // Rules
  {
    id: 'rule-patent-rules',
    title: 'The Patents Rules, 2003 (as amended by Patents Amendment Rules 2024)',
    category: 'Rules',
    jurisdiction: 'india',
    ipType: 'patent',
    yearOrVersion: 'Updated March 2024',
    publisher: 'Controller General of Patents, Designs & Trade Marks',
    officialReference: 'G.S.R. Notification 2024',
    description: 'Procedural rules detailing fee reductions for educational institutions and startups, timeline relaxations for working statements (Form 27), and expedited examination protocols.',
    primarySections: ['Rule 12 - Statement and undertaking under section 8', 'Rule 24B - Request for examination', 'Rule 131 - Form and manner of working of patented inventions'],
    externalUrl: 'https://ipindia.gov.in/rules-patents.htm'
  },
  {
    id: 'rule-trademark-rules',
    title: 'The Trade Marks Rules, 2017',
    category: 'Rules',
    jurisdiction: 'india',
    ipType: 'trademark',
    yearOrVersion: 'Notified March 6, 2017',
    publisher: 'Department for Promotion of Industry and Internal Trade',
    officialReference: 'G.S.R. 199(E)',
    description: 'Streamlined rules reducing forms to 8 primary templates, providing 50% fee concessions for individuals, startups, and small enterprises, and introducing expedited processing.',
    primarySections: ['Rule 23 - Form TM-A', 'Rule 33 - Examination of application', 'Rule 124 - Request to determine well-known trademark'],
    externalUrl: 'https://ipindia.gov.in/rules-2017.htm'
  },

  // Case Law
  {
    id: 'case-novartis-glivec',
    title: 'Novartis AG v. Union of India & Others (2013) 6 SCC 1',
    category: 'Case Law',
    jurisdiction: 'india',
    ipType: 'patent',
    yearOrVersion: 'Supreme Court of India (April 1, 2013)',
    publisher: 'Supreme Court of India',
    officialReference: 'Civil Appeal Nos. 2706-2716 of 2013',
    description: 'Landmark decision upholding Section 3(d) of the Patents Act, affirming that the beta-crystalline form of Imatinib Mesylate did not demonstrate enhanced therapeutic efficacy over the known compound, curbing evergreening.',
    primarySections: ['Interpretation of "therapeutic efficacy"', 'Section 3(d) legislative objective', 'Affirmation of TRIPS flexibilities in public health'],
    externalUrl: 'https://main.sci.gov.in'
  },
  {
    id: 'case-cadila-pharma',
    title: 'Cadila Health Care Ltd. v. Cadila Pharmaceuticals Ltd. (2001) 5 SCC 73',
    category: 'Case Law',
    jurisdiction: 'india',
    ipType: 'trademark',
    yearOrVersion: 'Supreme Court of India (March 26, 2001)',
    publisher: 'Supreme Court of India',
    officialReference: 'Appeal (Civil) 2372 of 2001',
    description: 'Seminal ruling establishing stricter standards of deceptive similarity in medicinal and pharmaceutical products to protect consumer health against confusion ("Falcigo" vs "Falcitab").',
    primarySections: ['Deceptive similarity test for pharmaceuticals', 'Consumer public safety principle', 'Phonetic and visual resemblance tests'],
    externalUrl: 'https://main.sci.gov.in'
  },
  {
    id: 'case-ebc-modak',
    title: 'Eastern Book Company & Ors. v. D.B. Modak & Anr. (2008) 1 SCC 1',
    category: 'Case Law',
    jurisdiction: 'india',
    ipType: 'copyright',
    yearOrVersion: 'Supreme Court of India (2008)',
    publisher: 'Supreme Court of India',
    officialReference: 'Civil Appeal No. 6407 of 2001',
    description: 'Supreme Court rejected both the "sweat of the brow" and the ultra-stringent "creativity" standards, adopting the "modicum of creativity" standard for copyright in edited judicial headnotes.',
    primarySections: ['Standard of originality in derivative compilations', 'Sweat of the brow doctrine rejection', 'Skill, judgment and modicum of creativity test'],
    externalUrl: 'https://main.sci.gov.in'
  },

  // Treaties
  {
    id: 'treaty-pct',
    title: 'Patent Cooperation Treaty (PCT)',
    category: 'Treaties',
    jurisdiction: 'international',
    ipType: 'patent',
    yearOrVersion: 'Concluded June 19, 1970 / India acceded 1998',
    publisher: 'World Intellectual Property Organization (WIPO)',
    officialReference: 'WIPO Publication No. 274(E)',
    description: 'An international treaty enabling a single patent application to simultaneously seek patent protection in over 155 contracting states, followed by national phase entries at 30/31 months.',
    primarySections: ['Article 3 - The International Application', 'Article 19 & 34 - Amendments before ISA/IPEA', 'Chapter II - International Preliminary Examination'],
    externalUrl: 'https://www.wipo.int/pct/en/'
  },
  {
    id: 'treaty-madrid',
    title: 'Madrid Protocol Concerning International Registration of Marks',
    category: 'Treaties',
    jurisdiction: 'international',
    ipType: 'trademark',
    yearOrVersion: 'Adopted Madrid 1989 / India joined July 2013',
    publisher: 'WIPO International Bureau',
    officialReference: 'WIPO Madrid System',
    description: 'Facilitates simultaneous protection of a brand across up to 131 countries via a centralized application filed through the applicant domestic trademark office (e.g. CGPDTM India).',
    primarySections: ['Article 2 - International Registration', 'Article 5 - Refusal of Protection', 'Article 6 - Dependency on Basic Application/Registration ("Central Attack")'],
    externalUrl: 'https://www.wipo.int/madrid/en/'
  },
  {
    id: 'treaty-nagoya',
    title: 'Nagoya Protocol on Access to Genetic Resources and the Fair and Equitable Sharing of Benefits',
    category: 'Treaties',
    jurisdiction: 'international',
    ipType: 'abs',
    yearOrVersion: 'Adopted 2010 / Entered into force October 2014',
    publisher: 'Secretariat of the Convention on Biological Diversity (CBD)',
    officialReference: 'CBD Decision X/1',
    description: 'Supplementary agreement to the Convention on Biological Diversity establishing a transparent legal framework for the fair and equitable sharing of benefits arising from genetic resources utilization.',
    primarySections: ['Article 5 - Fair and equitable benefit-sharing', 'Article 6 - Access to genetic resources', 'Article 15 - Compliance with domestic legislation on ABS'],
    externalUrl: 'https://www.cbd.int/abs/'
  },

  // Guidelines
  {
    id: 'guide-cri-patents',
    title: 'Guidelines for Examination of Computer-Related Inventions (CRIs)',
    category: 'Guidelines',
    jurisdiction: 'india',
    ipType: 'patent',
    yearOrVersion: 'CGPDTM Revised Guidelines (2017)',
    publisher: 'Office of the Controller General of Patents, Designs and Trade Marks',
    officialReference: 'CGPDTM/CRI/2017',
    description: 'Clarifies the examination parameters for software and algorithm claims under Section 3(k) of the Patents Act, setting tests for novel hardware interaction and technical effect.',
    primarySections: ['Section 3(k) statutory exclusion test', 'Technical effect and technical contribution analysis', 'Hardware-software structural correlation criteria'],
    externalUrl: 'https://ipindia.gov.in/writereaddata/Portal/IPOGuidelines/1_86_1_Revised__Guidelines_for_Examination_of_Computer-related_Inventions_CRI__.pdf'
  },
  {
    id: 'guide-tkdl-framework',
    title: 'Traditional Knowledge Resource Classification (TKRC) Structure',
    category: 'Traditional Knowledge',
    jurisdiction: 'india',
    ipType: 'traditional_knowledge',
    yearOrVersion: 'CSIR-TKDL Classification Manual',
    publisher: 'Council of Scientific & Industrial Research (CSIR) & Ministry of Ayush',
    officialReference: 'TKRC 2024',
    description: 'An innovative classification system linking ancient Indian medical systems into approximately 27,000 sub-groups modeled on the International Patent Classification (IPC).',
    primarySections: ['Section A01 - Ayurveda formulations', 'Section A02 - Unani preparations', 'Section A03 - Siddha methodologies', 'Section A04 - Yoga postures and therapeutic applications'],
    externalUrl: 'https://www.tkdl.res.in'
  },

  // Registries
  {
    id: 'reg-inpass',
    title: 'InPASS - Indian Patent Advanced Search System',
    category: 'IP Registries',
    jurisdiction: 'india',
    ipType: 'patent',
    yearOrVersion: 'Official Portal (v2.0)',
    publisher: 'CGPDTM, DPIIT',
    officialReference: 'ipindiaservices.gov.in/publicsearch',
    description: 'Full-text public database of Indian patent applications and granted patents, supporting IPC classification search, applicant query, abstract search, and patent status tracking.',
    primarySections: ['Published applications database', 'Granted patents registry', 'Legal status tracker', 'Patent register inspections'],
    externalUrl: 'https://ipindiaservices.gov.in/publicsearch'
  },
  {
    id: 'reg-tm-public',
    title: 'Public Search of Trade Marks (TMR Electronic Register)',
    category: 'IP Registries',
    jurisdiction: 'india',
    ipType: 'trademark',
    yearOrVersion: 'CGPDTM Public Search Portal',
    publisher: 'Trade Marks Registry (TMR)',
    officialReference: 'ipindiaonline.gov.in/eregister/eregister.aspx',
    description: 'Searchable electronic register of all pending and registered trademarks in India across all 45 Nice classes, with phonetic search and Vienna code classification filters.',
    primarySections: ['Word mark phonetic search', 'Vienna code graphical device search', 'Application status and journal verification', 'Opposition notices register'],
    externalUrl: 'https://ipindiaonline.gov.in/eregister/eregister.aspx'
  }
];
