export function Navbar() {
  return (
    <div className="sticky top-0 left-0 w-full z-50">
      {/* Pattern (background layer) */}
      <img
        className="absolute -top-25 lg:-top-60 left-0 w-full pointer-events-none scale-x-[-1]"
        src="/images/hero-pattern.svg"
        alt="pattern"
      />

      {/* Logo (foreground clickable) */}
      <a href="/" className="absolute top-0 left-5">
        <img src="/images/logo.svg" className="h-20 lg:h-30" alt="Logo" />
      </a>
    </div>
  );
}
