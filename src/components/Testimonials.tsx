import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Divya is a superbright person who quickly learns new skills. She increased the accuracy and completeness of our application catalog by 75% and excelled at cross-team collaboration.",
    name: "Marc Dencker",
    title: "Technology Executive, former manager",
  },
  {
    quote:
      "She jumped right into the agentic framework we were building and delivered on tasks very quickly, combining self-learning with taking direct guidance.",
    name: "Amit A. Patel",
    title: "Software Development Director, Pegasystems",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-accent-light">
          Testimonials
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          What people say
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-border-soft bg-card p-8"
            >
              <Quote className="h-6 w-6 text-accent/40" strokeWidth={2} />
              <blockquote className="mt-4 flex-1 text-foreground/80">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-sm text-accent-light">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
