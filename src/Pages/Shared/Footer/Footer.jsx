import { FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About VisaPortal</h3>
            <p className="text-gray-400">
              VisaPortal is your one-stop platform for all visa-related
              information and applications. We strive to make your journey
              smoother.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/all-visas" className="hover:text-blue-300">
                  All Visas
                </a>
              </li>
              <li>
                <a href="/add-visa" className="hover:text-blue-300">
                  Add Visa
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Visa Street, Your City, Country</p>
            <p className="text-gray-400">Email: support@visaportal.com</p>
            <p className="text-gray-400">Phone: +1 (234) 567-890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} VisaPortal. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
            <a
              href="https://github.com/saikat20034"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/mdmazharulislam.saikat.7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/md-mazharul-islam-saikat-65bab2299/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
