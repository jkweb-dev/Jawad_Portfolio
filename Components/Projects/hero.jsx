
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight,  } from "lucide-react";
import { FaGithub } from "react-icons/fa";

 const ProjectHero = ({ project }) => {
  const heroImage = project.screenshots?.[0];

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#06130F] text-[#EFE8D8]">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(201,165,92,0.12),transparent_48%)]" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[460px] lg:grid-cols-2 lg:gap-12 lg:px-14 lg:py-16">
        {/* Project information */}
        <div className="relative z-10">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#B8B9AF] transition-colors hover:text-[#EFE8D8]"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <p className="mb-5 inline-flex rounded-full border border-[#C9A55C]/25 bg-[#C9A55C]/10 px-3 py-1.5 text-xs font-medium tracking-wide text-[#E3C783]">
            {project.number} / 06
          </p>

          <h1 className="max-w-2xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#D0D1C8] sm:text-lg">
            {project.subtitle}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#D8D8CD]">
              {project.category}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-[#D8D8CD]">
              {project.status}
            </span>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#B7BEB8] sm:text-base">
            {project.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#E6CD91] px-5 py-3 text-sm font-semibold text-[#101711] transition-colors hover:bg-[#F0DDAA]"
              >
                View GitHub
                <FaGithub size={16} />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#EFE8D8] transition-colors hover:text-[#E6CD91]"
              >
                Live Demo
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Project image */}
       
<div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
  {/* Soft gold ambient glow */}
  <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[#C9A55C]/[0.10] blur-3xl" />

  {heroImage ? (
    <div className="relative p-3 sm:p-4">
      {/* Outer decorative frame */}
      <div
        className="pointer-events-none absolute inset-0 border border-[#C9A55C]/50"
        style={{
          clipPath:
            "polygon(0 0, 92% 0, 100% 12%, 100% 100%, 8% 100%, 0 88%)",
        }}
      />

      {/* Inner fine border */}
      <div
        className="pointer-events-none absolute inset-[5px] border border-white/[0.12]"
        style={{
          clipPath:
            "polygon(0 0, 92% 0, 100% 12%, 100% 100%, 8% 100%, 0 88%)",
        }}
      />

      {/* Gold corner accents */}
      <span className="pointer-events-none absolute left-0 top-0 z-10 h-10 w-10 border-l-2 border-t-2 border-[#E6CD91]" />
      <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-10 w-10 border-b-2 border-r-2 border-[#E6CD91]" />

      {/* Image */}
      <div
        className="relative aspect-[16/10] overflow-hidden bg-[#0C1C16] shadow-2xl shadow-black/40"
        style={{
          clipPath:
            "polygon(0 0, 92% 0, 100% 12%, 100% 100%, 8% 100%, 0 88%)",
        }}
      >
        <Image
          src={heroImage.src}
          alt={heroImage.alt || `${project.title} preview`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06130F]/40 via-transparent to-white/[0.04]" />
      </div>

      {/* Small decorative marker */}
      <span className="absolute -bottom-2 left-8 h-1 w-12 bg-[#C9A55C]" />
    </div>
  ) : (
    <div className="flex aspect-[16/10] items-center justify-center border border-white/10 bg-white/[0.03] text-sm text-[#9CA79F]">
      Project preview unavailable
    </div>
  )}
</div>

      </div>
    </section>
  );
};


export default ProjectHero;