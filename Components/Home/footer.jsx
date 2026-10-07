import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footer } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="bg-[#171412] px-5 py-10 text-[#FFF9F3] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 border-b border-[#3A3531] pb-8 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="text-[19px] font-semibold tracking-[-0.04em]">
              Jawad <span className="text-[#F97316]">Khan</span>
            </span>

            <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-[#8A8179]">
              Full-Stack Developer
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/projects"
              className="text-[10px] uppercase tracking-[0.1em] text-[#B8B0A9] transition-colors duration-300 hover:text-[#FFF9F3]"
            >
              Work
            </Link>

            <Link
              href="/about"
              className="text-[10px] uppercase tracking-[0.1em] text-[#B8B0A9] transition-colors duration-300 hover:text-[#FFF9F3]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] text-[#B8B0A9] transition-colors duration-300 hover:text-[#FFF9F3]"
            >
              Contact
              <ArrowUpRight
                size={12}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white">
            © 2026 Jawad Khan
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white">
            Designed · Built · Deployed
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer