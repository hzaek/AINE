import { FaRocket, FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 md:mb-8">
          <FaRocket className="text-blue-600 text-4xl md:text-6xl mx-auto mb-4" />
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-4">
          Smart Software Solutions for Real Business Needs
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 px-4 max-w-2xl mx-auto">
          We build custom software to help your business grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 inline-flex items-center w-full sm:w-auto justify-center"
          >
            <FaRocket className="mr-2" />
            Request a Demo
          </a>
          <a
            href="#contact"
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-400 inline-flex items-center w-full sm:w-auto justify-center"
          >
            <FaPhone className="mr-2" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
