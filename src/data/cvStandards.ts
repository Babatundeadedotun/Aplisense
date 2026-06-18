// GLOBAL CV STANDARDS DATASET (2026)
// Used for CV comparison scoring system

export type CVStandard = {
  country: string;
  maxPages: number;
  photoAllowed: boolean;
  requiresSummary: boolean;
  atsPriority: boolean;
  keySections: string[];
  scoringWeights: {
    formatting: number;
    keywords: number;
    structure: number;
    experience: number;
    skills: number;
  };
};

export const cvStandards: Record<string, CVStandard> = {
  uk: {
    country: "United Kingdom",
    maxPages: 2,
    photoAllowed: false,
    requiresSummary: true,
    atsPriority: true,
    keySections: [
      "Personal Information",
      "Professional Summary",
      "Education",
      "Work Experience",
      "Skills",
      "Projects",
      "Certifications"
    ],
    scoringWeights: {
      formatting: 20,
      keywords: 25,
      structure: 20,
      experience: 20,
      skills: 15
    }
  },

  usa: {
    country: "United States",
    maxPages: 1,
    photoAllowed: false,
    requiresSummary: true,
    atsPriority: true,
    keySections: [
      "Contact Information",
      "Professional Summary",
      "Education",
      "Experience",
      "Skills",
      "Projects"
    ],
    scoringWeights: {
      formatting: 25,
      keywords: 30,
      structure: 20,
      experience: 15,
      skills: 10
    }
  },

  canada: {
    country: "Canada",
    maxPages: 2,
    photoAllowed: false,
    requiresSummary: true,
    atsPriority: true,
    keySections: [
      "Contact Information",
      "Summary",
      "Education",
      "Work Experience",
      "Skills",
      "Volunteer Experience",
      "Certifications"
    ],
    scoringWeights: {
      formatting: 20,
      keywords: 25,
      structure: 20,
      experience: 20,
      skills: 15
    }
  },

  australia: {
    country: "Australia",
    maxPages: 3,
    photoAllowed: false,
    requiresSummary: true,
    atsPriority: true,
    keySections: [
      "Personal Details",
      "Career Summary",
      "Education",
      "Professional Experience",
      "Skills",
      "Referees"
    ],
    scoringWeights: {
      formatting: 15,
      keywords: 20,
      structure: 20,
      experience: 30,
      skills: 15
    }
  },

  europe: {
    country: "Europe (EU Standard / Europass)",
    maxPages: 2,
    photoAllowed: true,
    requiresSummary: true,
    atsPriority: true,
    keySections: [
      "Personal Information",
      "Professional Summary",
      "Education",
      "Work Experience",
      "Skills",
      "Languages",
      "Certifications"
    ],
    scoringWeights: {
      formatting: 20,
      keywords: 20,
      structure: 25,
      experience: 20,
      skills: 15
    }
  },
  nigeria: {
  country: "Nigeria",
  maxPages: 2,
  photoAllowed: false,
  requiresSummary: true,
  atsPriority: true,
  keySections: [
    "Personal Information",
    "Professional Summary",
    "Education",
    "Work Experience",
    "Skills",
    "Projects",
    "Certifications"
  ],
  scoringWeights: {
    formatting: 20,
    keywords: 25,
    structure: 20,
    experience: 20,
    skills: 15
  }
},
germany: {
  country: "Germany",
  maxPages: 2,
  photoAllowed: true,
  requiresSummary: false,
  atsPriority: true,
  keySections: [
    "Personal Information",
    "Education",
    "Work Experience",
    "Skills",
    "Certifications",
    "Languages"
  ],
  scoringWeights: {
    formatting: 25,
    keywords: 20,
    structure: 25,
    experience: 20,
    skills: 10
  }
},
uae: {
  country: "United Arab Emirates",
  maxPages: 2,
  photoAllowed: true,
  requiresSummary: true,
  atsPriority: true,
  keySections: [
    "Personal Information",
    "Professional Summary",
    "Education",
    "Work Experience",
    "Skills",
    "Certifications"
  ],
  scoringWeights: {
    formatting: 20,
    keywords: 25,
    structure: 20,
    experience: 20,
    skills: 15
  }
},
singapore: {
  country: "Singapore",
  maxPages: 2,
  photoAllowed: false,
  requiresSummary: true,
  atsPriority: true,
  keySections: [
    "Contact Information",
    "Professional Summary",
    "Work Experience",
    "Education",
    "Skills",
    "Projects"
  ],
  scoringWeights: {
    formatting: 20,
    keywords: 30,
    structure: 20,
    experience: 20,
    skills: 10
  }
},

};

// Helper function to calculate match percentage
export const calculateCVMatchScore = (
  detectedSections: string[],
  countryKey: keyof typeof cvStandards
): number => {
  const standard = cvStandards[countryKey];
  const requiredSections = standard.keySections;

  let matched = 0;

  requiredSections.forEach((section) => {
    if (
      detectedSections.some((detected) =>
        detected.toLowerCase().includes(section.toLowerCase())
      )
    ) {
      matched++;
    }
  });

  const score = (matched / requiredSections.length) * 100;
  return Math.round(score);
};