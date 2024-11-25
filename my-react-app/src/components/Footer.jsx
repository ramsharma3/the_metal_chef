import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative z-20 mt-20">
      <div className="glass-effect border-t border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold gradient-text">
                  The Metal Chef
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Pioneering the future of aluminum manufacturing with
                  innovation and sustainability.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2"
                >
                  <span>📞</span>
                  <span>+91 98765 43210</span>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2"
                >
                  <span>✉️</span>
                  <span>contact@metalchef.com</span>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2"
                >
                  <span>🏭</span>
                  <span>123 Industrial Avenue, Sector 62, Noida</span>
                </motion.li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { name: "LinkedIn", icon: "🔗" },
                  { name: "Twitter", icon: "🐦" },
                  { name: "Facebook", icon: "👥" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700/30 text-center">
            <p className="text-gray-400">
              © 2024 The Metal Chef. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
