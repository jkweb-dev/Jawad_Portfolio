
import { ArrowRight, Wrench } from "lucide-react";

 const ProjectChallenges = ({ project }) => {
  const challenges = project.challenges || [];

  return (
    <section className="border-b border-white/[0.08] py-10 sm:py-14">
      <div className="mb-7">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A55C]">
          Problem Solving
        </p>

        <h2 className="font-serif text-2xl text-[#EFE8D8] sm:text-3xl">
          Challenges &amp; Solutions
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#AEB9B1]">
          A look at the technical and practical challenges encountered while
          building {project.title}.
        </p>
      </div>

      {challenges.length > 0 ? (
        <div className="space-y-4">
          {challenges.map((challenge, index) => (
            <article
              key={challenge.title}
              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="font-serif text-2xl text-[#C9A55C]/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-medium leading-6 text-[#EFE8D8] sm:text-lg">
                    {challenge.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#AEB9B1]">
                    {challenge.description}
                  </p>

                  {challenge.solution && (
                    <div className="mt-5 border-t border-white/[0.08] pt-5">
                      <div className="flex items-center gap-2 text-[#E1C780]">
                        <Wrench size={15} />

                        <span className="text-xs font-medium uppercase tracking-wider">
                          Solution
                        </span>

                        <ArrowRight size={14} />
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[#D0D7D0]">
                        {challenge.solution}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-sm text-[#AEB9B1]">
          No challenge details available for this project.
        </p>
      )}
    </section>
  );
};

export default ProjectChallenges;