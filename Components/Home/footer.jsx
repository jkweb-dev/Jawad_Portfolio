import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0A1511] px-5 py-12 text-[#EFE8D8] sm:px-8 lg:px-12">
      {/* Gold hairline + ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A55C]/60 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-[#C9A55C]/[0.1] blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 border-b border-[#EFE8D8]/12 pb-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9C77F]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A55C] font-serif text-[17px] italic text-[#0F1D18] transition-transform duration-500 group-hover:rotate-[360deg]">
              JK
            </span>

            <span className="flex flex-col">
              <span className="font-serif text-[22px] tracking-[-0.01em]">
                Jawad <span className="italic text-[#C9A55C]">Khan</span>
              </span>

              <span className="mt-1 text-[10px] tracking-[0.14em] text-[#EFE8D8]/50">
                Full-Stack Developer
              </span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1 self-start rounded-full border border-[#EFE8D8]/12 bg-[#EFE8D8]/[0.04] p-1.5 sm:self-auto">
            <Link
              href="/projects"
              className="rounded-full px-4 py-2 text-[13px] font-medium text-[#EFE8D8]/65 transition-all duration-300 hover:bg-[#EFE8D8]/10 hover:text-[#E9C77F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E9C77F]"
            >
              Work
            </Link>

            <Link
              href="/about"
              className="rounded-full px-4 py-2 text-[13px] font-medium text-[#EFE8D8]/65 transition-all duration-300 hover:bg-[#EFE8D8]/10 hover:text-[#E9C77F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E9C77F]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium text-[#EFE8D8]/65 transition-all duration-300 hover:bg-[#EFE8D8]/10 hover:text-[#E9C77F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E9C77F]"
            >
              Contact
              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
                className="text-[#C9A55C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs tracking-[0.08em] text-[#EFE8D8]/50">
            © 2026 Jawad Khan
          </span>

          <span className="text-xs tracking-[0.08em] text-[#C9A55C]/80">
            Designed · Built · Deployed
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer