import React from "react";
import { motion as Motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <Motion.div
      className="bg-card-bg p-6 rounded-lg shadow-lg overflow-hidden flex flex-col h-full dark:bg-dark-mode-card"
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
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
          aria-label={`GitHub Repo for ${project.name}`}
          className="text-pastel-blue hover:text-pastel-peach font-medium transition-colors duration-300 dark:text-dark-mode-primary dark:hover:text-dark-mode-accent"
        >
          GitHub Repo
        </a>
        {project.live_url && project.live_url !== "Not available" && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live Demo for ${project.name}`}
            className="text-pastel-green hover:text-pastel-peach font-medium transition-colors duration-300 dark:text-dark-mode-success dark:hover:text-dark-mode-accent"
          >
            Live Demo
          </a>
        )}
      </div>
    </Motion.div>
  );
}

export default ProjectCard;
