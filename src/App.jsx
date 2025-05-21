import { useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { motion as Motion } from "framer-motion";
import './index.css';

import { SpeedInsights } from '@vercel/speed-insights/react';
import Projects from './components/Projects'; // Import Projects component
import Certifications from './components/Certifications'; // Import Certifications component

function App() {
  const [currentView, setCurrentView] = useState('about');

  return (
    <div className="min-h-screen bg-white flex flex-col items-center text-center px-4 pt-10 pb-10"> {/* Added pb-10 for bottom padding */}
      <nav className="mb-10">
        <button
          onClick={() => setCurrentView('about')}
          className={`px-4 py-2 mx-2 rounded-md text-lg font-medium transition-colors
                      ${currentView === 'about' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          About Me
        </button>
        <button
          onClick={() => setCurrentView('projects')}
          className={`px-4 py-2 mx-2 rounded-md text-lg font-medium transition-colors
                      ${currentView === 'projects' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Projects
        </button>
        <button
          onClick={() => setCurrentView('certifications')}
          className={`px-4 py-2 mx-2 rounded-md text-lg font-medium transition-colors
                      ${currentView === 'certifications' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Certifications
        </button>
      </nav>

      <div className="w-full max-w-5xl"> {/* Added a container to constrain width of content sections */}
        {currentView === 'about' && (
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
              Hi, I'm Ivan Koe 👋
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto"> {/* Added mx-auto for paragraph centering */}
              A Front-End Developer passionate about creating beautiful, responsive, and accessible web experiences.
            </p>

            <div className="flex gap-6 justify-center pt-4">
              <a href="https://github.com/Ivankoe96" target="_blank" rel="noopener noreferrer" aria-label="Ivan Koe's GitHub profile (opens in a new tab)">
                <GithubIcon className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://linkedin.com/in/ivankoe" target="_blank" rel="noopener noreferrer" aria-label="Ivan Koe's LinkedIn profile (opens in a new tab)">
                <LinkedinIcon className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
              </a>
              <a href="mailto:ivandharmakoe@gmail.com" aria-label="Email Ivan Koe">
                <MailIcon className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </Motion.div>
        )}
        
        {currentView === 'projects' && <Projects />}
        {currentView === 'certifications' && <Certifications />}
      </div>

        <div className="flex gap-6 justify-center pt-4">
          <a href="https://github.com/Ivankoe96" target="_blank" rel="noopener noreferrer" aria-label="Ivan Koe's GitHub profile (opens in a new tab)">
            <GithubIcon className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/ivankoe" target="_blank" rel="noopener noreferrer" aria-label="Ivan Koe's LinkedIn profile (opens in a new tab)">
            <LinkedinIcon className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
          </a>
          <a href="mailto:ivandharmakoe@gmail.com" aria-label="Email Ivan Koe">
            <MailIcon className="w-6 h-6 text-gray-800 hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </Motion.div>
      
      <SpeedInsights />
    </div>
  );
}

export default App;
