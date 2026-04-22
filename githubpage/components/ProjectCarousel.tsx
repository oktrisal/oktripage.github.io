"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

export default function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);

  const getCircularDistance = (index: number, current: number) => {
    const direct = Math.abs(index - current);
    return Math.min(direct, projects.length - direct);
  };

  const scrollToProject = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll("[data-card]")
    ) as HTMLElement[];

    const card = cards[index];
    if (!card) return;

    const left =
      card.offsetLeft - track.clientWidth / 2 + card.clientWidth / 2;

    track.scrollTo({
      left,
      behavior: "smooth",
    });

    setActive(index);
  };

  const move = (dir: "left" | "right") => {
    const length = projects.length;
    const next =
      dir === "left"
        ? (active - 1 + length) % length
        : (active + 1) % length;

    scrollToProject(next);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateActiveFromScroll = () => {
      const cards = Array.from(
        track.querySelectorAll("[data-card]")
      ) as HTMLElement[];

      const center = track.scrollLeft + track.clientWidth / 2;

      let closest = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(center - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActive(closest);
    };

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        updateActiveFromScroll();
      }, 100);
    };

    handleScroll();
    track.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      scrollToProject(0);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-slate-200" />
        </div>

        <div className="relative h-[420px] lg:h-[520px]">
          <button
            type="button"
            onClick={() => move("left")}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-300 bg-white/95 px-4 py-3 shadow-md transition hover:bg-slate-100 lg:left-2"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => move("right")}
            aria-label="Next project"
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-300 bg-white/95 px-4 py-3 shadow-md transition hover:bg-slate-100 lg:right-2"
          >
            →
          </button>

          <div
            ref={trackRef}
            className="flex h-full snap-x snap-mandatory items-center gap-4 overflow-x-auto scroll-smooth px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:px-16"
          >
            <div
              className="shrink-0 basis-[10vw] lg:basis-[12vw]"
              aria-hidden="true"
            />

            {projects.map((project, index) => {
              const distance = getCircularDistance(index, active);
              const isActive = distance === 0;
              const isAdjacent = distance === 1;

              const cardStateClasses = isActive
                ? "scale-100 opacity-100 translate-y-0 shadow-2xl z-10"
                : isAdjacent
                ? "scale-[0.92] opacity-55 translate-y-4 shadow-md"
                : "scale-[0.86] opacity-30 translate-y-6 shadow-sm";

              return (
                <article
                  key={project.title}
                  data-card
                  className={`snap-center shrink-0 w-[72vw] max-w-[1040px] scrollbar-thin scrollbar-thumb-slate-300 overflow-hidden overflow-y-auto rounded-2xl border border-slate-200 bg-white transition-[transform,opacity,box-shadow] duration-500 ease-out will-change-transform lg:w-[52vw] ${cardStateClasses}`}
                >
                  <div className="grid h-[360px] grid-rows-[240px_1fr] lg:h-[460px] lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-1">
                <div className="flex items-center justify-center overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`max-h-full max-w-full object-contain transition-transform duration-500 ${
                      isActive ? "scale-100" : "scale-[1.02]"
                    }`}
                  />
                </div>

                    <div className="flex h-full flex-col justify-between p-5 lg:p-6">
                      <div>
                        <h3
                          className={`font-semibold text-slate-900 transition-all duration-500 ${
                            isActive
                              ? "text-2xl lg:text-3xl"
                              : "text-xl lg:text-2xl"
                          }`}
                        >
                          {project.title}
                        </h3>

                        <p
                          className={`mt-2 text-slate-600 transition-opacity duration-300 whitespace-pre-line ${
                            isActive ? "opacity-100" : "opacity-40"
                          }`}
                        >
                          {project.description}
                        </p>

                        <p
                          className={`mt-8 text-slate-500 transition-opacity duration-300 whitespace-pre-line ${
                            isActive ? "opacity-100" : "opacity-40"
                          }`}
                        >
                          {project.tech}
                        </p>
                      </div>

                      <p
                        className={`text-sm text-slate-500 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-40"
                        }`}
                      >
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div
              className="shrink-0 basis-[10vw] lg:basis-[12vw]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}