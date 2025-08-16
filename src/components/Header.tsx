"use client";
import Link from "next/link";
import {
  FaCog,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-gray-800 flex items-center">
          <FaCog className="text-blue-600 mr-2 text-2xl md:text-3xl" />
          <Link href="/" className="text-sm md:text-base flex items-center">
            AINE Engineering and Investment
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#services"
                className="text-gray-600 hover:text-gray-800 flex items-center"
              >
                <FaCog className="mr-1" />
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-gray-600 hover:text-gray-800 flex items-center"
              >
                <FaInfoCircle className="mr-1" />
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-800 flex items-center"
              >
                <FaEnvelope className="mr-1" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-gray-800"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="px-4 py-2 space-y-2">
            <li>
              <Link
                href="#services"
                className="block text-gray-600 hover:text-gray-800 py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaCog className="mr-2" />
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block text-gray-600 hover:text-gray-800 py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaInfoCircle className="mr-2" />
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block text-gray-600 hover:text-gray-800 py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaEnvelope className="mr-2" />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
