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
    <footer className="bg-gray-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <FaCog className="text-blue-400 mr-2 text-xl md:text-2xl" />
              <h3 className="text-lg md:text-xl font-bold">
                AINE Engineering and Investment
              </h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Smart Software Solutions for Real Business Needs
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center justify-center sm:justify-start text-sm md:text-base">
                <FaEnvelope className="mr-2 text-blue-400 flex-shrink-0" />
                <span className="break-all">al.h3rthii666@gmail.com</span>
              </p>
              <p className="text-gray-400 flex items-center justify-center sm:justify-start text-sm md:text-base">
                <FaPhone className="mr-2 text-blue-400 flex-shrink-0" />
                +96877416667
              </p>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
              <a
                href="#"
                className="text-gray-400 hover:text-white flex items-center justify-center sm:justify-start text-sm md:text-base"
              >
                <FaLinkedin className="mr-1 text-lg md:text-xl" />
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex items-center justify-center sm:justify-start text-sm md:text-base"
              >
                <FaInstagram className="mr-1 text-lg md:text-xl" />
                Instagram
              </a>
              <a
                href="https://wa.me/96877416667"
                className="text-gray-400 hover:text-white flex items-center justify-center sm:justify-start text-sm md:text-base"
              >
                <FaWhatsapp className="mr-1 text-lg md:text-xl" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700">
          <p className="flex items-center justify-center text-sm md:text-base">
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
