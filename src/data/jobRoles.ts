export interface JobRole {
  id: string;
  title: string;
  category: string;
  requiredSkills: string[];
  preferredSkills: string[];
  experienceLevel: 'entry' | 'mid' | 'senior';
  description: string;
}

export const jobRoles: JobRole[] = [
  // Software Engineering
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    category: 'Software Engineering',
    requiredSkills: ['javascript', 'html', 'css', 'react', 'typescript', 'git', 'responsive design', 'dom manipulation'],
    preferredSkills: ['vue', 'angular', 'next.js', 'tailwind', 'sass', 'webpack', 'jest', 'cypress', 'redux', 'graphql'],
    experienceLevel: 'mid',
    description: 'Build user-facing web applications with modern frameworks'
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    category: 'Software Engineering',
    requiredSkills: ['python', 'java', 'nodejs', 'sql', 'rest api', 'git', 'docker', 'microservices'],
    preferredSkills: ['go', 'rust', 'kafka', 'redis', 'mongodb', 'kubernetes', 'aws', 'graphql', 'grpc'],
    experienceLevel: 'mid',
    description: 'Develop server-side logic and database architectures'
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    category: 'Software Engineering',
    requiredSkills: ['javascript', 'react', 'nodejs', 'sql', 'html', 'css', 'git', 'rest api'],
    preferredSkills: ['typescript', 'mongodb', 'docker', 'aws', 'next.js', 'graphql', 'redis', 'kubernetes'],
    experienceLevel: 'mid',
    description: 'End-to-end web application development'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Developer',
    category: 'Software Engineering',
    requiredSkills: ['react native', 'flutter', 'swift', 'kotlin', 'ios', 'android', 'git', 'mobile ui'],
    preferredSkills: ['dart', 'firebase', 'graphql', 'redux', 'ci/cd', 'app store', 'play store'],
    experienceLevel: 'mid',
    description: 'Build native and cross-platform mobile applications'
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    category: 'Software Engineering',
    requiredSkills: ['docker', 'kubernetes', 'aws', 'ci/cd', 'terraform', 'jenkins', 'linux', 'bash'],
    preferredSkills: ['azure', 'gcp', 'ansible', 'prometheus', 'grafana', 'helm', 'python', 'go'],
    experienceLevel: 'senior',
    description: 'Automate infrastructure and deployment pipelines'
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    category: 'Software Engineering',
    requiredSkills: ['aws', 'azure', 'gcp', 'terraform', 'kubernetes', 'microservices', 'security', 'networking'],
    preferredSkills: ['serverless', 'istio', 'vault', 'consul', 'prometheus', 'cost optimization'],
    experienceLevel: 'senior',
    description: 'Design scalable cloud infrastructure solutions'
  },
  {
    id: 'security-engineer',
    title: 'Security Engineer',
    category: 'Software Engineering',
    requiredSkills: ['penetration testing', 'vulnerability assessment', 'siem', 'firewall', 'encryption', 'owasp'],
    preferredSkills: ['certifications', 'python', 'threat modeling', 'incident response', 'compliance'],
    experienceLevel: 'senior',
    description: 'Protect systems and data from cyber threats'
  },

  // Data Science & AI
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Data Science',
    requiredSkills: ['python', 'machine learning', 'statistics', 'sql', 'pandas', 'numpy', 'scikit-learn', 'data visualization'],
    preferredSkills: ['tensorflow', 'pytorch', 'spark', 'aws', 'docker', 'nlp', 'computer vision', 'a/b testing'],
    experienceLevel: 'mid',
    description: 'Extract insights and build predictive models from data'
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    category: 'Data Science',
    requiredSkills: ['python', 'tensorflow', 'pytorch', 'mlops', 'docker', 'kubernetes', 'feature engineering'],
    preferredSkills: ['kubeflow', 'spark', 'airflow', 'gpu computing', 'model optimization', 'edge deployment'],
    experienceLevel: 'senior',
    description: 'Deploy and scale machine learning models in production'
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    category: 'Data Science',
    requiredSkills: ['python', 'sql', 'spark', 'kafka', 'airflow', 'data warehousing', 'etl'],
    preferredSkills: ['dbt', 'snowflake', 'bigquery', 'databricks', 'terraform', 'data governance'],
    experienceLevel: 'mid',
    description: 'Build data pipelines and infrastructure'
  },
  {
    id: 'ai-researcher',
    title: 'AI Research Scientist',
    category: 'Data Science',
    requiredSkills: ['deep learning', 'python', 'pytorch', 'tensorflow', 'mathematics', 'research', 'publications'],
    preferredSkills: ['nlp', 'computer vision', 'reinforcement learning', 'phd', 'academic writing'],
    experienceLevel: 'senior',
    description: 'Advance the state of the art in AI research'
  },
  {
    id: 'bi-analyst',
    title: 'Business Intelligence Analyst',
    category: 'Data Science',
    requiredSkills: ['sql', 'tableau', 'power bi', 'excel', 'data analysis', 'reporting', 'statistics'],
    preferredSkills: ['python', 'r', 'looker', 'data storytelling', 'kpi design', 'dashboard design'],
    experienceLevel: 'entry',
    description: 'Transform data into actionable business insights'
  },
  {
  id: 'business-data-analyst',
  title: 'Business Data Analyst',
  category: 'Data Science',
  requiredSkills: ['sql', 'excel', 'data analysis', 'dashboarding', 'business metrics', 'stakeholder communication'],
  preferredSkills: ['python', 'power bi', 'tableau', 'forecasting', 'process optimization'],
  experienceLevel: 'entry',
  description: 'Analyze business data to drive strategic decisions'
},
{
  id: 'marketing-analyst',
  title: 'Marketing Data Analyst',
  category: 'Marketing',
  requiredSkills: ['google analytics', 'sql', 'campaign analysis', 'a/b testing', 'excel', 'kpi tracking'],
  preferredSkills: ['python', 'tableau', 'customer segmentation', 'growth metrics'],
  experienceLevel: 'entry',
  description: 'Analyze marketing campaigns and customer behavior'
},
{
  id: 'operations-analyst',
  title: 'Operations Analyst',
  category: 'Business',
  requiredSkills: ['process analysis', 'excel', 'kpi monitoring', 'supply chain', 'data analysis'],
  preferredSkills: ['sql', 'lean', 'six sigma', 'forecasting'],
  experienceLevel: 'entry',
  description: 'Improve operational efficiency using data'
},

  //Oil & Gas
  {
    id: 'petroleum-engineer',
    title: 'Petroleum Engineer',
    category: 'Engineering',
    requiredSkills: ['reservoir engineering', 'drilling operations', 'production engineering', 'geology basics'],
    preferredSkills: ['offshore operations', 'simulation software', 'oil field economics'],
    experienceLevel: 'mid',
    description: 'Design and optimize oil and gas extraction processes'
  },
  {
    id: 'marine-engineer',
    title: 'Marine Engineer',
    category: 'Engineering',
    requiredSkills: ['marine systems', 'mechanical systems', 'ship maintenance', 'safety regulations'],
    preferredSkills: ['offshore platforms', 'maritime law', 'project management'],
    experienceLevel: 'mid',
    description: 'Maintain and design marine vessels and offshore systems'
  },

  //Real Estate & Property
  {
    id: 'real-estate-analyst',
    title: 'Real Estate Analyst',
    category: 'Finance',
    requiredSkills: ['property valuation', 'financial modeling', 'market analysis', 'excel', 'investment analysis'],
    preferredSkills: ['reit analysis', 'urban economics', 'risk modeling'],
    experienceLevel: 'entry',
    description: 'Evaluate property investments and market opportunities'
  },

  //Government / Public Sector
  {
    id: 'policy-analyst',
    title: 'Policy Analyst',
    category: 'Public Sector',
    requiredSkills: ['policy research', 'data analysis', 'report writing', 'stakeholder engagement', 'economics'],
    preferredSkills: ['government experience', 'impact evaluation', 'statistics'],
    experienceLevel: 'entry',
    description: 'Analyze and develop public policies'
  },

  //Supply Chain & Logistics
  {
    id: 'supply-chain-analyst',
    title: 'Supply Chain Analyst',
    category: 'Operations',
    requiredSkills: ['inventory management', 'demand forecasting', 'excel', 'erp systems', 'logistics'],
    preferredSkills: ['sap', 'sql', 'optimization models', 'lean'],
    experienceLevel: 'entry',
    description: 'Optimize supply chain operations and logistics'
  },

  // Product & Design
  {
    id: 'product-manager',
    title: 'Product Manager',
    category: 'Product',
    requiredSkills: ['product strategy', 'agile', 'user research', 'roadmapping', 'stakeholder management', 'analytics'],
    preferredSkills: ['technical background', 'mba', 'design thinking', 'growth hacking', 'pricing strategy'],
    experienceLevel: 'mid',
    description: 'Define product vision and drive execution'
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    category: 'Design',
    requiredSkills: ['user research', 'wireframing', 'prototyping', 'figma', 'usability testing', 'information architecture'],
    preferredSkills: ['interaction design', 'design systems', 'accessibility', 'html/css', 'motion design'],
    experienceLevel: 'mid',
    description: 'Create intuitive and delightful user experiences'
  },
  {
    id: 'ui-designer',
    title: 'UI Designer',
    category: 'Design',
    requiredSkills: ['visual design', 'figma', 'sketch', 'adobe creative suite', 'typography', 'color theory'],
    preferredSkills: ['design systems', 'animation', '3d design', 'frontend basics', 'brand design'],
    experienceLevel: 'mid',
    description: 'Craft beautiful and consistent visual interfaces'
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    category: 'Design',
    requiredSkills: ['ux design', 'ui design', 'figma', 'user research', 'prototyping', 'design systems'],
    preferredSkills: ['frontend development', 'product strategy', 'data analysis', 'growth design'],
    experienceLevel: 'mid',
    description: 'End-to-end product design from research to visuals'
  },

  // Business & Management
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    category: 'Business',
    requiredSkills: ['requirements gathering', 'process modeling', 'sql', 'excel', 'documentation', 'stakeholder communication'],
    preferredSkills: ['agile', 'tableau', 'python', 'domain expertise', 'project management'],
    experienceLevel: 'entry',
    description: 'Bridge business needs with technical solutions'
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    category: 'Business',
    requiredSkills: ['project planning', 'agile', 'scrum', 'risk management', 'stakeholder management', 'budgeting'],
    preferredSkills: ['pmp', 'jira', 'confluence', 'change management', 'leadership', 'negotiation'],
    experienceLevel: 'mid',
    description: 'Deliver projects on time and within budget'
  },
  {
    id: 'management-consultant',
    title: 'Management Consultant',
    category: 'Business',
    requiredSkills: ['strategic analysis', 'problem solving', 'presentation', 'excel', 'research', 'client management'],
    preferredSkills: ['mba', 'industry expertise', 'data analysis', 'change management', 'top-tier firm experience'],
    experienceLevel: 'mid',
    description: 'Advise organizations on strategic decisions'
  },
  {
    id: 'operations-manager',
    title: 'Operations Manager',
    category: 'Business',
    requiredSkills: ['process optimization', 'team management', 'budgeting', 'kpi management', 'supply chain'],
    preferredSkills: ['lean', 'six sigma', 'erp systems', 'logistics', 'vendor management'],
    experienceLevel: 'mid',
    description: 'Optimize business operations and efficiency'
  },

  // Finance
  {
    id: 'financial-analyst',
    title: 'Financial Analyst',
    category: 'Finance',
    requiredSkills: ['financial modeling', 'excel', 'accounting', 'valuation', 'forecasting', 'financial statements'],
    preferredSkills: ['python', 'sql', 'bloomberg', 'cfa', 'mba', 'industry knowledge'],
    experienceLevel: 'entry',
    description: 'Analyze financial data and support investment decisions'
  },
  {
    id: 'investment-banker',
    title: 'Investment Banking Analyst',
    category: 'Finance',
    requiredSkills: ['financial modeling', 'valuation', 'excel', 'powerpoint', 'due diligence', 'market analysis'],
    preferredSkills: ['mba', 'cfa', 'deal experience', 'industry expertise', 'networking'],
    experienceLevel: 'entry',
    description: 'Execute mergers, acquisitions, and capital raising'
  },
  {
    id: 'risk-analyst',
    title: 'Risk Analyst',
    category: 'Finance',
    requiredSkills: ['risk modeling', 'statistics', 'excel', 'sql', 'regulatory knowledge', 'quantitative analysis'],
    preferredSkills: ['python', 'r', 'machine learning', 'frm', 'stress testing', 'credit risk'],
    experienceLevel: 'mid',
    description: 'Identify and mitigate financial risks'
  },
  {
    id: 'fintech-product-manager',
    title: 'FinTech Product Manager',
    category: 'Finance',
    requiredSkills: ['product management', 'financial services', 'payments', 'api design', 'regulatory knowledge'],
    preferredSkills: ['technical background', 'blockchain', 'digital banking', 'trading systems', 'compliance'],
    experienceLevel: 'mid',
    description: 'Build innovative financial technology products'
  },
  {
    id: 'quantitative-analyst',
    title: 'Quantitative Analyst',
    category: 'Finance',
    requiredSkills: ['mathematics', 'statistics', 'python', 'c++', 'financial modeling', 'probability theory'],
    preferredSkills: ['machine learning', 'stochastic calculus', 'derivatives', 'high frequency trading', 'phd'],
    experienceLevel: 'senior',
    description: 'Develop mathematical models for trading strategies'
  },

  // Marketing
  {
    id: 'digital-marketer',
    title: 'Digital Marketing Specialist',
    category: 'Marketing',
    requiredSkills: ['seo', 'sem', 'google ads', 'social media', 'content marketing', 'analytics'],
    preferredSkills: ['marketing automation', 'hubspot', 'salesforce', 'copywriting', 'video editing'],
    experienceLevel: 'entry',
    description: 'Drive online growth through digital channels'
  },
  {
    id: 'growth-manager',
    title: 'Growth Marketing Manager',
    category: 'Marketing',
    requiredSkills: ['growth hacking', 'a/b testing', 'analytics', 'user acquisition', 'conversion optimization'],
    preferredSkills: ['product-led growth', 'viral marketing', 'referral programs', 'data analysis', 'sql'],
    experienceLevel: 'mid',
    description: 'Accelerate user and revenue growth'
  },
  {
    id: 'content-strategist',
    title: 'Content Strategist',
    category: 'Marketing',
    requiredSkills: ['content strategy', 'seo', 'editorial planning', 'brand voice', 'analytics', 'copywriting'],
    preferredSkills: ['video strategy', 'podcasting', 'thought leadership', 'content operations', 'ai tools'],
    experienceLevel: 'mid',
    description: 'Plan and execute content that drives engagement'
  },
  {
    id: 'brand-manager',
    title: 'Brand Manager',
    category: 'Marketing',
    requiredSkills: ['brand strategy', 'market research', 'campaign management', 'budgeting', 'creative direction'],
    preferredSkills: ['pr', 'event marketing', 'influencer marketing', 'crisis management', 'global markets'],
    experienceLevel: 'mid',
    description: 'Build and protect brand identity and equity'
  },

  // Healthcare
  {
    id: 'healthcare-data-analyst',
    title: 'Healthcare Data Analyst',
    category: 'Healthcare',
    requiredSkills: ['sql', 'python', 'healthcare data', 'hipaa', 'statistics', 'data visualization'],
    preferredSkills: ['clinical knowledge', 'epic', 'cerner', 'machine learning', 'population health'],
    experienceLevel: 'mid',
    description: 'Analyze healthcare data to improve patient outcomes'
  },
  {
    id: 'clinical-research-coordinator',
    title: 'Clinical Research Coordinator',
    category: 'Healthcare',
    requiredSkills: ['clinical trials', 'gcp', 'regulatory compliance', 'data collection', 'patient recruitment'],
    preferredSkills: ['protocol design', 'statistical analysis', 'medical writing', 'project management'],
    experienceLevel: 'entry',
    description: 'Coordinate clinical research studies'
  },
  {
    id: 'health-informatics-specialist',
    title: 'Health Informatics Specialist',
    category: 'Healthcare',
    requiredSkills: ['ehr systems', 'healthcare it', 'data standards', 'hl7', 'fhir', 'interoperability'],
    preferredSkills: ['clinical workflow', 'epic certification', 'cerner', 'data analytics', 'security'],
    experienceLevel: 'mid',
    description: 'Optimize health information systems and workflows'
  },

  // Cybersecurity
  {
    id: 'security-analyst',
    title: 'Cybersecurity Analyst',
    category: 'Cybersecurity',
    requiredSkills: ['siem', 'incident response', 'vulnerability management', 'network security', 'threat intelligence'],
    preferredSkills: ['certifications', 'forensics', 'malware analysis', 'scripting', 'cloud security'],
    experienceLevel: 'entry',
    description: 'Monitor and respond to security threats'
  },
  {
    id: 'penetration-tester',
    title: 'Penetration Tester',
    category: 'Cybersecurity',
    requiredSkills: ['penetration testing', 'vulnerability assessment', 'kali linux', 'burp suite', 'metasploit'],
    preferredSkills: ['certifications', 'web app security', 'network security', 'social engineering', 'reporting'],
    experienceLevel: 'mid',
    description: 'Identify security weaknesses through ethical hacking'
  },
  {
    id: 'security-architect',
    title: 'Security Architect',
    category: 'Cybersecurity',
    requiredSkills: ['security architecture', 'risk assessment', 'compliance', 'cloud security', 'identity management'],
    preferredSkills: ['zero trust', 'sase', 'devsecops', 'threat modeling', 'cissp', 'cism'],
    experienceLevel: 'senior',
    description: 'Design enterprise security frameworks'
  },

  // Engineering
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    category: 'Engineering',
    requiredSkills: ['cad', 'solidworks', 'fea', 'thermodynamics', 'manufacturing processes', 'materials science'],
    preferredSkills: ['cfd', 'plm', 'gd&t', 'project management', 'six sigma', 'automotive/aerospace'],
    experienceLevel: 'mid',
    description: 'Design mechanical systems and components'
  },
  {
    id: 'electrical-engineer',
    title: 'Electrical Engineer',
    category: 'Engineering',
    requiredSkills: ['circuit design', 'pcb design', 'embedded systems', 'signal processing', 'power systems'],
    preferredSkills: ['fpga', 'verilog', 'matlab', 'altium', 'automotive electronics', 'renewable energy'],
    experienceLevel: 'mid',
    description: 'Design electrical and electronic systems'
  },
  {
    id: 'civil-engineer',
    title: 'Civil Engineer',
    category: 'Engineering',
    requiredSkills: ['structural analysis', 'autocad', 'project management', 'construction', 'building codes'],
    preferredSkills: ['bim', 'revit', 'pmp', 'pe license', 'sustainability', 'infrastructure'],
    experienceLevel: 'mid',
    description: 'Design and oversee construction projects'
  },

  // Legal
  {
    id: 'corporate-lawyer',
    title: 'Corporate Lawyer',
    category: 'Legal',
    requiredSkills: ['corporate law', 'contract negotiation', 'due diligence', 'regulatory compliance', 'legal research'],
    preferredSkills: ['mba', 'ma experience', 'securities law', 'ip law', 'international law'],
    experienceLevel: 'mid',
    description: 'Handle corporate legal matters and transactions'
  },
  {
    id: 'legal-technologist',
    title: 'Legal Technologist',
    category: 'Legal',
    requiredSkills: ['legal tech', 'contract management', 'ediscovery', 'legal operations', 'process automation'],
    preferredSkills: ['ai in legal', 'blockchain', 'smart contracts', 'data privacy', 'programming'],
    experienceLevel: 'mid',
    description: 'Drive technology adoption in legal departments'
  },

  // HR & Talent
  {
    id: 'talent-acquisition',
    title: 'Talent Acquisition Specialist',
    category: 'Human Resources',
    requiredSkills: ['recruiting', 'sourcing', 'interviewing', 'ats', 'employer branding', 'diversity recruiting'],
    preferredSkills: ['technical recruiting', 'executive search', 'data-driven recruiting', 'linkedin recruiter'],
    experienceLevel: 'entry',
    description: 'Attract and hire top talent'
  },
  {
    id: 'hr-business-partner',
    title: 'HR Business Partner',
    category: 'Human Resources',
    requiredSkills: ['hr strategy', 'employee relations', 'performance management', 'organizational development'],
    preferredSkills: ['change management', 'compensation', 'hr analytics', 'coaching', 'business acumen'],
    experienceLevel: 'mid',
    description: 'Align HR strategy with business objectives'
  },

  // Sales
  {
    id: 'sales-development',
    title: 'Sales Development Representative',
    category: 'Sales',
    requiredSkills: ['prospecting', 'cold calling', 'crm', 'lead qualification', 'communication', 'resilience'],
    preferredSkills: ['salesforce', 'hubspot', 'linkedin sales navigator', 'industry knowledge', 'negotiation'],
    experienceLevel: 'entry',
    description: 'Generate pipeline and qualify opportunities'
  },
  {
    id: 'account-executive',
    title: 'Account Executive',
    category: 'Sales',
    requiredSkills: ['solution selling', 'negotiation', 'closing', 'crm', 'presentation', 'relationship building'],
    preferredSkills: ['enterprise sales', 'saas sales', 'sales methodology', 'territory management', 'forecasting'],
    experienceLevel: 'mid',
    description: 'Drive revenue through new customer acquisition'
  },
  {
    id: 'customer-success-manager',
    title: 'Customer Success Manager',
    category: 'Sales',
    requiredSkills: ['customer onboarding', 'retention', 'upselling', 'relationship management', 'product knowledge'],
    preferredSkills: ['health scoring', 'churn analysis', 'expansion revenue', 'saas metrics', 'consulting'],
    experienceLevel: 'mid',
    description: 'Ensure customer satisfaction and drive expansion'
  },

  // General fallback
  {
    id: 'general-professional',
    title: 'General Professional Role',
    category: 'General',
    requiredSkills: ['communication', 'problem solving', 'teamwork', 'time management', 'microsoft office', 'adaptability'],
    preferredSkills: ['leadership', 'project management', 'data analysis', 'presentation', 'critical thinking'],
    experienceLevel: 'entry',
    description: 'Versatile professional role across industries'
  }
];

export const getJobRoleById = (id: string): JobRole | undefined => {
  return jobRoles.find(role => role.id === id);
};

export const getJobRolesByCategory = (category: string): JobRole[] => {
  return jobRoles.filter(role => role.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(jobRoles.map(role => role.category))];
};

export const searchJobRoles = (query: string): JobRole[] => {
  const lowerQuery = query.toLowerCase();
  return jobRoles.filter(role => 
    role.title.toLowerCase().includes(lowerQuery) ||
    role.category.toLowerCase().includes(lowerQuery) ||
    role.requiredSkills.some(skill => skill.toLowerCase().includes(lowerQuery))
  );
};
