import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-4 sm:px-6 md:px-[7vw] lg:px-[12vw] xl:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#2563eb] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold px-2">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 w-full sm:w-[90%] md:w-[48%] lg:w-[46%] xl:w-[42%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-2 border-2 border-gray-700 rounded-3xl py-2 px-3 sm:py-2 sm:px-3 text-center hover:border-[#2563eb] transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
