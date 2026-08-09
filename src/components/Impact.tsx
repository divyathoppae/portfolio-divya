const STATS = [
  {
    value: "75%",
    label: "Increase in application catalog accuracy at MFS",
  },
  {
    value: "600+",
    label: "LeanIX factsheets built for technology governance",
  },
  {
    value: "1,000+",
    label: "Software records analyzed for portfolio decisions",
  },
];

export default function Impact() {
  return (
    <section className="px-6 py-16 sm:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border-soft bg-card p-8 text-center"
          >
            <p className="font-heading text-4xl font-semibold text-accent">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
