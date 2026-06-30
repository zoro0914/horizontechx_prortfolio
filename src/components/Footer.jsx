import React from "react";
import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`relative px-6 py-6 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Harsh.dev
            </h2>
            <p
              className={`mt-4 text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Building modern, scalable and visually stunning web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-orange-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Social */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-semibold mb-4">Connect With Me</h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/zoro0914"
                className="p-3 rounded-full bg-white/50 hover:bg-orange-500/20 hover:scale-110 transition-all duration-300"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/harsh-kumar-a25039312/"
                className="p-3 rounded-full bg-white/50 hover:bg-orange-500/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-white/50 hover:bg-orange-500/20 hover:scale-110 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t pt-6 flex flex-col sm:flex-row justify-between items-center ${
            darkMode ? "border-white/10" : "border-gray-300"
          }`}
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Harsh. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-sm text-orange-500 hover:underline"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
