"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F1D18] px-5 pb-10 pt-28 text-[#EFE8D8] sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[#C9A55C]/[0.14] blur-[140px]" />
        <div className="absolute -bottom-52 -left-40 h-[560px] w-[560px] rounded-full bg-[#2F6B55]/30 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #EFE8D8 1px, transparent 1px), linear-gradient(to bottom, #EFE8D8 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1440px] flex-col justify-between">
        {/* Top Meta */}
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#C9A55C] sm:w-12" />
            <p className="text-[11px] font-medium tracking-[0.18em] text-[#C9A55C] sm:text-xs">
              Full-Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2.5 rounded-full border border-[#EFE8D8]/15 bg-[#EFE8D8]/[0.04] px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <p className="text-[11px] tracking-[0.08em] text-[#EFE8D8]/75 sm:text-xs">
              Open to new projects
            </p>
          </motion.div>
        </div>

        {/* Main Hero */}
        <div className="relative flex flex-1 items-center py-14 lg:py-10">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            {/* Left Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease }}
              >
                <h1 className="max-w-[920px] font-serif text-[clamp(3.4rem,8.4vw,8.4rem)] font-normal leading-[0.95] tracking-[-0.035em]">
                  <span className="block">I build</span>

                  <span className="block bg-gradient-to-r from-[#E9C77F] via-[#C9A55C] to-[#9C7A35] bg-clip-text italic text-transparent">
                    digital
                  </span>

                  <span className="block">experiences.</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease }}
                className="mt-9 flex max-w-lg gap-5 sm:mt-10"
              >
                <span className="mt-1 hidden h-16 w-px shrink-0 bg-gradient-to-b from-[#C9A55C] to-transparent sm:block" />
                <p className="text-[15px] leading-7 text-[#EFE8D8]/65 sm:text-[17px] sm:leading-8">
                  I design and engineer digital products that solve real
                  problems, from polished interfaces to reliable full-stack
                  systems.
                </p>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease }}
                className="mt-9 flex flex-wrap items-center gap-6 sm:mt-10"
              >
                <Link
                  href="/projects"
                  className="group flex items-center gap-3 rounded-full bg-[#C9A55C] py-2 pl-7 pr-2 text-sm font-medium text-[#0F1D18] shadow-[0_10px_40px_-10px_rgba(201,165,92,0.7)] transition-all duration-300 hover:bg-[#E9C77F] hover:shadow-[0_14px_50px_-8px_rgba(233,199,127,0.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9C77F]"
                >
                  View my work
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F1D18] text-[#E9C77F] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group relative flex items-center gap-2 py-1 text-sm font-medium text-[#EFE8D8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9C77F]"
                >
                  Let's talk
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="text-[#C9A55C] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-30 bg-[#C9A55C] transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease }}
              className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:max-w-[460px]"
            >
              {/* Offset arch outline */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-[28px] border border-[#C9A55C]/50 sm:translate-x-6 sm:translate-y-6" />

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[28px] bg-[#1A2D26] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-[#EFE8D8]/10">
                <Image
                  src="/images/profile/me.jpeg"
                  alt="Jawad Khan — Full-Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1D18]/70 via-transparent to-[#C9A55C]/10" />
              </div>

              {/* Name card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease }}
                className="absolute -left-3 bottom-8 z-20 rounded-2xl border border-[#EFE8D8]/15 bg-[#0F1D18]/70 px-5 py-3.5 shadow-2xl backdrop-blur-xl sm:-left-10"
              >
                <p className="font-serif text-xl leading-tight text-[#EFE8D8]">
                  Jawad Khan
                </p>
                <p className="mt-0.5 text-xs text-[#C9A55C]">
                  Full-Stack Developer · 2026
                </p>
              </motion.div>

              {/* Rotating seal */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute -right-2 -top-5 z-20 flex h-24 w-24 items-center justify-center sm:-right-8 sm:h-28 sm:w-28"
              >
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <defs>
                    <path
                      id="seal-circle"
                      d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="#C9A55C" />
                  <text
                    fontSize="9.5"
                    fontWeight="600"
                    letterSpacing="3.2"
                    fill="#0F1D18"
                  >
                    <textPath href="#seal-circle">
                      CLEAN CODE • CRAFTED UI • REAL PRODUCTS •
                    </textPath>
                  </text>
                </svg>
                <span className="absolute font-serif text-2xl italic text-[#0F1D18]">
                  JK
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-5 border-t border-[#EFE8D8]/12 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2">
            {["Next.js", "React", "Node.js", "MongoDB", "Socket.IO"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#EFE8D8]/15 bg-[#EFE8D8]/[0.04] px-3.5 py-1.5 text-xs text-[#EFE8D8]/75 transition-colors duration-300 hover:border-[#C9A55C]/60 hover:text-[#E9C77F]"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Location + Scroll */}
          <div className="flex items-center justify-between gap-8 sm:justify-end">
            <span className="text-xs tracking-[0.08em] text-[#EFE8D8]/55">
              Based in Pakistan · 2026
            </span>

            <div className="hidden items-center gap-3 text-[#C9A55C] sm:flex">
              <span className="text-xs tracking-[0.08em]">
                Scroll to explore
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A55C]/40">
                <ArrowDown
                  size={14}
                  strokeWidth={1.6}
                  className="animate-bounce"
                />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero