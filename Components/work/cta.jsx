"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const WorkCTA = () => {
return ( <section className="bg-[#0F1D18] px-5 py-12 text-[#EFE8D8] sm:px-8 sm:py-16 lg:px-12"> <div className="mx-auto max-w-7xl">
<motion.div
initial={{ opacity: 0, y: 14 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.5 }}
className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-[#C9A55C]/20 bg-[#14241C] px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-8"
>
{/* Subtle gold glow */} <div
         aria-hidden="true"
         className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#C9A55C]/10 blur-[80px]"
       />

      {/* Compact text */}
      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-6 bg-[#C9A55C]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C9A55C]">
            Have an idea?
          </span>
        </div>

        <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
          Let’s create something{" "}
          <span className="italic text-[#C9A55C]">valuable.</span>
        </h2>

        <p className="mt-2 max-w-lg text-sm leading-6 text-[#EFE8D8]/55">
          Have a project or opportunity in mind? Let's start a conversation.
        </p>
      </div>

      {/* Let's talk button */}
      <a
        href="/contact"
        className="group relative inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#C9A55C] px-5 py-3 text-sm font-medium text-[#0F1D18] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E9C77F]"
      >
        <MessageCircle size={16} />
        Let’s talk
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </motion.div>

    {/* Minimal footer note */}
    <div className="mt-5 flex flex-wrap items-center justify-between gap-2 px-1">
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#EFE8D8]/35">
        Open to meaningful collaborations
      </span>

      <span className="font-mono text-[9px] text-[#C9A55C]/60">
        GOOD IDEAS START HERE
      </span>
    </div>
  </div>
</section>


);
};

export default WorkCTA ;
