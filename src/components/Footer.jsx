import React from "react";
// import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Instagram } from "lucide-react"; // using lucide-react icons

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-0">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">AmalKrishna KP</h2>
          
        </div>

        {/* Quick Links */}
        

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect with Me</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-gray-400" />
              <a href="mailto:amalkrishnakp04@gmail.com" className="hover:text-white">
                amalkrishnakp04@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Github size={18} className="text-gray-400" />
              <a href="https://github.com/AmalKrishnaKP" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Linkedin size={18} className="text-gray-400" />
              <a href="https://www.linkedin.com/in/amal-krishna-k-p-20b171258/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Instagram size={18} className="text-gray-400" />
              <a href="https://www.instagram.com/_amal_krishna_kp/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;