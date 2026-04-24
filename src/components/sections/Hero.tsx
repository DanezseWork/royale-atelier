import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // force viewport to top immediately
    window.scrollTo(0, 0);

    // lock page at top
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
    }, 1300); // 150 delay + 1000 animation + small buffer

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
      className="relative flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <img
        src="/images/hero-title.svg"
        className="fixed lg:h-140 animate-fade-up"
        alt="Hero title"
      />

      <img
        src="/images/hero-pattern.svg"
        className={`absolute left-0 w-full -bottom-20 lg:-bottom-70 z-20 transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
        }`}
        alt=""
      />
    </section>
  );
}
