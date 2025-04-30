"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          whileHover={{ scale: 1.05 }}
        >
          INDIA 2025
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["letter", "moonshots", "action"].map((id, index) => (
            <motion.button
              key={id}
              className="text-white/80 hover:text-white transition-colors uppercase text-sm tracking-wider"
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              {id === "letter" ? "Open Letter" : id === "moonshots" ? "Moonshots" : "Join The Movement"}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-30 pt-20 flex flex-col items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            {["letter", "moonshots", "action"].map((id, index) => (
              <motion.button
                key={id}
                className="text-white/80 hover:text-white transition-colors uppercase text-xl tracking-wider py-6"
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {id === "letter" ? "Open Letter" : id === "moonshots" ? "Moonshots" : "Join The Movement"}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
