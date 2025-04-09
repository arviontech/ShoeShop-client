import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const HomeFooter: React.FC = () => {
  return (
    <footer className="bg-[#0d1221] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* QUICK LINES Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">QUICK LINES</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About us</a></li>
         
            <li><a href="#" className="hover:text-white">Help</a></li>
            <li><a href="#" className="hover:text-white">My account</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Comsons</a></li>
          </ul>
        </div>

        {/* CATEGORIES Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">CATEGORIES</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Brands</a></li>
            <li><a href="#" className="hover:text-white">Men's</a></li>
            <li><a href="#" className="hover:text-white">Women's</a></li>
            <li><a href="#" className="hover:text-white">Kid's</a></li>
            <li><a href="#" className="hover:text-white">Shoes</a></li>
            <li><a href="#" className="hover:text-white">Sneakers</a></li>
          </ul>
        </div>

        {/* CONTACTS Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">CONTACTS</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>97845 Baker at. 567</li>
            <li>Los Angeles - US</li>
            <li className="mt-4">+94 429 29 221</li>
            <li>info@allais.com</li>
          </ul>
        </div>

        {/* KEEP IN TOUCH Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">KEEP IN TOUCH</h2>
          <p className="text-sm text-gray-400 mb-2">Follow Us</p>
          <div className="flex space-x-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaLinkedin className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <div className="mb-4">
          <span className="text-sm mr-4">[English]</span>
          <span className="text-sm">[US Dollars]</span>
        </div>
        <div className="text-sm text-gray-400">
          <a href="#" className="hover:text-white mr-4">Terms and conditions</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
        <p className="text-sm text-gray-400 mt-2">© 2025 Arvion Tech</p>
      </div>
    </footer>
  );
};

export default HomeFooter;