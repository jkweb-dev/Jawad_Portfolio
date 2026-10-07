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
    image: "/images/projects/Dine_Flow.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    href: "/projects/dineflow",
  },
  {
    number: "02",
    title: "AI Customer Support",
    category: "AI · RAG System",
    description:
      "An intelligent support platform that uses AI and document retrieval to answer customer questions.",
    image: "/images/projects/Ai Assistant.png",
    technologies: ["Next.js", "Gemini", "MongoDB"],
    href: "/projects/ai-customer-support",
  },
  {
    number: "03",
    title: "Disaster Response",
    category: "Emergency Management",
    description:
      "A real-time emergency response platform connecting victims, rescue teams, and administrators.",
    image: "/images/projects/Disaster System.png",
    technologies: ["Next.js", "Node.js", "Socket.IO"],
    href: "/projects/disaster-response",
  },
];

const SelectedWork = () => {
  return (
    <section className="bg-[#FFF9F3] px-5 py-24 text-[#171412] sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-12 flex items-end justify-between border-b border-[#E7DDD3] pb-6 sm:mb-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C92A2A]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#6F6861] sm:text-[9px]">
                Selected Work
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              Things I&apos;ve built.
            </h2>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#8A8179] sm:block">
            02 / 05
          </span>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <Link href={project.href} className="block">

                {/* Image */}
                <div className="relative overflow-hidden rounded-[18px] border border-[#E7DDD3] bg-[#F5EDE4]">
                 <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5EDE4]">
  <Image
    src={project.image}
    alt={`${project.title} project screenshot`}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
  />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#171412]/0 transition-colors duration-500 group-hover:bg-[#171412]/10" />

                    {/* Arrow */}
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF9F3] text-[#171412] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="pt-5">

                  {/* Number + Category */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-[0.16em] text-[#C92A2A]">
                      {project.number}
                    </span>

                    <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-[#8A8179]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-2">
                    <h3 className="text-[22px] font-semibold tracking-[-0.045em]">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.6}
                      className="text-[#C92A2A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-[12px] leading-5 text-[#6F6861] sm:text-[13px] sm:leading-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-x-2.5 gap-y-1.5">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#E7DDD3] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-[#6F6861]"
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
            className="group flex items-center gap-3 rounded-full border border-[#171412] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.13em] text-[#171412] transition-all duration-300 hover:border-[#C92A2A] hover:bg-[#C92A2A] hover:text-[#FFF9F3]"
          >
            Explore All Projects

            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork