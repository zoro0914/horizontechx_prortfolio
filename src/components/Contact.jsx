import React, { useState } from "react";

const Contact = ( { darkMode } ) => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className={`relative min-h-screen px-6 py-24 overflow-hidden transition-colors duration-500
        `}
>
      {/* Floating Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
      <h1 className="text-4xl font-bold mb-3">
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              Get In{" "}
            </span>
            <span className="text-orange-500">Touch</span>
          </h1>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      

        {/* Left Illustration */}
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="contact"
            className="w-80 lg:w-96 drop-shadow-2xl animate-bounce"
          />
        </div>

        {/* Right Form */}
        <div
          data-aos="fade-left"
          className={`relative rounded-3xl p-10 border backdrop-blur-2xl transition-all duration-500 ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-3">
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              Get In{" "}
            </span>
            <span className="text-orange-500">Touch</span>
          </h1>

          <p
            className={`mb-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Let's discuss your project
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300
                ${
                  darkMode
                    ? "bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-orange-500"
                    : "bg-gray-50 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-orange-400"
                }`}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300
                ${
                  darkMode
                    ? "bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-orange-500"
                    : "bg-gray-50 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-orange-400"
                }`}
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300
              ${
                darkMode
                  ? "bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-orange-500"
                  : "bg-gray-50 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-orange-400"
              }`}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300
              ${
                darkMode
                  ? "bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-orange-500"
                  : "bg-gray-50 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-orange-400"
              }`}
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 resize-none
              ${
                darkMode
                  ? "bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-orange-500"
                  : "bg-gray-50 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-orange-400"
              }`}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-linear-to-r from-orange-500 to-amber-400 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 active:scale-95"
            >
              {loading
                ? "Sending..."
                : sent
                ? "Message Sent ✓"
                : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;