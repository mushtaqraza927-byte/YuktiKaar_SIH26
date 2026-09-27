import { FeatureItem } from '../types';

export const KEY_FEATURES: FeatureItem[] = [
  {
    id: 'multilingual',
    title: 'Multilingual Accessibility',
    description: 'Access intellectual property information across major Indian languages and English, bridging linguistic barriers for grassroots innovators.',
    iconName: 'Languages',
    status: 'Operational'
  },
  {
    id: 'jurisdiction',
    title: 'India + International Separation',
    description: 'Keep Indian domestic statutory frameworks (Acts, Rules, Guidelines) clearly distinguished from international treaties and WIPO protocols.',
    iconName: 'Globe2',
    status: 'Operational'
  },
  {
    id: 'source_based',
    title: 'Source-Based Grounded Answers',
    description: 'Every answer is conditioned directly on statutory provisions, published examination guidelines, and official repository documentation.',
    iconName: 'FileCheck2',
    status: 'Operational'
  },
  {
    id: 'transparent_citations',
    title: 'Transparent Citations',
    description: 'View the exact sections, rules, official titles, and publisher references backing each claim, with expandable source verification metadata.',
    iconName: 'BookmarkCheck',
    status: 'Operational'
  },
  {
    id: 'confidence_indicator',
    title: 'Visible Confidence Indicator',
    description: 'Transparent assessment of response grounding level (High, Medium, Low) to communicate epistemic certainty without misleading legal claims.',
    iconName: 'ShieldAlert',
    status: 'Operational'
  },
  {
    id: 'human_escalation',
    title: 'Human IP Facilitator Escalation',
    description: 'When questions involve contested claims, litigation, or nuanced commercial filings, escalate smoothly to certified IP facilitators.',
    iconName: 'Users',
    status: 'Operational'
  }
];
