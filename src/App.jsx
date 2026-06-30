import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      effect: 100,
    });
    document.documentElement.classList.toggle("dark");
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div
        className={
          darkMode
            ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
            : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"
        }
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Skill darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer />
      </div>
    </>
  );
};

export default App;
