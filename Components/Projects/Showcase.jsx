
import Image from "next/image";
import {
  Code2,
  Database,
  ShieldCheck,
  Layers3,
  Plug,
  Monitor,
} from "lucide-react";

const technologyGroups = [
  { key: "frontend", label: "Frontend", icon: Monitor },
  { key: "backend", label: "Backend", icon: Code2 },
  { key: "database", label: "Database", icon: Database },
  { key: "authentication", label: "Authentication", icon: ShieldCheck },
  { key: "libraries", label: "Libraries", icon: Layers3 },
  { key: "integrations", label: "Integrations", icon: Plug },
];

 const ProjectShowcase = ({ project }) => {
  const screenshots = project.screenshots?.slice(1, 3) || [];

  const technologies = project.technologies || {};

  const availableGroups = technologyGroups.filter(
    ({ key }) => technologies[key]?.length > 0
  );

  return (
    <section className="border-b border-white/[0.08] py-10 sm:py-14">
      {/* Technology stack */}
      <div>
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A55C]">
          Under the Hood
        </p>

        <h2 className="font-serif text-2xl text-[#EFE8D8] sm:text-3xl">
          Technology Stack
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#AEB9B1]">
          The tools and technologies used to build {project.title}.
        </p>

        {availableGroups.length > 0 ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {availableGroups.map(({ key, label, icon: Icon }) => (
              <div
                key={key}
                className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 text-[#DCC58C]">
                  <Icon size={17} strokeWidth={1.7} />

                  <h3 className="text-sm font-medium text-[#EFE8D8]">
                    {label}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {technologies[key].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/[0.08] bg-black/10 px-2.5 py-1.5 text-xs text-[#C6CEC7]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-sm text-[#AEB9B1]">
            No technology details available.
          </p>
        )}
      </div>

      {/* Two additional screenshots */}
      {screenshots.length > 0 && (
        <div className="mt-12 sm:mt-16">
          <div className="mb-6">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A55C]">
              Inside the Project
            </p>

            <h2 className="font-serif text-2xl text-[#EFE8D8] sm:text-3xl">
              Project Showcase
            </h2>
          </div>

          <div className="grid gap-6">
            {screenshots.map((screenshot, index) => (
              <figure key={screenshot.src}>
                <div className="relative aspect-[16/8] overflow-hidden rounded-xl border border-white/10 bg-[#0C1C16] sm:aspect-[16/8]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt || `${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className="object-contain object-top"
                  />
                </div>

                <figcaption className="mt-3 flex items-center justify-between gap-4">
                  <span className="text-sm text-[#D5D8D0]">
                    {screenshot.caption}
                  </span>

                  <span className="text-xs tabular-nums text-[#8F9C93]">
                    0{index + 2} / 03
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;