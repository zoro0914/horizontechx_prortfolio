import React from "react";
import { Code, Flame, Rocket, Atom } from "lucide-react";
import {FaGithub, FaPython, FaJsSquare, FaCss3, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoHardwareChipOutline } from "react-icons/io5";

const skills = [
  {
    name: "HTML",
    percent: 95,
    color: "from-orange-500 to-yellow-400",
    icon: <FaHtml5 size={32} />,
  },
  {
    name: "CSS",
    percent: 90,
    color: "from-blue-500 to-cyan-400",
    icon: <FaCss3 size={32} />,
  },
  {
    name: "JAVACRIPT",
    percent: 88,
    color: "from-yellow-400 to-amber-500",
    icon: <FaJsSquare  size={32} />,
  },
  {
    name: "REACT.JS",
    percent: 85,
    color: "from-cyan-400 to-blue-500",
    icon: <Atom size={32} />,
  },
  {
    name: "TAILWIND CSS",
    percent: 85,
    color: "from-cyan-400 to-blue-500",
    icon: <RiTailwindCssLine size={32} />,
  },
   {
    name: "PYTHON",
    percent: 88,
    color: "from-yellow-400 to-amber-500",
    icon: <FaPython  size={32} />,
  },
  {
    name: "HARDWARE EMBEDDEDING",
    percent: 85,
    color: "from-cyan-400 to-blue-500",
    icon: <IoHardwareChipOutline size={32} />,
  },
   {
    name: "HARDWARE EMBEDDEDING",
    percent: 85,
    color: "from-cyan-400 to-blue-500",
    icon: <FaGithub size={32} />,
  },
];


const Skill = ( { darkMode } ) => {
  return (
    <section
      id="skill"
      className={`min-h-screen flex items-center justify-center px-6 py-20 transition-colors duration-500
      `}
    >
      <div className="max-w-7xl w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            data-aos="fade-up"
            className="text-4xl lg:text-5xl font-bold text-transparent bg-linear-to-r from-orange-500 to-orange-300 bg-clip-text"
          >
            My Skills
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className={`mt-4 text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies I work with daily
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`group p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500
              hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(255,165,0,0.25)]
              ${
                darkMode
                  ? "bg-white/5 border-white/10 text-white"
                  : "bg-white border-gray-200 text-gray-800"
              }`}
            >
              {/* Icon */}
              <div className="mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold mb-6 capitalize">
                {skill.name}
              </h3>

              {/* Proficiency */}
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Proficiency</span>
                <span className="text-orange-400 font-semibold">
                  {skill.percent}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-700/40 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-linear-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out`}
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-2px w-16 bg-orange-400 rounded-full group-hover:w-24 transition-all duration-300"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skill;