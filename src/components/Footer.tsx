import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-accent px-6 py-20 text-white sm:px-8">
      {/* Subtle white dot-grid texture across the whole block */}
      <div
        aria-hidden
        className="bg-dot-grid-light pointer-events-none absolute inset-0 opacity-20"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s talk?
        </h2>
        <a
          href="mailto:divyathoppae@gmail.com"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-white/90"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
        </a>
        <p className="mt-4 text-sm text-white/70">
          Divya Thoppae · Greater Boston
        </p>
      </div>
    </footer>
  );
}
