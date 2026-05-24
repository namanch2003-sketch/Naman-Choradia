import { Mail } from "lucide-react";
import { LinkedinIcon, TwitterXIcon } from "./SocialIcons";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/namanrch", icon: LinkedinIcon },
  { label: "Twitter / X", href: "https://twitter.com/namanrch", icon: TwitterXIcon },
  { label: "Email", href: "mailto:namanch2003@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-navy-DEFAULT text-white">
      <div className="px-6 lg:px-16 xl:px-20 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="font-playfair text-2xl font-bold">NRC</span>
            <span className="text-white/20 text-sm">·</span>
            <span className="font-sans text-sm text-white/50">namanrch.in</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/45 hover:text-white transition-colors duration-200"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs text-white/35">
            © 2025 NRC · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
