import { useEffect, useState } from "react";

export function Costume() {
  const [index, setIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = index === 9 ? 1 : index + 1;

      setNextIndex(next);
      setIsTransitioning(true);

      setTimeout(() => {
        setIndex(next);
        setIsTransitioning(false);
      }, 1200); // MUST match CSS duration
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="flex w-full items-center justify-center gap-10 py-40">
      <div>
        <div
          style={{ backgroundImage: "url('/images/costume-frame.svg')" }}
          className="relative h-140 w-120 bg-no-repeat"
        >
          {/* BASE IMAGE (never fades back in) */}
          <img
            src={`/images/costumes/${index}.jpg`}
            className={`absolute top-17 left-17 h-80 transition-opacity duration-[1200ms]`}
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

      <div className="flex flex-col justify-center text-start font-citadel text-[150px] text-white">
        <span>Costume</span>
        <span>Rentals</span>
      </div>
    </section>
  );
}
