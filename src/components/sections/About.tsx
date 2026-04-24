import { useEffect, useRef, useState } from "react";

export function About() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || show) return;

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= 50) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#f1ebe3] font-boston h-250 flex items-center relative pt-60 pb-20"
    >
      {/* ABOUT PIC (from right) */}
      <img
        src="/images/about-pic.png"
        className={`absolute right-50 h-120 -rotate-5 z-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          show ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
        }`}
        alt=""
      />

      {/* TEXT (fade in) */}
      <span
        className={`absolute left-45 top-110 w-150 text-center rotate-4 z-10 text-[25px] transition-opacity duration-1000 delay-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        Founded by cosplayer Cora San in 2023, Royale Atelier (formerly Regium
        Cosplay Services) grew from small projects into a dedicated space for
        wig styling and cosplay rentals. Alongside Tiara’s Wig Styling, the
        brand is known for its fluffy, natural finish and airbrushed look,
        creating character-accurate wigs for passionate cosplayers.
      </span>

      {/* CONTAINER (from left) */}
      <img
        src="/images/about-container.svg"
        className={`absolute left-20 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          show ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
        }`}
        alt=""
      />

      {/* RIBBON (no animation) */}
      <img
        className="absolute -bottom-50 z-20"
        src="/images/ribbon-pattern.svg"
        alt=""
      />
    </div>
  );
}
