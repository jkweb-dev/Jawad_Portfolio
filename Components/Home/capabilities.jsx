"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications with modern frontend experiences, powerful backend systems, and structured databases.",
    technologies: "Next.js · React · Node.js · Express · MongoDB",
  },
  {
    number: "02",
    title: "Real-Time Systems",
    description:
      "Connected applications that need live updates, real-time communication, location tracking, and responsive workflows.",
    technologies: "Socket.IO · WebSockets · GPS · Maps",
  },
  {
    number: "03",
    title: "AI-Powered Applications",
    description:
      "Practical AI features integrated into useful products, from intelligent support systems to document-based question answering.",
    technologies: "Gemini · RAG · Embeddings · Vector Search",
  },
  {
    number: "04",
    title: "Backend & API Architecture",
    description:
      "Reliable backend foundations with authentication, REST APIs, database design, validation, and secure application workflows.",
    technologies: "Node.js · Express · JWT · MongoDB · Mongoose",
  },
];

const Capabilities = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F1D18] px-5 py-16 text-[#EFE8D8] sm:px-8 lg:px-12 lg:py-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-[#C9A55C]/[0.12] blur-[140px]" />
        <div className="absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full bg-[#2F6B55]/30 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #EFE8D8 1px, transparent 1px), linear-gradient(to bottom, #EFE8D8 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-10 border-b border-[#EFE8D8]/12 pb-8 sm:mb-12 lg:mb-14">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A55C] sm:w-12" />

              <span className="text-[11px] font-medium tracking-[0.18em] text-[#C9A55C] sm:text-xs">
                Capabilities
              </span>
            </div>

            <span className="hidden rounded-full border border-[#EFE8D8]/15 bg-[#EFE8D8]/[0.04] px-4 py-1.5 text-xs tracking-[0.08em] text-[#EFE8D8]/65 sm:block">
              {String(capabilities.length).padStart(2, "0")} areas of focus
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="max-w-[760px] font-serif text-[clamp(2.2rem,4.2vw,4rem)] font-normal leading-[1.05] tracking-[-0.03em]">
              I build{" "}
              <span className="bg-gradient-to-r from-[#E9C77F] via-[#C9A55C] to-[#9C7A35] bg-clip-text italic text-transparent">
                digital products
              </span>{" "}
              that work.
            </h2>

            <p className="max-w-md text-[14px] leading-7 text-[#EFE8D8]/65 sm:text-[15px] lg:justify-self-end">
              From polished interfaces to reliable backend systems, I focus
              on turning ideas into practical software that solves real
              problems.
            </p>
          </div>
        </div>

        {/* Capability List */}
        <div className="border-t border-[#EFE8D8]/12">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group border-b border-[#EFE8D8]/12 transition-colors duration-500 hover:bg-gradient-to-r hover:from-[#C9A55C]/[0.08] hover:to-transparent"
            >
              <div className="grid gap-3 px-1 py-6 transition-all duration-300 sm:px-3 sm:py-7 lg:grid-cols-[56px_1fr_1.1fr_40px] lg:items-center lg:gap-8 lg:px-5 lg:py-7">
                {/* Number */}
                <span className="font-serif text-base italic text-[#C9A55C]">
                  {capability.number}
                </span>

                {/* Title */}
                <div>
                  <h3 className="font-serif text-[22px] font-normal leading-tight tracking-[-0.02em] text-[#EFE8D8] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#E9C77F] sm:text-[26px] lg:text-[28px]">
                    {capability.title}
                  </h3>
                </div>

                {/* Description + Technologies */}
                <div className="max-w-xl">
                  <p className="text-[13px] leading-6 text-[#EFE8D8]/65 sm:text-[14px]">
                    {capability.description}
                  </p>

                  <p className="mt-2.5 text-xs tracking-[0.04em] text-[#C9A55C]/90">
                    {capability.technologies}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#EFE8D8]/20 text-[#EFE8D8]/70 transition-all duration-300 group-hover:border-[#C9A55C] group-hover:bg-[#C9A55C] group-hover:text-[#0F1D18] lg:flex">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-xs tracking-[0.08em] text-[#EFE8D8]/50">
            Design · Engineering · Problem Solving
          </span>

          <span className="text-xs tracking-[0.08em] text-[#C9A55C]">
            {String(capabilities.length).padStart(2, "0")} capabilities
          </span>
        </div>
      </div>
    </section>
  );
};

export default Capabilities