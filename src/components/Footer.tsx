"use client"

import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            INDIA 2025
          </motion.div>

          <div className="flex space-x-6">
            {["Twitter", "LinkedIn", "GitHub"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>This is an open letter to inspire the Indian tech ecosystem. Share freely.</p>
          <p className="mt-2">© {new Date().getFullYear()} - Created with passion for India's tech future</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
