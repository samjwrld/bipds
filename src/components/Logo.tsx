import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
  forceTheme?: 'light' | 'dark';
}

/**
 * Universal Dual-Theme Logo Component.
 * Supports separate Dark & Light mode full logo PNG files (containing logo + name lockup):
 * - Light Mode: /public/logo-light.png -> /public/logo-light.svg -> /public/logo.png -> /public/logo.svg
 * - Dark Mode:  /public/logo-dark.png  -> /public/logo-dark.svg  -> /public/logo.png -> /public/logo.svg
 */
export default function Logo({ 
  className = "h-10 sm:h-11 w-auto max-w-[260px] object-contain drop-shadow-sm", 
  alt = "Bharat IP Defence Solutions",
  forceTheme
}: LogoProps) {
  const [lightSrc, setLightSrc] = useState<string>('/logo-light.png');
  const [darkSrc, setDarkSrc] = useState<string>('/logo-dark.png');

  const handleLightError = () => {
    if (lightSrc === '/logo-light.png') {
      setLightSrc('/logo-light.svg');
    } else if (lightSrc === '/logo-light.svg') {
      setLightSrc('/logo.png');
    } else if (lightSrc === '/logo.png') {
      setLightSrc('/logo.svg');
    }
  };

  const handleDarkError = () => {
    if (darkSrc === '/logo-dark.png') {
      setDarkSrc('/logo-dark.svg');
    } else if (darkSrc === '/logo-dark.svg') {
      setDarkSrc('/logo.png');
    } else if (darkSrc === '/logo.png') {
      setDarkSrc('/logo.svg');
    }
  };

  if (forceTheme === 'light') {
    return (
      <img
        src={lightSrc}
        alt={alt}
        className={className}
        onError={handleLightError}
      />
    );
  }

  if (forceTheme === 'dark') {
    return (
      <img
        src={darkSrc}
        alt={alt}
        className={className}
        onError={handleDarkError}
      />
    );
  }

  return (
    <>
      {/* Light Mode PNG Logo (Rendered when HTML does NOT have 'dark' class) */}
      <img
        src={lightSrc}
        alt={alt}
        className={`dark:hidden ${className}`}
        onError={handleLightError}
      />

      {/* Dark Mode PNG Logo (Rendered when HTML HAS 'dark' class) */}
      <img
        src={darkSrc}
        alt={alt}
        className={`hidden dark:block ${className}`}
        onError={handleDarkError}
      />
    </>
  );
}
