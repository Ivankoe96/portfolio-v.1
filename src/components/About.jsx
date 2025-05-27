// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion"; // Make sure you import motion if used
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"; // Import your icons

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
        Hi, I'm Ivan Koe 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
        A Front-End Developer passionate about creating beautiful, responsive,
        and accessible web experiences.
      </p>

      <div className="flex gap-6 justify-center pt-4">
        <a
          href="https://github.com/Ivankoe96"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ivan Koe's GitHub profile (opens in a new tab)"
        >
          <GithubIcon className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/ivankoe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ivan Koe's LinkedIn profile (opens in a new tab)"
        >
          <LinkedinIcon className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
        </a>
        <a href="mailto:ivandharmakoe@gmail.com" aria-label="Email Ivan Koe">
          <MailIcon className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
        </a>
      </div>

      <div className="pt-6">
        <a
          href="/Ivan_Koe_Resume.pdf"
          download="Ivan_Koe_Resume.pdf"
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </motion.div>
  );
}

export default About;
