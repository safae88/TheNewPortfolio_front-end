import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import SectionHeading from "../components/ui/SectionHeading";
import SkillBar from "../components/ui/SkillBar";
import { fadeUp, staggerContainer } from "../hooks/animations";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical expertise across the stack"
          description="Frontend, backend, databases, and the tools I use to ship polished software."
        />

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillCategories.map((category) => (
            <motion.article
              key={category.id}
              variants={fadeUp}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              whileHover={{ y: -4 }}
            >
              <h3
                className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-neutral-950"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={i * 0.08}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
