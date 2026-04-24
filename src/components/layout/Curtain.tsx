export function Curtain({ open }: { open: boolean }) {
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
