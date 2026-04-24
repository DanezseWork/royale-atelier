import { Toaster } from "react-hot-toast";

import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            padding: "14px 18px",
          },
          success: {
            iconTheme: {
              primary: "#ec4899",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default App;
