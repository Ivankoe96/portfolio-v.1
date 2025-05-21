import React from 'react';
import { certificationsData } from '../data.js';

const Certifications = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">My Certifications</h2>
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-6">
          {certificationsData.map((certification) => (
            <li
              key={certification.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row justify-between items-center"
            >
              {/* Added 'text-left' class here */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-blue-600 mb-2 sm:mb-0">{certification.name}</h3>
                {certification.issuer && (
                  <p className="text-sm text-gray-600">Issuer: {certification.issuer}</p>
                )}
              </div>
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 sm:mt-0 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 text-sm font-medium"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
