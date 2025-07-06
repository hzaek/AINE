const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">Company</label>
              <input type="text" id="company" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;