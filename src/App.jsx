import { useState } from "react";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

function App() {
  const [currentView, setCurrentView] = useState("about");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center text-center px-4 pt-10 pb-10">
      {" "}
      {/* Added pb-10 for bottom padding */}
      <nav className="mb-10">
        <button
          onClick={() => setCurrentView("about")}
          className={`px-4 py-2 mx-2 rounded-md text-lg font-medium transition-colors
                      ${
                        currentView === "about"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
        >
          About Me
        </button>
        <button
          onClick={() => setCurrentView("projects")}
          className={`px-4 py-2 mx-2 rounded-md text-lg font-medium transition-colors
                      ${
                        currentView === "projects"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
        >
          Projects
        </button>
        <button
          onClick={() => setCurrentView("certifications")}
          className={`px-4 py-2 mx-2 rounded-md text-lg font-medium transition-colors
                      ${
                        currentView === "certifications"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
        >
          Certifications
        </button>
      </nav>
      <div className="w-full max-w-5xl">
        {" "}
        {/* Added a container to constrain width of content sections */}
        {currentView === "about" && <About />}
        {currentView === "projects" && <Projects />}
        {currentView === "certifications" && <Certifications />}
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;
