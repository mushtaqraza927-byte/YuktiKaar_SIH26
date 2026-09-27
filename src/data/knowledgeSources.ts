import { AuthoritativeSource } from '../types';

export const AUTHORITATIVE_SOURCES: AuthoritativeSource[] = [
  {
    id: 'india_code',
    name: 'India Code Digital Repository',
    shortName: 'India Code',
    category: 'Statutes & Primary Legislation',
    description: 'Central digital repository of all central and state acts, legislative amendments, enactments, and statutory rules in full verified text.',
    coverage: 'The Patents Act 1970, Trade Marks Act 1999, Copyright Act 1957, GI Act 1999, Biological Diversity Act 2002',
    officialPortal: 'https://www.indiacode.nic.in',
    status: 'Potential / Integrated Knowledge Source'
  },
  {
    id: 'ip_india',
    name: 'Intellectual Property India (CGPDTM)',
    shortName: 'IP India',
    category: 'Patent, Trademark, Design & GI Registries',
    description: 'Official portal of the Controller General of Patents, Designs and Trade Marks under the Department for Promotion of Industry and Internal Trade (DPIIT).',
    coverage: 'Patent Office Manuals, Trademark Examination Guidelines, Official Journals, Public Search Registries',
    officialPortal: 'https://ipindia.gov.in',
    status: 'Potential / Integrated Knowledge Source'
  },
  {
    id: 'tkdl',
    name: 'Traditional Knowledge Digital Library',
    shortName: 'TKDL',
    category: 'Traditional Knowledge & Prior Art Defense',
    description: 'Pioneering initiative by CSIR and Ministry of Ayush containing codified knowledge from ancient texts of Ayurveda, Unani, Siddha, and Sowa Rigpa.',
    coverage: 'Over 400,000 formulations translated into 5 international languages under TKRC classifications',
    officialPortal: 'https://www.tkdl.res.in',
    status: 'Potential / Integrated Knowledge Source'
  },
  {
    id: 'nba',
    name: 'National Biodiversity Authority',
    shortName: 'NBA India',
    category: 'Biological Resources & Benefit Sharing',
    description: 'Statutory autonomous body under the Ministry of Environment, Forest and Climate Change facilitating conservation and ABS approvals.',
    coverage: 'Section 3, 4, 6 and 19 compliance guidelines, Form III patent approval regulations, benefit-sharing frameworks',
    officialPortal: 'http://nbaindia.org',
    status: 'Potential / Integrated Knowledge Source'
  },
  {
    id: 'wipo',
    name: 'World Intellectual Property Organization',
    shortName: 'WIPO Lex & Treaties',
    category: 'International Treaties & Global Registers',
    description: 'Global forum for intellectual property services, policy, and comprehensive treaties including PCT, Madrid Protocol, and TRIPS.',
    coverage: 'PCT Regulations, Madrid System Guidelines, Berne Convention, WCT, Nagoya Protocol linkages',
    officialPortal: 'https://www.wipo.int',
    status: 'Potential / Integrated Knowledge Source'
  }
];
