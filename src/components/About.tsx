"use client";

import { Award, Briefcase, User } from "lucide-react";
import { useState } from "react";

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    org: "Pegasystems",
    period: "Jun 2026 to present",
    description:
      "Build AI-powered customer solutions and integrate LLM-powered conversational AI into enterprise workflows.",
  },
  {
    role: "President",
    org: "Disrupt: The FinTech Initiative",
    period: "Apr 2026 to present",
    description:
      "Lead Northeastern's premier fintech org across technology, consulting, ventures, research, and events. Previously Ventures Co-Director and Ventures Participant.",
  },
  {
    role: "Enterprise Architecture Co-op",
    org: "MFS Investment Management",
    period: "Jan to Jun 2026",
    description:
      "Built LeanIX dashboards from 1,000+ software records to surface budgeting, lifecycle, and portfolio insights for leadership.",
  },
  {
    role: "Enterprise Applications Intern",
    org: "Pegasystems",
    period: "Jun to Sep 2025",
    description:
      "Prototyped a real-time conversational AI voice assistant with speech-to-text, LLMs, and text-to-speech (LangChain, Node.js).",
  },
  {
    role: "Enterprise Architecture Co-op",
    org: "Northeastern ITS",
    period: "Jan to Jun 2025",
    description:
      "Created 600+ LeanIX factsheets and reporting dashboards for technology governance.",
  },
];

const AWARDS = [
  "Verizon Smart Campus Competition Winner (VitalLink)",
  "MFS MVP Pitch Finalist",
  "Disrupt Ventures Pitch Competition Winner (BudgetBound)",
];

const TABS = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "awards", label: "Awards", icon: Award },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function About() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  return (
    <section id="about" className="relative px-6 py-24 sm:px-8">
      {/* Faint dot-grid tucked into the corner */}
      <div
        aria-hidden
        className="bg-dot-grid pointer-events-none absolute -left-16 bottom-0 h-64 w-64 opacity-[0.13]"
      />

      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-border-soft bg-card shadow-sm">
          {/* Tab bar */}
          <div className="flex border-b border-border-soft">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-1 items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-b-2 border-accent text-accent"
                      : "border-b-2 border-transparent text-foreground/60 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.25} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="p-8 sm:p-10">
            {activeTab === "about" && (
              <div>
                <h2 className="font-heading text-3xl font-semibold tracking-tight">
                  Why work with me?
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-foreground/75">
                  I&apos;m a Computer Science and Business student at
                  Northeastern with a passion for building products at the
                  intersection of technology, business strategy, and customer
                  impact. Across software engineering, enterprise
                  architecture, and fintech leadership, I work with
                  stakeholders to identify problems, weigh tradeoffs, and
                  ship solutions that create measurable value.
                </p>
              </div>
            )}

            {activeTab === "experience" && (
              <ul className="space-y-8">
                {EXPERIENCE.map((item) => (
                  <li
                    key={`${item.role}-${item.org}`}
                    className="border-l-2 border-border-soft pl-5"
                  >
                    <p className="text-xs font-medium uppercase tracking-widest text-accent-light">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-semibold">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-foreground/70">
                      {item.org}
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/70">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "awards" && (
              <ul className="space-y-4">
                {AWARDS.map((award) => (
                  <li key={award} className="flex items-start gap-3">
                    <Award
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      strokeWidth={2.25}
                    />
                    <span className="text-foreground/80">{award}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
