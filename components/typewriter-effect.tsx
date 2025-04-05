"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex].text

    const timeout = setTimeout(() => {
      // If we're deleting, remove a character
      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1))
        setTypingSpeed(80) // Faster when deleting

        // If we've deleted everything, move to the next word
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setTypingSpeed(150) // Reset typing speed
        }
      } else {
        // If we're typing, add a character
        setCurrentText(word.substring(0, currentText.length + 1))
        setTypingSpeed(150) // Normal typing speed

        // If we've typed the whole word, pause then start deleting
        if (currentText === word) {
          setTypingSpeed(2000) // Pause at the end of the word
          setTimeout(() => {
            setIsDeleting(true)
          }, 2000)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <h1 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
        {currentText}
        <span
          className={cn("inline-block w-1 h-5 ml-1 bg-blue-500 dark:bg-blue-400 animate-blink", cursorClassName)}
        ></span>
      </h1>
    </div>
  )
}

