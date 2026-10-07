"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF9F3] px-5 pb-8 pt-28 text-[#171412] sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
      <div className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1440px] flex-col">

        {/* Top Information */}
        <div className="flex items-center justify-between border-b border-[#E7DDD3] pb-4">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C92A2A]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#6F6861] sm:text-[9px]">
              Full-Stack Developer
            </span>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8A8179] sm:text-[9px]">
            01 / 05
          </span>
        </div>

        {/* Main Hero */}
        <div className="grid flex-1 items-center lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT — Typography */}
          <div className="relative z-10 py-16 lg:py-12">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 font-mono text-[9px] uppercase tracking-[0.22em] text-[#C92A2A] sm:text-[10px]"
            >
              Digital Products · Real-World Systems
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[760px] text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em]"
            >
              <span className="block">I TURN IDEAS</span>

              <span className="block">
                INTO{" "}
                <span className="text-[#C92A2A]">SOFTWARE.</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-9 flex max-w-lg gap-5 sm:mt-10"
            >
              <div className="mt-1 hidden h-10 w-px bg-[#C92A2A] sm:block" />

              <p className="max-w-md text-[14px] leading-6 text-[#6F6861] sm:text-[15px] sm:leading-7">
                I design and engineer thoughtful digital products,
                transforming complex ideas into useful, reliable
                full-stack systems.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-9 flex items-center gap-6"
            >
              <Link
                href="/projects"
                className="group flex items-center gap-3 rounded-full bg-[#171412] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#FFF9F3] transition-all duration-300 hover:bg-[#C92A2A]"
              >
                Explore My Work

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#171412]"
              >
                Let's Talk

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Small Technical Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[8px] uppercase tracking-[0.15em] text-[#8A8179] sm:mt-14 sm:text-[9px]"
            >
              <span>Next.js</span>

              <span className="text-[#C92A2A]">/</span>

              <span>Node.js</span>

              <span className="text-[#C92A2A]">/</span>

              <span>MongoDB</span>

              <span className="text-[#C92A2A]">/</span>

              <span>Socket.IO</span>
            </motion.div>
          </div>

          {/* RIGHT — Portrait */}
          <div className="relative flex items-center justify-center lg:justify-end">

            {/* Vertical technical line */}
            <div className="absolute right-0 top-1/2 hidden h-[70%] -translate-y-1/2 border-l border-[#E7DDD3] lg:block" />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[420px] sm:max-w-[460px] lg:mr-12 lg:max-w-[500px]"
            >
              {/* Image */}
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/profile/me.jpeg"
                  alt="Jawad Khan — Full-Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-contain mix-blend-multiply"
                />
              </div>

              {/* Image label */}
              <div className="absolute bottom-3 left-0 flex items-center gap-3 sm:bottom-5">
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#6F6861]">
                  01
                </span>

                <span className="h-px w-8 bg-[#C92A2A]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#6F6861]">
                  Jawad Khan
                </span>
              </div>

              {/* Small corner detail */}
              <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-[#C92A2A] sm:right-5 sm:top-5" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="flex items-end justify-between border-t border-[#E7DDD3] pt-4"
        >
          <div>
            <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-[#8A8179]">
              Based in
            </span>

            <span className="mt-1 block text-[11px] font-medium tracking-[-0.02em]">
              Pakistan
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#8A8179]">
              Scroll to explore
            </span>

            <ArrowDown
              size={13}
              strokeWidth={1.4}
              className="text-[#C92A2A]"
            />
          </div>

          <div className="text-right">
            <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-[#8A8179]">
              Currently
            </span>

            <span className="mt-1 block text-[11px] font-medium tracking-[-0.02em]">
              Building · Learning
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero