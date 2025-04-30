"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const OpenLetter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const paragraphs = [
    "The world is changing at an unprecedented pace. AI is reshaping industries, quantum computing is on the horizon, and space exploration is no longer the domain of just superpowers. Yet, when we look at India's startup landscape, we see a disproportionate focus on quick-commerce, food delivery, and copycat business models.",

    "This is not a criticism—these businesses have their place. But India, with its rich legacy of mathematical genius, engineering excellence, and philosophical depth, is capable of so much more.",

    "We stand at a unique moment in history. India has the world's largest youth population, a growing digital infrastructure, and a government increasingly supportive of innovation. The question is: what will we build with these advantages?",

    "Will we be content creating the next food delivery app? Or will we rise to build technologies that solve humanity's greatest challenges?",

    "The global tech landscape is shifting. Countries are competing for technological sovereignty in AI, semiconductors, and clean energy. This is not just about economic growth—it's about national security, cultural influence, and our place in the world order.",

    "India cannot afford to be just a consumer of technologies built elsewhere. We must become creators, innovators, and leaders in deep tech. The next wave of Indian unicorns should be building quantum computers, developing breakthrough AI models, designing advanced robotics, and pioneering space technologies.",

    "This is a call to Indian founders, investors, and policymakers: Let's shift our collective focus toward moonshot technologies. Let's create the infrastructure, funding mechanisms, and talent pipelines needed for deep tech innovation.",

    "To the young engineers and scientists reading this: Your country needs your brilliance and ambition. The problems worth solving aren't just about convenience—they're about advancing human capability and addressing existential challenges.",

    "The future belongs to those who build it. Let's ensure India is not just participating in that future, but actively shaping it.",
  ]

  // Glitch effect for text
  const glitchVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      },
    }),
  }

  return (
    <section id="letter" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" variants={glitchVariants} custom={0}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              An Open Letter to India's Tech Ecosystem
            </span>
          </motion.h2>

          <div className="space-y-6 text-lg text-gray-300">
            {paragraphs.map((paragraph, index) => (
              <motion.p key={index} className="leading-relaxed" variants={glitchVariants} custom={index + 1}>
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-12 text-right italic text-gray-400"
            variants={glitchVariants}
            custom={paragraphs.length + 1}
          >
            — The Visionaries of Tomorrow
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl"></div>
    </section>
  )
}

export default OpenLetter
