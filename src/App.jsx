import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 md:px-16 py-10">
      {/* Header */}
      <section className="text-center mb-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ivan Dharma Koe
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Front-End Developer | JavaScript • React • D3.js
        </motion.p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="mailto:ivandharmakoe@gmail.com" className="flex items-center gap-2 px-4 py-2 border rounded">
            <Mail size={18} /> Email
          </a>
          <a href="https://github.com/Ivankoe96" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 border rounded">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/in/ivankoe" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 border rounded">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Treemap Diagram",
              desc: "A D3.js project visualizing movie sales in a treemap format.",
              link: "https://codepen.io/Ivankoe96/full/PoEPYgy",
            },
            {
              title: "Choropleth Map",
              desc: "Visual representation of US education data using D3.js and topojson.",
              link: "https://codepen.io/Ivankoe96/full/VwMaqMy",
            },
            {
              title: "Heat Map",
              desc: "Monthly global temperature data visualization in heat map format.",
              link: "https://codepen.io/Ivankoe96/full/LYRNYeK",
            },
          ].map((project) => (
            <div key={project.title} className="p-4 border rounded">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            <a href="https://www.freecodecamp.org/certification/Ivankoe/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              JavaScript Algorithms and Data Structures
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/certification/Ivankoe/responsive-web-design" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Responsive Web Design
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/certification/Ivankoe/front-end-development-libraries" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Front End Development Libraries
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/certification/Ivankoe/data-visualization" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Data Visualization
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
