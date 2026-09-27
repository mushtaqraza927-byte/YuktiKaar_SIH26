export type SupportedLanguage = 'en' | 'hi' | 'ta' | 'te' | 'bn' | 'mr' | 'gu' | 'kn';

export interface TranslationDictionary {
  // Navigation
  navHome: string;
  navExplore: string;
  navKnowledge: string;
  navHowItWorks: string;
  navAbout: string;
  navAskCTA: string;
  navLanguageLabel: string;

  // Hero
  heroKicker: string;
  heroHeadline: string;
  heroSubtitle: string;
  heroDescription: string;
  heroAskCTA: string;
  heroExploreCTA: string;
  heroPreviewTitle: string;
  heroInputPlaceholder: string;
  heroSuggestionLabel: string;
  heroAskButton: string;

  // Explore
  exploreKicker: string;
  exploreTitle: string;
  exploreSubtitle: string;
  exploreDomainCTA: string;
  exploreAllDomains: string;

  // How It Works
  howKicker: string;
  howTitle: string;
  howSubtitle: string;
  stepAsk: string;
  stepUnderstand: string;
  stepRetrieve: string;
  stepVerify: string;
  stepAnswer: string;
  stepCite: string;

  // Key Features
  featuresKicker: string;
  featuresTitle: string;
  featuresSubtitle: string;

  // Knowledge Hub
  hubKicker: string;
  hubTitle: string;
  hubSubtitle: string;
  hubSearchPlaceholder: string;
  hubSearchButton: string;
  hubViewComplete: string;

  // Sources
  sourcesKicker: string;
  sourcesTitle: string;
  sourcesSubtitle: string;

  // Architecture
  archKicker: string;
  archTitle: string;
  archSubtitle: string;

  // Use Cases
  useCasesKicker: string;
  useCasesTitle: string;
  useCasesSubtitle: string;

  // Real Questions
  questionsKicker: string;
  questionsTitle: string;
  questionsSubtitle: string;

  // Final CTA
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;

  // Assistant
  assistantKicker: string;
  assistantTitle: string;
  assistantPromptLabel: string;
  assistantDomainFilter: string;
  assistantInputPlaceholderIndia: string;
  assistantInputPlaceholderIntl: string;
  assistantRetrieving: string;
  assistantEmptyTitle: string;
  assistantEmptyDesc: string;

  // Disclaimer
  disclaimerText: string;
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    navHome: 'Home',
    navExplore: 'Explore IP',
    navKnowledge: 'Knowledge Hub',
    navHowItWorks: 'How It Works',
    navAbout: 'About',
    navAskCTA: 'Ask YUKTI-KAAR',
    navLanguageLabel: 'Language',

    heroKicker: 'Multilingual & Source-Backed IP Intelligence',
    heroHeadline: 'Your Intellectual Property Knowledge Assistant',
    heroSubtitle: 'Understand Intellectual Property with trusted, source-backed information.',
    heroDescription: 'Ask questions about patents, trademarks, geographical indications, copyright, traditional knowledge, ABS, and related IP topics grounded in statutory frameworks.',
    heroAskCTA: 'Ask YUKTI-KAAR',
    heroExploreCTA: 'Explore Knowledge',
    heroPreviewTitle: 'What would you like to know about IP?',
    heroInputPlaceholder: 'e.g. "What are the requirements for a patent application in India?"',
    heroSuggestionLabel: 'Quick suggestions:',
    heroAskButton: 'Ask',

    exploreKicker: 'Domain Taxonomy',
    exploreTitle: 'Explore Intellectual Property',
    exploreSubtitle: 'Explore major areas of intellectual property through a structured knowledge interface.',
    exploreDomainCTA: 'Explore Domain',
    exploreAllDomains: 'All Domains',

    howKicker: 'Core Principle',
    howTitle: 'How YUKTI-KAAR Works',
    howSubtitle: 'From a user\'s question to a source-backed response through a rigorous verification cycle.',
    stepAsk: 'ASK',
    stepUnderstand: 'UNDERSTAND',
    stepRetrieve: 'RETRIEVE',
    stepVerify: 'VERIFY',
    stepAnswer: 'ANSWER',
    stepCite: 'CITE',

    featuresKicker: 'System Capabilities',
    featuresTitle: 'Built for Reliable IP Information',
    featuresSubtitle: 'Engineered with statutory boundaries, verifiable citations, and transparent epistemic indicators.',

    hubKicker: 'Research Library',
    hubTitle: 'IP Knowledge Hub',
    hubSubtitle: 'Explore laws, rules, cases, treaties, guidelines and other authoritative IP resources.',
    hubSearchPlaceholder: 'Search laws, cases, guidelines, sections (e.g. Section 3(d), Madrid Protocol, TKDL)...',
    hubSearchButton: 'Search Hub',
    hubViewComplete: 'View Complete Knowledge Hub',

    sourcesKicker: 'Data Lineage',
    sourcesTitle: 'Grounded in Authoritative Sources',
    sourcesSubtitle: 'Answers are structured against primary legislative repositories, official manuals, and treaty databases.',

    archKicker: 'Technical Architecture',
    archTitle: 'Behind Every Answer',
    archSubtitle: 'A retrieval-augmented workflow connects user questions with relevant knowledge sources before generating a response.',

    useCasesKicker: 'Target Ecosystem',
    useCasesTitle: 'Who Can Use YUKTI-KAAR?',
    useCasesSubtitle: 'Designed to serve the diverse innovation lifecycle across academia, enterprise, and grassroots custodians.',

    questionsKicker: 'Practical Inquiries',
    questionsTitle: 'Real IP Questions',
    questionsSubtitle: 'Explore questions asked by innovators, researchers, and creators. Click any question to launch verified analysis.',

    ctaTitle: 'Have an IP Question?',
    ctaText: 'Explore structured, source-backed information across Indian and international intellectual-property domains.',
    ctaButton: 'Ask YUKTI-KAAR',

    assistantKicker: 'YUKTI-KAAR Knowledge Assistant',
    assistantTitle: 'Source-Backed Intellectual Property Inquiry',
    assistantPromptLabel: 'What would you like to know about Intellectual Property?',
    assistantDomainFilter: 'Domain Filter:',
    assistantInputPlaceholderIndia: 'e.g. "What are the requirements for a patent application in India under Section 2(1)(j)?"',
    assistantInputPlaceholderIntl: 'e.g. "What are the priority timelines for global patent filings under the PCT?"',
    assistantRetrieving: 'Retrieving from Authoritative Sources...',
    assistantEmptyTitle: 'Ask YUKTI-KAAR about Intellectual Property',
    assistantEmptyDesc: 'Inquire about patentability thresholds, trademark opposition, copyright fair dealing, traditional knowledge defenses, or biodiversity compliance.',

    disclaimerText: 'YUKTI-KAAR provides informational guidance based on available sources and is not a substitute for professional legal advice.'
  },

  hi: {
    navHome: 'होम',
    navExplore: 'आईपी जानें',
    navKnowledge: 'ज्ञान केंद्र',
    navHowItWorks: 'यह कैसे काम करता है',
    navAbout: 'परिचय',
    navAskCTA: 'युक्ति-कार से पूछें',
    navLanguageLabel: 'भाषा',

    heroKicker: 'बहुभाषी एवं प्रमाणित बौद्धिक संपदा ज्ञान',
    heroHeadline: 'आपका बौद्धिक संपदा ज्ञान सहायक',
    heroSubtitle: 'विश्वसनीय और वैधानिक स्रोतों से बौद्धिक संपदा को समझें।',
    heroDescription: 'पेटेंट, ट्रेडमार्क, भौगोलिक उपदर्शन (GI), कॉपीराइट, पारंपरिक ज्ञान और जैव विविधता पर आधारित प्रश्न पूछें।',
    heroAskCTA: 'युक्ति-कार से पूछें',
    heroExploreCTA: 'ज्ञान केंद्र देखें',
    heroPreviewTitle: 'आप बौद्धिक संपदा के बारे में क्या जानना चाहते हैं?',
    heroInputPlaceholder: 'उदा. "भारत में पेटेंट आवेदन के लिए क्या आवश्यकताएं हैं?"',
    heroSuggestionLabel: 'सुझाए गए प्रश्न:',
    heroAskButton: 'पूछें',

    exploreKicker: 'डोमेन वर्गीकरण',
    exploreTitle: 'बौद्धिक संपदा के प्रमुख क्षेत्र',
    exploreSubtitle: 'संरचित ज्ञान प्रणाली के माध्यम से पेटेंट, ट्रेडमार्क और कॉपीराइट को समझें।',
    exploreDomainCTA: 'विवरण देखें',
    exploreAllDomains: 'सभी क्षेत्र',

    howKicker: 'मूल सिद्धांत',
    howTitle: 'युक्ति-कार कैसे काम करता है',
    howSubtitle: 'प्रश्न पूछने से लेकर प्रमाणित उत्तर और संदर्भ उपलब्ध कराने तक की प्रक्रिया।',
    stepAsk: 'पूछें (ASK)',
    stepUnderstand: 'समझें (UNDERSTAND)',
    stepRetrieve: 'खोजें (RETRIEVE)',
    stepVerify: 'सत्यापित करें (VERIFY)',
    stepAnswer: 'उत्तर दें (ANSWER)',
    stepCite: 'संदर्भ दें (CITE)',

    featuresKicker: 'प्रणाली की विशेषताएं',
    featuresTitle: 'विश्वसनीय आईपी जानकारी के लिए निर्मित',
    featuresSubtitle: 'कानूनी सीमाओं, सत्यापित संदर्भों और पारदर्शी विश्वास स्तर के साथ डिज़ाइन किया गया।',

    hubKicker: 'अनुसंधान संग्रह',
    hubTitle: 'आईपी ज्ञान केंद्र',
    hubSubtitle: 'कानून, नियम, न्यायिक निर्णय, संधियां और परीक्षा दिशानिर्देशों का अन्वेषण करें।',
    hubSearchPlaceholder: 'कानून, धारा, नियम खोजें (जैसे धारा 3(d), मैड्रिड प्रोटोकॉल, TKDL)...',
    hubSearchButton: 'खोजें',
    hubViewComplete: 'संपूर्ण ज्ञान केंद्र देखें',

    sourcesKicker: 'डेटा स्रोत',
    sourcesTitle: 'प्रामाणिक सरकारी स्रोतों पर आधारित',
    sourcesSubtitle: 'इंडिया कोड, पेटेंट कार्यालय मैनुअल और WIPO संधि डेटाबेस से सीधे जुड़े उत्तर।',

    archKicker: 'तकनीकी वास्तुकला',
    archTitle: 'प्रत्येक उत्तर के पीछे की तकनीक',
    archSubtitle: 'RAG तकनीक जो उपयोगकर्ता के प्रश्नों को आधिकारिक कानूनी स्रोतों से जोड़ती है।',

    useCasesKicker: 'लक्षित उपयोगकर्ता',
    useCasesTitle: 'युक्ति-कार का उपयोग कौन कर सकता है?',
    useCasesSubtitle: 'छात्रों, शोधकर्ताओं, स्टार्टअप्स, एमएसएमई और पारंपरिक ज्ञान संरक्षकों के लिए उपयुक्त।',

    questionsKicker: 'व्यावहारिक प्रश्न',
    questionsTitle: 'वास्तविक आईपी प्रश्न',
    questionsSubtitle: 'नवाचारियों और शोधकर्ताओं द्वारा पूछे गए वास्तविक प्रश्न। उत्तर देखने के लिए क्लिक करें।',

    ctaTitle: 'क्या आपके पास कोई आईपी प्रश्न है?',
    ctaText: 'भारतीय और अंतरराष्ट्रीय बौद्धिक संपदा डोमेन में प्रमाणित जानकारी प्राप्त करें।',
    ctaButton: 'युक्ति-कार से पूछें',

    assistantKicker: 'युक्ति-कार ज्ञान सहायक',
    assistantTitle: 'सत्यापित बौद्धिक संपदा परामर्श',
    assistantPromptLabel: 'बौद्धिक संपदा के बारे में आपका क्या प्रश्न है?',
    assistantDomainFilter: 'डोमेन चुनें:',
    assistantInputPlaceholderIndia: 'उदा. "भारतीय पेटेंट अधिनियम की धारा 2(1)(j) के अंतर्गत क्या नियम हैं?"',
    assistantInputPlaceholderIntl: 'उदा. "PCT के तहत अंतर्राष्ट्रीय पेटेंट आवेदन की समय-सीमा क्या है?"',
    assistantRetrieving: 'आधिकारिक वैधानिक स्रोतों से खोज रहे हैं...',
    assistantEmptyTitle: 'युक्ति-कार से बौद्धिक संपदा संबंधी प्रश्न पूछें',
    assistantEmptyDesc: 'पेटेंट योग्यता, ट्रेडमार्क आपत्ति, कॉपीराइट निष्पक्ष उपयोग और जैव विविधता नियमों की जानकारी पाएं।',

    disclaimerText: 'युक्ति-कार केवल सूचनात्मक मार्गदर्शन प्रदान करता है और यह पेशेवर कानूनी सलाह का विकल्प नहीं है।'
  },

  ta: {
    navHome: 'முகப்பு',
    navExplore: 'ஐபி அறிக',
    navKnowledge: 'அறிவு மையம்',
    navHowItWorks: 'எவ்வாறு இயங்குகிறது',
    navAbout: 'பற்றி',
    navAskCTA: 'யுக்தி-காரிடம் கேளுங்கள்',
    navLanguageLabel: 'மொழி',

    heroKicker: 'பலமொழி மற்றும் ஆதாரபூர்வ ஐபி அறிவு',
    heroHeadline: 'உங்கள் அறிவுசார் சொத்துரிமை அறிவு உதவியாளர்',
    heroSubtitle: 'நம்பகமான மற்றும் சட்டபூர்வ ஆதாரங்களுடன் அறிவுசார் சொத்துரிமையை புரிந்து கொள்ளுங்கள்.',
    heroDescription: 'காப்புரிமை, வர்த்தக முத்திரை, புவியியல் குறியீடு (GI), பதிப்புரிமை மற்றும் பாரம்பரிய அறிவு பற்றிய கேள்விகளை கேளுங்கள்.',
    heroAskCTA: 'யுக்தி-காரிடம் கேளுங்கள்',
    heroExploreCTA: 'அறிவு மையம் காண்க',
    heroPreviewTitle: 'ஐபி பற்றி நீங்கள் என்ன தெரிந்து கொள்ள விரும்புகிறீர்கள்?',
    heroInputPlaceholder: 'எ.கா. "இந்தியாவில் காப்புரிமை விண்ணப்பத்திற்கான தகுதிகள் என்ன?"',
    heroSuggestionLabel: 'பரிந்துரைக்கப்பட்ட கேள்விகள்:',
    heroAskButton: 'கேள்',

    exploreKicker: 'துறை வகைப்பாடு',
    exploreTitle: 'அறிவுசார் சொத்துரிமை களங்கள்',
    exploreSubtitle: 'காப்புரிமை, வர்த்தக முத்திரை மற்றும் புவிசார் குறியீடுகளை விரிவாக ஆராயுங்கள்.',
    exploreDomainCTA: 'ஆராய்க',
    exploreAllDomains: 'அனைத்து துறைகள்',

    howKicker: 'அடிப்படை தத்துவம்',
    howTitle: 'யுக்தி-கார் எவ்வாறு செயல்படுகிறது',
    howSubtitle: 'கேள்வி முதல் சட்டபூர்வ ஆதாரங்களுடன் கூடிய பதில் வரையிலான முழு செயல்முறை.',
    stepAsk: 'கேள் (ASK)',
    stepUnderstand: 'புரிந்து கொள் (UNDERSTAND)',
    stepRetrieve: 'மீட்டெடு (RETRIEVE)',
    stepVerify: 'சரிபார் (VERIFY)',
    stepAnswer: 'பதிலளி (ANSWER)',
    stepCite: 'சான்று காட்டு (CITE)',

    featuresKicker: 'அம்சங்கள்',
    featuresTitle: 'நம்பகமான தகவலுக்காக உருவாக்கப்பட்டது',
    featuresSubtitle: 'சட்டரீதியான எல்லைகள் மற்றும் வெளிப்படையான மேற்கோள்களுடன் வடிவமைக்கப்பட்டுள்ளது.',

    hubKicker: 'ஆராய்ச்சி நூலகம்',
    hubTitle: 'ஐபி அறிவு மையம்',
    hubSubtitle: 'சட்டங்கள், விதிகள், தீர்ப்புகள் மற்றும் வழிகாட்டுதல்களை ஆராயுங்கள்.',
    hubSearchPlaceholder: 'சட்டங்கள் அல்லது பிரிவுகளைத் தேடுங்கள் (எ.கா. பிரிவு 3(d), மேட்ரிட் நெறிமுறை)...',
    hubSearchButton: 'தேடுக',
    hubViewComplete: 'முழு அறிவு மையத்தை காண்க',

    sourcesKicker: 'தரவு மூலங்கள்',
    sourcesTitle: 'அதிகாரப்பூர்வ அரசு மூலங்கள்',
    sourcesSubtitle: 'இந்தியா கோட், இந்திய காப்புரிமை அலுவலகம் மற்றும் WIPO மூலங்கள்.',

    archKicker: 'தொழில்நுட்ப கட்டமைப்பு',
    archTitle: 'ஒவ்வொரு பதிலின் பின்னணியும்',
    archSubtitle: 'கேள்விகளை சட்ட மூலங்களுடன் இணைக்கும் RAG தொழில்நுட்பம்.',

    useCasesKicker: 'பயனர்கள்',
    useCasesTitle: 'யுக்தி-காரை யார் பயன்படுத்தலாம்?',
    useCasesSubtitle: 'மாணவர்கள், ஆராய்ச்சியாளர்கள், ஸ்டார்ட்அப்கள் மற்றும் பாரம்பரிய சமூகங்களுக்கானது.',

    questionsKicker: 'நிஜக் கேள்விகள்',
    questionsTitle: 'உண்மையான ஐபி கேள்விகள்',
    questionsSubtitle: 'ஆராய்ச்சியாளர்களால் கேட்கப்பட்ட உண்மையான கேள்விகள்.',

    ctaTitle: 'உங்களிடம் ஐபி கேள்வி உள்ளதா?',
    ctaText: 'இந்திய மற்றும் சர்வதேச அறிவுசார் சொத்துரிமை தகவல்களைப் பெறுங்கள்.',
    ctaButton: 'யுக்தி-காரிடம் கேளுங்கள்',

    assistantKicker: 'யுக்தி-கார் அறிவு உதவியாளர்',
    assistantTitle: 'ஆதாரபூர்வ ஐபி கேள்வி பதில்கள்',
    assistantPromptLabel: 'அறிவுசார் சொத்துரிமை பற்றி நீங்கள் என்ன கேட்க விரும்புகிறீர்கள்?',
    assistantDomainFilter: 'துறை தேர்வு:',
    assistantInputPlaceholderIndia: 'எ.கா. "இந்திய காப்புரிமைச் சட்டம் பிரிவு 2(1)(j) விதிகள் என்ன?"',
    assistantInputPlaceholderIntl: 'எ.கா. "PCT சர்வதேச காப்புரிமை காலக்கெடு என்ன?"',
    assistantRetrieving: 'அதிகாரப்பூர்வ சட்ட மூலங்களிலிருந்து தேடுகிறது...',
    assistantEmptyTitle: 'யுக்தி-காரிடம் ஐபி கேள்விகளைக் கேளுங்கள்',
    assistantEmptyDesc: 'காப்புரிமை, வர்த்தக முத்திரை மற்றும் காப்புரிமை விலக்குகள் பற்றி அறியவும்.',

    disclaimerText: 'யுக்தி-கார் தகவல் வழிகாட்டலை மட்டுமே வழங்குகிறது, இது வழக்கறிஞர் ஆலோசனைக்கு மாற்றாகாது.'
  },

  te: {
    navHome: 'హోమ్',
    navExplore: 'ఐపీ తెలుసుకోండి',
    navKnowledge: 'నాలెడ్జ్ హబ్',
    navHowItWorks: 'ఇది ఎలా పనిచేస్తుంది',
    navAbout: 'గురించి',
    navAskCTA: 'యుక్తి-కార్‌ను అడగండి',
    navLanguageLabel: 'భాష',

    heroKicker: 'బహుభాషా & ఆధారిత ఐపీ సమాచారం',
    heroHeadline: 'మీ మేధో సంపత్తి నాలెడ్జ్ అసిస్టెంట్',
    heroSubtitle: 'చట్టపరమైన మరియు అధికారిక ఆధారాలతో మేధో సంపత్తిని సులభంగా అర్థం చేసుకోండి.',
    heroDescription: 'పేటెంట్లు, ట్రేడ్‌మార్కులు, కాపీరైట్, భౌగోళిక గుర్తింపులు (GI) మరియు సంప్రదాయ జ్ఞానంపై ప్రశ్నలు అడగండి.',
    heroAskCTA: 'యుక్తి-కార్‌ను అడగండి',
    heroExploreCTA: 'నాలెడ్జ్ హబ్ చూడండి',
    heroPreviewTitle: 'మేధో సంపత్తి గురించి మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?',
    heroInputPlaceholder: 'ఉదా: "భారతదేశంలో పేటెంట్ దరఖాస్తుకు అవసరమైన నిబంధనలు ఏమిటి?"',
    heroSuggestionLabel: 'సిఫార్సు చేయబడిన ప్రశ్నలు:',
    heroAskButton: 'అడగండి',

    exploreKicker: 'డొమైన్ వర్గీకరణ',
    exploreTitle: 'మేధో సంపత్తి రంగాలు',
    exploreSubtitle: 'పేటెంట్, ట్రేడ్‌మార్క్, కాపీరైట్ మరియు సంప్రదాయ జ్ఞానాన్ని వివరంగా పరిశీలించండి.',
    exploreDomainCTA: 'వివరాలు చూడండి',
    exploreAllDomains: 'అన్ని విభాగాలు',

    howKicker: 'ప్రాథమిక సూత్రం',
    howTitle: 'యుక్తి-కార్ ఎలా పనిచేస్తుంది',
    howSubtitle: 'ప్రశ్న నుండి నిర్ధారిత చట్టపరమైన సమాధానం వరకు క్రమబద్ధమైన విధానం.',
    stepAsk: 'అడగండి (ASK)',
    stepUnderstand: 'అర్థం చేసుకోండి (UNDERSTAND)',
    stepRetrieve: 'శోధించండి (RETRIEVE)',
    stepVerify: 'ధృవీకరించండి (VERIFY)',
    stepAnswer: 'సమాధానం (ANSWER)',
    stepCite: 'ఆధారాలు చూపండి (CITE)',

    featuresKicker: 'సిస్టమ్ సామర్థ్యాలు',
    featuresTitle: 'విశ్వసనీయ సమాచారం కోసం రూపొందించబడింది',
    featuresSubtitle: 'చట్టపరమైన పరిమితులు మరియు పారదర్శక సైటేషన్లతో నిర్మించబడింది.',

    hubKicker: 'పరిశోధన గ్రంథాలయం',
    hubTitle: 'ఐపీ నాలెడ్జ్ హబ్',
    hubSubtitle: 'చట్టాలు, నియమాలు, న్యాయ తీర్పులు మరియు అంతర్జాతీయ ఒప్పందాలను అన్వేషించండి.',
    hubSearchPlaceholder: 'చట్టాలు లేదా సెక్షన్లు వెతకండి (ఉదా: సెక్షన్ 3(d), మాడ్రిడ్ ప్రొటోకాల్)...',
    hubSearchButton: 'శోధించండి',
    hubViewComplete: 'పూర్తి నాలెడ్జ్ హబ్ చూడండి',

    sourcesKicker: 'డేటా వనరులు',
    sourcesTitle: 'అధికారిక ప్రభుత్వ వనరులు',
    sourcesSubtitle: 'ఇండియా కోడ్, ఐపీ ఇండియా మరియు WIPO ద్వారా ఆధారపరచబడిన సమాచారం.',

    archKicker: 'సాంకేతిక నిర్మాణం',
    archTitle: 'ప్రతి సమాధానం వెనుక ఉన్న సాంకేతికత',
    archSubtitle: 'ప్రశ్నలను అధికారిక చట్టాలతో అనుసంధానించే RAG సాంకేతికత.',

    useCasesKicker: 'లక్ష్యిత వర్గాలు',
    useCasesTitle: 'యుక్తి-కార్‌ను ఎవరు ఉపయోగించవచ్చు?',
    useCasesSubtitle: 'విద్యార్థులు, పరిశోధకులు, స్టార్టప్‌లు మరియు చిన్న పరిశ్రమల కోసం.',

    questionsKicker: 'నిజమైన ప్రశ్నలు',
    questionsTitle: 'వాస్తవ ఐపీ ప్రశ్నలు',
    questionsSubtitle: 'ఆవిష్కర్తలు అడిగే నిజమైన ప్రశ్నలు. సమాధానం కోసం క్లిక్ చేయండి.',

    ctaTitle: 'మీకు మేధో సంపత్తి ప్రశ్న ఉందా?',
    ctaText: 'భారతీయ మరియు అంతర్జాతీయ చట్టాల ఆధారిత సమాధానాలను పొందండి.',
    ctaButton: 'యుక్తి-కార్‌ను అడగండి',

    assistantKicker: 'యుక్తి-కార్ నాలెడ్జ్ అసిస్టెంట్',
    assistantTitle: 'ఆధారిత మేధో సంపత్తి విచారణ',
    assistantPromptLabel: 'మేధో సంపత్తిపై మీ సందేహం ఏమిటి?',
    assistantDomainFilter: 'డొమైన్ ఎంచుకోండి:',
    assistantInputPlaceholderIndia: 'ఉదా: "భారత పేటెంట్ చట్టం సెక్షన్ 2(1)(j) నిబంధనలు ఏమిటి?"',
    assistantInputPlaceholderIntl: 'ఉదా: "PCT గ్లోబల్ పేటెంట్ ఫైలింగ్ కాలపరిమితులు ఏమిటి?"',
    assistantRetrieving: 'అధికారిక చట్టపరమైన ఆధారాల నుండి వెతుకుతోంది...',
    assistantEmptyTitle: 'యుక్తి-కార్‌ను మేధో సంపత్తి గురించి అడగండి',
    assistantEmptyDesc: 'పేటెంట్లు, ట్రేడ్‌మార్క్‌లు మరియు కాపీరైట్ చట్టాల గురించి తెలుసుకోండి.',

    disclaimerText: 'యుక్తి-కార్ సమాచార మార్గదర్శకత్వం మాత్రమే అందిస్తుంది; ఇది న్యాయవాది సలహాకు ప్రత్యామ్నాయం కాదు.'
  },

  bn: {
    navHome: 'হোম',
    navExplore: 'আইপি জানুন',
    navKnowledge: 'জ্ঞান কেন্দ্র',
    navHowItWorks: 'কীভাবে কাজ করে',
    navAbout: 'পরিচিতি',
    navAskCTA: 'যুক্তি-কারকে জিজ্ঞাসা করুন',
    navLanguageLabel: 'ভাষা',

    heroKicker: 'বহুভাষিক ও প্রামাণ্য আইপি জ্ঞান',
    heroHeadline: 'আপনার বৌদ্ধিক সম্পত্তি জ্ঞান সহায়ক',
    heroSubtitle: 'আইনগত ও নির্ভরযোগ্য তথ্যের মাধ্যমে বৌদ্ধিক সম্পত্তি বুঝুন।',
    heroDescription: 'পেটেন্ট, ট্রেডমার্ক, জিআই (GI), কপিরাইট এবং ঐতিহ্যবাহী জ্ঞান সংক্রান্ত প্রশ্ন জিজ্ঞাসা করুন।',
    heroAskCTA: 'যুক্তি-কারকে জিজ্ঞাসা করুন',
    heroExploreCTA: 'জ্ঞান কেন্দ্র দেখুন',
    heroPreviewTitle: 'আপনি বৌদ্ধিক সম্পত্তি সম্পর্কে কী জানতে চান?',
    heroInputPlaceholder: 'যেমন: "ভারতে পেটেন্ট আবেদনের নিয়মাবলী কী?"',
    heroSuggestionLabel: 'প্রস্তাবিত প্রশ্নাবলী:',
    heroAskButton: 'জিজ্ঞাসা করুন',

    exploreKicker: 'ডোমেন শ্রেণিবিভাগ',
    exploreTitle: 'বৌদ্ধিক সম্পত্তির ক্ষেত্রসমূহ',
    exploreSubtitle: 'পেটেন্ট, ট্রেডমার্ক, কপিরাইট এবং ঐতিহ্যবাহী জ্ঞান বিস্তারিত জানুন।',
    exploreDomainCTA: 'বিস্তারিত দেখুন',
    exploreAllDomains: 'সকল ক্ষেত্র',

    howKicker: 'মূল নীতি',
    howTitle: 'যুক্তি-কার কীভাবে কাজ করে',
    howSubtitle: 'প্রশ্ন উত্থাপন থেকে শুরু করে প্রামাণ্য উত্তর ও উৎস প্রদর্শন পর্যন্ত প্রক্রিয়া।',
    stepAsk: 'জিজ্ঞাসা (ASK)',
    stepUnderstand: 'উপলব্ধি (UNDERSTAND)',
    stepRetrieve: 'উদ্ধার (RETRIEVE)',
    stepVerify: 'যাচাই (VERIFY)',
    stepAnswer: 'উত্তর (ANSWER)',
    stepCite: 'উৎস নির্দেশ (CITE)',

    featuresKicker: 'সিস্টেমের বৈশিষ্ট্য',
    featuresTitle: 'নির্ভরযোগ্য তথ্যের জন্য নির্মিত',
    featuresSubtitle: 'আইনগত কাঠামো ও স্বচ্ছ তথ্যসূত্রের ভিত্তিতে নির্মিত।',

    hubKicker: 'গবেষণা গ্রন্থাগার',
    hubTitle: 'আইপি জ্ঞান কেন্দ্র',
    hubSubtitle: 'আইন, বিধিমালা, আদালতের রায় এবং আন্তর্জাতিক চুক্তি অনুসন্ধান করুন।',
    hubSearchPlaceholder: 'আইন বা ধারা অনুসন্ধান করুন (যেমন: ধারা ৩(d), মাদ্রিদ চুক্তি)...',
    hubSearchButton: 'অনুসন্ধান',
    hubViewComplete: 'সম্পূর্ণ জ্ঞান কেন্দ্র দেখুন',

    sourcesKicker: 'উৎস নির্দেশিকা',
    sourcesTitle: 'সরকারি প্রামাণ্য তথ্যের ওপর প্রতিষ্ঠিত',
    sourcesSubtitle: 'ইন্ডিয়া কোড, ভারতীয় পেটেন্ট কার্যালয় এবং WIPO ভিত্তিক তথ্য।',

    archKicker: 'প্রযুক্তিগত স্থাপত্য',
    archTitle: 'প্রতিটি উত্তরের পেছনের প্রযুক্তি',
    archSubtitle: 'RAG প্রযুক্তি যা আপনার প্রশ্নকে সরাসরি আইনের সাথে সংযুক্ত করে।',

    useCasesKicker: 'ব্যবহারকারী ক্ষেত্র',
    useCasesTitle: 'যুক্তি-কার কে ব্যবহার করতে পারেন?',
    useCasesSubtitle: 'শিক্ষার্থী, গবেষক, স্টার্টআপ এবং ক্ষুদ্র উদ্যোক্তাদের জন্য।',

    questionsKicker: 'বাস্তব প্রশ্নাবলী',
    questionsTitle: 'প্রকৃত আইপি প্রশ্ন',
    questionsSubtitle: 'উদ্ভাবকদের জিজ্ঞাসিত বাস্তব প্রশ্ন। উত্তর দেখতে ক্লিক করুন।',

    ctaTitle: 'আপনার কি কোনো আইপি প্রশ্ন আছে?',
    ctaText: 'ভারতীয় ও আন্তর্জাতিক বৌদ্ধিক সম্পত্তি সংক্রান্ত তথ্য অনুসন্ধান করুন।',
    ctaButton: 'যুক্তি-কারকে জিজ্ঞাসা করুন',

    assistantKicker: 'যুক্তি-কার জ্ঞান সহায়ক',
    assistantTitle: 'প্রামাণ্য বৌদ্ধিক সম্পত্তি অনুসন্ধান',
    assistantPromptLabel: 'বৌদ্ধিক সম্পত্তি সম্পর্কে আপনার কী জানার আছে?',
    assistantDomainFilter: 'ডোমেন বাছুন:',
    assistantInputPlaceholderIndia: 'যেমন: "ভারতীয় পেটেন্ট আইনের ধারা ২(১)(j) এর নিয়ম কী?"',
    assistantInputPlaceholderIntl: 'যেমন: "PCT আন্তর্জাতিক পেটেন্ট আবেদনের সময়সীমা কী?"',
    assistantRetrieving: 'সরকারি আইনগত উৎস থেকে তথ্য সংগ্রহ করা হচ্ছে...',
    assistantEmptyTitle: 'যুক্তি-কারকে প্রশ্ন জিজ্ঞাসা করুন',
    assistantEmptyDesc: 'পেটেন্ট যোগ্যতা, ট্রেডমার্ক ও কপিরাইট নিয়মাবলী সম্পর্কে জানুন।',

    disclaimerText: 'যুক্তি-কার কেবল তথ্যগত নির্দেশিকা প্রদান করে; এটি পেশাদার আইনি পরামর্শের বিকল্প নয়।'
  },

  mr: {
    navHome: 'मुख्यपृष्ठ',
    navExplore: 'आयपी जाणून घ्या',
    navKnowledge: 'ज्ञान केंद्र',
    navHowItWorks: 'हे कसे कार्य करते',
    navAbout: 'परिचय',
    navAskCTA: 'युक्ती-कारला विचारा',
    navLanguageLabel: 'भाषा',

    heroKicker: 'बहुभाषिक व अधिकृत बौद्धिक संपदा माहिती',
    heroHeadline: 'तुमचा बौद्धिक संपदा ज्ञान सहाय्यक',
    heroSubtitle: 'विश्वसनीय आणि कायदेशीर संदर्भांसह बौद्धिक संपदा समजून घ्या.',
    heroDescription: 'पेटंट, ट्रेडमार्क, जीआय (GI), कॉपीराइट आणि पारंपारिक ज्ञानावर आधारित प्रश्न विचारा.',
    heroAskCTA: 'युक्ती-कारला विचारा',
    heroExploreCTA: 'ज्ञान केंद्र पहा',
    heroPreviewTitle: 'तुम्हाला बौद्धिक संपदेबद्दल काय जाणून घ्यायचे आहे?',
    heroInputPlaceholder: 'उदा. "भारतात पेटंट अर्जासाठी काय आवश्यकता आहेत?"',
    heroSuggestionLabel: 'सुचवलेले प्रश्न:',
    heroAskButton: 'विचारा',

    exploreKicker: 'डोमेन वर्गीकरण',
    exploreTitle: 'बौद्धिक संपदा क्षेत्रे',
    exploreSubtitle: 'पेटंट, ट्रेडमार्क, कॉपीराइट आणि पारंपारिक ज्ञान सविस्तर समजून घ्या.',
    exploreDomainCTA: 'तपशील पहा',
    exploreAllDomains: 'सर्व क्षेत्रे',

    howKicker: 'मूलभूत तत्त्व',
    howTitle: 'युक्ती-कार कसे काम करते',
    howSubtitle: 'प्रश्न विचारण्यापासून ते अधिकृत संदर्भांसह उत्तर देण्यापर्यंतची प्रक्रिया.',
    stepAsk: 'विचारा (ASK)',
    stepUnderstand: 'समजून घ्या (UNDERSTAND)',
    stepRetrieve: 'शोधा (RETRIEVE)',
    stepVerify: 'पडताळणी करा (VERIFY)',
    stepAnswer: 'उत्तर द्या (ANSWER)',
    stepCite: 'संदर्भ द्या (CITE)',

    featuresKicker: 'वैशिष्ट्ये',
    featuresTitle: 'विश्वसनीय माहितीसाठी निर्मित',
    featuresSubtitle: 'कायदेशीर चौकटीत आणि अचूक संदर्भ पडताळणीसह तयार केलेले.',

    hubKicker: 'संशोधन संग्रह',
    hubTitle: 'आयपी ज्ञान केंद्र',
    hubSubtitle: 'कायदे, नियम, न्यायालयीन निर्णय आणि मार्गदर्शक तत्त्वांचे अन्वेषण करा.',
    hubSearchPlaceholder: 'कायदे किंवा कलमे शोधा (उदा. कलम ३(d), माद्रिद प्रोटोकॉल)...',
    hubSearchButton: 'शोधा',
    hubViewComplete: 'संपूर्ण ज्ञान केंद्र पहा',

    sourcesKicker: 'माहिती स्रोत',
    sourcesTitle: 'अधिकृत शासकीय स्रोतांवर आधारित',
    sourcesSubtitle: 'इंडिया कोड, पेटंट कार्यालय मार्गदर्शक पुस्तिका आणि WIPO डेटाबेस.',

    archKicker: 'तांत्रिक रचना',
    archTitle: 'प्रत्येक उत्तरामागील तंत्रज्ञान',
    archSubtitle: 'RAG तंत्रज्ञान जे थेट अधिकृत कायद्यांशी संवाद साधते.',

    useCasesKicker: 'वापरकर्ते',
    useCasesTitle: 'युक्ती-कारचा वापर कोण करू शकते?',
    useCasesSubtitle: 'विद्यार्थी, संशोधक, स्टार्टअप्स आणि पारंपारिक ज्ञान संरक्षकांसाठी.',

    questionsKicker: 'वास्तविक प्रश्न',
    questionsTitle: 'वास्तविक आयपी प्रश्न',
    questionsSubtitle: 'संशोधक आणि उद्योजकांनी विचारलेले वास्तविक प्रश्न.',

    ctaTitle: 'तुमच्याकडे काही प्रश्न आहे का?',
    ctaText: 'भारतीय आणि आंतरराष्ट्रीय बौद्धिक संपदा कायद्यांवर आधारित माहिती मिळवा.',
    ctaButton: 'युक्ती-कारला विचारा',

    assistantKicker: 'युक्ती-कार ज्ञान सहाय्यक',
    assistantTitle: 'अधिकृत बौद्धिक संपदा चौकशी',
    assistantPromptLabel: 'बौद्धिक संपदेबद्दल तुमचा काय प्रश्न आहे?',
    assistantDomainFilter: 'डोमेन निवडा:',
    assistantInputPlaceholderIndia: 'उदा. "भारतीय पेटंट कायदा कलम २(१)(j) अंतर्गत काय तरतुदी आहेत?"',
    assistantInputPlaceholderIntl: 'उदा. "PCT आंतरराष्ट्रीय पेटंट अर्जाची मुदत काय आहे?"',
    assistantRetrieving: 'अधिकृत कायदेशीर स्रोतांमधून शोधत आहे...',
    assistantEmptyTitle: 'युक्ती-कारला बौद्धिक संपदेबद्दल विचारा',
    assistantEmptyDesc: 'पेटंट, ट्रेडमार्क आणि कॉपीराइट कायद्यांविषयी मार्गदर्शन मिळवा.',

    disclaimerText: 'युक्ती-कार केवळ माहितीपर मार्गदर्शन प्रदान करते; हा कायदेशीर सल्ल्याचा पर्याय नाही.'
  },

  gu: {
    navHome: 'હોમ',
    navExplore: 'આઈપી સમજો',
    navKnowledge: 'જ્ઞાન કેન્દ્ર',
    navHowItWorks: 'આ કેવી રીતે કાર્ય કરે છે',
    navAbout: 'વિશે',
    navAskCTA: 'યુક્તિ-કારને પૂછો',
    navLanguageLabel: 'ભાષા',

    heroKicker: 'બહુભાષી અને આધારિત બૌદ્ધિક સંપત્તિ માર્ગદર્શન',
    heroHeadline: 'તમારો બૌદ્ધિક સંપત્તિ જ્ઞાન સહાયક',
    heroSubtitle: 'સત્તાવાર અને કાનૂની સંદર્ભો સાથે બૌદ્ધિક સંપત્તિ સમજો.',
    heroDescription: 'પેટન્ટ, ટ્રેડમાર્ક, ભૌગોલિક સંકેત (GI), કોપીરાઈટ અને પરંપરાગત જ્ઞાન વિશે પૂછો.',
    heroAskCTA: 'યુક્તિ-કારને પૂછો',
    heroExploreCTA: 'જ્ઞાન કેન્દ્ર જુઓ',
    heroPreviewTitle: 'બૌદ્ધિક સંપત્તિ વિશે તમે શું જાણવા માંગો છો?',
    heroInputPlaceholder: 'દા.ત. "ભારતમાં પેટન્ટ અરજી માટે શું જરૂરીયાતો છે?"',
    heroSuggestionLabel: 'સૂચવેલા પ્રશ્નો:',
    heroAskButton: 'પૂછો',

    exploreKicker: 'ક્ષેત્ર વર્ગીકરણ',
    exploreTitle: 'બૌદ્ધિક સંપત્તિના ક્ષેત્રો',
    exploreSubtitle: 'પેટન્ટ, ટ્રેડમાર્ક, કોપીરાઈટ અને જૈવ વિવિધતા નિયમોને સમજો.',
    exploreDomainCTA: 'વિગતો જુઓ',
    exploreAllDomains: 'બધા ક્ષેત્રો',

    howKicker: 'મુખ્ય સિદ્ધાંત',
    howTitle: 'યુક્તિ-કાર કેવી રીતે કામ કરે છે',
    howSubtitle: 'પ્રશ્ન પૂછવાથી લઈને સત્તાવાર સંદર્ભ સાથે જવાબ મેળવવાની પ્રક્રિયા.',
    stepAsk: 'પૂછો (ASK)',
    stepUnderstand: 'સમજો (UNDERSTAND)',
    stepRetrieve: 'શોધો (RETRIEVE)',
    stepVerify: 'ચકાસો (VERIFY)',
    stepAnswer: 'જવાબ આપો (ANSWER)',
    stepCite: 'સંદર્ભ આપો (CITE)',

    featuresKicker: 'સિસ્ટમની ક્ષમતાઓ',
    featuresTitle: 'વિશ્વસનીય માહિતી માટે નિર્મિત',
    featuresSubtitle: 'કાનૂની માળખા અને સ્પષ્ટ સંદર્ભો સાથે તૈયાર કરાયેલ.',

    hubKicker: 'સંશોધન પુસ્તકાલય',
    hubTitle: 'આઈપી જ્ઞાન કેન્દ્ર',
    hubSubtitle: 'કાયદા, નિયમો અને અદાલતના ચુકાદાઓ શોધો.',
    hubSearchPlaceholder: 'કાયદા અથવા કલમ શોધો (દા.ત. કલમ ૩(d), મેડ્રિડ પ્રોટોકોલ)...',
    hubSearchButton: 'શોધો',
    hubViewComplete: 'સંપૂર્ણ જ્ઞાન કેન્દ્ર જુઓ',

    sourcesKicker: 'ડેટા સ્ત્રોત',
    sourcesTitle: 'સત્તાવાર સરકારી સ્ત્રોતો પર આધારિત',
    sourcesSubtitle: 'ઇન્ડિયા કોડ, પેટન્ટ કાર્યાલય અને WIPO આધારે જવાબ.',

    archKicker: 'ટેકનિકલ માળખું',
    archTitle: 'દરેક જવાબ પાછળની ટેકનોલોજી',
    archSubtitle: 'RAG ટેકનોલોજી જે કાયદાકીય દસ્તાવેજો સાથે સીધી જોડાય છે.',

    useCasesKicker: 'લક્ષ્ય વર્ગ',
    useCasesTitle: 'યુક્તિ-કાર કોણ વાપરી શકે?',
    useCasesSubtitle: 'વિદ્યાર્થીઓ, સંશોધકો, સ્ટાર્ટઅપ્સ અને ગ્રામીણ કારીગરો માટે.',

    questionsKicker: 'વાસ્તવિક પ્રશ્નો',
    questionsTitle: 'સાચા આઈપી પ્રશ્નો',
    questionsSubtitle: 'સંશોધકો દ્વારા પૂછાયેલા વાસ્તવિક પ્રશ્નો.',

    ctaTitle: 'શું તમારી પાસે કોઈ આઈપી પ્રશ્ન છે?',
    ctaText: 'ભારતીય અને આંતરરાષ્ટ્રીય કાયદા આધારિત માહિતી મેળવો.',
    ctaButton: 'યુક્તિ-કારને પૂછો',

    assistantKicker: 'યુક્તિ-કાર જ્ઞાન સહાયક',
    assistantTitle: 'સત્તાવાર બૌદ્ધિક સંપત્તિ પરામર્શ',
    assistantPromptLabel: 'બૌદ્ધિક સંપત્તિ વિશે તમારો પ્રશ્ન શું છે?',
    assistantDomainFilter: 'ક્ષેત્ર પસંદ કરો:',
    assistantInputPlaceholderIndia: 'દા.ત. "ભારતીય પેટન્ટ કાયદાની કલમ ૨(૧)(j) ના નિયમો શું છે?"',
    assistantInputPlaceholderIntl: 'દા.ત. "PCT આંતરરાષ્ટ્રીય પેટન્ટ અરજીની સમયમર્યાદા શું છે?"',
    assistantRetrieving: 'સત્તાવાર કાયદાકીય સ્ત્રોતોમાંથી શોધી રહ્યા છીએ...',
    assistantEmptyTitle: 'યુક્તિ-કારને પૂછો',
    assistantEmptyDesc: 'પેટન્ટ અને ટ્રેડમાર્ક સંબંધિત કાયદાકીય નિયમો જાણો.',

    disclaimerText: 'યુક્તિ-કાર માત્ર માહિતીપ્રદ માર્ગદર્શન પૂરું પાડે છે; આ વકીલની સલાહનો વિકલ્પ નથી.'
  },

  kn: {
    navHome: 'ಮುಖಪುಟ',
    navExplore: 'ಐಪಿ ಅನ್ವೇಷಿಸಿ',
    navKnowledge: 'ಜ್ಞಾನ ಕೇಂದ್ರ',
    navHowItWorks: 'ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
    navAbout: 'ಕುರಿತು',
    navAskCTA: 'ಯುಕ್ತಿ-ಕಾರರನ್ನು ಕೇಳಿ',
    navLanguageLabel: 'ಭಾಷೆ',

    heroKicker: 'ಬಹುಭಾಷಾ ಮತ್ತು ಅಧಿಕೃತ ಐಪಿ ಜ್ಞಾನ',
    heroHeadline: 'ನಿಮ್ಮ ಬೌದ್ಧಿಕ ಆಸ್ತಿ ಜ್ಞಾನ ಸಹಾಯಕ',
    heroSubtitle: 'ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ಕಾನೂನುಬದ್ಧ ಆಧಾರಗಳೊಂದಿಗೆ ಬೌದ್ಧಿಕ ಆಸ್ತಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
    heroDescription: 'ಪೇಟೆಂಟ್, ಟ್ರೇಡ್‌ಮಾರ್ಕ್, ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ (GI), ಹಕ್ಕುಸ್ವಾಮ್ಯ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನದ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.',
    heroAskCTA: 'ಯುಕ್ತಿ-ಕಾರರನ್ನು ಕೇಳಿ',
    heroExploreCTA: 'ಜ್ಞಾನ ಕೇಂದ್ರ ನೋಡಿ',
    heroPreviewTitle: 'ಬೌದ್ಧಿಕ ಆಸ್ತಿಯ ಬಗ್ಗೆ ನೀವು ಏನು ತಿಳಿಯಲು ಬಯಸುತ್ತೀರಿ?',
    heroInputPlaceholder: 'ಉದಾ: "ಭಾರತದಲ್ಲಿ ಪೇಟೆಂಟ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಇರುವ ನಿಯಮಗಳು ಯಾವುವು?"',
    heroSuggestionLabel: 'ಸೂಚಿಸಲಾದ ಪ್ರಶ್ನೆಗಳು:',
    heroAskButton: 'ಕೇಳಿ',

    exploreKicker: 'ಕ್ಷೇತ್ರ ವರ್ಗೀಕರಣ',
    exploreTitle: 'ಬೌದ್ಧಿಕ ಆಸ್ತಿಯ ಪ್ರಮುಖ ಕ್ಷೇತ್ರಗಳು',
    exploreSubtitle: 'ಪೇಟೆಂಟ್, ಟ್ರೇಡ್‌ಮಾರ್ಕ್, ಕೃತಿಸ್ವಾಮ್ಯ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನವನ್ನು ಅನ್ವೇಷಿಸಿ.',
    exploreDomainCTA: 'ವಿವರ ನೋಡಿ',
    exploreAllDomains: 'ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳು',

    howKicker: 'ಮೂಲ ತತ್ವ',
    howTitle: 'ಯುಕ್ತಿ-ಕಾರ್ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
    howSubtitle: 'ಪ್ರಶ್ನೆ ಕೇಳುವುದರಿಂದ ಹಿಡಿದು ಅಧಿಕೃತ ಆಧಾರಗಳೊಂದಿಗೆ ಉತ್ತರ ನೀಡುವ ಸಂಪೂರ್ಣ ಪ್ರಕ್ರಿಯೆ.',
    stepAsk: 'ಕೇಳಿ (ASK)',
    stepUnderstand: 'ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ (UNDERSTAND)',
    stepRetrieve: 'ಹುಡುಕಿ (RETRIEVE)',
    stepVerify: 'ಪರಿಶೀಲಿಸಿ (VERIFY)',
    stepAnswer: 'ಉತ್ತರಿಸಿ (ANSWER)',
    stepCite: 'ಆಧಾರ ತೋರಿಸಿ (CITE)',

    featuresKicker: 'ವ್ಯವಸ್ಥೆಯ ವೈಶಿಷ್ಟ್ಯಗಳು',
    featuresTitle: 'ವಿಶ್ವಾಸಾರ್ಹ ಮಾಹಿತಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ',
    featuresSubtitle: 'ಕಾನೂನು ಚೌಕಟ್ಟು ಮತ್ತು ಸ್ಪಷ್ಟ ಆಧಾರಗಳೊಂದಿಗೆ ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ.',

    hubKicker: 'ಸಂಶೋಧನಾ ಗ್ರಂಥಾಲಯ',
    hubTitle: 'ಐಪಿ ಜ್ಞಾನ ಕೇಂದ್ರ',
    hubSubtitle: 'ಕಾನೂನುಗಳು, ನಿಯಮಗಳು, ನ್ಯಾಯಾಲಯದ ತೀರ್ಪುಗಳು ಮತ್ತು ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಹುಡುಕಿ.',
    hubSearchPlaceholder: 'ಕಾನೂನು ಅಥವಾ ಕಲಮುಗಳನ್ನು ಹುಡುಕಿ (ಉದಾ: ಸೆಕ್ಷನ್ 3(d), ಮ್ಯಾಡ್ರಿಡ್ ಪ್ರೋಟೋಕಾಲ್)...',
    hubSearchButton: 'ಹುಡುಕಿ',
    hubViewComplete: 'ಸಂಪೂರ್ಣ ಜ್ಞಾನ ಕೇಂದ್ರ ನೋಡಿ',

    sourcesKicker: 'ಮಾಹಿತಿ ಮೂಲಗಳು',
    sourcesTitle: 'ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಮೂಲಗಳು',
    sourcesSubtitle: 'ಇಂಡಿಯಾ ಕೋಡ್, ಭಾರತೀಯ ಪೇಟೆಂಟ್ ಕಚೇರಿ ಮತ್ತು WIPO ಆಧಾರಿತ ಮಾಹಿತಿ.',

    archKicker: 'ತಾಂತ್ರಿಕ ವಿನ್ಯಾಸ',
    archTitle: 'ಪ್ರತಿ ಉತ್ತರದ ಹಿಂದಿರುವ ತಂತ್ರಜ್ಞಾನ',
    archSubtitle: 'ಪ್ರಶ್ನೆಗಳನ್ನು ನೇರವಾಗಿ ಅಧಿಕೃತ ಕಾನೂನುಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವ RAG ತಂತ್ರಜ್ಞಾನ.',

    useCasesKicker: 'ಬಳಕೆದಾರರು',
    useCasesTitle: 'ಯುಕ್ತಿ-ಕಾರ್ ಯಾರು ಬಳಸಬಹುದು?',
    useCasesSubtitle: 'ವಿದ್ಯಾರ್ಥಿಗಳು, ಸಂಶೋಧಕರು, ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳು ಮತ್ತು ಸಣ್ಣ ಉದ್ಯಮಿಗಳಿಗಾಗಿ.',

    questionsKicker: 'ನೈಜ ಪ್ರಶ್ನೆಗಳು',
    questionsTitle: 'ನಿಜವಾದ ಐಪಿ ಪ್ರಶ್ನೆಗಳು',
    questionsSubtitle: 'ಸಂಶೋಧಕರು ಕೇಳಿದ ನೈಜ ಪ್ರಶ್ನೆಗಳು. ಉತ್ತರ ತಿಳಿಯಲು ಕ್ಲಿಕ್ ಮಾಡಿ.',

    ctaTitle: 'ನಿಮಗೆ ಐಪಿ ಪ್ರಶ್ನೆ ಇದೆಯೇ?',
    ctaText: 'ಭಾರತೀಯ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ಬೌದ್ಧಿಕ ಆಸ್ತಿ ನಿಯಮಗಳ ಆಧಾರಿತ ಮಾಹಿತಿ ಪಡೆಯಿರಿ.',
    ctaButton: 'ಯುಕ್ತಿ-ಕಾರರನ್ನು ಕೇಳಿ',

    assistantKicker: 'ಯುಕ್ತಿ-ಕಾರ್ ಜ್ಞಾನ ಸಹಾಯಕ',
    assistantTitle: 'ಆಧಾರಿತ ಬೌದ್ಧಿಕ ಆಸ್ತಿ ವಿಚಾರಣೆ',
    assistantPromptLabel: 'ಬೌದ್ಧಿಕ ಆಸ್ತಿಯ ಕುರಿತು ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಏನು?',
    assistantDomainFilter: 'ಕ್ಷೇತ್ರ ಆಯ್ಕೆ:',
    assistantInputPlaceholderIndia: 'ಉದಾ: "ಭಾರತೀಯ ಪೇಟೆಂಟ್ ಕಾಯ್ದೆಯ ಸೆಕ್ಷನ್ 2(1)(j) ನಿಯಮಗಳು ಯಾವುವು?"',
    assistantInputPlaceholderIntl: 'ಉದಾ: "PCT ಅಂತರರಾಷ್ಟ್ರೀಯ ಪೇಟೆಂಟ್ ಅರ್ಜಿ ಸಲ್ಲಿಕೆಯ ಗಡುವುಗಳು ಯಾವುವು?"',
    assistantRetrieving: 'ಅಧಿಕೃತ ಕಾನೂನು ಮೂಲಗಳಿಂದ ಹುಡುಕಲಾಗುತ್ತಿದೆ...',
    assistantEmptyTitle: 'ಯುಕ್ತಿ-ಕಾರರನ್ನು ಪ್ರಶ್ನಿಸಿ',
    assistantEmptyDesc: 'ಪೇಟೆಂಟ್ ಮತ್ತು ಟ್ರೇಡ್‌ಮಾರ್ಕ್ ನಿಯಮಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ಪಡೆಯಿರಿ.',

    disclaimerText: 'ಯುಕ್ತಿ-ಕಾರ್ ಮಾಹಿತಿ ಮಾರ್ಗದರ್ಶನವನ್ನು ಮಾತ್ರ ಒದಗಿಸುತ್ತದೆ; ಇದು ವಕೀಲರ ಸಲಹೆಗೆ ಬದಲಿಯಾಗಿರುವುದಿಲ್ಲ.'
  }
};

export function getTranslation(lang: string = 'en'): TranslationDictionary {
  const supported = (lang in TRANSLATIONS ? lang : 'en') as SupportedLanguage;
  return TRANSLATIONS[supported];
}

export const LOCALIZED_IP_DOMAINS: Record<SupportedLanguage, Record<string, { name: string; description: string; tagline: string }>> = {
  en: {
    patent: {
      name: 'Patent',
      tagline: 'Inventions, novelty, inventive step and industrial utility',
      description: 'Inventions, innovation, patentability, applications and related information across mechanical, chemical, electrical, pharmaceutical, and digital domains.'
    },
    trademark: {
      name: 'Trademark',
      tagline: 'Brands, trade names, logos, device marks and goodwill',
      description: 'Brands, names, logos, identity and trademark-related information to distinguish goods and services of one enterprise from those of others.'
    },
    copyright: {
      name: 'Copyright',
      tagline: 'Literary, dramatic, musical, artistic works and software',
      description: 'Creative works, ownership, protection and related information covering original expressions, moral rights, and digital copyright management.'
    },
    geographical_indication: {
      name: 'Geographical Indication (GI)',
      tagline: 'Origin-linked agricultural, natural and manufactured goods',
      description: 'Products associated with a specific geographical origin where a given quality, reputation or other characteristic is attributable to that location.'
    },
    traditional_knowledge: {
      name: 'Traditional Knowledge (TKDL)',
      tagline: 'Indigenous wisdom, Ayurvedic formulations and prior art defense',
      description: 'Traditional knowledge, prior-art references and protection against misappropriation and bio-piracy through documented defensive repositories.'
    },
    abs: {
      name: 'Access & Benefit Sharing (ABS)',
      tagline: 'Biological resources, prior approval and fair equitable sharing',
      description: 'Access to biological resources and benefit-sharing information under biodiversity governance for sustainable utilization and community equity.'
    }
  },
  hi: {
    patent: {
      name: 'पेटेंट (Patent)',
      tagline: 'नवीन आविष्कार, नवीनता और औद्योगिक उपयोगिता',
      description: 'यांत्रिक, रासायनिक, डिजिटल और फार्मास्यूटिकल क्षेत्रों में नवाचार, पेटेंट योग्यता और आधिकारिक आवेदन प्रक्रिया।'
    },
    trademark: {
      name: 'ट्रेडमार्क (Trademark)',
      tagline: 'ब्रांड, व्यापारिक नाम, लोगो और व्यावसायिक पहचान',
      description: 'ब्रांड नाम, प्रतीक, लोगो और पहचान जो किसी व्यवसाय की वस्तुओं और सेवाओं को दूसरों से विशिष्ट बनाते हैं।'
    },
    copyright: {
      name: 'कॉपीराइट (Copyright)',
      tagline: 'साहित्यिक, नाटकीय, संगीतमय, कलात्मक कृतियाँ और सॉफ्टवेयर',
      description: 'मूल कलात्मक अभिव्यक्तियाँ, रचनाकार अधिकार, नैतिक अधिकार और डिजिटल कॉपीराइट प्रबंधन से संबंधित जानकारी।'
    },
    geographical_indication: {
      name: 'भौगोलिक उपदर्शन (GI)',
      tagline: 'विशिष्ट भौगोलिक मूल से जुड़े पारंपरिक उत्पाद',
      description: 'विशिष्ट भौगोलिक क्षेत्र से उत्पन्न कृषि, प्राकृतिक या विनिर्मित उत्पाद जिनकी विशिष्ट पहचान उस क्षेत्र से जुड़ी है।'
    },
    traditional_knowledge: {
      name: 'पारंपरिक ज्ञान (TKDL)',
      tagline: 'स्वदेशी ज्ञान, आयुर्वेदिक योग और पूर्व-कला रक्षा',
      description: 'बायोपायरेसी और अनुचित पेटेंटिंग के विरुद्ध भारत के प्राचीन पारंपरिक चिकित्सा ज्ञान की रक्षात्मक प्रणाली।'
    },
    abs: {
      name: 'पहुंच और लाभ साझाकरण (ABS)',
      tagline: 'जैविक संसाधन, पूर्वानुमति और न्यायसंगत लाभ साझेदारी',
      description: 'जैव विविधता अधिनियम और राष्ट्रीय जैव विविधता प्राधिकरण (NBA) के अंतर्गत जैविक संसाधनों का सतत उपयोग।'
    }
  },
  ta: {
    patent: {
      name: 'காப்புரிமை (Patent)',
      tagline: 'கண்டுபிடிப்புகள், புதுமை மற்றும் தொழில்துறை பயன்பாடு',
      description: 'இயந்திரவியல், வேதியியல், மின்னணுவியல் மற்றும் மென்பொருள் கண்டுபிடிப்புகளுக்கான காப்புரிமை பாதுகாப்பு.'
    },
    trademark: {
      name: 'வர்த்தக முத்திரை (Trademark)',
      tagline: 'வணிகப் பெயர், சின்னம் மற்றும் பிராண்ட் அடையாளம்',
      description: 'வணிகப் பொருட்கள் மற்றும் சேவைகளை பிறரிடமிருந்து வேறுபடுத்திக் காட்டும் பிராண்ட் அடையாளங்கள்.'
    },
    copyright: {
      name: 'பதிப்புரிமை (Copyright)',
      tagline: 'இலக்கிய, இசை, கலை படைப்புகள் மற்றும் மென்பொருள்',
      description: 'அசல் படைப்பாற்றல், ஆசிரியர் உரிமைகள் மற்றும் டிஜிட்டல் பதிப்புரிமை மேலாண்மை தகவல்கள்.'
    },
    geographical_indication: {
      name: 'புவிசார் குறியீடு (GI)',
      tagline: 'குறிப்பிட்ட பிராந்திய விவசாய மற்றும் கைவினைப் பொருட்கள்',
      description: 'ஒரு குறிப்பிட்ட புவியியல் பகுதியுடன் தொடர்புடைய தனித்துவமான பண்புகளைக் கொண்ட பாரம்பரிய பொருட்கள்.'
    },
    traditional_knowledge: {
      name: 'பாரம்பரிய அறிவு (TKDL)',
      tagline: 'பாரம்பரிய ஆயுர்வேத மற்றும் இயற்கை மருத்துவ ஞானம்',
      description: 'பயோபைரசிக்கு எதிராக இந்தியாவின் பாரம்பரிய மருத்துவ முறைகளை சர்வதேச அளவில் பாதுகாக்கும் தளம்.'
    },
    abs: {
      name: 'பயன்பாடு & பகிர்வு (ABS)',
      tagline: 'உயிரியல் வளங்கள், முன் அனுமதி மற்றும் சமமான நன்மை பகிர்வு',
      description: 'தேசிய பல்லுயிர் ஆணையம் (NBA) வழிகாட்டுதலின் கீழ் உயிரியல் வளங்களுக்கான அறிவுசார் சொத்து விதிகள்.'
    }
  },
  te: {
    patent: {
      name: 'పేటెంట్ (Patent)',
      tagline: 'ఆవిష్కరణలు, కొత్తదనం మరియు పారిశ్రామిక వినియోగం',
      description: 'మెకానికల్, కెమికల్, డిజిటల్ మరియు ఫార్మా రంగాలలో ఆవిష్కరణల పేటెంట్ రక్షణ సమాచారం.'
    },
    trademark: {
      name: 'ట్రేడ్‌మార్క్ (Trademark)',
      tagline: 'బ్రాండ్లు, వ్యాపార పేర్లు మరియు లోగో గుర్తింపు',
      description: 'ఒక సంస్థ ఉత్పత్తులు మరియు సేవలను ఇతరుల నుండి వేరు చేయడానికి ఉపయోగించే బ్రాండ్ పేర్లు.'
    },
    copyright: {
      name: 'కాపీరైట్ (Copyright)',
      tagline: 'సాహిత్య, సంగీత, కళాత్మక రచనలు మరియు సాఫ్ట్‌వేర్',
      description: 'సృజనాత్మక రచనలు, రచయిత హక్కులు మరియు డిజిటల్ కాపీరైట్ రక్షణ మార్గదర్శకాలు.'
    },
    geographical_indication: {
      name: 'భౌగోళిక గుర్తింపు (GI)',
      tagline: 'నిర్దిష్ట ప్రాంతీయ ఉత్పత్తులు మరియు సాంప్రదాయ కళలు',
      description: 'ప్రత్యేక భౌగోళిక ప్రాంతం నుండి ఉద్భవించిన నాణ్యమైన వ్యవసాయ మరియు చేతివృత్తుల ఉత్పత్తులు.'
    },
    traditional_knowledge: {
      name: 'సంప్రదాయ జ్ఞానం (TKDL)',
      tagline: 'ఆయుర్వేద సూత్రాలు మరియు బయో-పైరసీ నిరోధక రక్షణ',
      description: 'భారతీయ ప్రాచీన వైద్య విధానాలను రక్షించడానికి సిద్ధం చేసిన సాంప్రదాయ జ్ఞాన డిజిటల్ లైబ్రరీ.'
    },
    abs: {
      name: 'యాక్సెస్ & ప్రయోజనాల పంపిణీ (ABS)',
      tagline: 'జీవ వనరులు, ముందస్తు అనుమతి మరియు న్యాయబద్ధ ప్రయోజనం',
      description: 'జీవ వైవిధ్య చట్టం మరియు జాతీయ జీవ వైవిధ్య అథారిటీ (NBA) నిబంధనల ప్రకారం ప్రయోజనాల పంపిణీ.'
    }
  },
  bn: {
    patent: {
      name: 'পেটেন্ট (Patent)',
      tagline: 'আবিষ্কার, নতুনত্ব ও শিল্পোপযোগিতা',
      description: 'যান্ত্রিক, রাসায়নিক, ফার্মাসিউটিক্যাল ও ডিজিটাল উদ্ভাবনের পেটেন্ট যোগ্যতা ও আবেদন প্রক্রিয়া।'
    },
    trademark: {
      name: 'ট্রেডমার্ক (Trademark)',
      tagline: 'ব্র্যান্ড, ব্যবসায়িক নাম ও প্রতীক',
      description: 'পণ্য ও পরিষেবার স্বাতন্ত্র্য নিশ্চিত করতে ব্যবহৃত ব্র্যান্ড নাম, লোগো ও ব্যবসায়িক প্রতীক।'
    },
    copyright: {
      name: 'কপিরাইট (Copyright)',
      tagline: 'সাহিত্য, সঙ্গীত, শিল্পকর্ম ও সফটওয়্যার',
      description: 'মৌলিক সৃজনশীল সৃষ্টি, রচয়িতার অধিকার ও ডিজিটাল কপিরাইট সুরক্ষা ব্যবস্থা।'
    },
    geographical_indication: {
      name: 'ভৌগোলিক নির্দেশক (GI)',
      tagline: 'আঞ্চলিক ঐতিহ্যবাহী পণ্য ও হস্তশিল্প',
      description: 'নির্দিষ্ট ভৌগোলিক উৎস থেকে উৎপন্ন স্বতন্ত্র গুণমানের কৃষি ও ঐতিহ্যবাহী হস্তশিল্প।'
    },
    traditional_knowledge: {
      name: 'ঐতিহ্যবাহী জ্ঞান (TKDL)',
      tagline: 'আয়ুর্বেদ ও দেশীয় জ্ঞানের সুরক্ষা',
      description: 'বায়োপাইরেসি প্রতিরোধের উদ্দেশ্যে প্রাচীন ভারতীয় চিকিৎসা জ্ঞানের ডিজিটাল সংরক্ষণাগার।'
    },
    abs: {
      name: 'অ্যাক্সেস ও সুবিধা ভাগাভাগি (ABS)',
      tagline: 'জৈব সম্পদ ও ন্যায্য সুবিধা বন্টন',
      description: 'জাতীয় জীববৈচিত্র্য কর্তৃপক্ষ (NBA) এর আওতায় জৈব সম্পদের টেকসই ব্যবহার ও অনুমোদন।'
    }
  },
  mr: {
    patent: {
      name: 'पेटंट (Patent)',
      tagline: 'आविष्कार, नाविन्यता आणि औद्योगिक उपयुक्तता',
      description: 'यांत्रिकी, रासायनिक, औषधी आणि डिजिटल क्षेत्रातील नवनिर्मिती आणि पेटंट अर्ज प्रक्रिया.'
    },
    trademark: {
      name: 'ट्रेडमार्क (Trademark)',
      tagline: 'ब्रँड नाव, लोगो आणि व्यावसायिक ओळख',
      description: 'एका संस्थेच्या वस्तू आणि सेवा इतरांपेक्षा वेगळ्या दर्शवणारे ब्रँड नाव आणि बोधचिन्ह.'
    },
    copyright: {
      name: 'कॉपीराइट (Copyright)',
      tagline: 'साहित्य, संगीत, कलाकृती आणि सॉफ्टवेअर',
      description: 'मूळ कलात्मक अभिव्यक्ती, लेखक अधिकार आणि डिजिटल कॉपीराइट व्यवस्थापन नियम.'
    },
    geographical_indication: {
      name: 'भौगोलिक निर्देशांक (GI)',
      tagline: 'प्रादेशिक कृषी व पारंपरिक हस्तकला उत्पादने',
      description: 'विशिष्ट भौगोलिक क्षेत्राशी निगडित असलेले आणि त्या परिसरामुळे वैशिष्ट्यपूर्ण ठरलेले उत्पादन.'
    },
    traditional_knowledge: {
      name: 'पारंपारिक ज्ञान (TKDL)',
      tagline: 'आयुर्वेदिक पद्धती आणि स्वदेशी ज्ञान संरक्षण',
      description: 'बायोपायरसी विरोधात भारताच्या प्राचीन वैद्यकीय ज्ञानाचे आंतरराष्ट्रीय संरक्षण दालन.'
    },
    abs: {
      name: 'प्रवेश आणि लाभ वाटप (ABS)',
      tagline: 'जैविक संसाधने आणि न्याय्य लाभ वाटणी',
      description: 'राष्ट्रीय जैवविविधता प्राधिकरण (NBA) अंतर्गत जैविक संसाधनांचा कायदेशीर वापर.'
    }
  },
  gu: {
    patent: {
      name: 'પેટન્ટ (Patent)',
      tagline: 'સંશોધન, નવીનતા અને ઔદ્યોગિક ઉપયોગિતા',
      description: 'મિકેનિકલ, કેમિકલ, ફાર્મા અને ડિજિટલ ક્ષેત્રોમાં નવીન શોધની પેટન્ટ યોગ્યતા અને પ્રક્રિયા.'
    },
    trademark: {
      name: 'ટ્રેડમાર્ક (Trademark)',
      tagline: 'બ્રાન્ડ નામ, લોગો અને વ્યાપારિક ઓળખ',
      description: 'વેપારી માલ અને સેવાઓને અલગ ઓળખ આપવા માટેના બ્રાન્ડ નામો અને ચિહ્નો.'
    },
    copyright: {
      name: 'કોપીરાઇટ (Copyright)',
      tagline: 'સાહિત્ય, સંગીત, કલાત્મક રચનાઓ અને સોફ્ટવેર',
      description: 'મૌલિક સર્જનાત્મક કાર્યો, રચનાકાર અધિકારો અને ડિજિટલ સુરક્ષા નિયમો.'
    },
    geographical_indication: {
      name: 'ભૌગોલિક સંકેત (GI)',
      tagline: 'પ્રાદેશિક પરંપરાગત ઉત્પાદનો અને હસ્તકળા',
      description: 'ચોક્કસ ભૌગોલિક પ્રદેશ સાથે જોડાયેલા વિશિષ્ટ ગુણવત્તાવાળા ઉત્પાદનો.'
    },
    traditional_knowledge: {
      name: 'પરંપરાગત જ્ઞાન (TKDL)',
      tagline: 'આયુર્વેદિક જ્ઞાન અને બાયોપાયરેસી સામે રક્ષણ',
      description: 'ભારતીય પ્રાચીન ચિકિત્સા પદ્ધતિઓને અનધિકૃત પેટન્ટિંગથી બચાવવા માટેનો ડિજિટલ સંગ્રહ.'
    },
    abs: {
      name: 'સંપત્તિ વપરાશ અને લાભ વહેંચણી (ABS)',
      tagline: 'જૈવિક સંસાધનો અને ન્યાયસંગત લાભ',
      description: 'નેશનલ બાયોડાયવર્સિટી ઓથોરિટી (NBA) હેઠળ જૈવિક સંસાધનોની કાનૂની પરવાનગી.'
    }
  },
  kn: {
    patent: {
      name: 'ಪೇಟೆಂಟ್ (Patent)',
      tagline: 'ಆವಿಷ್ಕಾರಗಳು, ಹೊಸತನ ಮತ್ತು ಕೈಗಾರಿಕಾ ಉಪಯುಕ್ತತೆ',
      description: 'ಯಾಂತ್ರಿಕ, ರಾಸಾಯನಿಕ, ಔಷಧೀಯ ಮತ್ತು ಡಿಜಿಟಲ್ ಸಂಶೋಧನೆಗಳ ಪೇಟೆಂಟ್ ಅರ್ಜಿ ಪ್ರಕ್ರಿಯೆ.'
    },
    trademark: {
      name: 'ಟ್ರೇಡ್‌ಮಾರ್ಕ್ (Trademark)',
      tagline: 'ಬ್ರಾಂಡ್ ಹೆಸರು, ಲಾಂಛನ ಮತ್ತು ವ್ಯಾಪಾರ ಗುರುತು',
      description: 'ಸಂಸ್ಥೆಯ ಸರಕು ಮತ್ತು ಸೇವೆಗಳನ್ನು ಇತರರಿಂದ ಪ್ರತ್ಯೇಕಿಸಲು ಬಳಸುವ ಬ್ರಾಂಡ್ ಹೆಸರುಗಳು.'
    },
    copyright: {
      name: 'ಹಕ್ಕುಸ್ವಾಮ್ಯ (Copyright)',
      tagline: 'ಸಾಹಿತ್ಯ, ಸಂಗೀತ, ಕಲಾತ್ಮಕ ಕೃತಿಗಳು ಮತ್ತು ತಂತ್ರಾಂಶ',
      description: 'ಮೂಲ ಸೃಜನಶೀಲ ಅಭಿವ್ಯಕ್ತಿಗಳು, ಲೇಖಕರ ಹಕ್ಕುಗಳು ಮತ್ತು ಡಿಜಿಟಲ್ ಹಕ್ಕುಸ್ವಾಮ್ಯ ನಿಯಮಗಳು.'
    },
    geographical_indication: {
      name: 'ಭೌಗೋಳಿಕ ಸೂಚ್ಯಂಕ (GI)',
      tagline: 'ಪ್ರಾದೇಶಿಕ ಕೃಷಿ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಕರಕುಶಲ ವಸ್ತುಗಳು',
      description: 'ನಿರ್ದಿಷ್ಟ ಭೌಗೋಳಿಕ ಪ್ರದೇಶದಿಂದ ಉತ್ಪತ್ತಿಯಾಗುವ ವಿಶಿಷ್ಟ ಗುಣಮಟ್ಟದ ಉತ್ಪನ್ನಗಳು.'
    },
    traditional_knowledge: {
      name: 'ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನ (TKDL)',
      tagline: 'ಆಯುರ್ವೇದ ಸೂತ್ರಗಳು ಮತ್ತು ಜೈವಿಕ-ಕಳ್ಳತನ ರಕ್ಷಣೆ',
      description: 'ಭಾರತದ ಪ್ರಾಚೀನ ವೈದ್ಯಕೀಯ ಜ್ಞಾನವನ್ನು ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಟ್ಟದಲ್ಲಿ ರಕ್ಷಿಸುವ ಡಿಜಿಟಲ್ ಗ್ರಂಥಾಲಯ.'
    },
    abs: {
      name: 'ಪ್ರವೇಶ ಮತ್ತು ಪ್ರಯೋಜನ ಹಂಚಿಕೆ (ABS)',
      tagline: 'ಜೈವಿಕ ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ಸಮಾನ ಪ್ರಯೋಜನ ಹಂಚಿಕೆ',
      description: 'ರಾಷ್ಟ್ರೀಯ ಜೀವವೈವಿಧ್ಯ ಪ್ರಾಧಿಕಾರ (NBA) ನಿಯಮಗಳ ಅಡಿಯಲ್ಲಿ ಜೈವಿಕ ಸಂಪನ್ಮೂಲಗಳ ನಿಯಮಿತ ಬಳಕೆ.'
    }
  }
};

export function getLocalizedIPDomains(lang: string = 'en') {
  const supported = (lang in LOCALIZED_IP_DOMAINS ? lang : 'en') as SupportedLanguage;
  return LOCALIZED_IP_DOMAINS[supported];
}

