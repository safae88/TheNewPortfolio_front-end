import { motion } from "framer-motion";

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-neutral-800">{name}</span>
        <span className="text-neutral-400">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
        <motion.div
          className="h-full rounded-full bg-neutral-950"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}
