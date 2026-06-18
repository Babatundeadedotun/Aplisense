import { resumeKeywords } from "@/data/resumeKeywords";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function ResumeKeywordsIndex() {

  return (

    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">

      <Helmet>
        <title>Resume Keywords by Job Role (ATS Optimization Guide)</title>
        <meta
          name="description"
          content="Explore ATS resume keywords for different job roles including software engineers, data analysts, marketing managers, and more."
        />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">
        Resume Keywords by Job Role
      </h1>

      <p className="text-gray-600 mb-10">
        Recruiters use Applicant Tracking Systems (ATS) to scan resumes before
        a human ever reads them. If your CV does not contain the right keywords,
        it may be rejected automatically. Below you can explore the most
        important resume keywords for different industries and job roles.
      </p>

      <div className="grid md:grid-cols-2 gap-4">

        {resumeKeywords.map((role) => (

          <Link
            key={role.slug}
            to={`/resume-keywords/${role.slug}`}
            className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition"
          >

            <h2 className="font-semibold text-lg">
              {role.title}
            </h2>

            <p className="text-sm text-gray-500">
              View important ATS keywords for this role
            </p>

          </Link>

        ))}

      </div>

      <div className="mt-16">

        <h2 className="text-2xl font-semibold mb-4">
          Improve Your Resume
        </h2>

        <p className="text-gray-600 mb-4">
          Understanding resume keywords is only one part of the job search
          process. Learn how to structure your CV properly and optimize your
          LinkedIn profile to increase your chances of landing interviews.
        </p>

        <ul className="list-disc pl-6 text-accent-cyan space-y-2">

          <li>
            <Link to="/blog/how-to-write-a-cv">
              How to Write a Professional CV
            </Link>
          </li>

          <li>
            <Link to="/blog/how-to-pass-ats">
              How to Pass ATS Resume Screening
            </Link>
          </li>

          <li>
            <Link to="/blog/linkedin-profile-optimization">
              Optimize Your LinkedIn Profile
            </Link>
          </li>

        </ul>

      </div>

    </div>

  );

}