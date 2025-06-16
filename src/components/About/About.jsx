import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="flex-grow py-8 px-4 sm:px-8 md:px-12 lg:px-32 font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight text-white">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-blue-500">
            Kannan S
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight text-white">
            <span>I am a </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 font-bold">
              <ReactTypingEffect
                text={[
                  'Fullstack Developer',
                  'React.js Developer',
                  'Python Django Developer',
                  'API designer',
                  'Responsive Web Expert',
                  'Problem-Solving Coder',
                ]}
                speed={80}
                eraseSpeed={40}
                typingDelay={300}
                eraseDelay={1800}
                cursorRenderer={(cursor) => (
                  <span className="text-indigo-400">{cursor}</span>
                )}
              />
            </span>
          </h3>
          <p className="text-base sm:text-lg text-slate-300 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with 1 year of experience in building scalable web applications. Skilled in both front-end and back-end development, I work with modern technologies to create seamless user experiences and efficient solutions tailored to project needs.
          </p>
          <a
            href="https://drive.google.com/file/d/1X93vvxuKy29G46Ffan3leZiWEjzB2J03/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #2563eb, #1e40af)',
              boxShadow:
                '0 0 2px #2563eb, 0 0 10px #2563eb, 0 0 30px #2563eb',
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Tilt
            className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[24rem] lg:h-[24rem] border-4 border-blue-500 rounded-xl"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Kannan-S"
              className="w-full h-full rounded-xl object-cover drop-shadow-[0_10px_20px_rgba(37,99,235,0.4)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
