import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import FloatingNav from "./components/FloatingNav";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />

        {/* Animated gradient background */}
        <div className="fixed inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
        </div>

        {/* Ambient light effect */}
        <div className="fixed inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "140vw",
              height: "140vh",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)",
              filter: "blur(90px)",
            }}
          />
        </div>

        {/* Floating particles effect */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* Floating Navigation */}
        <FloatingNav />

        {/* Footer */}
        <Footer />

        {/* Enhanced overlay gradient */}
        <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-zinc-900/80" />
      </div>
    </Router>
  );
}

export default App;
