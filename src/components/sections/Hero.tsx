export function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <img
        src="/images/hero-title.svg"
        className="lg:h-140 animate-fade-up"
        alt="Hero title"
      />
      <img
        className="absolute w-screen -bottom-20 lg:-bottom-70 z-20"
        src="/images/hero-pattern.svg"
      />
    </section>
  );
}
