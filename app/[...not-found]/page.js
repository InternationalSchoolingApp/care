import { notFound } from "next/navigation";

export const metadata = {
  title: "Page not found - International Schooling",
  description:
    "International Schooling, trusted by 14000+ students & parents in 135+ countries, is an accredited online school, offering Elementary, Middle & Online High School programs.",
  robots: "noindex, follow",
  referrer: "no-referrer-when-downgrade",
};

export default function NotFoundCatchAll() {
  notFound();
}
