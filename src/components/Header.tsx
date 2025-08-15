import Link from "next/link";
import { FaCog, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 flex items-center">
          <FaCog className="text-blue-600 mr-2 text-3xl" />
          <Link href="/">AINE Engineering and Investment</Link>
        </div>
        <nav>
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
              <Link href="#about" className="text-gray-600 hover:text-gray-800 flex items-center">
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
      </div>
    </header>
  );
};

export default Header;
