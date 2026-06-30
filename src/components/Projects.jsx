import React from "react";
import { Github, ExternalLink } from "lucide-react";
import igniistech from "../assets/ignisstech.png";
import igniisdemo from "../assets/idniisdemo.png";
import todo from "../assets/todo.png";

const projects = [


  {
    title: "IgniisTech",
    description: "",
    tech: ["React+Vite", "Tailwind CSS", "Framer Motion"],
    image: igniistech,
    DemoLink: "https://68d5327f6f99101f48244ab2--quiet-beignet-9ed595.netlify.app/",
  },
  {
    title: "IgniisTech",
    description:
      "A mobile-first fitness tracker app with analytics and performance insights.",
    tech: ["React", "Tailwind CSS"],
    image: igniisdemo,
    DemoLink: "https://unrivaled-malabi-178f04.netlify.app/",
    
  },
  {
    title: "ToDo",
    description:
      "AI powered content generation platform using OpenAI API integration.",
    tech: ["Python", "OpenAI"],
    image: todo,
      DemoLink: "https://todolist-erb.pages.dev/"
  },
  {
    title: "Fitness Tracker App",
    description:
      "A mobile-first fitness tracker app with analytics and performance insights.",
    tech: ["React Native", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
  },
  {
    title: "Content Generator",
    description:
      "AI powered content generation platform using OpenAI API integration.",
    tech: ["Python", "OpenAI"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200",
  },
  {
    title: "Fitness Tracker App",
    description:
      "A mobile-first fitness tracker app with analytics and performance insights.",
    tech: ["React Native", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
  },
  {
    title: "Content Generator",
    description:
      "AI powered content generation platform using OpenAI API integration.",
    tech: ["Python", "OpenAI"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200",
  },
];
const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`min-h-screen px-6 py-20 transition-colors duration-500
      `}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 data-aos="fade-up" className="text-4xl lg:text-5xl font-bold">
            <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>
              My
            </span>{" "}
            <span className="text-orange-500">Projects</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className={`mt-4 text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A showcase of my recent work
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`group rounded-2xl overflow-hidden border backdrop-blur-xl transition-all duration-500
              hover:-translate-y-3 hover:shadow-[0_0_50px_rgba(255,165,0,0.25)]
              ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700/40 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 w-full rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300">
                    <Github size={16} /> Code
                  </button>

                  {project.DemoLink ? (
                    <a
                      href={project.DemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 w-full rounded-lg bg-linear-to-r from-orange-500 to-amber-400 text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center justify-center gap-2 px-4 py-2 w-full rounded-lg bg-gray-400 text-white cursor-not-allowed"
                    >
                      <ExternalLink size={16} /> Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
