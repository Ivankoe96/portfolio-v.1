import React from "react";
import { motion as Motion } from "framer-motion";
import { projectsData } from "../data.js";
import ProjectCard from "./ProjectCard";

const Projects = () => (
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
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  </Motion.section>
);

export default Projects;

