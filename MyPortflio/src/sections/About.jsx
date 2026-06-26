import { motion } from "framer-motion";
import { profile } from "../data/profile";
import SectionHeading from "../components/ui/SectionHeading";
import StatCard from "../components/ui/StatCard";
import { fadeUp, staggerContainer } from "../hooks/animations";

export default function About() {
  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Crafting thoughtful digital experiences"
          description={profile.bio}
        />

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-400">
              Education
            </h3>
            <p className="text-base leading-relaxed text-neutral-600">
              {profile.education}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-400">
              Career Goals
            </h3>
            <p className="text-base leading-relaxed text-neutral-600">
              {profile.careerGoals}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {profile.stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
