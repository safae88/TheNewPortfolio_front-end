import { motion, useTransform } from "framer-motion";
import profileHeroImg from "../assets/profile-hero.png";
import { profile } from "../data/profile";
import { useHeroProfileScroll } from "../hooks/useHeroProfileScroll";

export default function HeroProfilePicture({ containerRef }) {
  const {
    scale,
    x,
    y,
    floatY,
    filter,
    rotate,
    borderRadius,
    boxShadow,
    zIndex,
    badgeOpacity,
    badgeY,
  } = useHeroProfileScroll(containerRef);

  const combinedY = useTransform(
    [y, floatY],
    ([scrollY, float]) => scrollY + float
  );

  return (
    <motion.div
      className="relative w-full max-w-[340px] shrink-0 md:max-w-[380px] lg:max-w-[420px]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative w-full will-change-transform"
        style={{
          scale,
          x,
          y: combinedY,
          filter,
          rotate,
          zIndex,
        }}
      >
        <div
          className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-br from-indigo-200/40 via-transparent to-amber-100/30 blur-2xl"
          aria-hidden="true"
        />

        <motion.div
          className="relative overflow-hidden p-1.5 backdrop-blur-md"
          style={{
            borderRadius,
            boxShadow,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 100%)",
          }}
        >
          <motion.div
            className="relative overflow-hidden"
            style={{ borderRadius }}
          >
            <div
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/25 via-transparent to-neutral-950/15"
              aria-hidden="true"
            />

            <img
              src={profileHeroImg}
              alt={`${profile.fullName}, ${profile.role}`}
              width={780}
              height={975}
              className="aspect-[4/5] w-full object-cover object-[center_50%]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-lg backdrop-blur-md md:-left-8"
          style={{ opacity: badgeOpacity, y: badgeY }}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 0.55 }}
        />
      </motion.div>
    </motion.div>
  );
}
