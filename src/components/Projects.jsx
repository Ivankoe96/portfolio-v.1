import React from "react";
import { projectsData } from "../data.js";

const Projects = () => {
  return (
    <section className="py-10 px-4">
      {" "}
      {/* Changed py-12 to py-10 */}
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        My Projects
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <div
            key={project.name}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
              {project.name}
            </h3>
            <p className="text-gray-700 mb-4 text-left">
              {project.description}
            </p>
            <div className="flex justify-start space-x-4">
              <a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300"
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
                    className="text-green-500 hover:text-green-700 font-medium transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
