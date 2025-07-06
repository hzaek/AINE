const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Smart Software Solutions for Real Business Needs</h1>
        <p className="text-lg text-gray-600 mb-8">We build custom software to help your business grow.</p>
        <div className="space-x-4">
          <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600">Request a Demo</a>
          <a href="#contact" className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-400">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;