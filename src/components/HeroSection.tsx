"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const colors = ["#8B5CF6", "#EC4899", "#3B82F6", "#10B981"]

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block">Dear Indian Tech Founders:</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            The Future Needs You
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          It's time to move beyond food delivery and quick-commerce.
          <br />
          <span className="text-purple-400 font-semibold">India's tech destiny awaits.</span>
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={() => document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium text-lg hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Read The Letter
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  )
}

export default HeroSection
