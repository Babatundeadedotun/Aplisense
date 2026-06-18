import { useParams } from "react-router-dom";
import { resumeKeywords } from "@/data/resumeKeywords";
import { Header } from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ResumeKeywordsPage() {

  const { slug } = useParams();
  const { theme, toggleTheme } = useTheme();

  const role = resumeKeywords.find((item) => item.slug === slug);

  if (!role) {
    return <div className="p-20 text-center">Page not found</div>;
  }

  return (

    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">

      <Header theme={theme} toggleTheme={toggleTheme} />

      <Helmet>
        <title>{role.title} | ApliSense</title>
        <meta name="description" content={role.description} />
      </Helmet>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-16">

        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {role.title}
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Recruiters use Applicant Tracking Systems (ATS) to filter resumes
          before they are reviewed by hiring managers. Including the correct
          industry keywords can significantly increase your chances of passing
          automated resume screening.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-10">
          Below are some of the most important keywords recruiters often search
          for when hiring for this role. These keywords represent technical
          skills, tools, and competencies that commonly appear in successful
          resumes.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Important Resume Keywords
        </h2>

        <ul className="grid grid-cols-2 gap-3 mb-10">

          {role.keywords.map((keyword) => (

            <li
              key={keyword}
              className="bg-gray-100 dark:bg-dark-card px-4 py-2 rounded-lg"
            >
              {keyword}
            </li>

          ))}

        </ul>

        {/* Ad placement zone (future adsense or affiliate ads) */}

        <div className="my-12 border rounded-lg p-6 text-center bg-gray-100 dark:bg-dark-card">

          <p className="text-sm text-gray-500">
            Advertisement
          </p>

          <div className="h-32 flex items-center justify-center">
            Ad space
          </div>

        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Why Resume Keywords Matter
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Most large companies receive hundreds or even thousands of job
          applications. To manage this volume, recruiters rely on ATS software
          to automatically rank and filter resumes. If your CV does not contain
          relevant keywords related to the role, it may never reach a human
          recruiter.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-10">
          Using industry specific keywords helps demonstrate that you possess
          the required skills and experience. It also ensures your resume
          matches the job description more closely, improving your ATS ranking.
        </p>

        <div className="mt-12 p-6 border rounded-xl bg-gray-100 dark:bg-dark-card">

          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Check If Your CV Passes ATS Systems
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Upload your CV to ApliSense and receive an AI-powered resume
            analysis that detects missing keywords and formatting problems.
          </p>

          <Link
            to="/"
            className="inline-block px-6 py-3 bg-accent-cyan text-white rounded-lg font-semibold"
          >
            Analyze My CV
          </Link>

        </div>

        <div className="mt-14">

          <h3 className="text-xl font-semibold mb-4">
            Related Career Guides
          </h3>

          <ul className="space-y-2 text-accent-cyan">

            <li>
              <Link to="/blog/how-to-pass-ats">
                How to Pass ATS Resume Screening
              </Link>
            </li>

            <li>
              <Link to="/blog/best-cv-format-2026">
                Best CV Format for 2026
              </Link>
            </li>

            <li>
              <Link to="/blog/common-cv-mistakes">
                Common CV Mistakes to Avoid
              </Link>
            </li>

          </ul>



                    {role.related && (
          <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Related Resume Keyword Guides
          </h3>

          <ul className="space-y-2">
          {role.related.map((slug) => {
          const relatedRole = resumeKeywords.find((r) => r.slug === slug);
          if (!relatedRole) return null;

          return (
          <li key={slug}>
          <Link
          to={`/resume-keywords/${slug}`}
          className="text-accent-cyan hover:underline"
          >
          {relatedRole.title}
          </Link>
          </li>
          );
          })}
          </ul>
          </div>
          )}

        </div>

      </main>

    </div>

  );

}