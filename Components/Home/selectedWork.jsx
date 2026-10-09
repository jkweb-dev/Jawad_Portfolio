"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "DineFlow",
    category: "Restaurant Management",
    description:
      "A full-stack restaurant ordering and management system built for real-world operations.",
    image: "/images/projects/DineFlow.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    href: "/projects/dineflow",
  },
  {
    number: "02",
    title: "AI Customer Support",
    category: "AI · RAG System",
    description:
      "An intelligent support platform that uses AI and document retrieval to answer customer questions.",
    image: "/images/projects/Ai Customer.png",
    technologies: ["Next.js", "Gemini", "MongoDB"],
    href: "/projects/ai-customer-support",
  },
  {
    number: "03",
    title: "Disaster Response",
    category: "Emergency Management",
    description:
      "A real-time emergency response platform connecting victims, rescue teams, and administrators.",
    image: "/images/projects/Disaster .png",
    technologies: ["Next.js", "Node.js", "Socket.IO"],
    href: "/projects/disaster-response",
  },
];

const SelectedWork = () => {
  return (
    <section className="relative overflow-hidden bg-[#EFE8D8] px-5 py-24 text-[#0F1D18] sm:px-8 lg:px-12 lg:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[#C9A55C]/20 blur-[150px]" />
        <div className="absolute -right-40 bottom-20 h-[520px] w-[520px] rounded-full bg-[#2F6B55]/15 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between gap-6 border-b border-[#0F1D18]/15 pb-8 sm:mb-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#8A6A28] sm:w-12" />

              <span className="text-[11px] font-medium tracking-[0.18em] text-[#8A6A28] sm:text-xs">
                Selected work
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.8rem,5.5vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.035em]">
              Things{" "}
              <span className="bg-gradient-to-r from-[#B8903F] via-[#9C7A35] to-[#7A5C1E] bg-clip-text italic text-transparent">
                I&apos;ve built.
              </span>
            </h2>
          </div>

          <span className="hidden rounded-full border border-[#0F1D18]/20 px-4 py-1.5 text-xs tracking-[0.08em] text-[#0F1D18]/65 sm:block">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group"
            >
              <Link
                href={project.href}
                className="relative flex h-full flex-col rounded-[28px] border border-[#0F1D18]/10 bg-[#F8F3E8] p-3 shadow-[0_30px_70px_-45px_rgba(15,29,24,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#8A6A28]/40 hover:shadow-[0_45px_90px_-40px_rgba(15,29,24,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6A28]"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-[20px] bg-[#0F1D18] ring-1 ring-[#0F1D18]/10">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D18]/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Category chip */}
                    <span className="absolute left-3.5 top-3.5 rounded-full border border-[#EFE8D8]/20 bg-[#0F1D18]/65 px-3 py-1 text-[11px] tracking-[0.04em] text-[#EFE8D8] backdrop-blur-md">
                      {project.category}
                    </span>

                    {/* Arrow */}
                    <div className="absolute bottom-3.5 right-3.5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#C9A55C] text-[#0F1D18] opacity-0 shadow-[0_10px_30px_-8px_rgba(201,165,92,0.8)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={17} strokeWidth={1.8} />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                  {/* Number + Title */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-[clamp(1.7rem,2.2vw,2.1rem)] font-normal leading-[1.05] tracking-[-0.025em]">
                      {project.title}
                    </h3>

                    <span className="pt-1 font-serif text-lg italic text-[#8A6A28]">
                      {project.number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-[14px] leading-7 text-[#0F1D18]/65">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#0F1D18]/15 bg-[#0F1D18]/[0.04] px-3.5 py-1.5 text-xs text-[#0F1D18]/70 transition-colors duration-300 group-hover:border-[#8A6A28]/50"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center sm:mt-16">
          <Link
            href="/projects"
            className="group flex items-center gap-3 rounded-full bg-[#0F1D18] py-2 pl-7 pr-2 text-sm font-medium text-[#EFE8D8] shadow-[0_14px_40px_-14px_rgba(15,29,24,0.8)] transition-colors duration-300 hover:bg-[#1A2D26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6A28]"
          >
            Explore all projects

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A55C] text-[#0F1D18] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork