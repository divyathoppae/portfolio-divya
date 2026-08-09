import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:px-8">
      {/* Scattered geometric marks in the negative space, kept subtle */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-10 top-10 select-none text-3xl text-accent/20"
      >
        +
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute left-8 top-1/3 h-10 w-10 rotate-45 rounded-sm border border-accent/20"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-1/4 h-2 w-2 rounded-full bg-accent/20"
      />

      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-accent-light">
          Selected work
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h2>

        {/* Add a new card by appending to PROJECTS in src/data/projects.ts */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <a
                key={project.title}
                href={project.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-card transition-shadow hover:shadow-md"
              >
                <div className="flex h-40 items-center justify-center bg-accent/5">
                  <Icon className="h-10 w-10 text-accent/50" strokeWidth={1.5} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-accent-light">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70">
                    {project.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    View project
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
                    />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
