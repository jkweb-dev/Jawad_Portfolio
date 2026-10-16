
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight,  FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
      className="group min-w-0"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#EFE8D8]/10 bg-[#172720] transition-colors duration-300 group-hover:border-[#C9A55C]/40">
        <div className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#EFE8D8]/15 bg-[#0F1D18]/80 font-mono text-[10px] text-[#EFE8D8]/80 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[#172720] p-3 sm:p-4">
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            loading={index < 2 ? "eager" : "lazy"}
            className="h-full w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full border border-[#EFE8D8]/15 bg-[#0F1D18]/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#EFE8D8]/80 backdrop-blur-md sm:text-[10px]">
            {project.category}
          </span>
        </div>

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#EFE8D8]/15 bg-[#0F1D18]/80 text-[#C9A55C] backdrop-blur-md transition-colors duration-300 group-hover:bg-[#C9A55C] group-hover:text-[#0F1D18]">
          <ArrowUpRight size={17} />
        </div>
      </div>

      <div className="px-1 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-serif text-2xl tracking-tight text-[#EFE8D8] transition-colors duration-300 group-hover:text-[#E9C77F] sm:text-3xl">
            {project.title}
          </h2>

          <span className="mt-2 shrink-0 font-mono text-[10px] text-[#EFE8D8]/35">
            {project.type}
          </span>
        </div>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#EFE8D8]/60">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#EFE8D8]/10 px-3 py-1.5 text-[10px] tracking-wide text-[#EFE8D8]/65 sm:text-[11px]"
            >
              {technology}
            </span>
          ))}
        </div>

       {/* Project action buttons */}
<div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">
  <a
    href={project.github || undefined}
    target={project.github ? "_blank" : undefined}
    rel={project.github ? "noopener noreferrer" : undefined}
    aria-disabled={!project.github}
    onClick={(event) => {
      if (!project.github) {
        event.preventDefault();
      }
    }}
    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
      project.github
        ? "border-[#EFE8D8]/20 text-[#EFE8D8]/80 hover:border-[#C9A55C]/60 hover:bg-[#C9A55C]/10 hover:text-[#E9C77F]"
        : "cursor-not-allowed border-[#EFE8D8]/10 text-[#EFE8D8]/30"
    }`}
  >
    <FaGithub size={18} />
    GitHub
  </a>

  <button
    type="button"
    className="group/details inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C9A55C] px-5 py-3 text-sm font-medium text-[#0F1D18] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E9C77F]"
  >
    <FileText size={16} />
    View Details
    <ArrowUpRight
      size={15}
      className="transition-transform duration-300 group-hover/details:translate-x-0.5 group-hover/details:-translate-y-0.5"
    />
  </button>
</div>
        <div className="mt-6 h-px w-full bg-[#EFE8D8]/10" />
      </div>
    </motion.article>
  );
};

export default ProjectCard ;

