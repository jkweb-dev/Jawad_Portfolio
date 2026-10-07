"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group relative z-10 flex flex-col leading-none"
        >
          <span className="font-sans text-[19px] font-semibold tracking-[-0.04em] text-[#171412] sm:text-[21px]">
            Jawad <span className="text-[#C92A2A]">Khan</span>
          </span>

          <span className="mt-1 text-[7px] font-medium uppercase tracking-[0.28em] text-[#6F6861]">
            Full-Stack Developer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-[13px] font-medium tracking-[-0.01em] text-[#6F6861] transition-colors duration-300 hover:text-[#171412]"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C92A2A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-[#171412] px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#FFF9F3] transition-all duration-300 hover:bg-[#C92A2A]"
          >
            Let's Talk

            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#E7DDD3] bg-[#FFF9F3] text-[#171412] transition-colors duration-300 hover:border-[#C92A2A] hover:text-[#C92A2A] md:hidden"
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
            className="absolute left-0 right-0 top-0 min-h-screen bg-[#FFF9F3] px-5 pt-28 sm:px-8 md:hidden"
          >
            <div className="flex flex-col">
              <div className="mb-10 border-b border-[#E7DDD3] pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6F6861]">
                  Navigation
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
                      className="group flex items-center justify-between border-b border-[#E7DDD3] py-5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-[#C92A2A]">
                          0{index + 1}
                        </span>

                        <span className="text-[30px] font-medium tracking-[-0.04em] text-[#171412]">
                          {link.name}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.6}
                        className="text-[#6F6861] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C92A2A]"
                      />
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
                  className="group flex w-full items-center justify-between rounded-full bg-[#171412] px-6 py-4 text-[#FFF9F3] transition-colors duration-300 hover:bg-[#C92A2A]"
                >
                  <span className="text-sm font-medium uppercase tracking-[0.08em]">
                    Let's Talk
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
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