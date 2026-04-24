import { useEffect, useRef, useState } from "react";

export function Costume() {
  const [index, setIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      const next = index === 9 ? 1 : index + 1;

      setNextIndex(next);
      setIsTransitioning(true);

      setTimeout(() => {
        setIndex(next);
        setIsTransitioning(false);
      }, 1200);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className="flex w-full flex-col items-center justify-center gap-10 overflow-hidden px-6 py-24 md:py-32 lg:flex-row lg:gap-10 lg:py-40"
    >
      {/* TEXT */}
      <div
        className="
      order-1 lg:order-2
      flex flex-col justify-center text-center font-citadel text-[60px] text-white
      md:text-[90px]
      lg:text-start lg:text-[150px]
    "
      >
        <span className={show ? "animate-write" : "opacity-0"}>Costume</span>
        <span
          className={
            show ? "animate-write [animation-delay:0.3s]" : "opacity-0"
          }
        >
          Rentals
        </span>
      </div>

      {/* FRAME + IMAGE */}
      <div className="order-2 lg:order-1">
        <div
          style={{
            backgroundImage: "url('/images/costume-frame.svg')",
            backgroundSize: "contain",
          }}
          className={`relative h-[250px] w-[250px] bg-no-repeat md:h-[400px] md:w-[400px] lg:h-140 lg:w-120 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            show
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-20 scale-95 opacity-0"
          }`}
        >
          {/* BASE IMAGE */}
          <img
            src={`/images/costumes/${index}.jpg`}
            className={`absolute top-[44px] left-[44px] h-[160px] md:top-[61px] md:left-[61px] md:h-[275px] lg:top-17 lg:left-17 lg:h-85 transition-all duration-[1200ms] ${
              show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />

          {/* OVERLAY IMAGE */}
          <img
            src={`/images/costumes/${nextIndex}.jpg`}
            className={`absolute top-[44px] left-[44px] h-[160px] md:top-[61px] md:left-[61px] md:h-[275px] lg:top-17 lg:left-17 lg:h-85 transition-opacity duration-[1200ms] ease-in-out ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
