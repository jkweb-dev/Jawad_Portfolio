
"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Server } from "lucide-react";

const ProjectTechStack = ({ project }) => {
  const rawStack = project.techStack || project.technologies || [];

  const categories = Array.isArray(rawStack)
    ? [
        {
          title: "Technologies",
          icon: Code2,
          items: rawStack,
        },
      ]
    : [
        {
          title: "Frontend",
          icon: Globe,
          items: rawStack.frontend || [],
        },
        {
          title: "Backend",
          icon: Server,
          items: rawStack.backend || [],
        },
        {
          title: "Database",
          icon: Database,
          items: rawStack.database || [],
        },
        {
          title: "Tools & Other",
          icon: Code2,
          items: rawStack.other || [],
        },
      ].filter((category) => category.items.length);

  if (!categories.length) return null;

  return (
    <section className="bg-[#EFE8D8] px-5 py-20 text-[#0F1D18] sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Heading */}
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#98783C]">
              <span className="h-px w-8 bg-[#C9A55C]" />
              Under the hood
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              The tools behind
              <span className="italic text-[#98783C]"> the build.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#0F1D18]/60">
              A look at the technologies used to develop the application
              and connect its different layers.
            </p>
          </div>

          {/* Technology Categories */}
          <div className="space-y-4">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-[#0F1D18]/12 p-5 sm:p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <Icon size={19} className="text-[#98783C]" />

                    <h3 className="text-sm font-medium tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[#0F1D18]/15 px-3.5 py-2 text-sm text-[#0F1D18]/75 transition-colors hover:border-[#98783C]/60 hover:text-[#98783C]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTechStack ;
