import { useEffect, useRef, useState } from "react";

export function About() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || show) return;

      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= 100) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f1ebe3] font-boston px-6 py-20 md:py-40 lg:h-250 lg:pt-60 lg:pb-20"
    >
      {/* MOBILE / TABLET LAYOUT */}
      <div className="flex flex-col items-center gap-10 lg:hidden">
        {/* IMAGE */}
        <img
          src="/images/about-pic.png"
          className={`w-56 rotate-[-3deg] transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          alt=""
        />

        {/* TEXT */}
        <p
          className={`text-center text-[16px] md:text-[18px] leading-relaxed max-w-md transition-opacity duration-700 delay-200 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          Founded by cosplayer Cora San in 2023, Royale Atelier (formerly Regium
          Cosplay Services) grew from small projects into a dedicated space for
          wig styling and cosplay rentals. Alongside Tiara’s Wig Styling, the
          brand is known for its fluffy, natural finish and airbrushed look,
          creating character-accurate wigs for passionate cosplayers.
        </p>

      </div>

      {/* DESKTOP LAYOUT (your original, improved) */}
      <div className="hidden lg:block pt-20">
        {/* ABOUT PIC */}
        <img
          src="/images/about-pic.png"
          className={`absolute right-20 xl:right-50 h-90 xl:h-120 -rotate-5 z-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            show ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
          }`}
          alt=""
        />

        {/* TEXT */}
        <span
          className={`absolute left-10 xl:left-45 top-110 xl:top-110 w-80 xl:w-150 text-center rotate-3 z-10 text-[18px] xl:text-[25px] leading-relaxed transition-opacity duration-1000 delay-300 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          Founded by cosplayer Cora San in 2023, Royale Atelier (formerly Regium
          Cosplay Services) grew from small projects into a dedicated space for
          wig styling and cosplay rentals. Alongside Tiara’s Wig Styling, the
          brand is known for its fluffy, natural finish and airbrushed look,
          creating character-accurate wigs for passionate cosplayers.
        </span>

        {/* CONTAINER */}
        <img
          src="/images/about-container.svg"
          className={`absolute left-10 xl:left-20 w-72 xl:w-auto transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            show ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"
          }`}
          alt=""
        />
      </div>

      {/* RIBBON (all screens, adjusted) */}
      <img
        className="absolute left-0 -bottom-10 md:-bottom-25 lg:-bottom-50 z-20 w-full"
        src="/images/ribbon-pattern.svg"
        alt=""
      />
    </section>
  );
}
