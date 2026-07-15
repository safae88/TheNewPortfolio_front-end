import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "../data/projects";
import Media from "../components/ui/Media";
import MagneticButton from "../components/ui/MagneticButton";
import SectionHeading from "../components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "../hooks/animations";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-neutral-50">
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
              className={`group grid overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl lg:grid-cols-2 ${
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
                  <span className="mb-4 w-fit rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-white">
                    Featured
                  </span>
                )}
                <h3
                  className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-500">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600"
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
                    className="!text-xs"
                  >
                    <Code2 size={16} />
                    GitHub
                  </MagneticButton>
                  <MagneticButton
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="!text-xs"
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
