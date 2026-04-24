import { useEffect, useRef, useState } from "react";

export function Wig() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || show) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top <= 150) {
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
      className={`
        flex w-full items-center justify-center overflow-hidden

        /* mobile */
        flex-col gap-8 px-6 pt-20

        /* tablet */
        md:gap-10 md:pt-28

        /* desktop */
        lg:flex-row lg:gap-10 lg:pt-40
      `}
    >
      {/* TEXT */}
      <div
        className={`
          flex flex-col font-citadel text-white

          /* mobile */
          text-center text-[60px]

          /* tablet */
          md:text-[90px]

          /* desktop */
          lg:text-end lg:text-[150px]
        `}
      >
        <span className={show ? "animate-write" : "opacity-0"}>Wig</span>
        <span
          className={
            show ? "animate-write [animation-delay:0.3s]" : "opacity-0"
          }
        >
          Styling
        </span>
      </div>

      {/* IMAGES */}
      <div
        className={`
          flex

          /* mobile */
          flex-wrap justify-center gap-4

          /* tablet */
          md:gap-6

          /* desktop */
          lg:flex-nowrap lg:gap-5
        `}
      >
        <img
          src="/images/wig-basic.svg"
          className={`
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

            /* sizes */
            w-24 md:w-32 lg:w-40

            ${show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
          `}
        />

        <img
          src="/images/wig-structured.svg"
          className={`
            transition-all duration-700 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)]

            w-24 md:w-32 lg:w-40

            ${show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
          `}
        />

        <img
          src="/images/wig-complex.svg"
          className={`
            transition-all duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)]

            w-24 md:w-32 lg:w-40

            ${show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
          `}
        />
      </div>
    </section>
  );
}
