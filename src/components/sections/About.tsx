import { useEffect, useRef, useState } from "react";

export function About() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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
      className="relative flex flex-col bg-[#f1ebe3] z-10 font-boston pt-20 md:pt-40 lg:min-h-[900px] lg:pt-60"
    >
      {/* CONTENT */}
      <div className="flex-1">
        {/* MOBILE + TABLET */}
        <div className="flex flex-col items-center gap-4 lg:hidden">
          <img
            src="/images/about-pic.png"
            className={`w-56 rotate-[-3deg] transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            alt=""
          />

          <p
            className={`text-center text-[13px] leading-relaxed max-w-md transition-opacity duration-700 delay-200 ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            Founded by cosplayer Cora San in 2023, Royale Atelier (formerly
            Regium Cosplay Services) grew from small projects into a dedicated
            space for wig styling and cosplay rentals. Alongside Tiara’s Wig
            Styling, the brand is known for its fluffy, natural finish and
            airbrushed look, creating character-accurate wigs for passionate
            cosplayers.
          </p>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center justify-between pt-20 max-w-7xl mx-auto">
          {/* LEFT SIDE */}
          <div
            className={`relative flex items-center justify-center w-[600px] transition-all duration-1000 ${
              show ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <img src="/images/about-container.svg" className="w-full" alt="" />

            <p
              className={`absolute w-[70%] text-center text-[15px] rotate-3 leading-relaxed transition-opacity duration-1000 delay-300 ${
                show ? "opacity-100" : "opacity-0"
              }`}
            >
              Founded by cosplayer Cora San in 2023, Royale Atelier (formerly
              Regium Cosplay Services) grew from small projects into a dedicated
              space for wig styling and cosplay rentals. Alongside Tiara’s Wig
              Styling, the brand is known for its fluffy, natural finish and
              airbrushed look, creating character-accurate wigs for passionate
              cosplayers.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <img
            src="/images/about-pic.png"
            className={`h-[450px] -rotate-5 transition-all duration-1000 ${
              show ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
            alt=""
          />
        </div>
      </div>

      {/* RIBBON (no absolute, always bottom) */}
      <img
        src="/images/ribbon-pattern.svg"
        className="
          mt-auto z-20
           w-[calc(100%+10rem)] translate-y-1/2
         md:w-[calc(100%+10rem)] lg:self-center
        "
        alt=""
      />
    </section>
  );
}
