"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#EFE8D8]/10 bg-[#0F1D18]/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group relative z-10 flex items-center gap-3 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9C77F]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A55C] font-serif text-[17px] italic text-[#0F1D18] transition-transform duration-500 group-hover:rotate-[360deg]">
            JK
          </span>

          <span className="flex flex-col">
            <span className="font-serif text-[20px] tracking-[-0.01em] text-[#EFE8D8] sm:text-[22px]">
              Jawad{" "}
              <span className="italic text-[#C9A55C]">Khan</span>
            </span>

            <span className="mt-1 text-[10px] tracking-[0.14em] text-[#EFE8D8]/50">
              Full-Stack Developer
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-[#EFE8D8]/12 bg-[#EFE8D8]/[0.04] p-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative rounded-full px-5 py-2 text-[13px] font-medium tracking-[0.01em] text-[#EFE8D8]/65 transition-all duration-300 hover:bg-[#EFE8D8]/10 hover:text-[#E9C77F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E9C77F]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="group flex items-center gap-2.5 rounded-full bg-[#C9A55C] py-1.5 pl-5 pr-1.5 text-[13px] font-medium text-[#0F1D18] shadow-[0_10px_30px_-10px_rgba(201,165,92,0.7)] transition-all duration-300 hover:bg-[#E9C77F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9C77F]"
          >
            Let's talk

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F1D18] text-[#E9C77F] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#EFE8D8]/20 bg-[#EFE8D8]/[0.06] text-[#EFE8D8] transition-colors duration-300 hover:border-[#C9A55C] hover:text-[#E9C77F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9C77F] md:hidden"
        >
          {menuOpen ? <X size={19} strokeWidth={1.8} /> : <Menu size={19} strokeWidth={1.8} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-0 min-h-screen overflow-hidden bg-[#0F1D18] px-5 pt-28 sm:px-8 md:hidden"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#C9A55C]/[0.14] blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#2F6B55]/30 blur-[130px]" />

            <div className="relative flex flex-col">
              <div className="mb-8 flex items-center gap-3 border-b border-[#EFE8D8]/12 pb-5">
                <span className="h-px w-8 bg-[#C9A55C]" />
                <span className="text-xs tracking-[0.18em] text-[#C9A55C]">
                  Menu
                </span>
              </div>

              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.35,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between border-b border-[#EFE8D8]/12 py-5"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-serif text-sm italic text-[#C9A55C]">
                          0{index + 1}
                        </span>

                        <span className="font-serif text-[40px] leading-none tracking-[-0.02em] text-[#EFE8D8] transition-colors duration-300 group-hover:text-[#E9C77F]">
                          {link.name}
                        </span>
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EFE8D8]/15 text-[#EFE8D8]/60 transition-all duration-300 group-hover:border-[#C9A55C] group-hover:bg-[#C9A55C] group-hover:text-[#0F1D18]">
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.6}
                          className="transition-transform duration-300 group-hover:rotate-45"
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="group flex w-full items-center justify-between rounded-full bg-[#C9A55C] py-2 pl-7 pr-2 text-[#0F1D18] shadow-[0_10px_40px_-10px_rgba(201,165,92,0.7)] transition-colors duration-300 hover:bg-[#E9C77F]"
                >
                  <span className="text-[15px] font-medium">
                    Let's talk
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F1D18] text-[#E9C77F] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;