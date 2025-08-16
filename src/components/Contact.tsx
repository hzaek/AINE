import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaComments,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-lg md:max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8 px-4">
            Contact Us
          </h2>
          <form className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2 text-sm md:text-base"
              >
                <FaUser className="inline mr-2 text-blue-600" />
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm md:text-base"
                placeholder="Your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2 text-sm md:text-base"
              >
                <FaEnvelope className="inline mr-2 text-blue-600" />
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm md:text-base"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-semibold mb-2 text-sm md:text-base"
              >
                <FaBuilding className="inline mr-2 text-blue-600" />
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm md:text-base"
                placeholder="Your company name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2 text-sm md:text-base"
              >
                <FaComments className="inline mr-2 text-blue-600" />
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm md:text-base resize-vertical"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 inline-flex items-center w-full sm:w-auto justify-center text-sm md:text-base"
              >
                <FaPaperPlane className="mr-2" />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
