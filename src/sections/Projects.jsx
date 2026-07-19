import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "../data/projects";
import Media from "../components/ui/Media";
import MagneticButton from "../components/ui/MagneticButton";
import SectionHeading from "../components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "../hooks/animations";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-neutral-50 dark:bg-[#020b1f] transition-colors duration-500"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work & experiments"
          description="A curated selection of projects showcasing full-stack development, clean UI, and scalable architecture."
        />

        <motion.div
          className="mt-16 flex flex-col gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              className={`group grid overflow-hidden rounded-4xl
                border border-neutral-200 bg-white shadow-sm
                dark:border-slate-700 dark:bg-slate-900/80
                dark:backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1 hover:shadow-xl
                dark:hover:shadow-black/40
                lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
              <Media
                type={project.type}
                src={project.media}
                alt={project.title}
                wrapperClassName="aspect-[16/10] lg:aspect-auto lg:min-h-[360px]"
                className="transition-transform duration-700 group-hover:scale-105"
              />

              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                {project.featured && (
                  <span
                    className="
                      mb-4 w-fit rounded-full
                      bg-neutral-950 text-white
                      dark:border dark:border-violet-500/30
                      dark:bg-slate-800/60
                      dark:text-violet-200
                      dark:backdrop-blur-md
                      px-3 py-1
                      text-xs font-medium
                      transition-all duration-500
                    "
                  >
                    Featured
                  </span>
                )}

                <h3
                  className="
                    text-3xl font-bold tracking-tight
                    text-neutral-950
                    dark:text-white
                    md:text-4xl
                    transition-colors duration-500
                  "
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4 text-base leading-relaxed
                    text-neutral-500
                    dark:text-slate-300
                    transition-colors duration-500
                  "
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border border-neutral-200
                        bg-transparent
                        px-3 py-1
                        text-xs
                        text-neutral-600

                        dark:border-slate-700/60
                        dark:bg-slate-900/50
                        dark:backdrop-blur-md
                        dark:text-slate-200
                        dark:hover:bg-slate-800/70
                        dark:hover:border-violet-500/50
                        dark:hover:text-violet-200
                        dark:shadow-lg
                        dark:shadow-black/30

                        transition-all duration-500
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton
                    variant="secondary"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      border border-neutral-200
                      bg-white
                      text-neutral-700

                      dark:border-slate-700/60
                      dark:bg-slate-900/50
                      dark:text-slate-200
                      dark:backdrop-blur-md
                      dark:hover:bg-slate-800/70
                      dark:hover:border-violet-500/50
                      dark:hover:text-violet-200
                      dark:shadow-lg
                      dark:shadow-black/30

                      transition-all duration-500
                    "
                  >
                    <Code2 size={16} />
                    GitHub
                  </MagneticButton>

                  <MagneticButton
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-neutral-600
                      dark:text-slate-200
                      transition-colors duration-500
                    "
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </MagneticButton>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}