import Link from "next/link";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <hr className="border-t border-gray-700 my-8 -mt-12" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-4">
              <img src="/img/logo.png" alt="Logo" className="w-24" />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-teal-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-teal-400">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Landingpage</Link>
                </li>
                <li>
                  <Link href="#">Features</Link>
                </li>
                <li>
                  <Link href="#">Documentation</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Documentation</Link>
                </li>
                <li>
                  <Link href="#">Themes</Link>
                </li>
                <li>
                  <Link href="#">UI Kit</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Terms</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">More</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Documentation</Link>
                </li>
                <li>
                  <Link href="#">License</Link>
                </li>
                <li>
                  <Link href="#">Changelog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-400 mb-6">
            Get the latest updates and offers.
          </p>
          <form className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 rounded-md text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-teal-500 text-white font-medium hover:bg-teal-600 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-4 -mb-5 text-center text-gray-500 text-sm">
          &copy; 2024 FinVest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
