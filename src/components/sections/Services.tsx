import { useEffect, useRef, useState } from "react";
import { Wig } from "./Wig";

export function Services() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || open) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top <= 200) {
        setOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${open ? "h-full" : "h-[200vh]"}`}
    >
      <div
        className="sticky top-0 flex flex-col justify-center overflow-hidden bg-repeat p-20 text-center animate-pattern"
        style={{ backgroundImage: "url('/images/bg-pattern.svg')" }}
      >
        <h1 className="font-citadel text-[150px] text-white">Services</h1>

        <div className="flex items-center justify-center gap-10">
          <img
            src="/images/service-wig.svg"
            className="lg:h-100"
            alt="Wig service"
          />
          <img
            src="/images/service-costume.svg"
            className="lg:h-100"
            alt="Costume service"
          />
        </div>

        <Wig />

        <Curtain open={open} />
      </div>
    </section>
  );
}

function Curtain({ open }: { open: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {/* LEFT */}
      <div
        className="absolute top-0 left-0 h-full w-1/2"
        style={{
          transform: open ? "translateX(-132%)" : "translateX(0)",
          transition:
            "transform 3400ms cubic-bezier(0.22,1,0.36,1), clip-path 3400ms cubic-bezier(0.22,1,0.36,1)",
          clipPath: open
            ? "polygon(0 0, 100% 0, 88% 28%, 74% 58%, 56% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 28%, 100% 58%, 100% 100%, 0 100%)",
          background:
            "linear-gradient(to right, #f6eaea 0%, #efdede 22%, #e8d4d4 42%, #f4e7e7 64%, #ead9d9 82%, #f8eeee 100%)",
        }}
      />

      {/* RIGHT */}
      <div
        className="absolute top-0 right-0 h-full w-1/2"
        style={{
          transform: open ? "translateX(132%)" : "translateX(0)",
          transition:
            "transform 3400ms cubic-bezier(0.22,1,0.36,1), clip-path 3400ms cubic-bezier(0.22,1,0.36,1)",
          clipPath: open
            ? "polygon(0 0, 100% 0, 100% 100%, 44% 100%, 26% 58%, 12% 28%)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 58%, 0 28%)",
          background:
            "linear-gradient(to left, #f6eaea 0%, #efdede 22%, #e8d4d4 42%, #f4e7e7 64%, #ead9d9 82%, #f8eeee 100%)",
        }}
      />
    </div>
  );
}
