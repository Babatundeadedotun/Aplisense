import type { ParsedCV, AnalysisResult, SkillMatch } from '@/types';
import type { JobRole } from '@/data/jobRoles';
import type { Course } from '@/data/courseDatabase';


const escapeRegex = (text: string): string => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// Comprehensive skill database for keyword matching
const skillKeywords: Record<string, string[]> = {
  // Programming Languages
  'javascript': ['javascript', 'js', 'es6', 'es2015', 'typescript', 'node.js', 'nodejs'],
  'typescript': ['typescript', 'ts'],
  'python': ['python', 'py', 'django', 'flask', 'fastapi'],
  'java': ['java', 'spring', 'spring boot', 'jvm'],
  'c++': ['c++', 'cpp', 'cplusplus'],
  'c#': ['c#', 'csharp', '.net', 'dotnet'],
  'go': ['go', 'golang'],
  'rust': ['rust', 'rustlang'],
  'swift': ['swift', 'ios development'],
  'kotlin': ['kotlin', 'android development'],
  'php': ['php', 'laravel', 'symfony'],
  'ruby': ['ruby', 'rails', 'ruby on rails'],
  'scala': ['scala', 'akka'],
  'r': ['r programming', 'statistical computing'],
  'matlab': ['matlab', 'matrix laboratory'],
  'sql': ['sql', 'mysql', 'postgresql', 'oracle', 'database', 'query'],
  
  // Web Technologies
  'html': ['html', 'html5', 'markup'],
  'css': ['css', 'css3', 'styling', 'sass', 'scss', 'less'],
  'react': ['react', 'react.js', 'reactjs', 'jsx', 'next.js', 'gatsby'],
  'vue': ['vue', 'vue.js', 'vuejs', 'nuxt'],
  'angular': ['angular', 'angular.js', 'ng'],
  'svelte': ['svelte', 'sveltekit'],
  'jquery': ['jquery'],
  'bootstrap': ['bootstrap', 'responsive framework'],
  'tailwind': ['tailwind', 'tailwindcss'],
  
  // Mobile Development
  'react native': ['react native', 'mobile app', 'cross-platform'],
  'flutter': ['flutter', 'dart'],
  'ios': ['ios', 'swift', 'objective-c', 'xcode', 'apple'],
  'android': ['android', 'kotlin', 'java android'],
  
  // Databases
  'mongodb': ['mongodb', 'nosql', 'document database'],
  'postgresql': ['postgresql', 'postgres', 'psql'],
  'mysql': ['mysql', 'mariadb'],
  'redis': ['redis', 'caching'],
  'elasticsearch': ['elasticsearch', 'search engine'],
  'cassandra': ['cassandra'],
  'dynamodb': ['dynamodb', 'aws database'],
  
  // Cloud & DevOps
  'aws': ['aws', 'amazon web services', 'ec2', 's3', 'lambda', 'cloudformation'],
  'azure': ['azure', 'microsoft azure', 'aws competitor'],
  'gcp': ['gcp', 'google cloud', 'google cloud platform'],
  'docker': ['docker', 'containerization', 'containers'],
  'kubernetes': ['kubernetes', 'k8s', 'orchestration'],
  'terraform': ['terraform', 'iac', 'infrastructure as code'],
  'jenkins': ['jenkins', 'ci/cd', 'continuous integration'],
  'github actions': ['github actions', 'ci/cd'],
  'gitlab ci': ['gitlab ci', 'ci/cd'],
  'ansible': ['ansible', 'configuration management'],
  'helm': ['helm', 'kubernetes package manager'],
  
  // Data Science & ML
  'machine learning': ['machine learning', 'ml', 'scikit-learn', 'sklearn'],
  'deep learning': ['deep learning', 'neural networks', 'ai'],
  'tensorflow': ['tensorflow', 'tf', 'keras'],
  'pytorch': ['pytorch', 'torch'],
  'pandas': ['pandas', 'data manipulation'],
  'numpy': ['numpy', 'numerical computing'],
  'scikit-learn': ['scikit-learn', 'sklearn', 'machine learning library'],
  'nlp': ['nlp', 'natural language processing', 'text analysis'],
  'computer vision': ['computer vision', 'opencv', 'image processing'],
  'spark': ['spark', 'apache spark', 'big data'],
  'hadoop': ['hadoop', 'big data', 'hdfs'],
  'kafka': ['kafka', 'streaming', 'event streaming'],
  
  // Design
  'figma': ['figma', 'ui design tool'],
  'sketch': ['sketch', 'mac design tool'],
  'adobe creative suite': ['adobe', 'photoshop', 'illustrator', 'xd'],
  'ui design': ['ui design', 'user interface'],
  'ux design': ['ux design', 'user experience', 'user research'],
  'prototyping': ['prototyping', 'wireframing', 'mockups'],
  
  // Project Management
  'agile': ['agile', 'scrum', 'kanban'],
  'scrum': ['scrum', 'agile framework'],
  'jira': ['jira', 'project tracking'],
  'confluence': ['confluence', 'documentation'],
  
  // Business & Analytics
  'excel': ['excel', 'spreadsheets', 'microsoft excel'],
  'tableau': ['tableau', 'data visualization'],
  'power bi': ['power bi', 'microsoft bi'],
  'sql': ['sql', 'database querying'],
  'financial modeling': ['financial modeling', 'valuation', 'dcf'],
  
  // Soft Skills
  'leadership': ['leadership', 'team lead', 'managed team'],
  'communication': ['communication', 'presentations', 'stakeholder management'],
  'problem solving': ['problem solving', 'analytical thinking', 'critical thinking'],
  'teamwork': ['teamwork', 'collaboration', 'cross-functional'],
};

// Extract skills from CV text
export const extractSkillsFromText = (text: string): string[] => {
  const lowerText = text.toLowerCase();
  const foundSkills: string[] = [];
  
  Object.entries(skillKeywords).forEach(([skill, keywords]) => {
    const isMatch = keywords.some(keyword => 
      lowerText.includes(keyword.toLowerCase())
    );
    if (isMatch && !foundSkills.includes(skill)) {
      foundSkills.push(skill);
    }
  });
  
  return foundSkills;
};

// Extract experience indicators
export const extractExperience = (text: string): string[] => {
  const experiencePatterns = [
    /(\d+)\+?\s*years?\s*(of\s*)?experience/i,
    /(\d+)\+?\s*years?\s*in\s*\w+/i,
    /experience\s*:\s*(\d+)\+?\s*years?/i,
    /(\d+)\+?\s*yrs?\s*(of\s*)?exp/i,
  ];
  
  const experiences: string[] = [];
  experiencePatterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches) {
      experiences.push(matches[0]);
    }
  });
  
  return experiences;
};

// Extract education information
export const extractEducation = (text: string): string[] => {
  const educationKeywords = [
    'bachelor', 'master', 'phd', 'doctorate', 'mba', 'bsc', 'msc', 'ba', 'ma',
    'degree', 'university', 'college', 'institute', 'certification'
  ];
  
  const lowerText = text.toLowerCase();
  const foundEducation: string[] = [];
  
  educationKeywords.forEach(keyword => {
    if (lowerText.includes(keyword)) {
      foundEducation.push(keyword);
    }
  });
  
  return foundEducation;
};

// Parse CV text into structured data
export const parseCV = (text: string): ParsedCV => {
  return {
    rawText: text,
    skills: extractSkillsFromText(text),
    experience: extractExperience(text),
    education: extractEducation(text),
    keywords: text.toLowerCase().split(/\s+/).filter(w => w.length > 3)
  };
};

// Calculate skill match for job role
export const calculateJobMatch = (
  cv: ParsedCV,
  jobRole: JobRole
): AnalysisResult => {
  const cvSkillsLower = cv.skills.map(s => s.toLowerCase());
  const cvTextLower = cv.rawText.toLowerCase();
  
  // Match required skills
  const requiredMatches: SkillMatch[] = jobRole.requiredSkills.map(skill => {
    const skillLower = skill.toLowerCase();
    const found = cvSkillsLower.some(cvSkill => 
      cvSkill.includes(skillLower) || skillLower.includes(cvSkill)
    ) || cvTextLower.includes(skillLower);
    
    return {
      skill,
      found,
      confidence: found ? 1 : 0
    };
  });
  
  // Match preferred skills
  const preferredMatches: SkillMatch[] = jobRole.preferredSkills.map(skill => {
    const skillLower = skill.toLowerCase();
    const found = cvSkillsLower.some(cvSkill => 
      cvSkill.includes(skillLower) || skillLower.includes(cvSkill)
    ) || cvTextLower.includes(skillLower);
    
    return {
      skill,
      found,
      confidence: found ? 0.8 : 0
    };
  });
  
  // Calculate scores
  const requiredScore = requiredMatches.filter(m => m.found).length / requiredMatches.length;
  const preferredScore = preferredMatches.filter(m => m.found).length / preferredMatches.length;
  const matchScore = Math.round((requiredScore * 0.7 + preferredScore * 0.3) * 100);
  
  // Generate analysis
  const matchedSkills = [
    ...requiredMatches.filter(m => m.found).map(m => m.skill),
    ...preferredMatches.filter(m => m.found).map(m => m.skill)
  ];
  
  const missingSkills = requiredMatches
    .filter(m => !m.found)
    .map(m => m.skill);
  
  const skillGaps = preferredMatches
    .filter(m => !m.found)
    .slice(0, 5)
    .map(m => m.skill);
  
  // Generate strengths
  const strengths: string[] = [];
  if (requiredScore > 0.7) {
    strengths.push(`Strong match for core ${jobRole.title} requirements`);
  }
  if (cv.skills.length > 10) {
    strengths.push('Diverse technical skill set demonstrated');
  }
  if (cv.experience.length > 0) {
    strengths.push('Relevant professional experience highlighted');
  }
  if (preferredScore > 0.5) {
    strengths.push('Many preferred qualifications met');
  }
  
  // Generate weaknesses
  const weaknesses: string[] = [];
  if (requiredScore < 0.5) {
    weaknesses.push('Several core requirements not met');
  }
  if (missingSkills.length > 3) {
    weaknesses.push(`Missing ${missingSkills.length} key skills for this role`);
  }
  if (cv.experience.length === 0) {
    weaknesses.push('Limited experience details in CV');
  }
  
  // Generate recommendations
  const recommendations: string[] = [];
  if (missingSkills.length > 0) {
    recommendations.push(`Consider developing skills in: ${missingSkills.slice(0, 3).join(', ')}`);
  }
  if (cv.experience.length === 0) {
    recommendations.push('Add quantifiable achievements and experience metrics');
  }
  if (cv.skills.length < 5) {
    recommendations.push('Expand technical skills section with more keywords');
  }
  recommendations.push(`Tailor your CV to highlight ${jobRole.category} experience`);
  recommendations.push('Include relevant projects or portfolio links');
  
  // Keyword matches
  const keywordMatches: Record<string, number> = {};
  [...jobRole.requiredSkills, ...jobRole.preferredSkills].forEach(skill => {
    const count = (cvTextLower.match(new RegExp(skill.toLowerCase(), 'g')) || []).length;
    if (count > 0) {
      keywordMatches[skill] = count;
    }
  });
  
  return {
    matchScore,
    strengths: strengths.length > 0 ? strengths : ['CV contains relevant information'],
    weaknesses: weaknesses.length > 0 ? weaknesses : ['No major weaknesses identified'],
    matchedSkills,
    missingSkills,
    recommendations,
    experienceLevel: jobRole.experienceLevel,
    skillGaps,
    keywordMatches
  };
};

// Calculate match for study abroad course
export const calculateCourseMatch = (
  cv: ParsedCV,
  course: Course
): AnalysisResult => {
  const cvSkillsLower = cv.skills.map(s => s.toLowerCase());
  const cvTextLower = cv.rawText.toLowerCase();
  
  // Match required skills
  const requiredMatches: SkillMatch[] = course.requiredSkills.map(skill => {
    const skillLower = skill.toLowerCase();
    const found = cvSkillsLower.some(cvSkill => 
      cvSkill.includes(skillLower) || skillLower.includes(cvSkill)
    ) || cvTextLower.includes(skillLower);
    
    return {
      skill,
      found,
      confidence: found ? 1 : 0
    };
  });
  
  // Match preferred skills
  const preferredMatches: SkillMatch[] = course.preferredSkills.map(skill => {
    const skillLower = skill.toLowerCase();
    const found = cvSkillsLower.some(cvSkill => 
      cvSkill.includes(skillLower) || skillLower.includes(cvSkill)
    ) || cvTextLower.includes(skillLower);
    
    return {
      skill,
      found,
      confidence: found ? 0.8 : 0
    };
  });
  
  // Calculate scores
  const requiredScore = requiredMatches.filter(m => m.found).length / requiredMatches.length;
  const preferredScore = preferredMatches.filter(m => m.found).length / preferredMatches.length;
  const matchScore = Math.round((requiredScore * 0.6 + preferredScore * 0.4) * 100);
  
  // Generate analysis
  const matchedSkills = [
    ...requiredMatches.filter(m => m.found).map(m => m.skill),
    ...preferredMatches.filter(m => m.found).map(m => m.skill)
  ];
  
  const missingSkills = requiredMatches
    .filter(m => !m.found)
    .map(m => m.skill);
  
  const skillGaps = preferredMatches
    .filter(m => !m.found)
    .slice(0, 5)
    .map(m => m.skill);
  
  // Generate strengths
  const strengths: string[] = [];
  if (requiredScore > 0.6) {
    strengths.push(`Strong academic foundation for ${course.name}`);
  }
  if (cv.education.length > 0) {
    strengths.push('Prior educational qualifications documented');
  }
  if (cv.skills.length > 5) {
    strengths.push('Relevant technical and academic skills present');
  }
  if (preferredScore > 0.4) {
    strengths.push('Good alignment with course expectations');
  }
  
  // Generate weaknesses
  const weaknesses: string[] = [];
  if (requiredScore < 0.4) {
    weaknesses.push('Prerequisites may need strengthening');
  }
  if (missingSkills.length > 2) {
    weaknesses.push(`Missing ${missingSkills.length} recommended prerequisites`);
  }
  if (cv.education.length === 0) {
    weaknesses.push('Educational background not clearly stated');
  }
  
  // Generate recommendations
  const recommendations: string[] = [];
  if (missingSkills.length > 0) {
    recommendations.push(`Consider taking courses in: ${missingSkills.slice(0, 3).join(', ')}`);
  }
  recommendations.push(`Highlight relevant coursework and projects for ${course.field}`);
  recommendations.push('Include academic achievements and research experience');
  recommendations.push(`Mention specific interest in ${course.field} specialization areas`);
  if (course.topDestinations.length > 0) {
    recommendations.push(`Top destinations: ${course.topDestinations.slice(0, 3).join(', ')}`);
  }
  
  // Keyword matches
  const keywordMatches: Record<string, number> = {};
  [...course.requiredSkills, ...course.preferredSkills].forEach(skill => {
    // const count = (cvTextLower.match(new RegExp(skill.toLowerCase(), 'g')) || []).length;
    const safeSkill = escapeRegex(skill.toLowerCase());
    const count = (cvTextLower.match(new RegExp(safeSkill, 'g')) || []).length;
    if (count > 0) {
      keywordMatches[skill] = count;
    }
  });
  
  return {
    matchScore,
    strengths: strengths.length > 0 ? strengths : ['CV shows potential for this program'],
    weaknesses: weaknesses.length > 0 ? weaknesses : ['No major concerns identified'],
    matchedSkills,
    missingSkills,
    recommendations,
    skillGaps,
    keywordMatches
  };
};

// Fallback analysis for custom targets
export const generateFallbackAnalysis = (
  cv: ParsedCV,
  targetName: string
): AnalysisResult => {
  const skillCount = cv.skills.length;
  const experienceCount = cv.experience.length;
  const educationCount = cv.education.length;
  
  // Base score on available information
  let matchScore = 50;
  if (skillCount > 10) matchScore += 15;
  if (skillCount > 5) matchScore += 10;
  if (experienceCount > 0) matchScore += 15;
  if (educationCount > 0) matchScore += 10;
  
  matchScore = Math.min(95, Math.max(30, matchScore));
  
  const strengths: string[] = [];
  if (skillCount > 5) strengths.push(`${skillCount} relevant skills identified`);
  if (experienceCount > 0) strengths.push('Professional experience documented');
  if (educationCount > 0) strengths.push('Educational qualifications present');
  
  const weaknesses: string[] = [];
  if (skillCount < 5) weaknesses.push('Limited skills visibility - consider expanding');
  if (experienceCount === 0) weaknesses.push('Experience section could be enhanced');
  
  const recommendations: string[] = [
    `Research specific requirements for "${targetName}"`,
    'Tailor your CV with relevant keywords from the description',
    'Highlight quantifiable achievements and outcomes',
    'Include relevant projects, certifications, or portfolio links',
    'Consider reaching out to professionals in this field for guidance'
  ];
  
  return {
    matchScore,
    strengths: strengths.length > 0 ? strengths : ['CV contains relevant background'],
    weaknesses: weaknesses.length > 0 ? weaknesses : ['No major issues identified'],
    matchedSkills: cv.skills.slice(0, 10),
    missingSkills: ['Specific requirements need research'],
    recommendations,
    skillGaps: ['Research target-specific skills'],
    keywordMatches: {}
  };
};
