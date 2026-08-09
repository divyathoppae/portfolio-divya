import { ArrowRight, CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Software Engineer Intern at Pegasystems, building AI-powered enterprise solutions",
  "Enterprise Architecture co-ops at MFS Investment Management and Northeastern ITS",
  "President of Disrupt: The FinTech Initiative",
  "Verizon Smart Campus Competition winner and MFS MVP Pitch finalist",
  "SAP LeanIX Practitioner certified, Level 1 and Level 2",
  "Graduating December 2026, available January 2027",
];

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border-soft bg-card p-8 sm:p-12">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
          Resume
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight">
          The short version
        </h2>

        <ul className="mt-8 space-y-4">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                strokeWidth={2}
              />
              <span className="text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>

        {/*
          Add your resume PDF at /public/resume.pdf and this button will
          serve it directly. Swap the href if you host it elsewhere.
        */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          View full resume
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
        </a>
      </div>
    </section>
  );
}
