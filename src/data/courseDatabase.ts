export interface Course {
  id: string;
  name: string;
  degree: 'bachelor' | 'master' | 'phd' | 'mba' | 'certificate';
  field: string;
  requiredSkills: string[];
  preferredSkills: string[];
  duration: string;
  description: string;
  topDestinations: string[];
}

export const courses: Course[] = [
  // Computer Science & Engineering
  {
    id: 'cs-bachelor',
    name: 'Bachelor of Computer Science',
    degree: 'bachelor',
    field: 'Computer Science',
    requiredSkills: ['programming fundamentals', 'data structures', 'algorithms', 'discrete mathematics', 'computer architecture'],
    preferredSkills: ['python', 'java', 'c++', 'web development', 'databases', 'operating systems', 'software engineering'],
    duration: '3-4 years',
    description: 'Foundation in computing theory, programming, and software development',
    topDestinations: ['USA', 'UK', 'Canada', 'Germany', 'Australia']
  },
  {
    id: 'cs-master',
    name: 'Master of Computer Science',
    degree: 'master',
    field: 'Computer Science',
    requiredSkills: ['advanced programming', 'algorithms', 'system design', 'research methods', 'technical writing'],
    preferredSkills: ['machine learning', 'distributed systems', 'cloud computing', 'cybersecurity', 'specialization area'],
    duration: '1-2 years',
    description: 'Advanced study in specialized areas of computer science',
    topDestinations: ['USA', 'UK', 'Canada', 'Switzerland', 'Singapore']
  },
  {
    id: 'software-engineering-masters',
    name: 'MSc Software Engineering',
    degree: 'master',
    field: 'Software Engineering',
    requiredSkills: ['software design', 'programming', 'agile methodologies', 'version control', 'testing'],
    preferredSkills: ['devops', 'cloud platforms', 'microservices', 'system architecture', 'team leadership'],
    duration: '1-2 years',
    description: 'Professional software development and engineering practices',
    topDestinations: ['UK', 'USA', 'Ireland', 'Germany', 'Netherlands']
  },
  {
    id: 'data-science-masters',
    name: 'MSc Data Science',
    degree: 'master',
    field: 'Data Science',
    requiredSkills: ['statistics', 'python', 'machine learning', 'data visualization', 'sql'],
    preferredSkills: ['deep learning', 'big data', 'nlp', 'cloud platforms', 'business intelligence'],
    duration: '1-2 years',
    description: 'Extract insights from data using statistical and computational methods',
    topDestinations: ['USA', 'UK', 'Ireland', 'Germany', 'Canada']
  },
  {
    id: 'ai-masters',
    name: 'MSc Artificial Intelligence',
    degree: 'master',
    field: 'Artificial Intelligence',
    requiredSkills: ['machine learning', 'deep learning', 'python', 'mathematics', 'algorithms'],
    preferredSkills: ['computer vision', 'nlp', 'reinforcement learning', 'research', 'tensorflow/pytorch'],
    duration: '1-2 years',
    description: 'Advanced AI techniques and applications',
    topDestinations: ['USA', 'UK', 'Canada', 'Switzerland', 'Singapore']
  },
  {
    id: 'cybersecurity-masters',
    name: 'MSc Cybersecurity',
    degree: 'master',
    field: 'Cybersecurity',
    requiredSkills: ['network security', 'cryptography', 'ethical hacking', 'risk assessment', 'security protocols'],
    preferredSkills: ['penetration testing', 'incident response', 'cloud security', 'compliance', 'forensics'],
    duration: '1-2 years',
    description: 'Protect systems and networks from cyber threats',
    topDestinations: ['USA', 'UK', 'Israel', 'Estonia', 'Singapore']
  },
  {
    id: 'cloud-computing-masters',
    name: 'MSc Cloud Computing',
    degree: 'master',
    field: 'Cloud Computing',
    requiredSkills: ['cloud platforms', 'virtualization', 'networking', 'devops', 'security'],
    preferredSkills: ['aws', 'azure', 'gcp', 'kubernetes', 'terraform', 'serverless'],
    duration: '1-2 years',
    description: 'Design and manage cloud infrastructure and services',
    topDestinations: ['USA', 'Ireland', 'UK', 'Germany', 'India']
  },

  // Business & Management
  {
    id: 'mba-general',
    name: 'Master of Business Administration (MBA)',
    degree: 'mba',
    field: 'Business Administration',
    requiredSkills: ['leadership', 'strategic thinking', 'financial acumen', 'communication', 'problem solving'],
    preferredSkills: ['industry experience', 'team management', 'negotiation', 'entrepreneurship', 'global business'],
    duration: '1-2 years',
    description: 'Comprehensive business management and leadership education',
    topDestinations: ['USA', 'UK', 'France', 'Spain', 'Singapore', 'Canada']
  },
  {
    id: 'mba-finance',
    name: 'MBA in Finance',
    degree: 'mba',
    field: 'Finance',
    requiredSkills: ['financial analysis', 'accounting', 'valuation', 'investment principles', 'risk management'],
    preferredSkills: ['financial modeling', 'mergers acquisitions', 'corporate finance', 'fintech', 'banking experience'],
    duration: '1-2 years',
    description: 'Business management with finance specialization',
    topDestinations: ['USA', 'UK', 'France', 'Hong Kong', 'Singapore']
  },
  {
    id: 'mba-marketing',
    name: 'MBA in Marketing',
    degree: 'mba',
    field: 'Marketing',
    requiredSkills: ['marketing strategy', 'consumer behavior', 'brand management', 'digital marketing', 'analytics'],
    preferredSkills: ['growth hacking', 'product marketing', 'market research', 'crm', 'content strategy'],
    duration: '1-2 years',
    description: 'Business management with marketing focus',
    topDestinations: ['USA', 'UK', 'France', 'Spain', 'Australia']
  },
  {
    id: 'management-masters',
    name: 'MSc Management',
    degree: 'master',
    field: 'Management',
    requiredSkills: ['organizational behavior', 'strategic management', 'operations', 'finance basics', 'leadership'],
    preferredSkills: ['consulting', 'project management', 'entrepreneurship', 'hr management', 'innovation'],
    duration: '1-2 years',
    description: 'General management skills for diverse industries',
    topDestinations: ['UK', 'France', 'Netherlands', 'Germany', 'USA']
  },
  {
    id: 'international-business-masters',
    name: 'MSc International Business',
    degree: 'master',
    field: 'International Business',
    requiredSkills: ['global strategy', 'cross-cultural management', 'international trade', 'foreign languages', 'economics'],
    preferredSkills: ['emerging markets', 'global supply chain', 'international finance', 'diplomacy', 'regional expertise'],
    duration: '1-2 years',
    description: 'Business operations in global contexts',
    topDestinations: ['UK', 'France', 'Spain', 'Netherlands', 'Singapore']
  },
  {
    id: 'entrepreneurship-masters',
    name: 'MSc Entrepreneurship',
    degree: 'master',
    field: 'Entrepreneurship',
    requiredSkills: ['business model design', 'pitching', 'financial planning', 'market validation', 'networking'],
    preferredSkills: ['startup experience', 'venture capital', 'product development', 'growth strategies', 'innovation'],
    duration: '1-2 years',
    description: 'Build and scale new ventures',
    topDestinations: ['USA', 'UK', 'Israel', 'Singapore', 'Germany']
  },

  // Finance & Economics
  {
    id: 'finance-masters',
    name: 'MSc Finance',
    degree: 'master',
    field: 'Finance',
    requiredSkills: ['financial modeling', 'corporate finance', 'investments', 'accounting', 'econometrics'],
    preferredSkills: ['derivatives', 'portfolio management', 'risk analysis', 'python/r', 'cfa preparation'],
    duration: '1-2 years',
    description: 'Advanced financial theory and practice',
    topDestinations: ['UK', 'USA', 'France', 'Hong Kong', 'Singapore']
  },
  {
    id: 'financial-engineering',
    name: 'MSc Financial Engineering',
    degree: 'master',
    field: 'Quantitative Finance',
    requiredSkills: ['stochastic calculus', 'derivatives pricing', 'programming', 'numerical methods', 'probability'],
    preferredSkills: ['c++', 'python', 'risk models', 'trading systems', 'machine learning'],
    duration: '1-2 years',
    description: 'Mathematical modeling for financial markets',
    topDestinations: ['USA', 'UK', 'Switzerland', 'Singapore', 'Canada']
  },
  {
    id: 'accounting-masters',
    name: 'Master of Accounting',
    degree: 'master',
    field: 'Accounting',
    requiredSkills: ['financial accounting', 'auditing', 'taxation', 'regulatory compliance', 'reporting'],
    preferredSkills: ['cpa preparation', 'forensic accounting', 'international standards', 'data analytics', 'consulting'],
    duration: '1-2 years',
    description: 'Professional accounting and auditing expertise',
    topDestinations: ['USA', 'UK', 'Australia', 'Ireland', 'Canada']
  },
  {
    id: 'economics-masters',
    name: 'MSc Economics',
    degree: 'master',
    field: 'Economics',
    requiredSkills: ['microeconomics', 'macroeconomics', 'econometrics', 'statistics', 'research methods'],
    preferredSkills: ['behavioral economics', 'development economics', 'policy analysis', 'data science', 'phd preparation'],
    duration: '1-2 years',
    description: 'Economic theory, policy, and quantitative analysis',
    topDestinations: ['UK', 'USA', 'Netherlands', 'Germany', 'Australia']
  },
  {
    id: 'fintech-masters',
    name: 'MSc Financial Technology',
    degree: 'master',
    field: 'FinTech',
    requiredSkills: ['financial services', 'programming', 'blockchain', 'payments', 'regulatory knowledge'],
    preferredSkills: ['smart contracts', 'defi', 'algorithmic trading', 'data science', 'product management'],
    duration: '1-2 years',
    description: 'Technology innovation in financial services',
    topDestinations: ['UK', 'Singapore', 'Hong Kong', 'USA', 'Switzerland']
  },

  // Engineering
  {
    id: 'mechanical-engineering-masters',
    name: 'MSc Mechanical Engineering',
    degree: 'master',
    field: 'Mechanical Engineering',
    requiredSkills: ['thermodynamics', 'fluid mechanics', 'cad', 'materials science', 'manufacturing'],
    preferredSkills: ['fea', 'cfd', 'robotics', 'automotive', 'aerospace', 'sustainable design'],
    duration: '1-2 years',
    description: 'Advanced mechanical systems and design',
    topDestinations: ['Germany', 'USA', 'UK', 'Netherlands', 'Canada']
  },
  {
    id: 'electrical-engineering-masters',
    name: 'MSc Electrical Engineering',
    degree: 'master',
    field: 'Electrical Engineering',
    requiredSkills: ['circuit theory', 'signal processing', 'control systems', 'electronics', 'power systems'],
    preferredSkills: ['embedded systems', 'renewable energy', 'vlsi', 'communications', 'robotics'],
    duration: '1-2 years',
    description: 'Advanced electrical and electronic systems',
    topDestinations: ['USA', 'Germany', 'UK', 'Netherlands', 'Singapore']
  },
  {
    id: 'civil-engineering-masters',
    name: 'MSc Civil Engineering',
    degree: 'master',
    field: 'Civil Engineering',
    requiredSkills: ['structural analysis', 'geotechnical engineering', 'construction management', 'hydraulics', 'materials'],
    preferredSkills: ['bim', 'sustainable construction', 'seismic design', 'transportation', 'project management'],
    duration: '1-2 years',
    description: 'Infrastructure design and construction',
    topDestinations: ['UK', 'USA', 'Australia', 'Canada', 'Germany']
  },
  {
    id: 'aerospace-engineering',
    name: 'MSc Aerospace Engineering',
    degree: 'master',
    field: 'Aerospace Engineering',
    requiredSkills: ['aerodynamics', 'flight mechanics', 'propulsion', 'structural analysis', 'control systems'],
    preferredSkills: ['cfd', 'composite materials', 'space systems', 'avionics', 'defense applications'],
    duration: '1-2 years',
    description: 'Aircraft and spacecraft design and analysis',
    topDestinations: ['USA', 'UK', 'France', 'Germany', 'Netherlands']
  },
  {
    id: 'biomedical-engineering',
    name: 'MSc Biomedical Engineering',
    degree: 'master',
    field: 'Biomedical Engineering',
    requiredSkills: ['biology', 'engineering principles', 'medical devices', 'signal processing', 'biomaterials'],
    preferredSkills: ['imaging systems', 'tissue engineering', 'regulatory affairs', 'clinical research', 'neuroengineering'],
    duration: '1-2 years',
    description: 'Engineering solutions for healthcare',
    topDestinations: ['USA', 'Netherlands', 'Switzerland', 'Germany', 'Singapore']
  },

  // Healthcare & Medicine
  {
    id: 'medicine-mbbs',
    name: 'MBBS / MD Medicine',
    degree: 'bachelor',
    field: 'Medicine',
    requiredSkills: ['biology', 'chemistry', 'physics', 'anatomy', 'clinical skills'],
    preferredSkills: ['research experience', 'volunteering', 'communication', 'empathy', 'stress management'],
    duration: '4-6 years',
    description: 'Medical doctor training program',
    topDestinations: ['UK', 'Australia', 'USA', 'Caribbean', 'Eastern Europe']
  },
  {
    id: 'public-health-masters',
    name: 'Master of Public Health (MPH)',
    degree: 'master',
    field: 'Public Health',
    requiredSkills: ['epidemiology', 'biostatistics', 'health policy', 'research methods', 'social sciences'],
    preferredSkills: ['global health', 'health economics', 'program evaluation', 'data analysis', 'advocacy'],
    duration: '1-2 years',
    description: 'Population health and disease prevention',
    topDestinations: ['USA', 'UK', 'Australia', 'Canada', 'Netherlands']
  },
  {
    id: 'nursing-masters',
    name: 'MSc Nursing',
    degree: 'master',
    field: 'Nursing',
    requiredSkills: ['clinical nursing', 'patient care', 'health assessment', 'pharmacology', 'evidence-based practice'],
    preferredSkills: ['specialization', 'leadership', 'education', 'research', 'health informatics'],
    duration: '1-2 years',
    description: 'Advanced nursing practice and leadership',
    topDestinations: ['USA', 'UK', 'Australia', 'Canada', 'Ireland']
  },
  {
    id: 'healthcare-administration',
    name: 'MSc Healthcare Administration',
    degree: 'master',
    field: 'Healthcare Management',
    requiredSkills: ['healthcare systems', 'management', 'finance', 'policy', 'quality improvement'],
    preferredSkills: ['health informatics', 'strategic planning', 'operations', 'patient experience', 'regulatory knowledge'],
    duration: '1-2 years',
    description: 'Leadership in healthcare organizations',
    topDestinations: ['USA', 'UK', 'Australia', 'Canada', 'Singapore']
  },
  {
    id: 'pharmacy-masters',
    name: 'Master of Pharmacy',
    degree: 'master',
    field: 'Pharmacy',
    requiredSkills: ['pharmaceutical sciences', 'pharmacology', 'clinical pharmacy', 'medicinal chemistry', 'patient counseling'],
    preferredSkills: ['research', 'regulatory affairs', 'industry pharmacy', 'specialized practice', 'entrepreneurship'],
    duration: '2-4 years',
    description: 'Advanced pharmaceutical education',
    topDestinations: ['UK', 'USA', 'Australia', 'Ireland', 'Canada']
  },
  //Architecture & Built Environment
  {
    id: 'architecture-masters',
    name: 'Master of Architecture (MArch)',
    degree: 'master',
    field: 'Architecture',
    requiredSkills: ['architectural design', 'autocad', 'revit', 'building technology', 'design studio'],
    preferredSkills: ['sustainable design', 'urban planning', '3d modeling', 'bim', 'project management'],
    duration: '1-2 years',
    description: 'Professional architectural design and planning',
    topDestinations: ['UK', 'USA', 'Australia', 'Germany', 'Canada']
  },
  {
    id: 'urban-planning-masters',
    name: 'MSc Urban Planning',
    degree: 'master',
    field: 'Urban Planning',
    requiredSkills: ['urban policy', 'gis', 'transport planning', 'community development', 'research'],
    preferredSkills: ['sustainability', 'infrastructure planning', 'smart cities', 'public engagement'],
    duration: '1-2 years',
    description: 'City planning and sustainable development',
    topDestinations: ['Netherlands', 'UK', 'USA', 'Germany', 'Canada']
  },

  // Data & Analytics
  {
    id: 'business-analytics-masters',
    name: 'MSc Business Analytics',
    degree: 'master',
    field: 'Business Analytics',
    requiredSkills: ['statistics', 'sql', 'python/r', 'data visualization', 'business intelligence'],
    preferredSkills: ['machine learning', 'optimization', 'predictive modeling', 'tableau/power bi', 'consulting'],
    duration: '1-2 years',
    description: 'Data-driven business decision making',
    topDestinations: ['USA', 'UK', 'Ireland', 'Singapore', 'Canada']
  },
  {
    id: 'big-data-masters',
    name: 'MSc Big Data Analytics',
    degree: 'master',
    field: 'Big Data',
    requiredSkills: ['hadoop', 'spark', 'nosql', 'cloud platforms', 'data pipelines', 'programming'],
    preferredSkills: ['kafka', 'airflow', 'data governance', 'real-time analytics', 'ml at scale'],
    duration: '1-2 years',
    description: 'Large-scale data processing and analytics',
    topDestinations: ['USA', 'Ireland', 'UK', 'Germany', 'India']
  },

  // Design & Creative
  {
    id: 'ux-design-masters',
    name: 'MSc User Experience Design',
    degree: 'master',
    field: 'UX Design',
    requiredSkills: ['user research', 'wireframing', 'prototyping', 'usability testing', 'design thinking'],
    preferredSkills: ['interaction design', 'service design', 'design systems', 'frontend basics', 'accessibility'],
    duration: '1-2 years',
    description: 'Design digital products for optimal user experience',
    topDestinations: ['UK', 'USA', 'Netherlands', 'Sweden', 'Denmark']
  },
  {
    id: 'graphic-design-masters',
    name: 'MA Graphic Design',
    degree: 'master',
    field: 'Graphic Design',
    requiredSkills: ['visual design', 'typography', 'branding', 'adobe creative suite', 'design history'],
    preferredSkills: ['motion graphics', 'web design', 'illustration', 'art direction', 'experimental design'],
    duration: '1-2 years',
    description: 'Advanced visual communication and design',
    topDestinations: ['UK', 'USA', 'Netherlands', 'Italy', 'Australia']
  },
  {
    id: 'fashion-design-masters',
    name: 'MA Fashion Design',
    degree: 'master',
    field: 'Fashion Design',
    requiredSkills: ['garment construction', 'pattern making', 'textile knowledge', 'sketching', 'fashion history'],
    preferredSkills: ['sustainable fashion', 'digital design', 'branding', 'merchandising', 'trend forecasting'],
    duration: '1-2 years',
    description: 'Creative fashion design and industry practice',
    topDestinations: ['UK', 'Italy', 'France', 'USA', 'Belgium']
  },

  // Law & Policy
  {
    id: 'llm-law',
    name: 'Master of Laws (LLM)',
    degree: 'master',
    field: 'Law',
    requiredSkills: ['legal research', 'legal writing', 'case analysis', 'jurisprudence', 'specialization area'],
    preferredSkills: ['international law', 'corporate law', 'human rights', 'ip law', 'moot court'],
    duration: '1 year',
    description: 'Advanced legal studies and specialization',
    topDestinations: ['UK', 'USA', 'Netherlands', 'Australia', 'Singapore']
  },
  {
    id: 'international-relations-masters',
    name: 'MA International Relations',
    degree: 'master',
    field: 'International Relations',
    requiredSkills: ['political science', 'international law', 'economics', 'research methods', 'foreign languages'],
    preferredSkills: ['security studies', 'diplomacy', 'development', 'regional expertise', 'conflict resolution'],
    duration: '1-2 years',
    description: 'Global politics, diplomacy, and international affairs',
    topDestinations: ['UK', 'USA', 'Netherlands', 'Switzerland', 'Singapore']
  },
  {
    id: 'public-policy-masters',
    name: 'Master of Public Policy',
    degree: 'master',
    field: 'Public Policy',
    requiredSkills: ['policy analysis', 'economics', 'statistics', 'research', 'stakeholder engagement'],
    preferredSkills: ['program evaluation', 'advocacy', 'government experience', 'consulting', 'social impact'],
    duration: '1-2 years',
    description: 'Design and evaluate public policies',
    topDestinations: ['USA', 'UK', 'Netherlands', 'Germany', 'Singapore']
  },

  // Psychology & Social Sciences
  {
    id: 'psychology-masters',
    name: 'MSc Psychology',
    degree: 'master',
    field: 'Psychology',
    requiredSkills: ['research methods', 'statistics', 'psychological theory', 'assessment', 'ethics'],
    preferredSkills: ['clinical practice', 'organizational psychology', 'neuropsychology', 'counseling', 'phd preparation'],
    duration: '1-2 years',
    description: 'Advanced psychological science and practice',
    topDestinations: ['UK', 'USA', 'Netherlands', 'Australia', 'Canada']
  },
  {
    id: 'clinical-psychology',
    name: 'Doctor of Clinical Psychology',
    degree: 'phd',
    field: 'Clinical Psychology',
    requiredSkills: ['psychological assessment', 'therapy techniques', 'research', 'ethics', 'supervision'],
    preferredSkills: ['specialization', 'publications', 'clinical experience', 'teaching', 'healthcare systems'],
    duration: '3-4 years',
    description: 'Professional clinical psychology training',
    topDestinations: ['UK', 'USA', 'Australia', 'Canada', 'Netherlands']
  },
  {
    id: 'sociology-masters',
    name: 'MA Sociology',
    degree: 'master',
    field: 'Sociology',
    requiredSkills: ['social theory', 'research methods', 'statistics', 'qualitative analysis', 'critical thinking'],
    preferredSkills: ['specialization area', 'policy relevance', 'fieldwork', 'phd preparation', 'activism'],
    duration: '1-2 years',
    description: 'Study of societies, institutions, and social change',
    topDestinations: ['UK', 'USA', 'Netherlands', 'Germany', 'Australia']
  },

  // Education
  {
    id: 'education-masters',
    name: 'MA Education',
    degree: 'master',
    field: 'Education',
    requiredSkills: ['pedagogy', 'curriculum design', 'assessment', 'educational psychology', 'classroom management'],
    preferredSkills: ['technology integration', 'special education', 'leadership', 'policy', 'research'],
    duration: '1-2 years',
    description: 'Advanced teaching and educational leadership',
    topDestinations: ['UK', 'USA', 'Australia', 'Canada', 'New Zealand']
  },
  {
    id: 'tesol-masters',
    name: 'MA TESOL / Applied Linguistics',
    degree: 'master',
    field: 'TESOL',
    requiredSkills: ['linguistics', 'language teaching methodology', 'second language acquisition', 'assessment'],
    preferredSkills: ['technology in language learning', 'materials development', 'teacher training', 'research'],
    duration: '1-2 years',
    description: 'Teaching English to speakers of other languages',
    topDestinations: ['UK', 'USA', 'Australia', 'New Zealand', 'Canada']
  },

  // Media & Communications
  {
    id: 'journalism-masters',
    name: 'MA Journalism',
    degree: 'master',
    field: 'Journalism',
    requiredSkills: ['news writing', 'research', 'interviewing', 'media ethics', 'digital storytelling'],
    preferredSkills: ['investigative journalism', 'data journalism', 'broadcasting', 'multimedia', 'specialization'],
    duration: '1 year',
    description: 'Professional journalism training',
    topDestinations: ['UK', 'USA', 'Australia', 'Netherlands', 'Spain']
  },
  {
    id: 'media-communications-masters',
    name: 'MA Media and Communications',
    degree: 'master',
    field: 'Media Studies',
    requiredSkills: ['media theory', 'communications research', 'digital media', 'cultural studies', 'writing'],
    preferredSkills: ['social media strategy', 'content creation', 'media production', 'pr', 'advertising'],
    duration: '1-2 years',
    description: 'Study of media systems and communication strategies',
    topDestinations: ['UK', 'USA', 'Australia', 'Netherlands', 'Singapore']
  },
  {
    id: 'film-production-masters',
    name: 'MA Film Production',
    degree: 'master',
    field: 'Film',
    requiredSkills: ['filmmaking', 'screenwriting', 'cinematography', 'editing', 'production management'],
    preferredSkills: ['directing', 'producing', 'sound design', 'visual effects', 'festival circuit'],
    duration: '1-2 years',
    description: 'Professional film and media production',
    topDestinations: ['USA', 'UK', 'Australia', 'Canada', 'France']
  },
  //Agriculture
  {
    id: 'agricultural-science-masters',
    name: 'MSc Agricultural Science',
    degree: 'master',
    field: 'Agriculture',
    requiredSkills: ['crop science', 'soil science', 'agronomy', 'research', 'farm management'],
    preferredSkills: ['sustainable farming', 'agribusiness', 'climate adaptation', 'food systems'],
    duration: '1-2 years',
    description: 'Advanced agricultural production and research',
    topDestinations: ['Netherlands', 'USA', 'Australia', 'Canada', 'UK']
  },
  {
    id: 'agribusiness-masters',
    name: 'MSc Agribusiness',
    degree: 'master',
    field: 'Agribusiness',
    requiredSkills: ['agricultural economics', 'supply chain', 'marketing', 'finance', 'farm management'],
    preferredSkills: ['export trade', 'food processing', 'entrepreneurship', 'policy'],
    duration: '1-2 years',
    description: 'Business management within agriculture sector',
    topDestinations: ['USA', 'Netherlands', 'Australia', 'Canada', 'UK']
  },

  //Real Estate & Construction Finance
  {
    id: 'real-estate-masters',
    name: 'MSc Real Estate',
    degree: 'master',
    field: 'Real Estate',
    requiredSkills: ['property valuation', 'real estate finance', 'urban economics', 'investment analysis', 'law basics'],
    preferredSkills: ['property development', 'reit analysis', 'risk assessment', 'portfolio management'],
    duration: '1-2 years',
    description: 'Property investment and real estate development',
    topDestinations: ['UK', 'USA', 'Australia', 'Singapore', 'Canada']
  }, 

  //Core Sciences
  {
    id: 'biology-masters',
    name: 'MSc Biology',
    degree: 'master',
    field: 'Biology',
    requiredSkills: ['molecular biology', 'genetics', 'laboratory techniques', 'research methods', 'data analysis'],
    preferredSkills: ['bioinformatics', 'cell culture', 'microscopy', 'scientific writing', 'fieldwork'],
    duration: '1-2 years',
    description: 'Advanced biological sciences and research training',
    topDestinations: ['USA', 'UK', 'Germany', 'Canada', 'Netherlands']
  },
  {
    id: 'chemistry-masters',
    name: 'MSc Chemistry',
    degree: 'master',
    field: 'Chemistry',
    requiredSkills: ['organic chemistry', 'analytical chemistry', 'laboratory skills', 'spectroscopy', 'research'],
    preferredSkills: ['pharmaceutical chemistry', 'materials science', 'polymer chemistry', 'computational chemistry'],
    duration: '1-2 years',
    description: 'Advanced chemical sciences and laboratory research',
    topDestinations: ['Germany', 'USA', 'UK', 'Switzerland', 'France']
  },
  {
    id: 'physics-masters',
    name: 'MSc Physics',
    degree: 'master',
    field: 'Physics',
    requiredSkills: ['quantum mechanics', 'electromagnetism', 'mathematics', 'computational modeling', 'research'],
    preferredSkills: ['astrophysics', 'particle physics', 'condensed matter', 'data analysis', 'phd preparation'],
    duration: '1-2 years',
    description: 'Advanced theoretical and applied physics',
    topDestinations: ['USA', 'UK', 'Germany', 'Switzerland', 'Canada']
  },

  // Environment & Sustainability
  {
    id: 'environmental-science-masters',
    name: 'MSc Environmental Science',
    degree: 'master',
    field: 'Environmental Science',
    requiredSkills: ['ecology', 'chemistry', 'statistics', 'gis', 'research methods'],
    preferredSkills: ['climate science', 'conservation', 'environmental policy', 'sustainability', 'remediation'],
    duration: '1-2 years',
    description: 'Study of environmental systems and challenges',
    topDestinations: ['Netherlands', 'UK', 'USA', 'Australia', 'Sweden']
  },
  {
    id: 'sustainability-masters',
    name: 'MSc Sustainability',
    degree: 'master',
    field: 'Sustainability',
    requiredSkills: ['sustainability principles', 'systems thinking', 'stakeholder engagement', 'metrics', 'reporting'],
    preferredSkills: ['circular economy', 'esg', 'renewable energy', 'supply chain', 'consulting'],
    duration: '1-2 years',
    description: 'Sustainable business and organizational practices',
    topDestinations: ['Netherlands', 'UK', 'Sweden', 'Denmark', 'USA']
  },
  {
    id: 'renewable-energy-masters',
    name: 'MSc Renewable Energy',
    degree: 'master',
    field: 'Renewable Energy',
    requiredSkills: ['energy systems', 'electrical engineering basics', 'policy', 'economics', 'project management'],
    preferredSkills: ['solar', 'wind', 'energy storage', 'grid integration', 'financing'],
    duration: '1-2 years',
    description: 'Clean energy technologies and deployment',
    topDestinations: ['Denmark', 'Germany', 'Netherlands', 'UK', 'Sweden']
  },

  // Hospitality & Tourism
  {
    id: 'hospitality-management-masters',
    name: 'MSc Hospitality Management',
    degree: 'master',
    field: 'Hospitality',
    requiredSkills: ['operations management', 'customer service', 'financial management', 'marketing', 'leadership'],
    preferredSkills: ['revenue management', 'event management', 'luxury hospitality', 'international experience'],
    duration: '1-2 years',
    description: 'Management of hotels, restaurants, and tourism businesses',
    topDestinations: ['Switzerland', 'USA', 'UK', 'Australia', 'Singapore']
  },
  {
    id: 'tourism-management-masters',
    name: 'MSc Tourism Management',
    degree: 'master',
    field: 'Tourism',
    requiredSkills: ['tourism principles', 'destination management', 'marketing', 'sustainability', 'research'],
    preferredSkills: ['digital tourism', 'cultural tourism', 'event planning', 'policy', 'consulting'],
    duration: '1-2 years',
    description: 'Strategic management of tourism destinations',
    topDestinations: ['UK', 'Australia', 'New Zealand', 'Netherlands', 'Spain']
  },

  // General fallback
  {
    id: 'general-masters',
    name: 'General Masters Program',
    degree: 'master',
    field: 'General',
    requiredSkills: ['research skills', 'critical thinking', 'writing', 'communication', 'time management'],
    preferredSkills: ['specialization interest', 'international experience', 'language skills', 'internships'],
    duration: '1-2 years',
    description: 'Versatile graduate education across disciplines',
    topDestinations: ['UK', 'USA', 'Canada', 'Australia', 'Germany']
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByField = (field: string): Course[] => {
  return courses.filter(course => course.field === field);
};

export const getCoursesByDegree = (degree: Course['degree']): Course[] => {
  return courses.filter(course => course.degree === degree);
};

export const getAllFields = (): string[] => {
  return [...new Set(courses.map(course => course.field))];
};

export const searchCourses = (query: string): Course[] => {
  const lowerQuery = query.toLowerCase();
  return courses.filter(course => 
    course.name.toLowerCase().includes(lowerQuery) ||
    course.field.toLowerCase().includes(lowerQuery) ||
    course.requiredSkills.some(skill => skill.toLowerCase().includes(lowerQuery))
  );
};
