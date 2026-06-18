export type AnalysisMode = 'job' | 'study' | 'recruiter';

export interface CVData {
  text: string;
  fileName: string;
  fileType: string;
}

export interface SkillMatch {
  skill: string;
  found: boolean;
  confidence: number;
}

export interface AnalysisResult {
  matchScore: number;
  strengths: string[];
  weaknesses: string[];
  matchedSkills: string[];
  missingSkills: string[];
  recommendations: string[];
  experienceLevel?: string;
  skillGaps: string[];
  keywordMatches: Record<string, number>;
}

export interface AnalysisState {
  mode: AnalysisMode;
  cvData: CVData | null;
  targetId: string;
  targetName: string;
  isAnalyzing: boolean;
  result: AnalysisResult | null;
  error: string | null;
}

export interface ParsedCV {
  rawText: string;
  skills: string[];
  experience: string[];
  education: string[];
  keywords: string[];
}
