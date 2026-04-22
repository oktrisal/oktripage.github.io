import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-8">

        {/* IMAGE */}
        <div className="w-[180px] shrink-0">
          <img
            src="/oktripage.github.io/images/me.jpg"
            alt="Portrait"
            width={250}
            height={300}
            className="w-full rounded-2xl border border-slate-200 object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="max-w-2xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            Hugo Anderssén 
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frontend / Full-Stack Developer
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-600">
            I build clean, practical web applications focused on usability and
            performance.
          </p>

          {/* SKILLS */}
          <div className="mt-5 flex flex-wrap gap-2">

            {/* Primary skills */}
            <span className="group cursor-default rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              HTML
            </span>

            <span className="group cursor-default rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              CSS
            </span>

            <span className="group cursor-default rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              JavaScript / TypeScript
            </span>

            {/* Secondary skill */}
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
              SQL
            </span>
          </div>

          {/* CONTACT */}
          <div className="mt-5 text-sm text-slate-600 space-y-1">
            <p>Email: hugo.andersse@gmail.com</p>
            <p>Phone: +358 440 432 558</p>
          </div>
        </div>

      </div>
    </header>
  );
}