import { useState } from "react";

const FALLBACK = "/images/hero-salon.jpg";

export default function SafeImage({ src, alt = "", className = "", style, ...props }) {
  const [url, setUrl] = useState(src || FALLBACK);

  return (
    <img
      src={url}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (url !== FALLBACK) setUrl(FALLBACK);
      }}
      {...props}
    />
  );
}
