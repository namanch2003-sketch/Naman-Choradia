import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: FeatureCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className="h-full bg-white border border-border rounded-xl p-6
          shadow-card hover:shadow-card-hover hover:-translate-y-1
          transition-all duration-300 ease-out"
      >
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#EEF3FF] mb-5 group-hover:bg-[#dce8ff] transition-colors duration-200">
          <Icon
            size={20}
            strokeWidth={1.75}
            className="text-accent-DEFAULT"
          />
        </div>

        {/* Title */}
        <h3 className="font-playfair font-semibold text-navy-DEFAULT text-lg mb-2 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-muted text-sm leading-relaxed">
          {description}
        </p>

        {/* Arrow hint */}
        <div className="mt-4 flex items-center gap-1 text-accent-DEFAULT text-sm font-medium font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span>Explore</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
