export function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <img src="/images/hero-title.png" className="lg:h-150" alt="Hero title" />
      <img className="absolute w-full -bottom-20 lg:-bottom-70" src="/images/hero-pattern.png" />
    </section>
  );
}
