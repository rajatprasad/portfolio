import "./App.css";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import { ContactUs } from "./ContactUs";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { createContext } from "react";
import { useState } from "react";
import Slider from "./components/slider/Slider";

export const ThemeContext = createContext("light");

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
