"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Layers3 } from "lucide-react";

const WorkHero = () => {
return ( <section className="relative overflow-hidden bg-[#0F1D18] px-5 pb-16 pt-36 text-[#EFE8D8] sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-44">
{/* Ambient background glow */} <div
     aria-hidden="true"
     className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#C9A55C]/10 blur-[120px] sm:h-96 sm:w-96"
   />


  <div className="relative mx-auto max-w-7xl">
    {/* Eyebrow */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 flex items-center gap-3"
    >
      <span className="h-px w-8 bg-[#C9A55C]" />

      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#C9A55C] sm:text-xs">
        Selected Work
      </span>

      <span className="font-mono text-[10px] tracking-widest text-[#EFE8D8]/40 sm:text-xs">
        / 06 PROJECTS
      </span>
    </motion.div>

    {/* Main heading */}
    <motion.h1
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.1 }}
      className="max-w-5xl font-serif text-5xl leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl"
    >
      Thoughtful code.
      <br />
      <span className="font-normal italic text-[#C9A55C]">
        Meaningful
      </span>{" "}
      <span className="text-[#EFE8D8]">work.</span>
    </motion.h1>

    {/* Introduction and project count */}
    <div className="mt-8 flex flex-col gap-8 border-t border-[#EFE8D8]/15 pt-6 sm:mt-10 sm:pt-8 md:flex-row md:items-end md:justify-between">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25 }}
        className="max-w-xl text-sm leading-7 text-[#EFE8D8]/65 sm:text-base sm:leading-8"
      >
        A collection of web applications built to solve real problems,
        streamline workflows, and create thoughtful digital experiences —
        from intelligent systems to e-commerce and restaurant platforms.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#EFE8D8]/20 px-5 py-3 text-xs uppercase tracking-[0.16em] transition-colors duration-300 hover:border-[#C9A55C]/60 hover:bg-[#C9A55C]/10"
      >
        <Layers3 size={15} className="text-[#C9A55C]" />
        Explore projects
        <ArrowDownRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
        />
      </motion.a>
    </div>

    {/* Bottom editorial divider */}
    <div className="mt-12 flex items-center justify-between border-t border-[#EFE8D8]/10 pt-4 sm:mt-16">
      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#EFE8D8]/35 sm:text-[10px]">
        Design · Development · Problem Solving
      </span>

      <span className="font-mono text-[10px] text-[#C9A55C]/80">
        01 — 06
      </span>
    </div>
  </div>
</section>


);
};

export default WorkHero ;
