import { Bot, HeartPulse, ListChecks, PiggyBank, type LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  summary: string;
  href: string;
  icon: LucideIcon;
};

// Add a new project by appending an object here. Set `href` to a live
// link (case study, repo, demo) once you have one; "#" is a placeholder.
export const PROJECTS: Project[] = [
  {
    title: "VitalLink",
    category: "Product · Award",
    summary:
      "Verizon Smart Campus winner. A ward-level IoT patient-monitoring system on Verizon Private 5G, edge AI, and federated learning, with a full strategy and ROI model.",
    href: "#",
    icon: HeartPulse,
  },
  {
    title: "BudgetBound",
    category: "Product · Award",
    summary:
      "Disrupt Ventures pitch winner. A student budgeting app for better college financial planning, from market research to prototype.",
    href: "#",
    icon: PiggyBank,
  },
  {
    title: "Conversational AI testing platform",
    category: "Engineering · AI",
    summary:
      "A platform at Pegasystems for validating customer-service voice bots across voice and text channels.",
    href: "#",
    icon: Bot,
  },
  {
    title: "BucketBuddies",
    category: "Engineering",
    summary:
      "A social platform built with React and SQL for interest-based matching around shared bucket lists.",
    href: "#",
    icon: ListChecks,
  },
];
