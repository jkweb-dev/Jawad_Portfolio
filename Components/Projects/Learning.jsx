
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
 
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

 const ProjectLearnings = ({ project }) => {
  const learnings = project.learnings || [];

  return (
    <section className="py-10 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-14">
        {/* Learning outcomes */}
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A55C]">
            Growth &amp; Experience
          </p>

          <h2 className="font-serif text-2xl text-[#EFE8D8] sm:text-3xl">
            What I Learned
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#AEB9B1]">
            Skills and experience gained while working on {project.title}.
          </p>

          {learnings.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {learnings.map((learning, index) => (
                <li key={learning} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[#C9A55C]/25 bg-[#C9A55C]/10 text-[#E5CC8D]">
                    <Sparkles size={12} />
                  </span>

                  <span className="text-sm leading-6 text-[#D0D7D0]">
                    {learning}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-[#AEB9B1]">
              No learning outcomes available.
            </p>
          )}
        </div>

        {/* Closing card */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#C9A55C]/20 bg-[#0B1A14] p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#C9A55C]/10 blur-3xl" />

          <div className="relative">
            <div className="flex size-11 items-center justify-center rounded-full border border-[#C9A55C]/25 bg-[#C9A55C]/10 text-[#E5CC8D]">
              <BookOpen size={20} />
            </div>

            <h3 className="mt-5 font-serif text-2xl leading-tight text-[#EFE8D8]">
              Interested in the code?
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#AEB9B1]">
              Explore the source code to see how {project.title} was built
              and how its different parts work together.
            </p>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-[#E6CD91] px-5 py-3 text-sm font-semibold text-[#101711] transition-colors hover:bg-[#F0DDAA]"
            >
              <FaGithub size={17} />
              Explore Repository
              <FaGithub size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Back navigation */}
      <div className="mt-12 border-t border-white/[0.08] pt-7">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#AEB9B1] transition-colors hover:text-[#E5CC8D]"
        >
          <ArrowLeft size={16} />
          Back to All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectLearnings;