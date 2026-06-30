import React, { useState } from "react";
import hero from "../assets/gem.png";

const About = ({ darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  const aboutText = `I am Harsh Kumar, an aspiring Full Stack Developer with a strong passion for building modern, responsive, and user-friendly web applications. I have experience developing projects using HTML, CSS, JavaScript, React.js, and Tailwind CSS. Through personal projects and internships, I have gained practical knowledge of frontend development and problem-solving.

Currently, I am expanding my skills in backend technologies such as Node.js, Express.js, and MongoDB to become a proficient Full Stack Developer. I enjoy learning new technologies, creating impactful digital solutions, and continuously improving my development skills. I am eager to contribute to innovative projects and collaborate with like-minded professionals in the tech industry.`;

  const charLimit = 200;
  const isLongText = aboutText.length > charLimit;

  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="max-w-8xl w-full grid grid-cols-1 lg:gap-30 lg:grid-cols-2 sm:gap-12 items-start px-6 sm:px-12">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1 self-start lg:sticky lg:top-24"
        >
          <div className="relative mt-10 w-75 h-75 lg:w-95 lg:h-95 shrink-0">
            <div className="relative">
              <div className="absolute h-full -inset-1 mt-10 bg-linear-to-l from-[#fb923c] to-[#f59e0b] rotate-12"></div>

              <img
                src={hero}
                alt="About Image"
                className="relative z-10 w-full h-full object-cover transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
            </div>
          </div>
        </figure>

        <article
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-1xl sm:text-4xl lg:text-1xl xl:text-2xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-500 to-orange-300 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>

          <div
            className={`text-sm sm:text-base m-5 lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expanded ? "max-h-full" : "max-h-50"
              }`}
            >
              <p>
                {expanded ? aboutText : aboutText.slice(0, charLimit)}
                {!expanded && isLongText ? "..." : ""}
              </p>
            </div>

            {isLongText && (
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-3 inline-block text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center lg:justify-center gap-4 lg:gap-8 mb-6 sm:mb-8">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500"></div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              ></div>
            </div>

            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
                10+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Projects
              </div>
            </div>

            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">
                1+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Experience
              </div>
            </div>
          </div>

          <button
            type="button"
            className={`sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-2 border-white py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              darkMode ? "hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]" : ""
            }`}
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
