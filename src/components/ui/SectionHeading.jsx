import { motion } from "framer-motion";
import { fadeUpBlur } from "../../hooks/animations";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
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
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            dark ? "text-neutral-500" : "text-neutral-400"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${
          dark ? "text-white" : "text-neutral-950"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-xl text-base leading-relaxed md:text-lg ${
            dark ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
