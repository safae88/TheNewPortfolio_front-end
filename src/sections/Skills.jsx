import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import SectionHeading from "../components/ui/SectionHeading";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const category = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden section-padding"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/5 blur-[170px]" />

      </div>

      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies I Work With"
          description="Modern technologies, frameworks and tools that I use to design and build scalable applications."
          align="center"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            mt-20
            rounded-[42px]
            border
            border-neutral-200
            bg-white/70
            p-8
            backdrop-blur-2xl
            shadow-xl

            dark:bg-slate-900/60
            dark:border-slate-700
            dark:shadow-black/40

            md:p-12
          "
        >
          {/* Glass Reflection */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[42px]">

            <motion.div
              animate={{
                x: ["-150%", "250%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "linear",
              }}
              className="
                absolute
                left-0
                top-0
                h-full
                w-40
                rotate-12
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "
            />

          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="space-y-16"
          >
            {skillCategories.map((categoryData) => (
              <motion.div
                key={categoryData.id}
                variants={category}
              >
                <motion.h3
                  whileHover={{
                    letterSpacing: ".25em",
                  }}
                  transition={{
                    duration: .3,
                  }}
                  className="
                    mb-10
                    text-center
                    text-xl
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-neutral-800
                    dark:text-slate-300
                  "
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {categoryData.title}
                </motion.h3>

                <div
                  className="
                    grid
                    grid-cols-3
                    gap-10

                    sm:grid-cols-4

                    md:grid-cols-5

                    lg:grid-cols-6

                    justify-items-center
                  "
                >
                  {categoryData.skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        className="group flex flex-col items-center cursor-pointer"

                        initial={{
                          opacity: 0,
                          y: 25,
                        }}

                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}

                        transition={{
                          delay: index * .05,
                          duration: .5,
                        }}
                      >
                        <motion.div
                          className="relative"

                          animate={{
                            y: [0, -5, 0],
                            scale: [1, 1.03, 1],
                          }}

                          transition={{
                            duration: 3 + (index % 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}

                          whileHover={{
                            y: -15,
                            scale: 1.28,
                            rotate: -8,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 10,
                            },
                          }}
                        >
                          {/* Glow */}

                          <motion.div
                            className="
                              absolute
                              inset-0
                              rounded-full
                              opacity-0
                              blur-3xl
                              group-hover:opacity-100
                              transition-all
                              duration-500
                            "
                            style={{
                              background: `radial-gradient(circle, ${skill.glow}55 0%, transparent 70%)`,
                            }}
                          />

                          <Icon
                            className={`relative z-10 text-6xl md:text-7xl ${skill.color}`}
                            style={{
                              filter: `drop-shadow(0 0 12px ${skill.glow}55)`,
                            }}
                          />
                        </motion.div>

                        <span
                          className="
                            mt-4
                            text-sm
                            font-medium

                            opacity-0
                            translate-y-2

                            text-neutral-700
                            dark:text-slate-300

                            transition-all
                            duration-300

                            group-hover:opacity-100
                            group-hover:translate-y-0
                          "
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}