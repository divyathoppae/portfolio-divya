const ENGINEERING_SKILLS = [
  "Java",
  "TypeScript",
  "Python",
  "SQL",
  "React",
  "Node.js",
  "LangChain",
];

const PRODUCT_SKILLS = [
  "Figma",
  "Jira",
  "LeanIX",
  "Git",
  "Product Strategy",
  "Stakeholder Communication",
];

function PillRow({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-border-soft bg-card px-4 py-1.5 text-sm text-foreground/80"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <PillRow skills={ENGINEERING_SKILLS} />
        <PillRow skills={PRODUCT_SKILLS} />
      </div>
    </section>
  );
}
