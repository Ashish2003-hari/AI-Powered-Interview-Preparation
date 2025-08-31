
import React, { useState, useContext } from 'react';
import HERO_IMG from "../assets/hero-image.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';
import { LuSparkles } from "react-icons/lu";
import { motion } from 'framer-motion';

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-blue-600 text-white relative overflow-hidden">
        {/* Background Glows */}
        <div className="w-[500px] h-[500px] bg-yellow-300/30 blur-[120px] absolute top-0 left-0 rounded-full" />
        <div className="w-[400px] h-[400px] bg-orange-400/30 blur-[100px] absolute bottom-0 right-0 rounded-full" />
        <div className="w-[300px] h-[300px] bg-blue-400/30 blur-[90px] absolute top-1/2 left-1/2 -translate-x-1/2 rounded-full" />

        <div className="container mx-auto px-6 pt-8 pb-[200px] relative z-10">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-20"
          >
            <div className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-200 via-orange-200 to-blue-200 text-transparent bg-clip-text">
              Interview Prep AI
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-gradient-to-r from-yellow-500 via-orange-500 to-blue-600 text-lg font-semibold px-7 py-2.5 rounded-full shadow-md hover:opacity-90 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </motion.header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="flex items-center justify-left mb-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-yellow-200 font-semibold bg-yellow-500/20 px-4 py-1.5 rounded-full border border-yellow-300/40 shadow-sm">
                  <LuSparkles className="w-4 h-4 text-yellow-200" />
                  AI Powered
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-snug">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#facc15_0%,_#fb923c_40%,_#3b82f6_100%)] bg-[length:250%_250%] animate-text-shine font-extrabold">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Save your interview sets, organize them in your dashboard, and pick up your preparation exactly where you left off — with AI guidance.
              </p>

              <button
                className="bg-gradient-to-r from-yellow-500 via-orange-500 to-blue-600 text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:opacity-90 hover:shadow-lg transition-all cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full bg-gradient-to-br from-yellow-400 via-orange-500 to-blue-600 relative z-10">
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center -mt-28"
        >
          <img
            src={HERO_IMG}
            alt="Hero Image"
            className="w-[85vw] max-w-5xl rounded-2xl shadow-2xl"
          />
        </motion.section>

        {/* Features Section */}
        <div className="mt-16">
          <div className="container mx-auto px-6 pt-10 pb-20">
            <section>
              <h2 className="text-3xl font-bold text-center mb-14 bg-gradient-to-r from-yellow-200 via-orange-200 to-blue-200 text-transparent bg-clip-text">
                Features That Make You Shine
              </h2>
              <div className="flex flex-col items-center gap-10">
                {/* First 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/10 p-6 rounded-2xl border border-white/20 transition-all duration-300 hover:shadow-[0_10px_30px_-6px_rgba(255,255,255,0.5)]"
                    >
                      <h3 className="text-lg font-semibold mb-3 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                {/* Remaining 2 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/10 p-6 rounded-2xl border border-white/20 transition-all duration-300 hover:shadow-[0_10px_30px_-6px_rgba(255,255,255,0.5)]"
                    >
                      <h3 className="text-lg font-semibold mb-3 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-sm bg-blue-900/70 text-yellow-200 text-center p-6 border-t border-white/20">
          Made with 💜 — Happy Learning!
        </footer>
      </div>

      {/* Modal for Login/Sign Up */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && (
            <Login setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
