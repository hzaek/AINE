import {
  FaCog,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FaCog className="text-blue-400 mr-2 text-2xl" />
              <h3 className="text-xl font-bold">
                AINE Engineering and Investment
              </h3>
            </div>
            <p className="text-gray-400">
              Smart Software Solutions for Real Business Needs
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" />
                al.h3rthii666@gmail.com
              </p>
              <p className="text-gray-400 flex items-center">
                <FaPhone className="mr-2 text-blue-400" />
                +96877416667
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaLinkedin className="mr-1 text-xl" />
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaInstagram className="mr-1 text-xl" />
                Instagram
              </a>
              <a
                href="https://wa.me/96877416667"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaWhatsapp className="mr-1 text-xl" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
          <p className="flex items-center justify-center">
            &copy; {new Date().getFullYear()} AINE Engineering and Investment.
            All rights reserved.
            <FaHeart className="mx-2 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
