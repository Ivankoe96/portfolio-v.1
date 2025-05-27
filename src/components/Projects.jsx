import React from "react";
import { projectsData } from "../data.js";
import { motion as Motion } from "framer-motion";

const Projects = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-10 px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-dark-text dark:text-dark-mode-text-light">
        My Projects
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <Motion.div
            key={project.name}
            className="bg-card-bg p-6 rounded-lg shadow-lg overflow-hidden flex flex-col h-full dark:bg-dark-mode-card"
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-pastel-blue dark:text-dark-mode-primary">
              {project.name}
            </h3>
            <p className="text-medium-text mb-4 text-left flex-grow dark:text-dark-mode-text-medium">
              {project.description}
            </p>
            <div className="flex justify-start space-x-4 mt-auto">
              <a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pastel-blue hover:text-pastel-peach font-medium transition-colors duration-300 dark:text-dark-mode-primary dark:hover:text-dark-mode-accent"
              >
                GitHub Repo
              </a>
              {project.live_url &&
                project.live_url !== "Not available" &&
                project.live_url !== "" && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pastel-green hover:text-pastel-peach font-medium transition-colors duration-300 dark:text-dark-mode-success dark:hover:text-dark-mode-accent"
                  >
                    Live Demo
                  </a>
                )}
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.section>
  );
};

export default Projects;
