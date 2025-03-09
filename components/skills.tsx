"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const technicalSkills = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "Data Analysis", level: 85 },
  { name: "Neural Networks", level: 85 },
  { name: "NLP", level: 80 },
  { name: "Computer Vision", level: 75 },
  { name: "Web Development", level: 70 },
  { name: "Flask", level: 80 },
  { name: "TensorFlow/Keras", level: 85 },
  { name: "OpenCV", level: 75 },
]

const softSkills = [
  { name: "Effective Communication", level: 90 },
  { name: "Time Management", level: 85 },
  { name: "Problem Solving", level: 95 },
  { name: "Brain Storming", level: 90 },
  { name: "Team Work", level: 85 },
  { name: "Public Speaking", level: 80 },
]

const languages = [
  { name: "English (IELTS C1)", level: 90 },
  { name: "Arabic (Native)", level: 100 },
  { name: "French", level: 75 },
]

const certificates = [
  "Data Analysis with Python",
  "Algorithms and Data Structures",
  "Scientific Computing with Python",
  "Problem Solving",
  "English IELTS: level C1",
]

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
            <span>4</span>
          </span>
          Skills & Certificates
        </h2>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="soft">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="languages">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {languages.map((language, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="mb-2 flex justify-between">
                        <span className="font-medium">{language.name}</span>
                        <span className="text-muted-foreground">{language.level}%</span>
                      </div>
                      <Progress value={language.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {certificates.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                      <span>{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}

export default Skills

