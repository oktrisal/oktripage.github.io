export default function ExperienceSection() {
  const entries = [
 {
  title: "Frontend Developer",
  organization: "Snellman AB OY",
  period: "2026 – Internship",
  bullets: [
    "Developed an internal auditing tool to efficiently search and review historical invoice data.",
    "Built the frontend using Next.js, TypeScript, HTML, and CSS, with Microsoft SQL Server (MSSQL) for backend data handling.",
    "Focused on performance, usability, and a clean, structured user interface.",
  ],
},
{
  title: "Web Development Projects",
  organization: "Independent Learning",
  period: "2024 – Present",
  bullets: [
    "Built multiple web applications to strengthen frontend development and UI design skills.",
    "Used Git and GitHub for version control, project management, and deployment.",
    "Improved understanding of responsive design, state management, and modern web development practices.",
  ],
},
{
  title: "Software Development Student",
  organization: "Optima",
  period: "2024 – 2027",
  bullets: [
    "Developed coursework and personal projects using HTML, CSS, JavaScript, and TypeScript.",
    "Applied component-based architecture and structured code organization in frontend applications.",
    "Gained experience with databases and SQL through practical assignments and small-scale projects.",
  ],
},
  ];

  return (
    <section className="mt-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
          Experience
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-slate-200" />
      </div>

      <div className="space-y-6">
        {entries.map((entry) => (
          <article
            key={`${entry.title}-${entry.organization}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {entry.organization}
                </p>
              </div>

              <p className="text-sm text-slate-500">{entry.period}</p>
            </div>

            <ul className="mt-5 space-y-3 text-slate-600">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}