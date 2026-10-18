
import {
  ShoppingCart,
  Layers3,
  Activity,
  Truck,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const featureIcons = [
  ShoppingCart,
  Layers3,
  Activity,
  Truck,
  MapPin,
  ShieldCheck,
];

export const ProjectFeatures = ({ project }) => {
  const features = project.features || [];

  return (
    <section className="border-b border-white/[0.08] py-10 sm:py-12">
      <div className="mb-6">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#C9A55C]">
          Key Features
        </p>

        <h2 className="font-serif text-2xl text-[#EFE8D8] sm:text-3xl">
          Features &amp; Functionality
        </h2>
      </div>

      {features.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length];

            return (
              <article
                key={feature.title}
                className="group flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-[#C9A55C]/30 hover:bg-white/[0.045] sm:gap-4 sm:p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C9A55C]/15 bg-[#C9A55C]/10 text-[#E5CC8D] transition-colors group-hover:bg-[#C9A55C]/15">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-medium leading-5 text-[#EFE8D8]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#AEB9B1] sm:text-[13px] sm:leading-6">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-[#AEB9B1]">
          No features have been added for this project yet.
        </p>
      )}
    </section>
  );
};
