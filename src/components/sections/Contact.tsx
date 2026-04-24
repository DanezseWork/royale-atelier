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

    const email = formData.get("email");
    const message = formData.get("message");

    if (!email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      const promise = fetch("https://formspree.io/f/mwvaaago", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
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

      if (res.ok) {
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center bg-cover bg-center"
    >
      <img
        src="images/contact-title.svg"
        className="absolute top-23 z-10"
        alt="Contact"
      />

      <div className="absolute z-10 mt-40 h-full w-250">
        <img
          src="images/contact-form.svg"
          className={`absolute inset-0 h-full w-full ${
            show ? "animate-crumple" : "opacity-0"
          }`}
          alt=""
        />

        <form
          id="contact-form"
          onSubmit={sendForm}
          className="absolute top-[280px] left-[100px] z-20 flex w-200 flex-col gap-20"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="bg-transparent text-white outline-none placeholder-white"
          />

          <textarea
            name="message"
            required
            placeholder="Message"
            className="h-24 resize-none bg-transparent text-white outline-none placeholder-white"
          />
        </form>

        <button
          type="submit"
          form="contact-form"
          disabled={loading}
          className={`absolute right-[80px] bottom-[220px] z-20 transition ${
            loading
              ? "cursor-not-allowed opacity-50"
              : "hover:rotate-10 hover:scale-120"
          }`}
        >
          <img src="images/contact-send.svg" alt="Send" />
        </button>
      </div>

      <img
        src="images/contact-bg.svg"
        className="absolute bottom-0 w-full"
        alt=""
      />

      <a
        href="https://www.facebook.com/royaleatelierph"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-5 z-10 font-citadel text-[50px] text-pink-500 underline transition hover:scale-110 hover:text-white hover:no-underline"
      >
        facebook page
      </a>
    </section>
  );
}
