"use client"

import { useEffect, useRef, useState } from "react"

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/ambient-tech.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = 0.2

    // Play audio
    const playPromise = audioRef.current.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error("Audio playback failed:", error)
        })
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  return null // This component doesn't render anything
}

export default AudioPlayer
