"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileAudioIcon as SoundOn, MegaphoneOffIcon as SoundOff, ChevronDown } from "lucide-react"

import "./App.css"
import Footer from "./components/Footer"
import CallToAction from "./components/CallToAction"
import MoonshotAreas from "./components/MoonshotAreas"
import OpenLetter from "./components/OpenLetter"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"


function App() {
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled)
  }

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-black to-purple-950 opacity-50 z-0"></div>

      {/* Loading screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              INDIA 2025
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sound toggle button */}
      <button
        onClick={toggleSound}
        className="fixed top-5 right-5 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
        aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
      >
        {soundEnabled ? <SoundOn size={20} /> : <SoundOff size={20} />}
      </button>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <motion.div
            className="flex justify-center mt-8 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <ChevronDown size={32} className="text-purple-400" />
          </motion.div>
          <OpenLetter />
          <MoonshotAreas />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
