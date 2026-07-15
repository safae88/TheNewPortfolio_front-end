import { useState } from "react";

export default function LazyImage({ src, alt = "", className = "", wrapperClassName = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-neutral-100" />}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
      />
    </div>
  );
}
