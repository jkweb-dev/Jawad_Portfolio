
import Image from "next/image";
import { motion } from "framer-motion";

function ProjectGallery({ project }) {
  const gallery = project.gallery || [];

  const validImages = gallery.filter((image) => image?.src);

  if (validImages.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#EFE8D8] px-5 py-20 text-[#0F1D18] sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#98783C]">
              Visual showcase
            </p>

            <h2 className="text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
              A look inside
              <span className="text-[#98783C]"> the project.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#0F1D18]/65">
            Explore selected screens and interface details from this project.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {validImages.map((image, index) => (
            <motion.figure
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-[#0F1D18]/10 bg-white/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0F1D18]/5">
                <Image
                  src={image.src}
                  alt={image.alt || `${project.title} screenshot ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {image.caption && (
                <figcaption className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
                  <span className="text-sm font-medium">
                    {image.caption}
                  </span>

                  <span className="shrink-0 text-xs tracking-widest text-[#98783C]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              )}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery
