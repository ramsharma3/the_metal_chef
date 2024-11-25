import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function FloatingNav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link to={isHome ? "/about" : "/"}>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255,255,255,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden rounded-full group"
        >
          <span className="relative z-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 text-zinc-900 px-6 py-3 rounded-full font-semibold inline-block">
            {isHome ? "About Us →" : "← Back Home"}
          </span>
          <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default FloatingNav;
