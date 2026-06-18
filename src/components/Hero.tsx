import { motion } from 'framer-motion';
import { Brain, Target, Rocket } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent-cyan/10 via-transparent to-transparent"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-8"
          >
            <Brain className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-medium text-accent-cyan">
              Intelligent CV Analysis
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-gray-900 dark:text-white">Unlock Your</span>
            <br />
            <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink bg-clip-text text-transparent">
              Career Potential
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Intelligent CV Analysis for Careers & Study Abroad. 
            Get AI-powered insights on your resume match score, skill gaps, and personalized recommendations.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              {
                icon: Target,
                title: 'Job Matching',
                description: 'Match your CV against target roles'
              },
              {
                icon: Brain,
                title: 'Skill Analysis',
                description: 'Identify strengths & skill gaps'
              },
              {
                icon: Rocket,
                title: 'Study Abroad',
                description: 'Analyze fit for global programs'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-4 rounded-2xl bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm border border-gray-200 dark:border-dark-border hover:border-accent-cyan/50 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-accent-cyan mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
