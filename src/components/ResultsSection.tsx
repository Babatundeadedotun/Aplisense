import { motion } from 'framer-motion';
import { AdBanner } from '@/components/AdBanner';
import { 
  CheckCircle2, XCircle, AlertCircle, Lightbulb, 
  Target, TrendingUp, Award, Zap, ArrowRight,
  RotateCcw, Download
} from 'lucide-react';
import type { AnalysisResult } from '@/types';
import { useState } from 'react';
import { cvStandards } from '@/data/cvStandards';
import CVComparison from './CVComparison';

interface ResultsSectionProps {
  result: AnalysisResult;
  targetName: string;
  mode: 'job' | 'study' | 'recruiter';
  uploadedFiles: File[];
  onReset: () => void;
}

const CircularProgress = ({ score }: { score: number }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  
  let color = 'text-red-500';
  if (score >= 70) color = 'text-accent-emerald';
  else if (score >= 50) color = 'text-yellow-500';
  else if (score >= 30) color = 'text-orange-500';

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-gray-200 dark:text-gray-800"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={color}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {score}%
        </span>
      </div>
    </div>
  );
};

const Card = ({ 
  children, 
  className = '', 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`
      bg-white dark:bg-dark-card rounded-2xl p-6
      border border-gray-200 dark:border-dark-border
      shadow-sm hover:shadow-md transition-shadow
      ${className}
    `}
  >
    {children}
  </motion.div>
);

const SkillTag = ({ skill, type }: { skill: string; type: 'matched' | 'missing' | 'gap' }) => {
  const colors = {
    matched: 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/30',
    missing: 'bg-red-500/10 text-red-500 border-red-500/30',
    gap: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30'
  };

  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
      border ${colors[type]}
    `}>
      {skill}
    </span>
  );
};

export const ResultsSection = ({ result, targetName, mode, onReset }: ResultsSectionProps) => {

      const [comparisonResult, setComparisonResult] = useState<any>(null);


  const getScoreLabel = (score: number) => {
    if (score >= 80) return { label: 'Excellent Match', color: 'text-accent-emerald' };
    if (score >= 60) return { label: 'Good Match', color: 'text-accent-cyan' };
    if (score >= 40) return { label: 'Fair Match', color: 'text-yellow-500' };
    return { label: 'Needs Improvement', color: 'text-red-500' };
  };

  const scoreInfo = getScoreLabel(result.matchScore);

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Analysis Results
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {mode === 'job' ? 'Job Role' : 'Course'}: <span className="font-medium text-accent-cyan">{targetName}</span>
          </p>
        </motion.div>

        {/* Main Score Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Match Score */}
          <Card className="lg:col-span-1 flex flex-col items-center justify-center text-center" delay={0.1}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-accent-cyan" />
              Match Score
            </h3>
            <CircularProgress score={result.matchScore} />
            <p className={`mt-4 font-medium ${scoreInfo.color}`}>
              {scoreInfo.label}
            </p>
            {result.experienceLevel && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Level: {result.experienceLevel}
              </p>
            )}
          </Card>

          {/* Strengths & Weaknesses */}
          <Card className="lg:col-span-2" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Strengths */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-emerald" />
                  Strengths
                </h3>
                <ul className="space-y-3">
                  {result.strengths.map((strength, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-emerald flex-shrink-0 mt-0.5" />
                      {strength}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  Areas to Improve
                </h3>
                <ul className="space-y-3">
                  {result.weaknesses.map((weakness, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <XCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {weakness}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <AdBanner />


        {/* Skills Analysis */}
        {mode !== 'recruiter' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Matched Skills */}
          <Card delay={0.3}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent-emerald" />
              Matched Skills ({result.matchedSkills.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.matchedSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <SkillTag skill={skill} type="matched" />
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Missing Skills */}
          <Card delay={0.4}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-500" />
              Missing Skills ({result.missingSkills.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.missingSkills.slice(0, 10).map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <SkillTag skill={skill} type="missing" />
                </motion.div>
              ))}
              {result.missingSkills.length > 10 && (
                <span className="text-sm text-gray-500">
                  +{result.missingSkills.length - 10} more
                </span>
              )}
            </div>
          </Card>
        </div>
        )}


        {/* Skill Gaps */}
        {/* {result.skillGaps.length > 0 && ( */}
        {mode !== 'recruiter' && result.skillGaps.length > 0 && (
          <Card className="mb-8 mt-10" delay={0.5}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Recommended Skill Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.skillGaps.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <SkillTag skill={skill} type="gap" />
                </motion.div>
              ))}
            </div>
          </Card>
        )}

        <AdBanner />

            {/* Experience Breakdown */}
            {mode !== 'recruiter' && (
              <Card className="mb-8" delay={0.55}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-cyan" />
                  Experience Breakdown
                </h3>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    Your CV demonstrates a {result.experienceLevel || 'moderate'} level of experience 
                    relevant to the selected role. Highlighting measurable achievements and 
                    quantifiable results can significantly improve recruiter perception.
                  </p>
                  <p>
                    Consider adding more role-specific responsibilities, internships, projects, 
                    and real-world impact statements to strengthen your experience profile.
                  </p>
                </div>
              </Card>
            )}

            {/* Formatting Feedback */}
            {mode !== 'recruiter' && (
              <Card className="mb-8" delay={0.58}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-emerald" />
                  Formatting Feedback
                </h3>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald mt-0.5" />
                    Ensure consistent font size and spacing throughout the CV.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald mt-0.5" />
                    Use clear section headings like Education, Skills, and Experience.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald mt-0.5" />
                    Keep your CV length between 1–2 pages for optimal readability.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald mt-0.5" />
                    Avoid excessive graphics or complex layouts that confuse ATS systems.
                  </li>
                </ul>
              </Card>
            )}

            {/* Suggestions to Improve */}
            {mode !== 'recruiter' && (
              <Card className="mb-8" delay={0.6}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Suggestions to Improve Your CV
                </h3>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-cyan mt-0.5" />
                    Add more role-specific keywords to improve ATS matching score.
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-cyan mt-0.5" />
                    Include measurable achievements (e.g. increased sales by 30%).
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-cyan mt-0.5" />
                    Highlight technical and soft skills clearly in a dedicated section.
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-cyan mt-0.5" />
                    Tailor your CV specifically to the selected job role or course.
                  </li>
                </ul>
              </Card>
            )}



        {/* Recommendations */}
        <Card delay={0.6}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-accent-purple" />
            Personalized Recommendations
          </h3>
          <ul className="space-y-4">
            {result.recommendations.map((rec, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-dark-bg w-full"
              >
                <ArrowRight className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                {/* <span className="text-gray-700 dark:text-gray-300 min-w-0 w-full break-words truncate sm:whitespace-normal">{rec}</span> */}
                <span className="text-gray-700 dark:text-gray-300 min-w-0 w-full overflow-hidden text-ellipsis whitespace-nowrap sm:whitespace-normal">
                  {rec}
                </span>
              </motion.li>
            ))}
          </ul>
        </Card>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button
            onClick={onReset}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            Analyze Another CV
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-medium hover:shadow-lg hover:shadow-accent-cyan/25 transition-all"
          >
            <Download className="w-5 h-5" />
            Save Report
          </button>
        </motion.div>
      </div>
    </section>
  );
};
