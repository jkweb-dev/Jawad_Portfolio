

import { motion } from "framer-motion";

function isUsableUrl(url) {
  if (typeof url !== "string" || !url.trim()) {
    return false;
  }

  const value = url.trim();

  if (
    value === "#" ||
    /placeholder|replace_with|your[-_ ]?url/i.test(value)
  ) {
    return false;
  }

  try {
    const parsedUrl = new URL(value);

    return (
      parsedUrl.protocol === "https:" ||
      parsedUrl.protocol === "http:"
    );
  } catch {
    return false;
  }
}

function ProjectLinks({ project }) {
  const githubUrl =
    project.links?.github || project.githubUrl;

  const liveUrl =
    project.links?.live || project.liveUrl;

  const links = [
    {
      label: "View Source Code",
      description: "Explore the implementation",
      href: githubUrl,
     
    },
    {
      label: "Live Preview",
      description: "Experience the project",
      href: liveUrl,
      
    },
  ].filter((link) => isUsableUrl(link.href));

  if (links.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#0F1D18] px-5 py-20 text-[#EFE8D8] sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A55C]">
            Explore further
          </p>

          <h2 className="text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            Take a closer
            <span className="text-[#C9A55C]"> look.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#EFE8D8]/65 sm:text-base">
            Explore the source code or open the live project.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {links.map((link) => {
           

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="group flex items-center justify-between gap-5 rounded-2xl border border-[#EFE8D8]/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#C9A55C]/50 hover:bg-white/[0.06] sm:p-8"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C9A55C]/25 text-[#C9A55C]">
                   
                  </div>

                  <div>
                    <h3 className="font-medium sm:text-lg">
                      {link.label}
                    </h3>

                    <p className="mt-1 text-sm text-[#EFE8D8]/55">
                      {link.description}
                    </p>
                  </div>
                </div>

                
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectLinks