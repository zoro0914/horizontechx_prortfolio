import React from "react";
import instagram from "../assets/instagram.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { DownloadIcon, Mail } from "lucide-react";
import hero from "../assets/gem.png";
import hi from "../assets/Hi.png";
import CV from "../assets/CV.pdf";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: instagram, alt: "Instagram", href: "#" },
    { icon: github, alt: "github", href: "https://github.com/zoro0914" },
    { icon: linkedin, alt: "linkedin", href: "https://www.linkedin.com/in/harsh-kumar-a25039312/" },
  
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-orenge-500 hover:bg-orenge-600",
    decoractiveCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
    decoractiveCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-4 sm:px-14 lg:pl-20 pt-1 pb-0 flex-col lg:flex-row items-center justify-between lg:mt-25 lg:mb-20 mt-2">
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-center text-center lg:text-left mt-30 lg:mb-0">
            <div className="flex justify-center lg:justify-center gap-4 sm:gap-6 mb-8 sm:mb-6 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  rel="noreferrer"
                  target="_blank"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 rounded-full sm:h-10 object-contain ${darkMode ? "" : "filter brightness-75"}`}
                  />
                </a>
              ))}
            </div>
            <h1
              className={`title-font font-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Harsh Kumar
            </h1>
            <p
              className={`${theme.textSecondary} mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg `}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Aspiring Full Stack Developer with a strong foundation in React.js, JavaScript, HTML, and CSS. Passionate about creating seamless user experiences and learning modern backend technologies to build complete web solutions.
            </p>

            {/* button */}
            <div className="w-full pt-4">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-center gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={CV} download className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform"
                  >
                    <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2"></DownloadIcon>
                    Download CV
                  </button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`${theme.buttonSecondary} w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2"></Mail>
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* IMAGE */}
          <div
            className="lg:w-2/4 w-full max-w-none lg:max-w-3xl lg:pl-10 lg:mt-0 flex justify-right "
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-full sm:w-11/12 lg:w-8/5">
              <div className="relative overflow-hidden">
                <img
                  src={hero}
                  alt="hero Image"
                  className="w-full h-auto object-cover transform hover:scale-100 transition-transform duration-300"
                ></img>
              </div>
              <img
                src={hi}
                alt="Hi icon"
                className="absolute top-2 sm:top-2 left-12 sm:left-20 w-20 h-15 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10"
              ></img>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Hero;
