import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Logo from "../../Assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-bg text-text py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        {/* Logo & Address */}
        <div>
          <img src={Logo} alt="tINGS Garden" className="mb-4" />
          <div className="space-y-4 text-sm">
            <p className="font-mont font-medium text-text">
              BLK 82 Marine Parade <br />
              #01-606 <br />
              S440082
            </p>
            <p className="font-mont font-medium text-text">
              BLK 101 Yishun Ave 5 <br />
              #01-51 S760101
            </p>
            <p className="font-mont font-medium text-text">
              +65 94572331 <br />
              <a
                href="mailto:tings_garden11@outlook.com"
                className="underline hover:text-gray-700 mt-4"
              >
                tings_garden11@outlook.com
              </a>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="col-span-2 grid grid-cols-2 gap-10">
          <div className="space-y-3">
            <Link
              to="/"
              className="hover:text-primary block font-italian font-semibold text-text"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-primary  font-italian font-semibold text-text block"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary  font-italian font-semibold text-text block"
            >
              Contact Us
            </Link>
          </div>
          <div className="space-y-3">
            <Link
              to="/plants"
              className="hover:text-primary  font-italian font-semibold text-text    block"
            >
              Plant
            </Link>
            <Link
              to="/flowers"
              className="hover:text-primary  font-italian font-semibold text-text block"
            >
              Flower
            </Link>
            <Link
              to="fertilizer"
              className="hover:text-primary  font-italian font-semibold text-text block"
            >
              Fertizer
            </Link>
            <Link
              to="service"
              className="hover:text-primary  font-italian font-semibold text-text block"
            >
              Service
            </Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="mb-3 font-medium font-mont text-text">Follow us</p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2024 Ting’s Garden. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-black">
            Privacy Policy
          </Link>
          <Link to="/cookie-policy" className="hover:text-black">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
