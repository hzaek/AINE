const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AINE Engineering and Investment</h3>
            <p className="text-gray-400">Smart Software Solutions for Real Business Needs</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: al.h3rthii666@gmail.com</p>
            <p className="text-gray-400">Phone: +96877416667</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; {new Date().getFullYear()} AINE Engineering and Investment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;