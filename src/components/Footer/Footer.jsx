import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-10 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0a192f]">
      <div className="text-center">
        {/* Logo/Name */}
        <h2 className="text-2xl font-bold text-[#2563eb] mb-6">Kannan S</h2>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-5 mb-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/your-profile",
            },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/your-profile",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/your-profile",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/your-profile",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/your-channel",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#cbd5e1] hover:text-[#2563eb] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-xs text-gray-500">
          © 2025 <span className="text-white font-medium">Kannan S</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
