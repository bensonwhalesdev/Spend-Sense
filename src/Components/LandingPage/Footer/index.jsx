import React from "react";
import { Facebook, Instagram, Mail, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C1F58] text-white px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Spend-Sense</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Take control of your finances with smart, simple, local budgeting. Track your spending, set your goals, and grow your savings — all in one place.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/whyspendsense" className="hover:text-white">Why Spend-Sense</Link></li>
            <li><Link to="#" className="hover:text-white">How It Works</Link></li>
            <li><Link to="#" className="hover:text-white">FAQs</Link></li>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <Link to="#" aria-label="Facebook" className="hover:text-white">
              <Facebook />
            </Link>
            <Link to="#" aria-label="Twitter" className="hover:text-white">
              <TwitterIcon />
            </Link>
            <Link to="#" aria-label="Instagram" className="hover:text-white">
              <Instagram />
            </Link>
            <Link to="mailto:support@spendsense.ng" aria-label="Email" className="hover:text-white">
              <Mail />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-sm text-gray-400 border-t border-gray-600 pt-6">
        &copy; {new Date().getFullYear()} Spend-Sense. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
