// src/App.jsx
import { useState } from "react";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import { motion as Motion, AnimatePresence } from "framer-motion";

// Import the ThemeProvider
import { ThemeProvider } from "./context/ThemeContext";
// Import the ThemeSwitcher component
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [currentView, setCurrentView] = useState("about");

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg text-dark-text dark:bg-dark-mode-bg dark:text-dark-mode-text-light flex flex-col items-center text-center px-4 pt-10 pb-10 relative">
        <ThemeSwitcher />

        <nav className="mb-10">
          {[
            { id: "about", label: "About Me" },
            { id: "projects", label: "Projects" },
            { id: "certifications", label: "Certifications" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentView(tab.id)}
              className={`px-4 py-2 mx-2 rounded-md text-lg font-medium transition-all duration-200 ease-in-out
                          ${
                            currentView === tab.id
                              ? "bg-pastel-blue text-dark-text shadow-lg dark:bg-dark-mode-primary dark:text-dark-mode-bg"
                              : "bg-gray-200 text-medium-text hover:bg-gray-300 hover:scale-105 hover:shadow-md dark:bg-gray-700 dark:text-dark-mode-text-medium dark:hover:bg-gray-600"
                          }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <main className="w-full max-w-5xl">
          <AnimatePresence mode="wait">
            {currentView === "about" && (
              <Motion.div
                key="about-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </Motion.div>
            )}

            {currentView === "projects" && (
              <Motion.div
                key="projects-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </Motion.div>
            )}

            {currentView === "certifications" && (
              <Motion.div
                key="certifications-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Certifications />
              </Motion.div>
            )}
          </AnimatePresence>
        </main>

        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}

export default App;
