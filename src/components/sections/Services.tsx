import { useEffect, useRef, useState } from "react";
import { Wig } from "./Wig";
import { Costume } from "./Costume";
import { Contact } from "./Contact";
import { Curtain } from "../layout/Curtain";

export function Services() {
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || open) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top <= 300) {
        setOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <section
      ref={sectionRef}
      className={`
        relative

        /* mobile */
        h-auto

        /* desktop cinematic */
        lg:${open ? "h-full" : "h-[200vh]"}
      `}
    >
      <div
        className={`
          flex flex-col items-center text-center overflow-hidden bg-repeat animate-pattern

          /* mobile */
          gap-10

          /* desktop */
          lg:sticky lg:top-0 lg:justify-center
        `}
        style={{ backgroundImage: "url('/images/bg-pattern.svg')" }}
      >
        {/* TITLE */}
        <h1
          className={`
            font-citadel text-white

            /* mobile */
            text-[60px]

            /* tablet */
            md:text-[90px]

            /* desktop */
            lg:text-[150px] pt-20

            ${showContent ? "animate-write" : "opacity-0"}
          `}
        >
          Services
        </h1>

        {/* ICONS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-6 md:mt-10">
          <img
            src="/images/service-wig.svg"
            className={`
              h-28 md:h-40 lg:h-80
              ${
                showContent
                  ? "opacity-0 translate-y-10 animate-[fadeUp_0.6s_ease-out_0.2s_forwards]"
                  : "opacity-0"
              }
            `}
          />
          <img
            src="/images/service-costume.svg"
            className={`
              h-28 md:h-40 lg:h-80
              ${
                showContent
                  ? "opacity-0 translate-y-10 animate-[fadeUp_0.6s_ease-out_0.4s_forwards]"
                  : "opacity-0"
              }
            `}
          />
        </div>

        {/* SECTIONS */}
        <Wig />
        <Costume />
        <Contact />

        {/* CURTAIN (desktop only) */}
        <div className="hidden lg:block">
          <Curtain open={open} />
        </div>
      </div>
    </section>
  );
}
