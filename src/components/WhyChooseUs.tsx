import {
  FaCheckCircle,
  FaHeadset,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-600 text-left">
                Customizable systems tailored to your specific needs
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <FaHeadset className="text-blue-500 text-xl mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-600 text-left">
                Dedicated local support in Oman and the GCC
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <FaDollarSign className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-600 text-left">
                Competitive and transparent pricing
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <FaUsers className="text-blue-500 text-xl mt-1 flex-shrink-0" />
              <span className="text-lg text-gray-600 text-left">
                Trusted by a growing number of professionals
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
