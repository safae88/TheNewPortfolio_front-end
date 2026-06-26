import {
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Drives the hero profile picture scroll animation.
 *
 * Scroll progress is mapped from the hero section leaving the viewport (0 → 1).
 * A spring smooths raw scroll values for a premium, cinematic feel at ~60fps.
 *
 * Transforms:
 * - scale: full hero size → compact corner avatar
 * - x / y: drift toward bottom-right with subtle parallax
 * - opacity / blur: soft mid-scroll fade, sharp again at rest
 * - borderRadius: rounded rectangle → circle as it settles
 */
export function useHeroProfileScroll(containerRef) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring-damped progress avoids jitter and gives polished easing
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
    restDelta: 0.001,
  });

  const scale = useTransform(
    progress,
    [0, 0.35, 0.75, 1],
    isMobile ? [1, 0.72, 0.42, 0.34] : [1, 0.78, 0.45, 0.32]
  );

  const x = useTransform(
    progress,
    [0, 0.4, 1],
    isMobile ? [0, 40, 110] : [0, 80, 220]
  );

  const y = useTransform(
    progress,
    [0, 0.25, 0.65, 1],
    isMobile ? [0, -16, 60, 140] : [0, -24, 80, 200]
  );

  // Gentle floating parallax layered on vertical movement
  const floatY = useTransform(progress, [0, 0.5, 1], [0, -8, 4]);

  const opacity = useTransform(
    progress,
    [0, 0.15, 0.55, 0.85, 1],
    [1, 1, 0.88, 0.94, 0.96]
  );

  const blur = useTransform(progress, [0, 0.35, 0.55, 0.8, 1], [0, 0, 3, 1, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  const rotate = useTransform(progress, [0, 1], [0, isMobile ? 1.5 : -2.5]);

  const borderRadius = useTransform(
    progress,
    [0, 0.5, 1],
    isMobile ? ["28px", "20px", "9999px"] : ["32px", "24px", "9999px"]
  );

  const boxShadow = useTransform(
    progress,
    [0, 0.5, 1],
    [
      "0 32px 64px rgba(0,0,0,0.14), 0 0 0 1px rgba(255,255,255,0.5)",
      "0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.4)",
      "0 12px 28px rgba(0,0,0,0.18), 0 0 24px rgba(99,102,241,0.15)",
    ]
  );

  const zIndex = useTransform(progress, [0, 0.2, 1], [10, 50, 50]);

  const badgeOpacity = useTransform(progress, [0, 0.35, 0.55], [1, 0.6, 0]);
  const badgeY = useTransform(progress, [0, 0.5], [0, 20]);

  return {
    progress,
    scale,
    x,
    y,
    floatY,
    opacity,
    filter,
    rotate,
    borderRadius,
    boxShadow,
    zIndex,
    badgeOpacity,
    badgeY,
  };
}
