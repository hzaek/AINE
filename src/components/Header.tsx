import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">AINE Engineering and Investment</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#services" className="text-gray-600 hover:text-gray-800">Services</Link></li>
            <li><Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link></li>
            <li><Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;