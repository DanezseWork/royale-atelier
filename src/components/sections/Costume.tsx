import { useEffect, useRef, useState } from "react";

export function Costume() {
  const [index, setIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // scroll trigger
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

  // image carousel
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
      className="flex w-full items-center justify-center gap-10 py-40 overflow-hidden"
    >
      {/* FRAME + IMAGE */}
      <div>
        <div
          style={{ backgroundImage: "url('/images/costume-frame.svg')" }}
          className={`relative h-140 w-120 bg-no-repeat transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            show
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-20 scale-95 opacity-0"
          }`}
        >
          {/* BASE IMAGE */}
          <img
            src={`/images/costumes/${index}.jpg`}
            className={`absolute top-17 left-17 h-80 transition-all duration-[1200ms] ${
              show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />

          {/* OVERLAY IMAGE */}
          <img
            src={`/images/costumes/${nextIndex}.jpg`}
            className={`absolute top-17 left-17 h-80 transition-opacity duration-[1200ms] ease-in-out ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-center text-start font-citadel text-[150px] text-white">
        <span className={show ? "animate-write" : "opacity-0"}>Costume</span>
        <span
          className={
            show ? "animate-write [animation-delay:0.3s]" : "opacity-0"
          }
        >
          Rentals
        </span>
      </div>
    </section>
  );
}
