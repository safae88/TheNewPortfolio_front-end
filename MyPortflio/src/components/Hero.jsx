import profileHeroImg from "../assets/profile-hero.png";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="pf-grain" aria-hidden="true" />

      <div className="hero-top">
        <span className="hero-copyright">©2026</span>
        <span className="hero-meta">/ Software Engineer</span>
      </div>

      <div className="hero-sparkle" aria-hidden="true">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 4L44.5 35.5L76 40L44.5 44.5L40 76L35.5 44.5L4 40L35.5 35.5L40 4Z"
            fill="url(#sparkle-fill)"
          />
          <path
            d="M40 4L44.5 35.5L76 40L44.5 44.5L40 76L35.5 44.5L4 40L35.5 35.5L40 4Z"
            stroke="url(#sparkle-stroke)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="sparkle-fill" x1="4" y1="4" x2="76" y2="76">
              <stop stopColor="#1a1a1a" />
              <stop offset="0.5" stopColor="#2d2d2d" />
              <stop offset="1" stopColor="#1a1a1a" />
            </linearGradient>
            <linearGradient id="sparkle-stroke" x1="4" y1="76" x2="76" y2="4">
              <stop stopColor="#7c6bff" />
              <stop offset="0.5" stopColor="#4da6ff" />
              <stop offset="1" stopColor="#b06bff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="hero-lightning" aria-hidden="true">
        <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M38 4L14 44H32L26 76L50 36H32L38 4Z"
            fill="url(#bolt-fill)"
          />
          <path
            d="M38 4L14 44H32L26 76L50 36H32L38 4Z"
            stroke="url(#bolt-stroke)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="bolt-fill" x1="14" y1="4" x2="50" y2="76">
              <stop stopColor="#1a1a1a" />
              <stop offset="0.5" stopColor="#2a2a2a" />
              <stop offset="1" stopColor="#111" />
            </linearGradient>
            <linearGradient id="bolt-stroke" x1="14" y1="76" x2="50" y2="4">
              <stop stopColor="#6b5cff" />
              <stop offset="0.5" stopColor="#3d9eff" />
              <stop offset="1" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="hero-middle">
        <h1 className="hero-title">
          <span className="hero-title-line">Software</span>
          <span className="hero-title-line">Engineer</span>
        </h1>

        <p className="hero-tagline">
          Software Engineer passionate about building modern and user-friendly
          web applications.
        </p>

        <div className="hero-portrait">
          <img src={profileHeroImg} alt="Safae Bouchouicha" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
