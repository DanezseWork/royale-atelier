import { useEffect, useState } from "react";

export function Navbar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150); // small delay so animation triggers

    return () => clearTimeout(timer);
  }, []);

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 left-0 z-50 w-full">
      {/* Pattern (background layer) */}
      <img
        className={`pointer-events-none absolute left-0 w-full scale-x-[-1] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded
            ? "-top-25 lg:-top-60 opacity-100"
            : "-top-60 lg:-top-120 opacity-0"
        }`}
        src="/images/hero-pattern.svg"
        alt="pattern"
      />

      {/* Logo */}
      <a href="#" onClick={handleScrollTop} className="absolute top-0 left-5">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className={`h-20 lg:h-30 transition-all duration-700 delay-200 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        />
      </a>
    </div>
  );
}
