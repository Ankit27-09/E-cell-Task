"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const CallToAction = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="action" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0"></div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-purple-500/10 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/80 to-purple-950/80 p-10 md:p-16 rounded-2xl border border-purple-500/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Write India's Tech Destiny
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8 text-center"
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The next decade will define India's place in the global technology landscape. Will you be part of this
            transformation?
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-4"
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium text-lg hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 w-full md:w-auto text-center"
            >
              Join The Movement
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-transparent border border-purple-500 rounded-full text-purple-400 font-medium text-lg hover:bg-purple-950/30 transition-all hover:text-purple-300 w-full md:w-auto text-center"
            >
              Share This Vision
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
