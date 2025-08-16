import { FaLightbulb, FaShieldAlt, FaHeadset, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <FaRocket className="text-blue-600 text-4xl md:text-5xl mx-auto mb-4" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 px-4">
            About AINE Engineering and Investment
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 px-4">
            We are a passionate team of developers and engineers dedicated to
            building innovative software solutions that solve real-world
            problems. Our mission is to empower businesses with the technology
            they need to succeed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-2 md:p-3 rounded-full w-fit mx-auto mb-4">
                <FaLightbulb className="text-blue-600 text-xl md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                We are constantly exploring new technologies to deliver
                cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 p-2 md:p-3 rounded-full w-fit mx-auto mb-4">
                <FaShieldAlt className="text-green-600 text-xl md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Reliability
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                We build robust and scalable systems that you can depend on.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <div className="bg-purple-100 p-2 md:p-3 rounded-full w-fit mx-auto mb-4">
                <FaHeadset className="text-purple-600 text-xl md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Local Support
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                We provide dedicated support to our clients in Oman and the GCC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
