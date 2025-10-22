"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Briefcase } from "lucide-react"

const experiences = [
  {
  title: "Application Developer",
  company: "ATOS",
  period: "08/2025 – Present",
  description: [
    "Develop and maintain enterprise applications using Java, Spring Boot, and Angular.",
    "Collaborate with cross-functional teams to design scalable and secure software solutions.",
    "Participate in code reviews, debugging, and performance optimization to enhance application quality.",
  ],
  tags: ["Java", "Spring Boot", "Angular", "REST APIs", "Software Development", "Team Collaboration"],
},
  {
    title: "Ai and Python Instructor",
    company: "CODE213",
    period: "03/2025 – 09/2025",
    description: [
      "Teach Python and data structures to build coding skills.",
      "Explain AI concepts and guide model implementation.",
      "Support student projects with feedback and troubleshooting.",
    ],
    tags: ["Teaching", "Python", "Machine Learning", "Artificial Intelligence"],
  },
  {
    title: "Data Science Intern",
    company: "Djezzy",
    period: "07/2024 – 08/2024",
    description: [
      "Data analysis and dataset preprocessing.",
      "Training clustering models to predict revenues.",
      "Compare results with other models to upgrade the K-means model.",
      "Improved clustering model accuracy by 15%.",
    ],
    tags: ["Data Analysis", "Clustering", "K-means", "Big Data"],
  },
  {
    title: "Segmentation and Modeling of Pulmonary Blood Vessels",
    company: "CERIST",
    period: "06/2024 – 08/2024",
    description: [
      "Segmentation of X-rays scans (CT scan)",
      "3D modeling of the result of segmentation",
      "Implementing the 3D model in a web app using API.",
    ],
    tags: ["Image Segmentation", "3D Modeling", "Web API", "Medical Imaging"],
  }
  ,
]

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
            <span>2</span>
          </span>
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

