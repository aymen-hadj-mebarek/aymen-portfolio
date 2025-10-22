"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const About = () => {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
            <span>1</span>
          </span>
          About Me
        </h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg mb-6">
              I'm an AI Engineer and Software Engineer based in Algiers, Algeria, with a passion for machine learning,
              data analysis, and intelligent systems. Currently an Application developer in ATOS,with a Master's degree in Intelligent Computer
              Systems and Bachelor's degree in Computer Science, I combine academic knowledge with practical experience to create innovative solutions.
            </p>
            <p className="text-lg mb-6">
              My goal is to contribute to the field of artificial intelligence by developing applications that solve
              real-world problems. I'm particularly interested in natural language processing, computer vision, and
              predictive modeling.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="text-sm">
                AI Enthusiast
              </Badge>
              <Badge variant="outline" className="text-sm">
                Software development
              </Badge>
              <Badge variant="outline" className="text-sm">
                Machine Learning
              </Badge>
              <Badge variant="outline" className="text-sm">
                Data Analysis
              </Badge>
              <Badge variant="outline" className="text-sm">
                Problem Solver
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

export default About

