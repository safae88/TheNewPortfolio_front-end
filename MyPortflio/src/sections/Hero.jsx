import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { useRef } from "react";
import HeroProfilePicture from "../components/HeroProfilePicture";
import MagneticButton from "../components/ui/MagneticButton";
import ScrollIndicator from "../components/ui/ScrollIndicator";
import { profile } from "../data/profile";
import Profile from "../assets/Profile.pdf";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[110vh] items-center overflow-visible section-padding pt-32 pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.03),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(0,0,0,0.04),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-6xl items-start gap-12 overflow-visible lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div className="min-w-0 self-center lg:self-auto" style={{ y: textY, opacity: textOpacity }}>
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {profile.role}
          </motion.p>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-neutral-950"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.firstName}
            <br />
            <span className="text-gradient">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-base leading-relaxed text-neutral-500 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >

            <MagneticButton href="#projects">
              View Projects
              <ArrowUpRight size={16} />
            </MagneticButton>
            
            <MagneticButton variant="secondary" href={Profile} target="_blank" rel="noreferrer">
              <Download size={16} />
              Download CV
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="min-w-0 w-full lg:flex lg:justify-end">
          <HeroProfilePicture containerRef={ref} />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
