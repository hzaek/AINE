const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About AINE Engineering and Investment</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are a passionate team of developers and engineers dedicated to building innovative software solutions that solve real-world problems. Our mission is to empower businesses with the technology they need to succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">We are constantly exploring new technologies to deliver cutting-edge solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Reliability</h3>
              <p className="text-gray-600">We build robust and scalable systems that you can depend on.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Local Support</h3>
              <p className="text-gray-600">We provide dedicated support to our clients in Oman and the GCC.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;