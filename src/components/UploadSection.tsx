import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, FileText, X, ChevronDown, Search, 
  Briefcase, GraduationCap, Sparkles 
} from 'lucide-react';
import type { AnalysisMode } from '@/types';
import { jobRoles } from '@/data/jobRoles';
import { courses } from '@/data/courseDatabase';

interface UploadSectionProps {
  mode: AnalysisMode;
  cvData: { fileName: string; fileType: string } | null;
  multiCVData?: { fileName: string; fileType: string }[];
  onUploadMultiple?: (files: FileList) => void;
  targetId: string;
  targetName: string;
  isAnalyzing: boolean;
  error: string | null;
  onUpload: (file: File) => Promise<boolean>;
  onRemoveFile: () => void;
  onTargetChange: (id: string, name: string) => void;
  onAnalyze: () => void;
}

export const UploadSection = ({
  mode,
  cvData,
  targetId,
  targetName,
  isAnalyzing,
  error,
  onUpload,
  onUploadMultiple,
  multiCVData,
  onRemoveFile,
  onTargetChange,
  onAnalyze
}: UploadSectionProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [customInput, setCustomInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  // const handleDrop = useCallback(async (e: React.DragEvent) => {
  //   e.preventDefault();
  //   setIsDragging(false);
    
  //   const files = e.dataTransfer.files;
  //   if (files.length > 0) {
  //     await onUpload(files[0]);
  //   }
  // }, [onUpload]);


      const handleDrop = useCallback(async (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (!files || files.length === 0) return;

      if (mode === 'recruiter' && onUploadMultiple) {
        onUploadMultiple(files);
      } else {
        await onUpload(files[0]);
      }
    }, [onUpload, onUploadMultiple, mode]);

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await onUpload(files[0]);
    }
  }, [onUpload]);

  const handleTargetSelect = (id: string, name: string) => {
    onTargetChange(id, name);
    setShowDropdown(false);
    setSearchQuery('');
    setCustomInput('');
  };

  const handleCustomInput = () => {
    if (customInput.trim()) {
      onTargetChange('', customInput.trim());
      setShowDropdown(false);
    }
  };

  // const options = 
  //     mode === 'job'
  //     ? jobRoles
  //     : mode === 'study'
  //       ? courses
  //       : [];

      const options =
        mode === 'study'
          ? courses
          : jobRoles;


      const filteredOptions = options.filter(opt => 
        opt.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opt.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opt.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opt.field?.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const getFileIcon = () => {
    if (cvData?.fileType.includes('pdf')) {
      return <FileText className="w-8 h-8 text-red-400" />;
    }
    return <FileText className="w-8 h-8 text-blue-400" />;
  };

  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* File Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            // onClick={() => !cvData && fileInputRef.current?.click()}
            onClick={() => {
              if (mode === 'recruiter') {
                fileInputRef.current?.click();
              } else if (!cvData) {
                fileInputRef.current?.click();
              }
            }}
            className={`
              relative border-2 border-dashed rounded-2xl p-5 sm:p-8 text-center cursor-pointer
              transition-all duration-300
              ${isDragging 
                ? 'border-accent-cyan bg-accent-cyan/5' 
                : cvData 
                  ? 'border-accent-emerald bg-accent-emerald/5' 
                  : 'border-gray-300 dark:border-gray-700 hover:border-accent-cyan/50 hover:bg-accent-cyan/5'
              }
            `}
          >
            {/* <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,.txt"
              onChange={handleFileSelect}
              className="hidden"

            /> */}


                    <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,.txt"
              multiple={mode === 'recruiter'}
              onChange={(e) => {
                const files = e.target.files;
                if (!files || files.length === 0) return;

                if (mode === 'recruiter' && onUploadMultiple) {
                  onUploadMultiple(files);
                } else {
                  onUpload(files[0]);
                }
              }}
              className="hidden"
            />

            {

            <AnimatePresence mode="wait">
            {mode === 'recruiter' ? (
              multiCVData && multiCVData.length > 0 ? (
                <motion.div
                  key="multi-file"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center justify-center gap-4 w-full"
                >
                  <FileText className="w-8 h-8 text-accent-emerald" />
                  <div className="text-left">
                    {/* <p className="font-medium text-gray-900 dark:text-white">
                      {multiCVData.length} CVs uploaded
                    </p> */}

                    {/* <motion.div
                      key="multi-file"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="space-y-3"
                    >
                      {multiCVData.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-100 dark:bg-dark-card p-3 rounded-lg">
                          <div className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-accent-emerald" />
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {file.fileName}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div> */}


                      <p className="font-medium text-gray-900 dark:text-white">
                        {multiCVData.length} CV{multiCVData.length > 1 ? 's' : ''} uploaded
                      </p>

                      <p className="text-sm text-accent-emerald">
                        Files uploaded successfully
                      </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveFile();
                      if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                      }
                    }}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Drop CVs here or click to upload multiple files
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Supports PDF, DOCX, and TXT files (max 10MB)
                  </p>
                </motion.div>
              )
            ) : cvData ? (
              <motion.div
                key="single-file"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center justify-center gap-4 w-full"
              >
                {getFileIcon()}
                <div className="text-left min-w-0 flex-1">
                  <p className="font-medium text-gray-900 dark:text-white truncate msx-w-[180px] sm:max-w-xs md:max-w-md">
                    {cvData.fileName}
                  </p>
                  <p className="text-sm text-accent-emerald">
                    File uploaded successfully
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFile();
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="upload"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-accent-cyan" />
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {mode === 'recruiter'
                    ? 'Drop CVs here or click to upload multiple files'
                    : 'Drop your CV here or click to browse'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Supports PDF, DOCX, and TXT files (max 10MB)
                </p>
              </motion.div>
            )}
          </AnimatePresence>
     
            }
          </div>

          {/* Target Selection */}
          <div className="relative" ref={dropdownRef}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {/* {mode === 'job' ? 'Target Job Role' : 'Target Course / Program'} */}

              {mode === 'job' || mode === 'recruiter'
                ? 'Target Job Role'
                : 'Target Course / Program'}
            </label>
            
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl
                  border transition-all duration-300
                  ${showDropdown 
                    ? 'border-accent-cyan ring-2 ring-accent-cyan/20' 
                    : 'border-gray-300 dark:border-gray-700 hover:border-accent-cyan/50'
                  }
                  bg-white dark:bg-dark-card text-left
                `}
              >
                <span className="flex items-center gap-3">
                  {mode === 'job' ? (
                    <Briefcase className="w-5 h-5 text-accent-cyan" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-accent-purple" />
                  )}
                  <span className={targetName ? 'text-gray-900 dark:text-white' : 'text-gray-400'}>
                    {/* {targetName || `Select or type a ${mode === 'job' ? 'job role' : 'course'}...`} */}

                    {targetName || `Select or type a ${
                        mode === 'study' ? 'course' : 'job role'
                    }...`}


                  </span>
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 w-full mt-2 bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border shadow-xl max-h-80 overflow-hidden"
                  >
                    {/* Search */}
                    <div className="p-3 border-b border-gray-200 dark:border-dark-border">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search..."
                          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-bg border-0 text-sm focus:ring-2 focus:ring-accent-cyan/50"
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* Custom Input */}
                    <div className="p-3 border-b border-gray-200 dark:border-dark-border">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={customInput}
                          onChange={(e) => setCustomInput(e.target.value)}
                          placeholder={`Or type custom ${mode === 'job' ? 'role' : 'course'}...`}
                          className="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-dark-bg border-0 text-sm focus:ring-2 focus:ring-accent-cyan/50"
                          onKeyDown={(e) => e.key === 'Enter' && handleCustomInput()}
                        />
                        <button
                          onClick={handleCustomInput}
                          disabled={!customInput.trim()}
                          className="px-4 py-2 rounded-lg bg-accent-cyan text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-cyan/90 transition-colors"
                        >
                          Use
                        </button>
                      </div>
                    </div>

                    {/* Options List */}
                    <div className="overflow-y-auto max-h-48">
                      {filteredOptions.length > 0 ? (
                        filteredOptions.slice(0, 20).map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleTargetSelect(
                              option.id, 
                              option.title || option.name || ''
                            )}
                            className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors border-b border-gray-100 dark:border-dark-border last:border-0"
                          >
                            <p className="font-medium text-gray-900 dark:text-white text-sm">
                              {option.title || option.name}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {option.category || option.field} • {option.experienceLevel || option.degree}
                            </p>
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-8 text-center text-gray-500">
                          <p className="text-sm">No results found</p>
                          <p className="text-xs mt-1">Type a custom entry above</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Analyze Button */}
          <motion.button
            onClick={onAnalyze}
            disabled={
              mode === 'recruiter'
              ? (!multiCVData || multiCVData.length === 0 || !targetName || isAnalyzing)
              : (!cvData || !targetName || isAnalyzing)
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // className={`
            //   w-full py-4 rounded-xl font-semibold text-lg
            //   flex items-center justify-center gap-3
            //   transition-all duration-300
            //   ${
            //     mode === 'recruiter'
            //       ? (!multiCVData || multiCVData.length === 0 || !targetName || isAnalyzing)
            //       : (!cvData || !targetName || isAnalyzing)
            //     ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
            //     : 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white shadow-lg shadow-accent-cyan/25 hover:shadow-accent-cyan/40'
            //   }
            // `}
                className={`
                  w-full py-4 rounded-xl font-semibold text-lg
                  flex items-center justify-center gap-3
                  transition-all duration-300
                  bg-gradient-to-r from-accent-cyan to-accent-purple
                  text-white shadow-lg shadow-accent-cyan/25
                  hover:shadow-accent-cyan/40
                  ${
                    (
                      mode === 'recruiter'
                        ? (!multiCVData || multiCVData.length === 0 || !targetName || isAnalyzing)
                        : (!cvData || !targetName || isAnalyzing)
                    )
                      ? 'opacity-50 cursor-not-allowed hover:shadow-lg'
                      : ''
                  }
                `}
          >
            {isAnalyzing ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
                <span>Analyzing your CV with ApliSense AI...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Analyze My CV</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
