
import { Target, Lightbulb } from "lucide-react";

export const ProjectOverview = ({ project }) => {
  return (
    <section className="border-b border-white/[0.08] py-10 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A55C]">
            Overview
          </p>

          <h2 className="font-serif text-2xl text-[#EFE8D8] sm:text-3xl">
            Project Overview
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#B9C2BB] sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="divide-y divide-white/[0.07] rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 sm:px-6">
          <div className="flex gap-4 py-5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C9A55C]/20 bg-[#C9A55C]/10 text-[#E5CC8D]">
              <Target size={18} />
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#EFE8D8]">
                The Problem
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#AEB9B1]">
                {project.problem}
              </p>
            </div>
          </div>

          <div className="flex gap-4 py-5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C9A55C]/20 bg-[#C9A55C]/10 text-[#E5CC8D]">
              <Lightbulb size={18} />
            </div>

            <div>
              <h3 className="text-sm font-medium text-[#EFE8D8]">
                The Solution
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#AEB9B1]">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
