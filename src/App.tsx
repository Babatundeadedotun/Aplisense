import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import UkCvFormat from './pages/UkCvFormat';
import GraduateCvUk from './pages/GraduateCvUk';
import StudyAbroadCvGuide from './pages/StudyAbroadCvGuide';
import EntryLevelCvExample from './pages/EntryLevelCvExample';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ModeTabs } from '@/components/ModeTabs';
import { UploadSection } from '@/components/UploadSection';
import { ResultsSection } from '@/components/ResultsSection';
import { useTheme } from '@/hooks/useTheme';
import { useAnalysis } from '@/hooks/useAnalysis';
import { FileText, Sparkles } from 'lucide-react';
import ExampleCV from './pages/ExampleCV';
import CVComparison from './components/CVComparison';
import BlogIndex from './pages/blog/BlogIndex';
import HowToWriteCv from './pages/blog/HowToWriteCv';
import AtsResumeKeywords from './pages/blog/AtsResumeKeywords';
import CommonCvMistakes from './pages/blog/CommonCvMistakes';
import BestCvFormat2026 from './pages/blog/BestCvFormat2026';
import HowToPassAts from './pages/blog/HowToPassAts';
import CoverLetterGuide from './pages/blog/CoverLetterGuide';
import LinkedinProfileOptimization from './pages/blog/LinkedinProfileOptimization';
import InternationalCvFormat from './pages/blog/InternationalCvFormat';
import ResumeVsCv from './pages/blog/ResumeVsCv';
import SkillsForRemoteJobs from './pages/blog/SkillsForRemoteJobs';
import ResumeKeywordsPage from './pages/resume-keywords/ResumeKeywordsPage';
import ResumeKeywordsIndex from './pages/resume-keywords';
import FAQ from './pages/FAQ';

function App() {
  const { theme, toggleTheme } = useTheme();
  const {
    mode,
    cvData,
    multiCVData,
    targetId,
    targetName,
    isAnalyzing,
    result,
    error,
    setMode,
    uploadFile,
    uploadMultipleFiles,
    setTarget,
    analyze,
    reset
  } = useAnalysis();


  
  // const handleRemoveFile = () => {
  //     reset();
  //  };


    return (
    <Router>
      <Routes>

        <Route path="/" element={
          <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pb-20">
        <Hero />

        {/* SEO Guides Section (BEST PLACEMENT FOR UX + SEO) */}
          <section className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Free CV Guides & Examples
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
                  Expert CV guides to help you pass ATS checks, secure jobs, and succeed in study abroad applications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <a
                  href="/uk-cv-format"
                  className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-6 hover:border-accent-cyan/50 hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    UK CV Format Guide
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Learn the correct UK CV structure recruiters expect in 2026.
                  </p>
                </a>

                <a
                  href="/graduate-cv-uk"
                  className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-6 hover:border-accent-cyan/50 hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    UK Graduate CV
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect CV guide for graduates, internships, and entry-level roles.
                  </p>
                </a>

                <a
                  href="/study-abroad-cv-guide"
                  className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-6 hover:border-accent-cyan/50 hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Study Abroad CV Guide
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Academic CV tips for UK, US, and international universities.
                  </p>
                </a>

                <a
                  href="/entry-level-cv-example"
                  className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-6 hover:border-accent-cyan/50 hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Entry-Level CV Example
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Real CV examples for students and first job applicants.
                  </p>
                </a>

              </div>
            </div>
          </section>
                  
        {/* Main Analysis Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Mode Selection Tabs */}
            <ModeTabs mode={mode} onModeChange={setMode} />
            
            {/* Upload & Analysis Interface */}
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-dark-card rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-200 dark:border-dark-border"
                >
                  {/* Section Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-4">
                      <Sparkles className="w-4 h-4 text-accent-cyan" />
                      <span className="text-sm font-medium text-accent-cyan">
                        {mode === 'job'
                        ? 'Job Application Analysis'
                        : mode === 'study'
                          ? 'Study Abroad Analysis'
                          : 'Recruiter Mode'}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Upload Your CV
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                      {mode === 'job' 
                        ? 'Get AI-powered insights on how well your CV matches your target job role.'
                        : mode === 'recruiter'
                          ? 'Upload multiple CVs and rank candidates based on job fit.'
                          : 'Analyze your academic profile fit for study abroad programs.'
                      }
                    </p>
                  </div>

                  <UploadSection
                    mode={mode}
                    cvData={cvData}
                    multiCVData={multiCVData}
                    targetId={targetId}
                    targetName={targetName}
                    isAnalyzing={isAnalyzing}
                    error={error}
                    onUpload={uploadFile}
                    onUploadMultiple={uploadMultipleFiles}
                    // onRemoveFile={reset}
                    onRemoveFile={reset}
                    onTargetChange={setTarget}
                    onAnalyze={analyze}
                  />

                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <a
                      href="/example-cv"
                      className="px-6 py-3 rounded-xl border border-accent-cyan text-accent-cyan font-semibold hover:bg-accent-cyan hover:text-white transition"
                    >
                      See Example CV
                    </a>

                    <a
                      href="/CV-Checklist-2026.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-accent-cyan text-white font-semibold hover:opacity-90 transition"
                    >
                      Download CV Checklist
                    </a>
                  </div>



                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >

                <>
                  <ResultsSection
                    result={result}
                    targetName={targetName}
                    mode={mode}
                    onReset={reset}
                  />

                  {/* CV International Comparison Section */}
                  <CVComparison
                    detectedSections={
                      result?.detectedSections || [
                        "Personal Information",
                        "Education",
                        "Work Experience",
                        "Skills"
                      ]
                    }
                  />
                </>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Features Section */}
        {!result && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  How ApliSense Works
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Our intelligent analysis engine evaluates your CV against industry standards and provides actionable insights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Upload Your CV',
                    description: 'Drag and drop your resume in PDF or DOCX format. Our system extracts all relevant information.',
                    icon: FileText
                  },
                  {
                    step: '02',
                    title: 'Select Target',
                    description: mode === 'job' 
                      ? 'Choose a job role from our database or enter a custom position.'
                      : 'Select a study program or course from our comprehensive database.',
                    icon: Sparkles
                  },
                  {
                    step: '03',
                    title: 'Get Insights',
                    description: 'Receive a detailed analysis with match score, skill gaps, and personalized recommendations.',
                    icon: Sparkles
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-gray-200 dark:border-dark-border hover:border-accent-cyan/50 transition-colors h-full">
                      <span className="text-5xl font-bold text-gray-100 dark:text-gray-800 absolute top-4 right-4">
                        {feature.step}
                      </span>
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center mb-4">
                          <feature.icon className="w-6 h-6 text-accent-cyan" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Stats Section */}
        {!result && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-accent-cyan/5">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '50+', label: 'Job Roles' },
                  { value: '40+', label: 'Courses' },
                  { value: '500+', label: 'Skills Tracked' },
                  { value: '100%', label: 'Free to Use' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>


            {/* SEO Content Section For AdSense + Google Indexing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-700 dark:text-gray-300">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What is ApliSense?
            </h2>
            <p className="leading-relaxed">
              ApliSense is an AI-powered CV analysis platform designed to help job seekers, graduates, and international applicants improve their resumes and increase their chances of getting interviews. In today’s competitive job market, submitting a CV is no longer just about listing your experience. Many companies now use Applicant Tracking Systems (ATS) to filter and rank candidates before a recruiter ever reads the application.
            </p>
            <p className="leading-relaxed mt-4">
              ApliSense helps solve this problem by analyzing your CV against real industry expectations. Our platform scans your resume structure, skills, and experience, and compares it against job roles or study programs to determine how well your profile matches the requirements. Within seconds, you receive a detailed breakdown showing strengths, missing skills, and actionable recommendations to improve your CV.
            </p>
            <p className="leading-relaxed mt-4">
              Whether you are applying for your first job, switching careers, or preparing an academic CV for study abroad applications, ApliSense provides intelligent insights to help you present your qualifications more effectively.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How Our AI CV Analyzer Works
            </h2>
            <p className="leading-relaxed">
              The ApliSense CV Analyzer uses a structured evaluation engine that reviews your resume based on industry hiring standards. Instead of simply checking keywords, our system evaluates multiple aspects of your CV including formatting, skills alignment, experience relevance, and structural completeness.
            </p>
            <p className="leading-relaxed mt-4">
              The process begins when you upload your CV in PDF or DOCX format. Our system extracts the key sections from your document such as personal information, education, work experience, and skills. Once extracted, the data is compared against a database of job roles, required competencies, and recruiter expectations.
            </p>
            <p className="leading-relaxed mt-4">
              After analysis, ApliSense generates a compatibility score that reflects how well your CV matches your selected job role or study program. The system also highlights skill gaps, structural issues, and missing sections that may reduce your chances of passing an ATS screening.
            </p>
            <p className="leading-relaxed mt-4">
              This allows applicants to quickly identify weaknesses in their CV and make targeted improvements before submitting job applications.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why ATS Optimization Matters
            </h2>
            <p className="leading-relaxed">
              Many job applicants are unaware that their resumes are often screened by automated software before reaching a human recruiter. Applicant Tracking Systems are designed to filter applications by analyzing keywords, skills, and formatting patterns that match a company’s hiring criteria.
            </p>
            <p className="leading-relaxed mt-4">
              If a CV is poorly structured or missing important keywords, it may be rejected automatically even if the candidate is qualified for the position. This is one of the most common reasons why talented applicants struggle to receive interview invitations.
            </p>
            <p className="leading-relaxed mt-4">
              ATS optimization ensures that your resume is structured in a way that hiring systems can properly read and evaluate. ApliSense analyzes your CV with these systems in mind, helping you align your resume with the expectations used by modern recruiters and hiring platforms.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Benefits of CV Optimization
            </h2>
            <p className="leading-relaxed">
              Optimizing your CV is one of the most effective ways to improve your job search success. A well-structured and targeted resume increases your visibility in applicant tracking systems and improves your chances of getting shortlisted for interviews.
            </p>
            <p className="leading-relaxed mt-4">
              With the help of ApliSense, applicants can identify missing skills, strengthen weak sections of their CV, and align their profiles with industry standards. Instead of sending out dozens of applications with an ineffective resume, candidates can focus on presenting a polished and competitive CV that highlights their strongest qualifications.
            </p>
            <p className="leading-relaxed mt-4">
              CV optimization also improves clarity for recruiters. When hiring managers review applications, they typically spend only a few seconds scanning each resume. A clear structure, strong keywords, and relevant experience help your CV stand out quickly during this process.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How to Increase Your Interview Chances
            </h2>
            <p className="leading-relaxed">
              Increasing your chances of getting an interview requires more than simply applying to multiple job postings. Successful candidates typically tailor their CV to match the requirements of the specific role they are applying for. This includes adjusting skills, emphasizing relevant experience, and ensuring the resume format is optimized for ATS systems.
            </p>
            <p className="leading-relaxed mt-4">
              ApliSense helps job seekers take a more strategic approach to applications. By analyzing how well a CV aligns with a target job role or academic program, users can focus on improving the areas that matter most to recruiters.
            </p>
            <p className="leading-relaxed mt-4">
              Over time, small improvements in CV structure, keyword relevance, and skill alignment can significantly increase the probability of receiving interview invitations. Our goal at ApliSense is to provide applicants with the insights they need to compete more effectively in today’s global job market.
            </p>
          </div>

        </div>
      </section>


      {/* Blog Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Career Advice & Resume Writing Guides
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Learn how to optimize your CV, pass ATS systems, and increase interview chances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <a href="/blog/how-to-write-a-cv" className="p-6 border rounded-xl hover:border-accent-cyan">
              <h3 className="font-semibold mb-2">How to Write a CV</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Step-by-step guide to creating a professional CV.
              </p>
            </a>

            <a href="/blog/best-cv-format-2026" className="p-6 border rounded-xl hover:border-accent-cyan">
              <h3 className="font-semibold mb-2">Best CV Format 2026</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Modern resume structure recruiters expect.
              </p>
            </a>

            <a href="/blog/how-to-pass-ats" className="p-6 border rounded-xl hover:border-accent-cyan">
              <h3 className="font-semibold mb-2">How to Pass ATS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn how applicant tracking systems filter resumes.
              </p>
            </a>

            <a href="/blog/common-cv-mistakes" className="p-6 border rounded-xl hover:border-accent-cyan">
              <h3 className="font-semibold mb-2">Common CV Mistakes</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avoid errors that cause recruiters to reject your CV.
              </p>
            </a>

            <a href="/blog/linkedin-profile-optimization" className="p-6 border rounded-xl hover:border-accent-cyan">
              <h3 className="font-semibold mb-2">LinkedIn Profile Optimization</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Improve your LinkedIn profile visibility.
              </p>
            </a>

            <a href="/blog/international-cv-format" className="p-6 border rounded-xl hover:border-accent-cyan">
              <h3 className="font-semibold mb-2">International CV Format</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                CV standards for UK, USA, Canada and Europe.
              </p>
            </a>

          </div>

          <div className="text-center mt-10">
            <a
              href="/blog"
              className="px-6 py-3 bg-accent-cyan text-white rounded-xl font-semibold"
            >
              Visit Blog
            </a>
          </div>

        </div>
      </section>
      

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-dark-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <a href='/'><Sparkles className="w-4 h-4 text-white" /></a>
              </div>
              <a href='/'><span className="font-bold text-gray-900 dark:text-white">ApliSense</span></a>
            </div>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
              <a href="/about" className="hover:text-accent-cyan transition-colors">About</a>
              <a href="/privacy" className="hover:text-accent-cyan transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-accent-cyan transition-colors">Terms & Conditions</a>
              <a href="/contact" className="hover:text-accent-cyan transition-colors">Contact</a>
              <a href="/faq" className="hover:text-accent-cyan transition-colors">FAQ</a>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © 2026 ApliSense. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
      } />
      <Route path="/about" element={<About />} />
      <Route path='/terms' element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/uk-cv-format" element={<UkCvFormat />} />
      <Route path="/graduate-cv-uk" element={<GraduateCvUk />} />
      <Route path="/study-abroad-cv-guide" element={<StudyAbroadCvGuide />} />
      <Route path="/entry-level-cv-example" element={<EntryLevelCvExample />} />
      <Route path="/example-cv" element={<ExampleCV />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/how-to-write-a-cv" element={<HowToWriteCv />} />
      <Route path="/blog/ats-resume-keywords" element={<AtsResumeKeywords />} />
      <Route path="/blog/common-cv-mistakes" element={<CommonCvMistakes />} />
      <Route path="/blog/best-cv-format-2026" element={<BestCvFormat2026 />} />
      <Route path="/blog/how-to-pass-ats" element={<HowToPassAts />} />
      <Route path="/blog/cover-letter-guide" element={<CoverLetterGuide />} />
      <Route path="/blog/linkedin-profile-optimization" element={<LinkedinProfileOptimization />} />
      <Route path="/blog/international-cv-format" element={<InternationalCvFormat />} />
      <Route path="/blog/resume-vs-cv" element={<ResumeVsCv />} />
      <Route path="/blog/skills-for-remote-jobs" element={<SkillsForRemoteJobs />} />
      <Route path='/resume-keywords/:slug' element={<ResumeKeywordsPage />} />
      <Route path='/resume-keywords' element={<ResumeKeywordsIndex />} />
      <Route path='/faq' element={<FAQ />} />


    </Routes>
  </Router>
  );
}


export default App;
