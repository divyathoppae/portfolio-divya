import { Briefcase, User } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-16 pb-24 sm:px-8 sm:pt-24 sm:pb-32"
    >
      {/* Faint dot-grid tucked into the corner, kept subtle and low-opacity */}
      <div
        aria-hidden
        className="bg-dot-grid pointer-events-none absolute -right-16 -top-16 h-72 w-72 opacity-[0.13]"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left column: name, title, tagline */}
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
            Hello, I&apos;m
          </p>
          <h1 className="mt-4 font-heading text-6xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Divya
            <br />
            Thoppae
          </h1>
          <div className="mt-6 flex items-center gap-2 text-lg font-medium text-foreground/90">
            <Briefcase className="h-5 w-5 text-accent" strokeWidth={2.25} />
            Product-minded engineer
          </div>
          <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/70">
            Building products where technology, business, and customer impact
            meet.
          </p>
        </div>

        {/* Right column: portrait with a soft green disc behind it */}
        <div className="relative flex justify-center md:justify-end">
          <div
            aria-hidden
            className="absolute h-72 w-72 rounded-full bg-accent/10 blur-2xl sm:h-80 sm:w-80"
          />
          <div className="relative h-64 w-64 overflow-hidden rounded-full border border-border-soft bg-card shadow-sm sm:h-72 sm:w-72">
            {/*
              Swap this placeholder for your real photo:
              1. Add the image file to /public/images/portrait.jpg
              2. Replace the <User> block below with:
                 import Image from "next/image";
                 <Image
                   src="/images/portrait.jpg"
                   alt="Divya Thoppae"
                   fill
                   className="object-cover"
                 />
            */}
            <div className="flex h-full w-full items-center justify-center bg-accent/5">
              <User className="h-24 w-24 text-accent/40" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
