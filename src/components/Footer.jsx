/* eslint-disable react/no-unescaped-entities */
import { FaInfoCircle, FaPhone, FaFileContract } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex justify-between bg-[#1a1c26] text-white ">
      <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2 flex items-center space-x-2">
            <FaInfoCircle className="w-4 h-4" />
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-gray-300"
            >
              About
            </a>
          </div>

          <div className="px-5 py-2 flex items-center space-x-2">
            <FaPhone className="w-4 h-4" />
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-gray-300"
            >
              Contact
            </a>
          </div>
          <div className="px-5 py-2 flex items-center space-x-2">
            <FaFileContract className="w-4 h-4" />
            <a
              href="#"
              className="text-base leading-6 text-white hover:text-gray-300"
            >
              Terms
            </a>
          </div>
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-white-400">
          Koi69 - Vietnam's Number 1 Premier Koi Auction House
        </p>
        <p className="mt-8 text-base leading-6 text-center text-white-400">
          © 2024 Koi69, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;