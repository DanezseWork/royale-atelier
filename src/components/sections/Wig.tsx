import { useEffect, useRef, useState } from "react";

export function Wig() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || show) return;

      const rect = sectionRef.current.getBoundingClientRect();

      // trigger when near top
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
      className="flex w-full items-center justify-center gap-10 pt-40 overflow-hidden"
    >
      {/* TEXT (write animation) */}
      <div className="flex flex-col text-end font-citadel text-[150px] text-white">
        <span className={show ? "animate-write" : "opacity-0"}>Wig</span>
        <span
          className={
            show ? "animate-write [animation-delay:0.3s]" : "opacity-0"
          }
        >
          Styling
        </span>
      </div>

      {/* IMAGES (natural stagger drop) */}
      <div className="flex gap-5">
        <img
          src="/images/wig-basic.svg"
          className={`w-40 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        />

        <img
          src="/images/wig-structured.svg"
          className={`w-40 transition-all duration-700 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        />

        <img
          src="/images/wig-complex.svg"
          className={`w-40 transition-all duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        />
      </div>
    </section>
  );
}
