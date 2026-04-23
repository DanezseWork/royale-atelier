import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
}

export default App;
