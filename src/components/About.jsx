import React from "react";
import { motion as Motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

function About() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4 bg-card-bg p-8 md:p-12 rounded-lg shadow-xl dark:bg-dark-mode-card"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-dark-text dark:text-dark-mode-text-light">
        Hi, I'm Ivan Koe 👋
      </h1>
      <p className="text-lg md:text-xl text-medium-text max-w-xl mx-auto dark:text-dark-mode-text-medium">
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
          <GithubIcon className="w-6 h-6 text-dark-text hover:text-pastel-blue transition-colors dark:text-dark-mode-text-light dark:hover:text-dark-mode-primary" />
        </a>
        <a
          href="https://linkedin.com/in/ivankoe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ivan Koe's LinkedIn profile (opens in a new tab)"
        >
          <LinkedinIcon className="w-6 h-6 text-dark-text hover:text-pastel-blue transition-colors dark:text-dark-mode-text-light dark:hover:text-dark-mode-primary" />
        </a>
        <a href="mailto:ivandharmakoe@gmail.com" aria-label="Email Ivan Koe">
          <MailIcon className="w-6 h-6 text-dark-text hover:text-pastel-blue transition-colors dark:text-dark-mode-text-light dark:hover:text-dark-mode-primary" />
        </a>
      </div>

      <div className="pt-6">
        <a
          href="/Ivan_Koe_Resume.pdf"
          download="Ivan_Koe_Resume.pdf"
          className="inline-block px-8 py-3 bg-pastel-blue text-dark-text text-lg font-semibold rounded-lg shadow-md hover:bg-pastel-peach transition-colors duration-300 dark:bg-dark-mode-primary dark:text-dark-mode-bg dark:hover:bg-dark-mode-accent"
        >
          Download CV
        </a>
      </div>
    </Motion.div>
  );
}

export default About;
