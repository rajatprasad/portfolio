import "./App.css";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import { useState } from "react";
import Slider from "./components/slider/Slider";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { ContactUs } from "./components/contact/ContactUs";
import Highlights from "./components/highlight/Highlights";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App" id={theme}>
      <Navbar themeF={setTheme} />
      <Hero />
      <Highlights />
      <Skills />
      <Slider />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
