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
    <section className="bg-[#F5EDE4] px-5 py-24 text-[#171412] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-16 border-b border-[#E7DDD3] pb-8 sm:mb-20 lg:mb-24">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C92A2A]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#6F6861] sm:text-[9px]">
                Capabilities
              </span>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8A8179]">
              03 / 05
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h2  className="text-[clamp(2.5rem,5vw,5.2rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              I BUILD
              <br />
              <span className="text-[#C92A2A]">DIGITAL PRODUCTS</span>
              <br />
              THAT WORK.
            </h2>

            <p className="max-w-md text-[13px] leading-6 text-[#6F6861] sm:text-[14px] sm:leading-7 lg:justify-self-end">
              From polished interfaces to reliable backend systems, I focus
              on turning ideas into practical software that solves real
              problems.
            </p>
          </div>
        </div>

        {/* Capability List */}
        <div className="border-t border-[#DCD0C5]">
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
              className="group border-b border-[#DCD0C5]"
            >
              <div className="grid gap-6 py-8 transition-all duration-300 sm:py-10 lg:grid-cols-[80px_1.1fr_1fr_40px] lg:items-start lg:gap-10 lg:py-12">
                {/* Number */}
                <span className="font-mono text-[9px] tracking-[0.15em] text-[#C92A2A]">
                  {capability.number}
                </span>

                {/* Title */}
                <div>
                  <h3 className="text-[25px] font-semibold tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1 sm:text-[30px] lg:text-[34px]">
                    {capability.title}
                  </h3>
                </div>

                {/* Description + Technologies */}
                <div className="max-w-lg">
                  <p className="text-[13px] leading-6 text-[#6F6861] sm:text-[14px] sm:leading-7">
                    {capability.description}
                  </p>

                  <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8A8179] sm:text-[9px]">
                    {capability.technologies}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#DCD0C5] transition-all duration-300 group-hover:border-[#C92A2A] group-hover:bg-[#C92A2A] group-hover:text-[#FFF9F3] lg:flex">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex items-center justify-between">
          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#8A8179] sm:text-[8px]">
            Design · Engineering · Problem Solving
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#8A8179] sm:text-[8px]">
            04 Capabilities
          </span>
        </div>
      </div>
    </section>
  );
};

export default Capabilities