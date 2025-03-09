"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, CalendarDays } from "lucide-react"

const educationData = [
  {
    degree: "Master's degree",
    field: "Intelligent Computer Systems",
    institution: "University of Science and Technology Houari Boumedienne",
    period: "2023-2025",
  },
  {
    degree: "Bachelor's degree",
    field: "Computer Science",
    institution: "University of Science and Technology Houari Boumedienne",
    period: "2020-2023",
  },
  {
    degree: "High School Diploma with Honors (BAC)",
    field: "Mathematics",
    institution: "",
    period: "2020",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
            <span>3</span>
          </span>
          Education
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
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
                      <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        <span>{edu.field}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.institution && <p className="text-muted-foreground">{edu.institution}</p>}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education

