import React from 'react'
import logo from "../assets/Logo.png";
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="bg-zinc-950 text-neutral-200 pt-10 pb-6 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Contact Info */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex items-center mb-4 space-x-3">
              <img src={logo} className="h-10" alt="ManthraX Logo" />
              <span className="font-bold text-lg">Learn Mate</span>
            </div>
            <p className="mb-1">Final Year Research Project</p>
            <p className="mb-1">Smart Tool for Early Detection and Mitigation Learning Disabilities</p>
            <p className="mb-1">Team Learn Mate (2025-325)</p>
            <p className="mb-2">Sri Lanka Institute of Information Technology</p>
            <p className="mb-1"><span className="font-semibold">Phone:</span> +7841234567</p>
            <p className="mb-4"><span className="font-semibold">Email:</span> learnmate@gmail.com</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-blue-400"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-pink-400"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-blue-400"><FaSkype size={20} /></a>
              <a href="#" className="hover:text-blue-400"><FaLinkedin size={20} /></a>
            </div>
          </div>
          {/* Useful Links */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400">About us</a></li>
              <li><a href="#document" className="hover:text-blue-400">Documents</a></li>
              <li><a href="#milestones" className="hover:text-blue-400">Milestones</a></li>
              <li><a href="#domain" className="hover:text-blue-400">Domain</a></li>
              <li><a href="#team" className="hover:text-blue-400">Team</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          {/* Our Services */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Real-Time Handwriting & Reading Pattern Analysis</li>
            <li>Personalized Learning Profile Generation</li>
            <li>Voice-Based Reading Tasks & Fluency Scoring</li>
            <li>Multimodal Learning Support & Mitigation Activities</li>
            <li>Secure Data Storage & Accessibility</li>

            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm text-gray-500">
          © 2025 <a href="#" className="hover:underline">LearnMate</a>. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Contact