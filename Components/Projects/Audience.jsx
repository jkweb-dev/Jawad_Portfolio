
import { Users, Building2, UserRound } from "lucide-react";

const audienceIcons = [Users, Building2, UserRound];

export const ProjectAudience = ({ project }) => {
  const users = project.targetUsers || [];

  return (
    <section className="border-b border-white/[0.08] py-8 sm:py-10">
      <div className="grid gap-6 sm:grid-cols-[160px_1fr] sm:items-center lg:grid-cols-[190px_1fr]">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#C9A55C]">
            Target Users
          </p>

          <h2 className="font-serif text-xl text-[#EFE8D8] sm:text-2xl">
            Who It's For
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => {
            const Icon = audienceIcons[index % audienceIcons.length];

            return (
              <div key={user} className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C9A55C]/20 bg-[#C9A55C]/10 text-[#E5CC8D]">
                  <Icon size={18} />
                </div>

                <p className="text-sm leading-5 text-[#DCDDD4]">
                  {user}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
