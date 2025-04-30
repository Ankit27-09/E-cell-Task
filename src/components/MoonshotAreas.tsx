"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Zap, Rocket, Cpu, Car, Atom } from "lucide-react"

interface MoonshotCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const MoonshotCard = ({ icon, title, description, index }: MoonshotCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-purple-900/30 hover:border-purple-500/50 transition-all group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.3)" }}
    >
      <div className="w-14 h-14 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors">
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 15 }}
          className="text-purple-400 group-hover:text-purple-300"
        >
          {icon}
        </motion.div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </motion.div>
  )
}

const MoonshotAreas = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const moonshots = [
    {
      icon: <Brain size={28} />,
      title: "Artificial Intelligence",
      description: "Building India-first AI models that understand our languages, cultures, and unique challenges.",
    },
    {
      icon: <Rocket size={28} />,
      title: "Space Technology",
      description: "Democratizing access to space with affordable launch vehicles and satellite technologies.",
    },
    {
      icon: <Atom size={28} />,
      title: "Quantum Computing",
      description: "Developing quantum algorithms and hardware to solve complex computational problems.",
    },
    {
      icon: <Cpu size={28} />,
      title: "Semiconductors",
      description: "Building domestic chip design and manufacturing capabilities for technological sovereignty.",
    },
    {
      icon: <Car size={28} />,
      title: "Electric Vehicles",
      description: "Creating next-generation mobility solutions optimized for Indian conditions and needs.",
    },
    {
      icon: <Zap size={28} />,
      title: "Clean Energy",
      description: "Pioneering renewable energy technologies to address climate change and energy security.",
    },
  ]

  return (
    <section id="moonshots" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Moonshot Technologies
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Areas where India can lead the next wave of global innovation
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moonshots.map((moonshot, index) => (
            <MoonshotCard
              key={index}
              icon={moonshot.icon}
              title={moonshot.title}
              description={moonshot.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoonshotAreas
