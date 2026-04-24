import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    const startTimer = setTimeout(() => {
      setLoaded(true);
    }, 150);

    const unlockTimer = setTimeout(() => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    }, 1300);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(unlockTimer);

      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, []);

  return (
    <section
      className="relative flex h-screen items-center justify-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* TITLE */}
      <img
        src="/images/hero-title.svg"
        alt="Hero title"
        className={`
          animate-fade-up-soft delay-200

          /* mobile */
          h-32

          /* tablet */
          md:h-52

          /* desktop */
          lg:h-140

          /* positioning */
          relative md:fixed
        `}
      />

      {/* PATTERN */}
      <img
        src="/images/hero-pattern.svg"
        alt=""
        className={`
          absolute left-0 w-full z-20 transform-gpu
          transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]

          /* mobile */
          -bottom-10

          /* tablet */
          md:-bottom-20

          /* desktop */
          lg:-bottom-70

          ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-[120%] opacity-0"
          }
        `}
      />
    </section>
  );
}
