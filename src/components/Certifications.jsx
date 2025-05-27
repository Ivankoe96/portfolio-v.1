import React from "react";
import { certificationsData } from "../data.js";
import { motion as Motion } from "framer-motion";

const Certifications = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-dark-text dark:text-dark-mode-text-light">
        My Certifications
      </h2>
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-6">
          {certificationsData.map((certification) => (
            <li
              key={certification.name}
              className="bg-card-bg p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row justify-between items-center dark:bg-dark-mode-card"
            >
              <div className="text-left">
                <h3 className="text-xl font-semibold text-pastel-blue mb-2 sm:mb-0 dark:text-dark-mode-primary">
                  {certification.name}
                </h3>
                {certification.issuer && (
                  <p className="text-sm text-medium-text dark:text-dark-mode-text-medium">
                    Issuer: {certification.issuer}
                  </p>
                )}
              </div>
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-0 px-4 py-2 bg-pastel-green text-dark-text rounded-md hover:bg-pastel-peach transition-colors duration-300 text-sm font-medium dark:bg-dark-mode-success dark:text-dark-mode-bg dark:hover:bg-dark-mode-accent"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Motion.section>
  );
};

export default Certifications;
