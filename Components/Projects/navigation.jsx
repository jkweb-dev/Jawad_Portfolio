
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export const ProjectNavigation = ({ projects, currentProject }) => {
  const pathname = usePathname();

  return (
    <aside className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A55C]">
        Project Index
      </p>

      <h2 className="mt-2 font-serif text-xl text-[#EFE8D8]">
        Explore My Work
      </h2>

      <nav className="mt-5 space-y-1">
        {projects.map((project) => {
          const isActive = pathname === `/projects/${project.id}`;

          return (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              aria-current={isActive ? "page" : undefined}
              className={`group flex items-center gap-3 rounded-lg border px-3 py-3 transition-colors ${
                isActive
                  ? "border-[#C9A55C]/25 bg-[#C9A55C]/[0.08]"
                  : "border-transparent hover:border-white/[0.08] hover:bg-white/[0.035]"
              }`}
            >
              <span
                className={`text-xs tabular-nums ${
                  isActive ? "text-[#E5CC8D]" : "text-[#75847A]"
                }`}
              >
                {project.number}
              </span>

              <span
                className={`min-w-0 flex-1 text-sm ${
                  isActive
                    ? "font-medium text-[#EFE8D8]"
                    : "text-[#AEB9B1] group-hover:text-[#EFE8D8]"
                }`}
              >
                {project.title}
              </span>

              {isActive && (
                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-[#E5CC8D]"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {currentProject && (
        <p className="mt-4 border-t border-white/[0.08] pt-4 text-xs leading-5 text-[#829087]">
          Viewing project {currentProject.number} of {projects.length}
        </p>
      )}
    </aside>
  );
};
