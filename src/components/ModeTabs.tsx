import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import type { AnalysisMode } from '@/types';

interface ModeTabsProps {
  mode: AnalysisMode;
  onModeChange: (mode: AnalysisMode) => void;
}

export const ModeTabs = ({ mode, onModeChange }: ModeTabsProps) => {
  const tabs = [
    { id: 'job' as AnalysisMode, label: 'Job Application', icon: Briefcase },
    { id: 'study' as AnalysisMode, label: 'Study Abroad', icon: GraduationCap },
    { id: 'recruiter' as AnalysisMode, label: 'Recruiter Mode', icon: Briefcase },
  ];

  return (
    <div className="flex justify-center mb-6 px-4 sm:px-0">
      {/* <div className="inline-flex p-1 rounded-2xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border"> */}
      <div className="inline-flex p-1 rounded-2xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border w-full sm:w-auto overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => {
          const isActive = mode === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => onModeChange(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              // className={`
              //   relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
              //   ${isActive 
              //     ? 'text-white' 
              //     : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              //   }
              // `}
                  className={`
                    relative flex items-center gap-2 
                    px-3 py-2 text-xs sm:px-6 sm:py-3 sm:text-base whitespace-nowrap
                    rounded-xl font-medium transition-all duration-300
                    ${isActive 
                      ? 'text-white' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }
                  `}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
