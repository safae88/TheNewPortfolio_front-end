import { motion } from "framer-motion";
import { useCountUp } from "../../hooks/useCountUp";

export default function StatCard({ label, value, suffix = "" }) {
  const { ref, count } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-6 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <p
        className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-neutral-500">{label}</p>
    </motion.div>
  );
}
