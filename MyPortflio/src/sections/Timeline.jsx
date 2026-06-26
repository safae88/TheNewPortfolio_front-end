import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "../data/timeline";
import SectionHeading from "../components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "../hooks/animations";

const icons = {
  education: GraduationCap,
  experience: Briefcase,
};

export default function Timeline() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience & Education"
          title="My journey so far"
          description="A timeline of learning, building, and growing as a software engineer."
        />

        <motion.div
          className="relative mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="absolute left-4 top-0 h-full w-px bg-neutral-200 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = icons[item.type] || Briefcase;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden flex-1 md:block" />

                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm md:left-1/2">
                    <Icon size={14} className="text-neutral-700" />
                  </div>

                  <motion.div
                    className={`ml-12 flex-1 md:ml-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
                      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                        {item.period}
                      </span>
                      <h3
                        className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-neutral-950 md:text-2xl"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-neutral-500">
                        {item.organization}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
