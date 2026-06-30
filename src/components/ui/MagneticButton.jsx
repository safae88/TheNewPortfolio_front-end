import { motion } from "framer-motion";
import { useMagnetic } from "../../hooks/useMagnetic";

const variants = {
  primary:
    "bg-neutral-950 text-white hover:bg-neutral-800 shadow-lg shadow-neutral-950/10",
  secondary:
    "bg-white text-neutral-950 border border-neutral-200 hover:border-neutral-950 shadow-sm",
  ghost: "bg-transparent text-neutral-950 hover:bg-neutral-100",
};

export default function MagneticButton({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  ...props
}) {
  const ref = useMagnetic(0.25);
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
