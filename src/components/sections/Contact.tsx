export function Contact() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
    >
        <img src="images/contact-title.svg" className="absolute z-10 top-23"/>
        <img src="images/contact-form.svg" className="absolute z-10 bottom-25"/>
        <img src="images/contact-bg.svg" className="absolute bottom-0 w-full"/>
        <a href="" className="z-10 bottom-5 absolute font-citadel underline text-pink-500 hover:text-pink-300 text-[50px]">facebook page</a>
    </section>
  );
}
