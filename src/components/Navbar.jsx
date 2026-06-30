import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../data/navigation";
import { profile } from "../data/profile";
import { useNavbarScroll } from "../hooks/useNavbarScroll";
import MagneticButton from "./ui/MagneticButton";

export default function Navbar() {
  const { hidden, scrolled } = useNavbarScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={`glass-nav flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-3 md:px-6 ${
            scrolled ? "shadow-lg shadow-black/5" : ""
          }`}
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="font-[family-name:var(--font-display)] text-sm font-bold tracking-tight text-neutral-950 md:text-base"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {profile.firstName}
            <span className="text-neutral-400">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <MagneticButton href="#contact" className="!px-5 !py-2.5 !text-xs">
              Hire Me
            </MagneticButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      {open && (
        <motion.div
          className="fixed inset-0 z-40 bg-white/90 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-display)] text-3xl font-semibold text-neutral-950"
                style={{ fontFamily: "var(--font-display)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <MagneticButton href="#contact" onClick={() => setOpen(false)}>
              Hire Me
            </MagneticButton>
          </div>
        </motion.div>
      )}
    </>
  );
}
