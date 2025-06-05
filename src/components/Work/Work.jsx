import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showLivePopup, setShowLivePopup] = useState(false);
  const [showCodePopup, setShowCodePopup] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleLiveClick = (project) => {
    if (project.isLive) {
      window.open(project.webapp, "_blank", "noopener noreferrer");
    } else {
      setShowLivePopup(true);
    }
  };

  const handleCodeClick = (project) => {
    if (project.isCodeComplete) {
      window.open(project.github, "_blank", "noopener noreferrer");
    } else {
      setShowCodePopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowLivePopup(false);
    setShowCodePopup(false);
  };

  return (
    <section
      id="work"
      className="min-h-screen py-16 px-4 sm:px-6 md:px-10 lg:px-[15vw] font-sans bg-black"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-24 sm:w-32 h-1 bg-[#2563eb] mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg font-semibold max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-blue-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-xl"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base mb-4 pt-2 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-[#2563eb] rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-xl mx-auto overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-blue-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-blue-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleCodeClick(selectedProject)}
                    className="flex-1 bg-gray-800 hover:bg-blue-800 text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold"
                  >
                    View Code
                  </button>
                  <button
                    onClick={() => handleLiveClick(selectedProject)}
                    className="flex-1 bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                  >
                    View Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup: Project Not Live */}
      {showLivePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white text-black rounded-lg shadow-2xl p-6 max-w-sm mx-auto relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-3 text-center">🚧 Coming Soon</h2>
            <p className="text-center text-sm text-gray-700">
              The live version of this project is on the way. Stay tuned for
              updates!
            </p>
          </div>
        </div>
      )}

      {/* Popup: Code Not Completed */}
      {showCodePopup && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white text-black rounded-lg shadow-2xl p-6 max-w-sm mx-auto relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-3 text-center">
              🛠️ Code Under Development
            </h2>
            <p className="text-center text-sm text-gray-700 mb-4">
              This project is still under development. However, you can explore
              the current source code on GitHub.
            </p>
            <div className="text-center">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-xl text-sm font-semibold"
              >
                View Unfinished Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
