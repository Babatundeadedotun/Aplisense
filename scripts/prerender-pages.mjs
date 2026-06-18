import { AD, wp, PUB } from './prerender-shell.mjs';

export const staticPages = [

/* ── HOME ── */
{ route:'/', title:'ApliSense – Free AI-Powered CV Analyzer & ATS Optimization Tool',
  desc:'Free AI-powered CV analysis tool helping job seekers, graduates, and professionals optimize their resumes for ATS systems and land more interviews. No sign-up required.',
  body: wp(`<div class="ap-wide">
<section style="text-align:center;padding:3.5rem 0 2.5rem">
<span class="ap-badge">100% Free — No Sign-Up Required</span>
<h1>Free AI-Powered CV Analyzer<br>&amp; ATS Optimization Tool</h1>
<p style="font-size:1.1rem;max-width:40rem;margin:.75rem auto 2rem;color:#9ca3af">Upload your CV and instantly find out how well it matches your target job role. Get a detailed match score, skill gap report, and personalized recommendations — completely free.</p>
<a href="/" class="ap-btn" style="font-size:1rem;padding:.875rem 2rem">Analyze My CV Free</a>
<a href="/blog" class="ap-btn ap-btn-o" style="font-size:1rem;padding:.875rem 2rem">Read CV Guides</a>
</section>
${AD}
<section style="margin:2rem 0">
<h2 style="text-align:center;border:none">How ApliSense Works</h2>
<div class="ap-g3">
<div class="ap-card"><span class="ap-badge">Step 1</span><h3>Upload Your CV</h3><p>Drag and drop your resume in PDF or DOCX format. Our system extracts every section for analysis.</p></div>
<div class="ap-card"><span class="ap-badge">Step 2</span><h3>Select Your Target Role</h3><p>Choose from 50+ job roles or 40+ academic programs covering technology, finance, marketing, healthcare, and more.</p></div>
<div class="ap-card"><span class="ap-badge">Step 3</span><h3>Get Your Analysis Report</h3><p>Receive a detailed match score, skill gap report, missing keywords, and personalized recommendations to improve your application.</p></div>
</div></section>
<section style="background:#12121a;border:1px solid #1f1f2e;border-radius:1rem;padding:2rem;margin:2rem 0">
<h2 style="border:none;margin-top:0">What Is ATS and Why Does It Matter?</h2>
<p>An <strong>Applicant Tracking System (ATS)</strong> is software used by employers to automatically screen CVs before a recruiter reads them. Studies show that up to <strong>75% of CVs are rejected by ATS software</strong> before ever reaching a human — even if the candidate is fully qualified for the role.</p>
<p>ATS systems filter applications by scanning for specific keywords, job titles, skills, and qualifications that match the job description. If your CV is missing these terms or is formatted in a way the system cannot parse correctly, it may be automatically rejected regardless of your qualifications.</p>
<p>ApliSense analyzes your CV against ATS criteria so you know exactly which keywords to add, which skills to highlight, and how to structure your document to pass automated screening and get in front of a real recruiter.</p>
<a href="/blog/how-to-pass-ats" style="color:#06b6d4;font-weight:600;font-size:.9rem">Learn how to pass ATS screening →</a>
</section>
${AD}
<section style="margin:2rem 0">
<h2 style="text-align:center;border:none">Why Use ApliSense?</h2>
<div class="ap-g2">
<div class="ap-card"><h3>Multi-Dimensional Analysis</h3><p>Unlike basic keyword scanners, ApliSense evaluates your CV across five dimensions: structural completeness, skills alignment, keyword density, experience quality, and ATS format compliance.</p></div>
<div class="ap-card"><h3>50+ Job Roles Covered</h3><p>Our database covers software engineering, data analytics, cybersecurity, project management, marketing, finance, healthcare, and many more industries and roles.</p></div>
<div class="ap-card"><h3>Actionable Recommendations</h3><p>Every analysis includes specific improvement suggestions — not just a score. We tell you exactly what to add, what to remove, and how to restructure your CV for maximum impact.</p></div>
<div class="ap-card"><h3>Completely Free, No Sign-Up</h3><p>All core features are free with no registration required. We believe powerful career tools should be accessible to everyone regardless of background or financial situation.</p></div>
</div></section>
<section style="margin:2rem 0">
<h2 style="text-align:center;border:none">Free CV Guides &amp; Career Resources</h2>
<div class="ap-g3">
<a href="/blog/how-to-write-a-cv" class="ap-card"><span class="ap-badge">CV Writing</span><h3>How to Write a CV in 2026</h3><p>Step-by-step guide covering every section with formatting tips and ATS optimization.</p><span class="ar">Read more →</span></a>
<a href="/blog/best-cv-format-2026" class="ap-card"><span class="ap-badge">Format</span><h3>Best CV Format for 2026</h3><p>Which structure, layout, and design choices work best for ATS systems and modern recruiters.</p><span class="ar">Read more →</span></a>
<a href="/blog/how-to-pass-ats" class="ap-card"><span class="ap-badge">ATS</span><h3>How to Pass ATS Screening</h3><p>The complete guide to getting your CV past automated filters and in front of a human recruiter.</p><span class="ar">Read more →</span></a>
<a href="/blog/common-cv-mistakes" class="ap-card"><span class="ap-badge">Mistakes</span><h3>15 Common CV Mistakes</h3><p>The most frequent CV errors that cause instant rejection and exactly how to fix each one.</p><span class="ar">Read more →</span></a>
<a href="/blog/ats-resume-keywords" class="ap-card"><span class="ap-badge">Keywords</span><h3>ATS Resume Keywords</h3><p>How to identify and include the right keywords in your CV to score highly in automated screening.</p><span class="ar">Read more →</span></a>
<a href="/blog/cover-letter-guide" class="ap-card"><span class="ap-badge">Cover Letter</span><h3>Cover Letter Guide 2026</h3><p>How to write a compelling cover letter that complements your CV and gets you interviews.</p><span class="ar">Read more →</span></a>
</div>
<div style="text-align:center;margin-top:1.5rem"><a href="/blog" class="ap-btn">View All 10 Articles</a></div>
</section>
<section style="margin:2rem 0">
<h2 style="text-align:center;border:none">Who ApliSense Helps</h2>
<div class="ap-g3">
<div class="ap-card"><h3>Job Seekers &amp; Graduates</h3><p>Get your CV ready for the job market. Identify missing skills, optimize for ATS, and improve your chances of being shortlisted for interviews.</p></div>
<div class="ap-card"><h3>International Applicants</h3><p>Applying to jobs in the UK, USA, or Europe? Ensure your CV meets local recruiter expectations and formatting standards.</p></div>
<div class="ap-card"><h3>Career Changers</h3><p>Transitioning to a new industry? Identify how to reposition your existing experience for your new target role effectively.</p></div>
<div class="ap-card"><h3>Study Abroad Applicants</h3><p>Applying to international universities? Ensure your academic CV meets the standards of global admissions offices.</p></div>
<div class="ap-card"><h3>Experienced Professionals</h3><p>Stay competitive. Ensure your CV reflects current industry expectations and is optimized for modern recruiting systems.</p></div>
<div class="ap-card"><h3>Recruiters &amp; HR Teams</h3><p>Use recruiter mode to objectively compare multiple CV uploads and rank candidates by role fit quickly.</p></div>
</div></section>
</div>`) },

/* ── ABOUT ── */
{ route:'/about', title:'About ApliSense – Free AI CV Analysis & ATS Optimization Platform',
  desc:'Learn about ApliSense, the free AI-powered CV analysis platform helping job seekers, graduates, and professionals improve their resumes and pass ATS screening systems worldwide.',
  body: wp(`<main class="ap-main">
<h1>About ApliSense</h1>
<p>ApliSense is a free, AI-powered CV analysis platform built to help job seekers, graduates, international applicants, and career changers make smarter, more competitive applications. Our mission is to give every applicant the same quality of feedback a professional career coach or recruiter would provide — instantly and at zero cost.</p>
<p>We understand the frustration of submitting dozens of job applications and hearing nothing back. In most cases it is not a lack of qualifications causing rejection — it is a poorly structured CV that fails to communicate your value clearly, or gets filtered out by an Applicant Tracking System (ATS) before a human ever reads it. ApliSense was built specifically to solve that problem.</p>
${AD}
<h2>Our Story</h2>
<p>ApliSense was created after observing a consistent and widespread problem: talented, qualified candidates being rejected not because of their abilities, but because their CVs failed to meet the technical and structural expectations of modern hiring systems. Research shows recruiters spend an average of six to eight seconds reviewing a CV, and automated ATS filters reject up to 75% of applications before a human ever sees them.</p>
<p>For international applicants and recent graduates, the challenge is even greater. Many job seekers come from educational backgrounds that use different CV conventions from the countries they are applying in. A CV that works in one country may be entirely inappropriate in another. ApliSense bridges this gap — giving candidates a clear, data-driven view of how their CV compares to real hiring expectations, and what specific steps to take to improve it.</p>
<h2>What ApliSense Does</h2>
<ul>
<li><strong>CV &amp; ATS Analysis:</strong> Upload your CV in PDF or DOCX format and receive a detailed match score against job roles, academic programs, or general recruiter standards. Our engine evaluates structure, keywords, skill alignment, and formatting quality.</li>
<li><strong>Skill Gap Detection:</strong> We highlight the specific skills, qualifications, and keywords your CV is missing for a target role — so you can focus your improvements on what matters most to recruiters and hiring systems.</li>
<li><strong>Recruiter Mode:</strong> Upload multiple CVs simultaneously and rank candidates objectively based on their fit for a specific job role — ideal for HR teams and hiring managers managing high-volume hiring.</li>
<li><strong>Study Abroad Analysis:</strong> Evaluate your CV against the expectations of international university programs and scholarship applications.</li>
<li><strong>Actionable Recommendations:</strong> Every analysis includes specific, practical improvement suggestions — not just a score. We tell you exactly what to add, what to remove, and how to restructure your CV for maximum impact.</li>
<li><strong>Completely Free:</strong> All core features are available at no cost. No credit card required. No sign-up needed.</li>
</ul>
${AD}
<h2>Who We Help</h2>
<ul>
<li><strong>Recent Graduates</strong> entering the job market for the first time and needing guidance on how to structure an entry-level CV that competes with more experienced candidates.</li>
<li><strong>Career Changers</strong> transitioning from one industry to another and needing to reposition existing experience for a new target role.</li>
<li><strong>International Applicants</strong> applying for jobs or academic programs in countries with different CV conventions — such as the UK, USA, Canada, Australia, or Europe.</li>
<li><strong>Experienced Professionals</strong> ensuring their CV stays competitive and aligned with current recruiter expectations in their specific field.</li>
<li><strong>Students Applying Abroad</strong> presenting their academic background in a format that meets international university admissions standards.</li>
<li><strong>Recruiters and HR Teams</strong> managing high-volume hiring who need a quick, objective way to compare multiple applicants against a role.</li>
</ul>
<h2>Our Approach to CV Analysis</h2>
<p>Unlike basic keyword scanners, ApliSense takes a multi-dimensional approach to CV evaluation. Our analysis engine examines five key dimensions: structural completeness, skills alignment, keyword density and relevance, experience quality signals, and format compliance. This holistic approach means the feedback you receive is more meaningful and actionable than a simple match percentage.</p>
<h2>Our Values</h2>
<p><strong>Accessibility:</strong> Powerful career development tools should be available to everyone, regardless of background or financial situation. Our core tools will always remain free.</p>
<p><strong>Transparency:</strong> We explain exactly how our analysis engine works so users understand every recommendation and can take confident action on the feedback they receive.</p>
<p><strong>Continuous Improvement:</strong> Our job database, analysis algorithms, and career resources are continuously updated to stay current with evolving job market standards and recruiter practices.</p>
<div class="ap-cta"><h3 style="margin-top:0">Ready to Improve Your CV?</h3>
<p style="margin-bottom:1rem">Upload your CV now and get a free, detailed analysis in seconds. No sign-up required.</p>
<a href="/" class="ap-btn">Analyze My CV — It's Free</a></div>
</main>`) },

/* ── FAQ ── */
{ route:'/faq', title:'FAQ – Frequently Asked Questions | ApliSense CV Analyzer',
  desc:'Find answers to the most common questions about ApliSense — how our CV analysis works, ATS optimization, data privacy, file formats, match scores, and more.',
  extra:`<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is ApliSense?","acceptedAnswer":{"@type":"Answer","text":"ApliSense is a free, AI-powered CV analysis platform that helps job seekers, graduates, and professionals optimize their resumes for ATS systems and real-world recruiter expectations."}},{"@type":"Question","name":"Is ApliSense free?","acceptedAnswer":{"@type":"Answer","text":"Yes. All core features are completely free. No hidden charges, no sign-up requirements, no credit card needed."}},{"@type":"Question","name":"What is ATS?","acceptedAnswer":{"@type":"Answer","text":"ATS stands for Applicant Tracking System. Studies estimate up to 75% of CVs are rejected by ATS software before being seen by a person."}},{"@type":"Question","name":"Is my CV data stored or shared?","acceptedAnswer":{"@type":"Answer","text":"No. Your CV is processed temporarily and then discarded. We do not permanently store your documents or share your data with third parties."}},{"@type":"Question","name":"What file formats does ApliSense accept?","acceptedAnswer":{"@type":"Answer","text":"ApliSense accepts CVs in PDF and DOCX formats."}},{"@type":"Question","name":"How long should my CV be?","acceptedAnswer":{"@type":"Answer","text":"For most professionals with under ten years of experience, one page is ideal. For more experienced professionals, two pages is acceptable."}},{"@type":"Question","name":"Should I use the same CV for every application?","acceptedAnswer":{"@type":"Answer","text":"No. ATS systems score untargeted CVs lower because they lack specific keywords for each role. Always tailor your CV."}}]}</script>`,
  body: wp(`<main class="ap-main">
<h1>Frequently Asked Questions</h1>
<p style="color:#9ca3af;margin-bottom:2rem">Everything you need to know about ApliSense, how our CV analysis works, data privacy, and how to get the most from our free tools.</p>
${AD}
<h2>About ApliSense</h2>
<details><summary>What is ApliSense?</summary><div>ApliSense is a free, AI-powered CV analysis platform that helps job seekers, graduates, international applicants, and career changers optimize their resumes for Applicant Tracking Systems (ATS) and real-world recruiter expectations. Upload your CV, select a target job role or study program, and receive a detailed match score with personalized recommendations for improvement.</div></details>
<details><summary>Is ApliSense really free?</summary><div>Yes. All core features — CV analysis, ATS optimization, skill gap detection, and all blog content and guides — are completely free. There are no hidden charges, no sign-up requirements, and no credit card needed. We are funded through advertising.</div></details>
<details><summary>Do I need to create an account?</summary><div>No. You can use the full CV analysis features without creating an account or providing any registration details. Simply upload your CV, choose your target role, and get your results instantly.</div></details>
<details><summary>Who built ApliSense?</summary><div>ApliSense was built by a team passionate about making career development tools accessible to everyone. The platform was developed after observing how many talented applicants were being filtered out of job processes not due to a lack of skills, but due to poorly optimized CVs.</div></details>
<h2>CV Analysis &amp; ATS</h2>
<details><summary>What does ATS mean and why does it matter?</summary><div>ATS stands for Applicant Tracking System. It is software used by most companies to automatically scan, filter, and rank CVs before a human recruiter reviews them. Studies estimate that up to 75% of CVs are rejected by ATS software before ever being seen by a person. This means even if you are fully qualified, a poorly formatted or keyword-missing CV can result in automatic rejection. ApliSense helps you optimize your CV specifically for ATS compatibility.</div></details>
<details><summary>How does the ApliSense CV analysis work?</summary><div>When you upload your CV, our analysis engine extracts the key sections — work experience, education, and skills — and compares them against a database of job role requirements, industry standards, and ATS criteria. The result is a detailed compatibility score along with specific feedback on what is missing and how to improve your CV for your target role.</div></details>
<details><summary>What file formats does ApliSense accept?</summary><div>ApliSense accepts CVs in PDF and DOCX (Microsoft Word) formats. These are the two most commonly used CV formats and the ones that ATS systems parse best. Avoid submitting CVs as images or scanned documents as these cannot be analyzed by text-based systems.</div></details>
<details><summary>What is a good CV match score?</summary><div>A match score of 70% or above indicates your CV is well-aligned with the target role. Scores between 50 and 69% suggest moderate alignment with identifiable gaps worth addressing. Scores below 50% indicate significant misalignment in skills, keywords, or structure.</div></details>
<details><summary>Does ApliSense work for all industries?</summary><div>ApliSense covers technology, finance, healthcare, marketing, education, engineering, cybersecurity, data analytics, project management, and more. Our job role database is continuously expanded to cover new roles and emerging industries.</div></details>
${AD}
<h2>Privacy &amp; Data</h2>
<details><summary>Is my CV data stored or shared?</summary><div>No. When you upload your CV, it is processed temporarily in memory to generate your analysis results. We do not permanently store your uploaded CV documents. Once the analysis session ends, your document is discarded. We do not share your personal data or document contents with third parties.</div></details>
<details><summary>Is it safe to upload my CV?</summary><div>Yes. All data transmitted between your device and our platform is encrypted using HTTPS. Your uploaded documents are processed securely and not retained after the analysis session completes.</div></details>
<details><summary>Does ApliSense use my data to train AI models?</summary><div>No. We do not use the contents of your uploaded CV documents to train any AI or machine learning models. Your document data is used solely to generate the analysis results returned to you.</div></details>
<h2>Improving Your CV</h2>
<details><summary>What are the most common CV mistakes that cause rejection?</summary><div>The most common CV mistakes include: using generic objective statements instead of a targeted professional summary; listing job duties instead of achievements; missing industry-specific keywords ATS systems scan for; using tables or complex layouts that confuse ATS parsers; including irrelevant personal information; and not tailoring the CV to each specific job application.</div></details>
<details><summary>How long should my CV be?</summary><div>For most professionals with fewer than ten years of experience, a one-page CV is ideal. For more experienced professionals or academic CVs, two pages is typically acceptable. Beyond two pages risks losing the recruiter's attention.</div></details>
<details><summary>Should I use the same CV for every application?</summary><div>No. Sending the same CV to every job listing is one of the most common job search mistakes. ATS systems score untargeted CVs lower because they lack the specific keywords and requirements of the individual role. ApliSense helps you identify exactly what changes to make for each target position.</div></details>
<details><summary>What is the difference between a CV and a resume?</summary><div>A CV (Curriculum Vitae) is a comprehensive document detailing your full academic and professional history, typically used in academic, medical, research, and international job applications. A resume is a shorter, more targeted document — usually one to two pages — summarizing only the most relevant experience for a specific job. In the UK, "CV" is used for both. In the US and Canada, "resume" is more common for professional roles.</div></details>
<div class="ap-cta"><h3 style="margin-top:0">Still have questions?</h3>
<p style="margin-bottom:1rem">Reach out and we will be happy to help.</p>
<a href="/contact" class="ap-btn">Contact Us</a> <a href="/" class="ap-btn ap-btn-o">Try CV Analysis Free</a></div>
</main>`) },

/* ── CONTACT ── */
{ route:'/contact', title:'Contact Us – ApliSense CV Analysis Platform',
  desc:'Get in touch with the ApliSense team for support, partnership inquiries, feedback, or general questions about our free CV analysis tools.',
  body: wp(`<main class="ap-main">
<h1>Contact Us</h1>
<p>Have a question, feedback, or want to explore a partnership? We would love to hear from you. Fill in the form below or reach us directly by email at <a href="mailto:contactaplisense@gmail.com" style="color:#06b6d4">contactaplisense@gmail.com</a>.</p>
${AD}
<div style="background:#12121a;border:1px solid #1f1f2e;border-radius:1rem;padding:2rem;margin:2rem 0">
<h2 style="margin-top:0;border:none">Send Us a Message</h2>
<div class="ap-g2">
<div><label style="display:block;font-size:.875rem;font-weight:500;margin-bottom:.4rem;color:#d1d5db">Full Name *</label><input placeholder="Your full name" style="width:100%;padding:.75rem;border:1px solid #1f1f2e;border-radius:.5rem;font-size:.875rem;background:#0a0a0f;color:#fff;font-family:inherit"/></div>
<div><label style="display:block;font-size:.875rem;font-weight:500;margin-bottom:.4rem;color:#d1d5db">Email Address *</label><input type="email" placeholder="your@email.com" style="width:100%;padding:.75rem;border:1px solid #1f1f2e;border-radius:.5rem;font-size:.875rem;background:#0a0a0f;color:#fff;font-family:inherit"/></div>
</div>
<div style="margin:1rem 0"><label style="display:block;font-size:.875rem;font-weight:500;margin-bottom:.4rem;color:#d1d5db">Subject</label>
<select style="width:100%;padding:.75rem;border:1px solid #1f1f2e;border-radius:.5rem;font-size:.875rem;background:#0a0a0f;color:#fff;font-family:inherit"><option>Select a topic...</option><option>Technical Support</option><option>Feature Feedback</option><option>Partnership Inquiry</option><option>Content Collaboration</option><option>Report a Bug</option><option>Other</option></select></div>
<div style="margin-bottom:1rem"><label style="display:block;font-size:.875rem;font-weight:500;margin-bottom:.4rem;color:#d1d5db">Message *</label>
<textarea rows="6" placeholder="Describe your question or request in detail..." style="width:100%;padding:.75rem;border:1px solid #1f1f2e;border-radius:.5rem;font-size:.875rem;background:#0a0a0f;color:#fff;font-family:inherit;resize:none"></textarea></div>
<button style="width:100%;padding:.75rem;background:#06b6d4;color:#fff;border:none;border-radius:.5rem;font-weight:600;font-size:.875rem;cursor:pointer;font-family:inherit">Send Message</button>
<p style="text-align:center;font-size:.875rem;color:#6b7280;margin-top:1rem">Or email us at <a href="mailto:contactaplisense@gmail.com" style="color:#06b6d4">contactaplisense@gmail.com</a></p>
</div>
<h2>How Can We Help?</h2>
<div class="ap-g2">
<div class="ap-card"><h3>Platform Support</h3><p>Trouble uploading a CV, experiencing analysis errors, or encountering technical issues on the platform.</p></div>
<div class="ap-card"><h3>Feature Requests</h3><p>Share ideas for new features, job roles, or improvements you would like to see added to ApliSense.</p></div>
<div class="ap-card"><h3>Content &amp; Partnerships</h3><p>For career coaches, recruiters, or organizations interested in collaborating with ApliSense on content or tools.</p></div>
<div class="ap-card"><h3>Press &amp; Media</h3><p>For media inquiries, interviews, or coverage about ApliSense and our career development tools.</p></div>
</div>
<div style="background:#12121a;border:1px solid #1f1f2e;border-radius:.75rem;padding:1.5rem;margin-top:1.5rem">
<h3 style="margin-top:0">Response Time</h3>
<p>We read every message and aim to respond within 24 to 48 hours on business days, Monday to Friday. For common questions, our <a href="/faq" style="color:#06b6d4">FAQ page</a> may already have the answer.</p>
</div></main>`) },

/* ── BLOG INDEX ── */
{ route:'/blog', title:'CV & Resume Writing Blog – Career Advice, ATS Tips & Job Search Guides | ApliSense',
  desc:'Expert CV writing tips, ATS optimization guides, cover letter advice, and career resources to help you land more interviews and advance your job search in 2026.',
  body: wp(`<div class="ap-wide">
<div style="text-align:center;margin-bottom:3rem">
<h1>CV &amp; Career Writing Blog</h1>
<p style="font-size:1.1rem;color:#9ca3af;max-width:42rem;margin:.5rem auto 0">Expert guides on CV writing, ATS optimization, cover letters, LinkedIn, international applications, and everything you need to land more interviews in 2026.</p>
</div>
${AD}
<div class="ap-g3">
${[['/blog/how-to-write-a-cv','How to Write a CV in 2026: Step-by-Step Guide','Learn how to write a professional CV in 2026 — every section explained with formatting tips and ATS optimization advice.','March 2026','8 min'],
['/blog/ats-resume-keywords','ATS Resume Keywords: How to Optimize Your CV','What ATS keywords are and exactly how to identify and include the right ones to pass automated screening.','March 2026','9 min'],
['/blog/common-cv-mistakes','15 Common CV Mistakes That Get You Rejected','The most common CV mistakes that cause instant rejection — and exactly how to fix each one.','March 2026','10 min'],
['/blog/best-cv-format-2026','Best CV Format for 2026: Structure & Design Guide','Which CV structure, layout, and design choices work best for ATS systems and modern recruiters.','March 2026','9 min'],
['/blog/how-to-pass-ats','How to Pass ATS Screening in 2026: Complete Guide','Exactly how applicant tracking systems work and what you need to do to get your CV past the filter.','March 2026','10 min'],
['/blog/cover-letter-guide','How to Write a Cover Letter in 2026 with Examples','Complete guide covering structure, opening lines, body paragraphs, and closing with examples.','March 2026','9 min'],
['/blog/linkedin-profile-optimization','LinkedIn Profile Optimization Guide 2026','How to optimize your LinkedIn profile to attract recruiters and land more job opportunities.','March 2026','10 min'],
['/blog/international-cv-format','International CV Format: UK, USA, Canada, Europe & More','CV format differences across countries and how to adapt your resume for international applications.','March 2026','10 min'],
['/blog/resume-vs-cv',"Resume vs CV: What's the Difference?",'The key differences between a resume and a CV, when to use each, and how terminology varies by country.','March 2026','8 min'],
['/blog/skills-for-remote-jobs','Top Skills for Remote Jobs in 2026','The most in-demand skills for remote jobs — technical tools and behavioural competencies employers evaluate.','March 2026','9 min'],
].map(([h,t,d,date,time])=>`<a href="${h}" class="ap-card">
<p style="font-size:.75rem;color:#6b7280;margin-bottom:.5rem">${date} &middot; ${time} read</p>
<h3 style="font-size:.95rem;margin-bottom:.5rem">${t}</h3>
<p style="font-size:.875rem">${d}</p>
<span class="ar">Read more →</span>
</a>`).join('')}
</div></div>`) },

/* ── PRIVACY ── */
{ route:'/privacy', title:'Privacy Policy – ApliSense',
  desc:'Read the ApliSense Privacy Policy. Learn how we collect, use, and protect your personal data when you use our CV analysis and career tools.',
  body: wp(`<main class="ap-main">
<h1>Privacy Policy</h1><p class="ap-meta">Last updated: March 2026</p>
<h2>1. Introduction</h2>
<p>Welcome to ApliSense ("we", "our", or "us"). We operate the website aplisense.online, which provides AI-powered CV analysis, ATS optimization tools, career guidance resources, and related services. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our Service. By accessing or using ApliSense, you agree to the terms of this Privacy Policy.</p>
<h2>2. Information We Collect</h2>
<p><strong>Information you provide directly:</strong> CV and resume files in PDF or DOCX format for analysis. Contact information such as name and email address if you submit a contact form inquiry.</p>
<p><strong>Information collected automatically:</strong> Pages visited, features used, time spent on the platform, IP address, browser type and version, operating system, language preferences, and referral URL.</p>
${AD}
<h2>3. How We Use Your Information</h2>
<ul>
<li><strong>Providing the Service:</strong> Processing and analyzing your uploaded CV documents to generate match scores, skill gap reports, and improvement recommendations.</li>
<li><strong>Improving the Platform:</strong> Understanding how users interact with ApliSense to improve our tools, features, and content quality.</li>
<li><strong>Customer Support:</strong> Responding to your inquiries and feedback submitted through our contact channels.</li>
<li><strong>Analytics:</strong> Monitoring aggregate usage patterns and performance metrics via Google Analytics.</li>
<li><strong>Legal Compliance:</strong> Complying with applicable laws, regulations, and legal obligations.</li>
<li><strong>Security:</strong> Detecting, preventing, and addressing fraud, abuse, and other harmful activities.</li>
</ul>
<h2>4. How We Handle Uploaded Documents</h2>
<p>When you upload a CV to ApliSense, it is processed by our analysis system to generate evaluation results. This processing occurs temporarily and is used solely to provide the requested analysis. <strong>We do not permanently store your uploaded CV documents.</strong> Files are processed in memory and discarded after the analysis is complete. We do not use the contents of your uploaded documents to train machine learning models or AI systems.</p>
<h2>5. Information Sharing and Disclosure</h2>
<p>We do not sell, rent, trade, or otherwise share your personal information with third parties for their own marketing or commercial purposes. We may share information only with trusted service providers who assist us in operating the platform (subject to contractual data protection obligations), when required by law or court order, or in the event of a business transfer.</p>
<h2>6. Cookies and Tracking Technologies</h2>
<p>ApliSense uses essential cookies necessary for basic platform functioning, analytics cookies via Google Analytics, and advertising cookies through our participation in the Google AdSense program. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" style="color:#06b6d4">Google's Ads Settings</a> or the <a href="https://www.aboutads.info/choices/" style="color:#06b6d4">Network Advertising Initiative opt-out page</a>.</p>
<h2>7. Google AdSense and Advertising</h2>
<p>ApliSense participates in the Google AdSense program (publisher ID: ${PUB}) to display advertisements. These advertisements help us fund the free services we provide. Google AdSense uses cookies and the DoubleClick cookie to serve relevant ads based on your browsing history and interests. We do not control the specific advertisements shown. For more information, visit <a href="https://policies.google.com/technologies/partner-sites" style="color:#06b6d4">Google's Privacy &amp; Terms</a>.</p>
<h2>8. Data Security</h2>
<p>We take reasonable and appropriate technical and organizational measures to protect your personal information, including HTTPS encryption for all data transmission, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure.</p>
<h2>9. Your Rights</h2>
<p>Depending on your location, you may have rights including: access to personal information we hold, correction of inaccurate data, deletion of your personal data, objection to certain processing, and data portability. To exercise any of these rights, please contact us at <a href="mailto:contactaplisense@gmail.com" style="color:#06b6d4">contactaplisense@gmail.com</a>.</p>
<h2>10. Children's Privacy</h2>
<p>ApliSense is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.</p>
<h2>11. Third-Party Links</h2>
<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of third-party websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
<h2>12. Changes to This Policy</h2>
<p>We may update this Privacy Policy from time to time. When we make changes, we will update the "Last updated" date above. Continued use of the platform after changes are posted constitutes your acceptance of the updated policy.</p>
<h2>13. Contact Us</h2>
<div style="background:#12121a;border:1px solid #1f1f2e;border-radius:.75rem;padding:1.25rem;margin-top:.75rem">
<p style="margin:0;color:#d1d5db"><strong>ApliSense</strong><br>Email: <a href="mailto:contactaplisense@gmail.com" style="color:#06b6d4">contactaplisense@gmail.com</a><br>Website: <a href="https://aplisense.online" style="color:#06b6d4">aplisense.online</a></p>
</div></main>`) },

/* ── TERMS ── */
{ route:'/terms', title:'Terms and Conditions – ApliSense',
  desc:'Read the ApliSense Terms and Conditions. Understand the rules, responsibilities, and agreements that apply when using our CV analysis and career tools.',
  body: wp(`<main class="ap-main">
<h1>Terms and Conditions</h1><p class="ap-meta">Last updated: March 2026</p>
<h2>1. Acceptance of Terms</h2>
<p>By accessing or using the ApliSense website at aplisense.online, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms, you may not access or use the Service.</p>
<h2>2. Description of Service</h2>
<p>ApliSense provides AI-powered CV and resume analysis against job roles and study programs, ATS compatibility evaluation, skill gap detection and improvement recommendations, recruiter mode for comparing multiple CVs, career guidance articles and educational resources, resume keyword guides, and CV templates and formatting guides. Core features are provided free of charge.</p>
${AD}
<h2>3. User Responsibilities</h2>
<p>By using ApliSense, you agree to use the Service only for lawful purposes, only upload documents you own or have the legal right to share, not upload documents containing malware or harmful code, not use automated bots or scrapers to access the Service, and not attempt to gain unauthorized access to any portion of the Service.</p>
<h2>4. Uploaded Content</h2>
<p>When you upload a CV, you grant us a limited, non-exclusive license to process that document for the purpose of generating your analysis results. This license terminates once the analysis session ends. You confirm you own or have the necessary rights to upload any document you submit and remain fully responsible for its content.</p>
<h2>5. No Guarantee of Outcomes</h2>
<p>ApliSense provides CV analysis tools and career guidance for informational purposes only. Use of our Service does not guarantee securing a job interview, passing an ATS screening system, receiving university admission, or any other specific outcome. Our tools are intended to improve your application materials, not to guarantee results.</p>
<h2>6. Intellectual Property</h2>
<p>All content on the ApliSense platform — including text, graphics, logos, interface design, analysis algorithms, blog articles, and educational resources — is the property of ApliSense or its content providers and is protected by applicable copyright, trademark, and intellectual property laws.</p>
<h2>7. Disclaimer of Warranties</h2>
<p>The Service is provided on an "as is" and "as available" basis without warranties of any kind. ApliSense expressly disclaims all warranties, including implied warranties of merchantability and fitness for a particular purpose.</p>
<h2>8. Limitation of Liability</h2>
<p>To the fullest extent permitted by applicable law, ApliSense shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.</p>
<h2>9. Third-Party Services and Advertising</h2>
<p>ApliSense uses Google AdSense to display advertisements. These advertisements help fund our free services. Google may display personalized ads based on your browsing history and interests. We are not responsible for the content of third-party advertisements.</p>
<h2>10. Privacy</h2>
<p>Your use of the Service is also governed by our <a href="/privacy" style="color:#06b6d4">Privacy Policy</a>, which is incorporated into these Terms by reference.</p>
<h2>11. Termination</h2>
<p>We reserve the right to suspend or terminate access to the Service at any time, with or without cause or notice, for any user who violates these Terms.</p>
<h2>12. Governing Law</h2>
<p>These Terms shall be governed by and construed in accordance with applicable laws. Disputes shall be resolved through negotiation in good faith before being referred to appropriate legal channels.</p>
<h2>13. Contact</h2>
<div style="background:#12121a;border:1px solid #1f1f2e;border-radius:.75rem;padding:1.25rem;margin-top:.75rem">
<p style="margin:0;color:#d1d5db"><strong>ApliSense</strong><br>Email: <a href="mailto:contactaplisense@gmail.com" style="color:#06b6d4">contactaplisense@gmail.com</a><br>Website: <a href="https://aplisense.online" style="color:#06b6d4">aplisense.online</a></p>
</div></main>`) },
];
