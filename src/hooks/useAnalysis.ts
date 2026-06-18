import { useState, useCallback } from 'react';
import type { AnalysisMode, CVData, AnalysisResult, AnalysisState } from '@/types';
import { extractTextFromFile, validateFile } from '@/utils/fileParser';
import { parseCV, calculateJobMatch, calculateCourseMatch, generateFallbackAnalysis } from '@/utils/analyzer';
import { getJobRoleById, searchJobRoles } from '@/data/jobRoles';
import { getCourseById, searchCourses } from '@/data/courseDatabase';

export const useAnalysis = () => {
  const [state, setState] = useState<AnalysisState>({
    mode: 'job',
    cvData: null,
    multiCVData: [],
    targetId: '',
    targetName: '',
    isAnalyzing: false,
    result: null,
    error: null
  });

  const setMode = useCallback((mode: AnalysisMode) => {
    setState(prev => ({ ...prev, mode, result: null, error: null }));
  }, []);

  const uploadFile = useCallback(async (file: File) => {
    const validation = validateFile(file);
    if (!validation.valid) {
      setState(prev => ({ ...prev, error: validation.error }));
      return false;
    }

    try {
      const text = await extractTextFromFile(file);
      setState(prev => ({
        ...prev,
        cvData: {
          text,
          fileName: file.name,
          fileType: file.type
        },
        error: null
      }));
      return true;
    } catch (error: any) {
      setState(prev => ({ ...prev, error: error.message }));
      return false;
    }
  }, []);


    const uploadMultipleFiles = useCallback(async (files: FileList) => {
    const parsedFiles: CVData[] = [];

    for (const file of Array.from(files)) {
      const validation = validateFile(file);
      if (!validation.valid) continue;

      try {
        const text = await extractTextFromFile(file);
        parsedFiles.push({
          text,
          fileName: file.name,
          fileType: file.type
        });
      } catch (err) {
        console.error('Failed to parse:', file.name);
      }
    }

    setState(prev => ({
      ...prev,
      multiCVData: [...prev.multiCVData, ...parsedFiles],
      error: null
    }));
  }, []);

  const setTarget = useCallback((id: string, name: string) => {
    setState(prev => ({ ...prev, targetId: id, targetName: name }));
  }, []);


  const analyze = useCallback(async () => {
  if (state.mode === 'recruiter') {
    if (!state.multiCVData || state.multiCVData.length === 0) {
      setState(prev => ({ ...prev, error: 'Please upload CVs first' }));
      return;
    }

    if (!state.targetName) {
      setState(prev => ({ ...prev, error: 'Please select a job role' }));
      return;
    }

    setState(prev => ({ ...prev, isAnalyzing: true, error: null }));

    try {
      const jobRole = state.targetId ? getJobRoleById(state.targetId) : null;

      if (!jobRole) {
        throw new Error('Please select a predefined job role for recruiter mode');
      }

      // Analyze ALL CVs
      const rankedResults = state.multiCVData.map(cv => {
        const parsedCV = parseCV(cv.text);
        const analysis = calculateJobMatch(parsedCV, jobRole);

        return {
          fileName: cv.fileName,
          score: analysis.matchScore,
          analysis
        };
      });

      // Sort by score (highest first)
      rankedResults.sort((a, b) => b.score - a.score);

      // Get Top 3 Candidates
      const topCandidates = rankedResults.slice(0, 3);

      setState(prev => ({
        ...prev,
        result: {
          matchScore: topCandidates[0]?.score || 0,
          strengths: ['Top candidates ranked successfully'],
          weaknesses: [],
          matchedSkills: [],
          missingSkills: [],
          recommendations: topCandidates.map(c => 
            `${c.fileName} scored ${c.score}%`
          ),
          skillGaps: [],
          keywordMatches: {},
          topCandidates // custom field for UI
        },
        isAnalyzing: false
      }));

    } catch (error: any) {
      setState(prev => ({
        ...prev,
        error: error.message,
        isAnalyzing: false
      }));
    }

    return;
  }

  // ===== NORMAL JOB/STUDY MODE (UNCHANGED) =====
  if (!state.cvData) {
    setState(prev => ({ ...prev, error: 'Please upload a CV first' }));
    return;
  }

  if (!state.targetName) {
    setState(prev => ({ ...prev, error: 'Please select or enter a target' }));
    return;
  }

  setState(prev => ({ ...prev, isAnalyzing: true, error: null }));

  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    const parsedCV = parseCV(state.cvData.text);
    let result: AnalysisResult;

    if (state.mode === 'job') {
      const jobRole = state.targetId ? getJobRoleById(state.targetId) : null;
      result = jobRole
        ? calculateJobMatch(parsedCV, jobRole)
        : generateFallbackAnalysis(parsedCV, state.targetName);
    } else {
      const course = state.targetId ? getCourseById(state.targetId) : null;
      result = course
        ? calculateCourseMatch(parsedCV, course)
        : generateFallbackAnalysis(parsedCV, state.targetName);
    }

    setState(prev => ({ ...prev, result, isAnalyzing: false }));
  } catch (error: any) {
    setState(prev => ({ ...prev, error: error.message, isAnalyzing: false }));
  }
}, [state]);

  // const analyze = useCallback(async () => {
  //   if (!state.cvData) {
  //     setState(prev => ({ ...prev, error: 'Please upload a CV first' }));
  //     return;
  //   }

  //   if (!state.targetName) {
  //     setState(prev => ({ ...prev, error: 'Please select or enter a target' }));
  //     return;
  //   }

  //   setState(prev => ({ ...prev, isAnalyzing: true, error: null }));

  //   // Simulate analysis delay for UX
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  //   try {
  //     const parsedCV = parseCV(state.cvData.text);
  //     let result: AnalysisResult;

  //     if (state.mode === 'job') {
  //       const jobRole = state.targetId ? getJobRoleById(state.targetId) : null;
  //       if (jobRole) {
  //         result = calculateJobMatch(parsedCV, jobRole);
  //       } else {
  //         result = generateFallbackAnalysis(parsedCV, state.targetName);
  //       }
  //     } else {
  //       const course = state.targetId ? getCourseById(state.targetId) : null;
  //       if (course) {
  //         result = calculateCourseMatch(parsedCV, course);
  //       } else {
  //         result = generateFallbackAnalysis(parsedCV, state.targetName);
  //       }
  //     }

  //     setState(prev => ({ ...prev, result, isAnalyzing: false }));
  //   } catch (error: any) {
  //     setState(prev => ({ ...prev, error: error.message, isAnalyzing: false }));
  //   }
  // }, [state.cvData, state.targetId, state.targetName, state.mode]);

  const reset = useCallback(() => {
    setState(prev => ({
      ...prev,
      cvData: null,
      multiCVData: [],
      targetId: '',
      targetName: '',
      isAnalyzing: false,
      result: null,
      error: null
    }));
  }, []);

    const resetMultiCVData = useCallback(() => {
      setState(prev => ({
        ...prev,
        multiCVData: [],
        result: null,
        error: null
      }));
    }, []);

  const searchTargets = useCallback((query: string) => {
    if (state.mode === 'job') {
      return searchJobRoles(query);
    } else {
      return searchCourses(query);
    }
  }, [state.mode]);

  return {
    ...state,
    setMode,
    uploadFile,
    uploadMultipleFiles,
    setTarget,
    analyze,
    reset,
    searchTargets
  };
};
