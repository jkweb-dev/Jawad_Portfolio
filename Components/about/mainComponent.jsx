"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


const ease = [0.22, 1, 0.36, 1];

const approach = [
  {
    number: "01",
    title: "Understand",
    description: "Start with the problem, the people, and the actual goal.",
  },
  {
    number: "02",
    title: "Design",
    description: "Keep the experience clear, useful, and easy to understand.",
  },
  {
    number: "03",
    title: "Build",
    description: "Turn the idea into reliable, maintainable software.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Improve the details until everything feels intentional.",
  },
];

const technologies = [
  {
    category: "Frontend",
    items: "React · Next.js · Tailwind CSS",
  },
  {
    category: "Backend",
    items: "Node.js · Express · REST APIs",
  },
  {
    category: "Database",
    items: "MongoDB · Mongoose",
  },
  {
    category: "AI",
    items: "Gemini · RAG · Embeddings",
  },
  {
    category: "Real-time",
    items: "Socket.IO · GPS · Maps",
  },
  {
    category: "Tools",
    items: "Git · GitHub · Cloudinary",
  },
];

const beliefs = [
  "Good software should be useful.",
  "Complexity should have a reason.",
  "Details matter.",
  "There is always something more to learn.",
];

const MainAboutComponent = () => {
  return (
    <main className="min-h-screen bg-[#EFE8D8] text-[#0F1D18]">
     

      <section className="relative overflow-hidden bg-[#0F1D18] px-5 pb-16 pt-28 text-[#EFE8D8] sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[#C9A55C]/[0.14] blur-[140px]" />
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

        <div className="relative mx-auto max-w-[1200px]">
          <div className="mb-12 flex items-center justify-between border-b border-[#EFE8D8]/12 pb-5 sm:mb-14">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A55C] sm:w-12" />

              <span className="text-[11px] font-medium tracking-[0.18em] text-[#C9A55C] sm:text-xs">
                About
              </span>
            </div>

            <span className="hidden rounded-full border border-[#EFE8D8]/15 bg-[#EFE8D8]/[0.04] px-4 py-1.5 text-xs tracking-[0.08em] text-[#EFE8D8]/65 sm:block">
              Full-Stack Developer
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="relative mx-auto w-full max-w-[260px] sm:max-w-[290px] lg:mx-0"
            >
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-[24px] border border-[#C9A55C]/50 sm:translate-x-4 sm:translate-y-4" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[24px] bg-[#1A2D26] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-[#EFE8D8]/10">
                <Image
                  src="/images/profile/me.jpeg"
                  alt="Jawad Khan — Full-Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 60vw, 290px"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1D18]/60 via-transparent to-[#C9A55C]/10" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="max-w-[760px]"
            >
              <span className="text-xs font-medium tracking-[0.14em] text-[#C9A55C]">
                A little about me
              </span>

              <h1 className="mt-4 font-serif text-[clamp(1.9rem,3.8vw,3.3rem)] font-normal leading-[1.1] tracking-[-0.03em]">
                I&apos;m Jawad Khan, a full-stack developer turning ideas into{" "}
                <span className="bg-gradient-to-r from-[#E9C77F] via-[#C9A55C] to-[#9C7A35] bg-clip-text italic text-transparent">
                  digital solutions that matter.
                </span>
              </h1>

              <div className="mt-6 max-w-[620px] space-y-4 text-[14px] leading-7 text-[#EFE8D8]/65 sm:text-[15px]">
                <p>
                  I enjoy working across the entire product, from the interface
                  people interact with to the backend systems that make
                  everything work.
                </p>

                <p>
                  My projects have taken me through e-commerce, restaurant
                  management, recruitment, emergency response, and
                  AI-powered applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          APPROACH
      ============================================================ */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex items-end justify-between border-b border-[#0F1D18]/15 pb-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#8A6A28]" />

                <span className="text-xs font-medium tracking-[0.14em] text-[#8A6A28]">
                  My approach
                </span>
              </div>

              <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.9rem)] font-normal leading-none tracking-[-0.03em]">
                How I{" "}
                <span className="italic text-[#8A6A28]">work</span>
              </h2>
            </div>

            <span className="hidden rounded-full border border-[#0F1D18]/20 px-4 py-1.5 text-xs tracking-[0.08em] text-[#0F1D18]/65 sm:block">
              Simple process
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease,
                }}
                className="group rounded-[22px] border border-[#0F1D18]/10 bg-[#F8F3E8] p-6 shadow-[0_25px_60px_-45px_rgba(15,29,24,0.55)] transition-all duration-500 hover:-translate-y-1 hover:border-[#8A6A28]/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg italic text-[#8A6A28]">
                    {item.number}
                  </span>

                  <span className="h-px w-8 bg-[#8A6A28]/40 transition-all duration-500 group-hover:w-12 group-hover:bg-[#8A6A28]" />
                </div>

                <h3 className="mt-8 font-serif text-[24px] font-normal leading-none tracking-[-0.02em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#0F1D18]/65">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TECHNOLOGY
      ============================================================ */}

      <section className="border-y border-[#0F1D18]/10 bg-[#F8F3E8] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#8A6A28]" />

                <span className="text-xs font-medium tracking-[0.14em] text-[#8A6A28]">
                  What I work with
                </span>
              </div>

              <p className="max-w-[260px] text-[14px] leading-6 text-[#0F1D18]/60">
                The tools I use to turn ideas into complete digital products.
              </p>
            </div>

            <div className="border-t border-[#0F1D18]/15">
              {technologies.map((technology) => (
                <div
                  key={technology.category}
                  className="group grid grid-cols-[96px_1fr] items-center gap-5 border-b border-[#0F1D18]/15 py-4 transition-colors duration-300 hover:bg-[#C9A55C]/[0.10] sm:grid-cols-[150px_1fr] sm:px-3"
                >
                  <span className="text-xs font-medium tracking-[0.08em] text-[#8A6A28]">
                    {technology.category}
                  </span>

                  <span className="font-serif text-[17px] text-[#0F1D18] transition-transform duration-300 group-hover:translate-x-1 sm:text-[20px]">
                    {technology.items}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BELIEFS
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#0F1D18] px-5 py-16 text-[#EFE8D8] sm:px-8 sm:py-20 lg:px-12">
        <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#C9A55C]/[0.12] blur-[140px]" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A55C]" />

                <span className="text-xs font-medium tracking-[0.14em] text-[#C9A55C]">
                  A few things I believe
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {beliefs.map((belief, index) => (
                <div
                  key={belief}
                  className="rounded-[20px] border border-[#EFE8D8]/12 bg-[#EFE8D8]/[0.04] p-6 transition-colors duration-300 hover:border-[#C9A55C]/50"
                >
                  <span className="font-serif text-base italic text-[#C9A55C]">
                    0{index + 1}
                  </span>

                  <p className="mt-4 font-serif text-[20px] leading-snug text-[#EFE8D8]">
                    {belief}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
      ============================================================ */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0F1D18] px-6 py-8 text-[#EFE8D8] shadow-[0_40px_90px_-40px_rgba(15,29,24,0.75)] sm:px-10 sm:py-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[#C9A55C]/[0.18] blur-[100px]" />

            <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-medium tracking-[0.14em] text-[#C9A55C]">
                  Want to build something?
                </span>

                <p className="mt-2 font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-[-0.02em]">
                  Let&apos;s start a{" "}
                  <span className="italic text-[#E9C77F]">conversation.</span>
                </p>
              </div>

              <Link
                href="/contact"
                className="group flex w-fit items-center gap-3 rounded-full bg-[#C9A55C] py-2 pl-6 pr-2 text-sm font-medium text-[#0F1D18] shadow-[0_10px_40px_-10px_rgba(201,165,92,0.7)] transition-colors duration-300 hover:bg-[#E9C77F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9C77F]"
              >
                Get in touch

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F1D18] text-[#E9C77F] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default MainAboutComponent