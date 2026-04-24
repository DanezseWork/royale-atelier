import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export function Contact() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || show) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top <= window.innerHeight * 0.7) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formData.get("email") || !formData.get("message")) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      const promise = fetch("https://formspree.io/f/mwvaaago", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const res = await toast.promise(
        promise,
        {
          loading: "Sending...",
          success: "Sent successfully 💌",
          error: "Something went wrong.",
        },
        {
          style: {
            background: "white",
            color: "#f9a8d4",
            border: "1px solid rgba(249,168,212,0.3)",
          },
        },
      );

      if (res.ok) form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-5"
    >
      {/* desktop background only */}
      {/* <img
        src="images/contact-bg.svg"
        className="pointer-events-none absolute -bottom-50 left-0 z-0 hidden w-full lg:block"
        alt=""
      /> */}

      <img
        src="images/contact-title.svg"
        className={`z-10 mb-8 w-56 md:w-80 lg:w-auto ${
          show ? "animate-fade-in-soft" : "opacity-0"
        }`}
        alt="Contact"
      />

      <form
        id="contact-form"
        onSubmit={sendForm}
        className={`relative z-10 flex w-full max-w-[360px] flex-col bg-contain bg-center bg-no-repeat px-7 pb-12 pt-26 md:max-w-[620px] md:px-15 md:pb-20 md:pt-40 lg:max-w-[800px] lg:px-17 lg:pb-24 lg:pt-48 ${
          show ? "animate-unfold" : "opacity-0"
        }`}
        style={{ backgroundImage: "url('images/contact-form.svg')" }}
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className={`mb-5 md:mb-10 lg:mb-10 bg-transparent text-xs text-gray-600 outline-none placeholder-gray-600 md:text-base lg:text-lg ${
            show
              ? "opacity-0 animate-fade-up-soft [animation-delay:0.6s]"
              : "opacity-0"
          }`}
        />

        <textarea
          name="message"
          required
          placeholder="Message"
          className={`h-15 md:h-28 resize-none bg-transparent text-xs text-gray-600 outline-none placeholder-gray-600 lg:h-36 md:text-base lg:text-lg ${
            show
              ? "opacity-0 animate-fade-up-soft [animation-delay:0.8s]"
              : "opacity-0"
          }`}
        />

        <button
          type="submit"
          disabled={loading}
          className={`lg:mt-4 self-end transition ${
            show
              ? "opacity-0 animate-fade-up-soft [animation-delay:1s]"
              : "opacity-0"
          } ${
            loading
              ? "cursor-not-allowed opacity-50"
              : "hover:rotate-10 hover:scale-110 lg:hover:scale-120"
          }`}
        >
          <img
            src="images/contact-send.svg"
            alt="Send"
            className="w-14 md:w-20"
          />
        </button>
      </form>

      <a
        href="https://www.facebook.com/royaleatelierph"
        target="_blank"
        rel="noreferrer"
        className={`z-20 mt-10 font-citadel text-[30px] text-pink-500 underline transition hover:scale-110 hover:text-white hover:no-underline md:text-[42px] lg:text-[50px] ${
          show
            ? "opacity-0 animate-fade-in-soft [animation-delay:1.2s]"
            : "opacity-0"
        }`}
      >
        facebook page
      </a>
    </section>
  );
}
