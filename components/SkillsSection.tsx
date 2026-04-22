export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Core Technologies",
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks & Tools",
      items: ["React", "Next.js", "Tailwind CSS", "Git", "GitHub"],
    },
    {
      title: "Additional",
      items: ["SQL"],
    },
    {
      title: "Spoken Languages",
      items: ["English", "Swedish", "Finnish", ],
    },
  ];

  return (
    <section className="mt-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
          Skills
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-slate-200" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {group.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}