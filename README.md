# ApliSense - Intelligent CV Analyzer

A futuristic, AI-inspired Resume, Job, and Study Abroad Analyzer. ApliSense provides intelligent CV analysis against target job roles and study programs using a local skill intelligence engine.

![ApliSense](https://img.shields.io/badge/ApliSense-AI%20Powered-blue)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)

## Features

### Core Analysis
- **Job Application Analysis**: Match your CV against 50+ predefined job roles
- **Study Abroad Analysis**: Analyze fit for 40+ academic programs
- **Skill Matching**: Identify matched, missing, and recommended skills
- **Match Score**: Visual circular progress meter showing compatibility
- **Personalized Recommendations**: Actionable insights to improve your CV

### File Support
- PDF files (.pdf)
- Microsoft Word (.docx)
- Plain text (.txt)
- Drag & drop interface
- File validation (max 10MB)

### Design
- Ultra-futuristic SaaS dashboard
- Dark/Light mode toggle
- Glassmorphism cards
- Smooth Framer Motion animations
- Neon gradient accents
- Fully responsive (mobile + desktop)

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **File Parsing**: 
  - pdfjs-dist (PDF extraction)
  - mammoth (DOCX extraction)
- **Icons**: Lucide React

## Project Structure

```
aplisense/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ModeTabs.tsx
│   │   ├── UploadSection.tsx
│   │   └── ResultsSection.tsx
│   ├── data/
│   │   ├── jobRoles.ts       # 50+ job roles database
│   │   └── courseDatabase.ts # 40+ courses database
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useAnalysis.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── fileParser.ts     # PDF/DOCX extraction
│   │   └── analyzer.ts       # Analysis engine
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Job Roles Database

### Software Engineering
- Frontend Developer
- Backend Developer
- Full Stack Developer
- Mobile App Developer
- DevOps Engineer
- Cloud Architect
- Security Engineer

### Data & AI
- Data Scientist
- Machine Learning Engineer
- Data Engineer
- AI Research Scientist
- Business Intelligence Analyst

### Product & Design
- Product Manager
- UX Designer
- UI Designer
- Product Designer

### Business & Finance
- Business Analyst
- Project Manager
- Management Consultant
- Financial Analyst
- Investment Banking Analyst
- Risk Analyst
- FinTech Product Manager
- Quantitative Analyst

### Marketing
- Digital Marketing Specialist
- Growth Marketing Manager
- Content Strategist
- Brand Manager

### Healthcare
- Healthcare Data Analyst
- Clinical Research Coordinator
- Health Informatics Specialist

### Cybersecurity
- Security Analyst
- Penetration Tester
- Security Architect

### Engineering
- Mechanical Engineer
- Electrical Engineer
- Civil Engineer
- Aerospace Engineer
- Biomedical Engineer

### Legal & HR
- Corporate Lawyer
- Legal Technologist
- Talent Acquisition Specialist
- HR Business Partner

### Sales
- Sales Development Representative
- Account Executive
- Customer Success Manager

## Study Abroad Database

### Computer Science & Engineering
- Bachelor/Master of Computer Science
- MSc Software Engineering
- MSc Data Science
- MSc Artificial Intelligence
- MSc Cybersecurity
- MSc Cloud Computing

### Business & Management
- MBA (General, Finance, Marketing)
- MSc Management
- MSc International Business
- MSc Entrepreneurship

### Finance & Economics
- MSc Finance
- MSc Financial Engineering
- Master of Accounting
- MSc Economics
- MSc Financial Technology

### Engineering
- MSc Mechanical/Electrical/Civil Engineering
- MSc Aerospace Engineering
- MSc Biomedical Engineering

### Healthcare & Medicine
- MBBS/MD Medicine
- Master of Public Health (MPH)
- MSc Nursing
- MSc Healthcare Administration
- Master of Pharmacy

### Data & Analytics
- MSc Business Analytics
- MSc Big Data Analytics

### Design & Creative
- MSc User Experience Design
- MA Graphic Design
- MA Fashion Design

### Law & Policy
- Master of Laws (LLM)
- MA International Relations
- Master of Public Policy

### Psychology & Social Sciences
- MSc Psychology
- Doctor of Clinical Psychology
- MA Sociology

### Education
- MA Education
- MA TESOL / Applied Linguistics

### Media & Communications
- MA Journalism
- MA Media and Communications
- MA Film Production

### Environment & Sustainability
- MSc Environmental Science
- MSc Sustainability
- MSc Renewable Energy

### Hospitality & Tourism
- MSc Hospitality Management
- MSc Tourism Management

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project:
```bash
cd aplisense
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## How It Works

### Analysis Engine

1. **File Parsing**: Extracts text from PDF/DOCX files using pdfjs-dist and mammoth
2. **Skill Extraction**: Identifies skills from the CV text using keyword matching
3. **Comparison**: Compares extracted skills against target role/course requirements
4. **Scoring**: Calculates match percentage based on required and preferred skills
5. **Insights**: Generates strengths, weaknesses, and recommendations

### Skill Matching

The analyzer uses a comprehensive skill database including:
- Programming languages (JavaScript, Python, Java, etc.)
- Frameworks & libraries (React, Vue, TensorFlow, etc.)
- Tools & platforms (AWS, Docker, Kubernetes, etc.)
- Soft skills (leadership, communication, etc.)
- Domain-specific skills

## Customization

### Adding New Job Roles

Edit `src/data/jobRoles.ts`:

```typescript
{
  id: 'your-role-id',
  title: 'Your Role Title',
  category: 'Category',
  requiredSkills: ['skill1', 'skill2'],
  preferredSkills: ['skill3', 'skill4'],
  experienceLevel: 'entry' | 'mid' | 'senior',
  description: 'Role description'
}
```

### Adding New Courses

Edit `src/data/courseDatabase.ts`:

```typescript
{
  id: 'your-course-id',
  name: 'Course Name',
  degree: 'master',
  field: 'Field Name',
  requiredSkills: ['skill1', 'skill2'],
  preferredSkills: ['skill3', 'skill4'],
  duration: '1-2 years',
  description: 'Course description',
  topDestinations: ['USA', 'UK']
}
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - Feel free to use and modify!

## Credits

Built with ❤️ using React, TypeScript, Vite, and Tailwind CSS.
