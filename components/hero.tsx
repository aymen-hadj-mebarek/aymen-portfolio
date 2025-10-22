"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from 'next/image';

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "AI Engineer / Software Engineer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="py-20 md:py-32 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Aymen</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 h-8">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            Passionate about AI, machine learning, and Python development. Creating intelligent solutions to solve
            real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex mt-8 space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/aymen-hadj-mebarek" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/aymen-hadj-mebarek-894411226/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:aymenhadjmebarek1834@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted flex items-center justify-center overflow-hidden border-4 border-primary/20">
              <Image src="/profile.jpg" alt="Aymen Hadj Mebarek" width={400} height={400} className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

