import { useState } from "react";
import { Feedbacks, Hero, NavBar, StarsCanvas } from "./components";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
