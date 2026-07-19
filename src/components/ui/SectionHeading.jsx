import { motion } from "framer-motion";
import { fadeUpBlur } from "../../hooks/animations";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <motion.div
      className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpBlur}
    >
      {eyebrow && (
        <span
          className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-slate-400 transition-colors duration-500"
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-(family-name:--font-display) text-4xl font-bold tracking-tight text-neutral-950 dark:text-white transition-colors duration-500 md:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description && (
        <p
         className="max-w-xl text-base leading-relaxed text-neutral-500 dark:text-slate-300 transition-colors duration-500 md:text-lg"
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
