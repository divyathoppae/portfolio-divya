import { ArrowRight, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

const GITHUB_URL = "https://github.com/divyathoppae";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/divya-thoppae/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: GITHUB_URL,
    icon: GithubIcon,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function Connect() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
          Get in touch
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s be friends
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center justify-center gap-2 rounded-full border border-border-soft bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="mailto:divyathoppae@gmail.com"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          <Mail className="h-4 w-4" strokeWidth={2.25} />
          divyathoppae@gmail.com
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
        </a>
      </div>
    </section>
  );
}
