"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useState } from "react"

// Updated projects array with categories as arrays
const projects = [
  {
    title: "Algeria Climate Analysis and Prediction",
    description:
      "The 'Algeria Climate Analysis and Prediction' project analyzes climate and soil data for Algeria using data preprocessing and machine learning models (Regression and Clustering). A PyQt5-based GUI allows users to interact with the data, train models, and make predictions, showcasing my skills in data handling and machine learning.",
    tags: ["Ai", "Machine Learning", "Data Science", "PyQt5", ],
    github: "https://github.com/aymen-hadj-mebarek/Algeria-climate-analysis",
    demo: null,
    image: "/algeria-climate.webp?height=200&width=400",
    categories: ["Highlights", "AI", "GUI"],
  },
  {
    title: "Corona Fake News Detection",
    description:
      "Built a Neural Network LSTM model for NLP to detect fake news related to COVID-19. Developed a Flask backend with HTML/CSS/JS front end for user interaction and implemented API for seamless integration.",
    tags: ["NLP", "LSTM", "Flask", "API", "Neural Networks"],
    github: "https://github.com/aymen-hadj-mebarek/corona_fake_news_detection",
    demo: null,
    image: "/fake-news.webp?height=200&width=400",
    categories: ["AI", "NLP"],
  },
  {
    title: "AI Plays Flappy Bird",
    description:
      "Developed an AI agent using the NEAT algorithm to autonomously play Flappy Bird. Trained the model to adapt and improve over time based on gameplay and integrated Python PyGame for real-time simulation.",
    tags: ["NEAT Algorithm", "PyGame", "AI Agent", "Reinforcement Learning"],
    github: "https://github.com/aymen-hadj-mebarek/AI_flappy_bird",
    demo: null,
    image: "/ai-flappy-bird.png?height=200&width=400",
    categories: ["AI", "Game dev"],
  },
  {
    title: "Hand Written Word Recognition",
    description:
      "Built a CNN model to detect characters of the English alphabet. Used OpenCV for detection and contouring of each character in a word, then implemented the CNN model to recognize the whole word.",
    tags: ["CNN", "OpenCV", "Computer Vision", "Image Processing"],
    github: "https://github.com/aymen-hadj-mebarek/Handwritten_Character_Recognition",
    demo: null,
    image: "/handwritten.webp?height=200&width=400",
    categories: ["Highlights", "AI", "Computer Vision"],
  },
  {
    title: "Disease Prediction from Medical Data",
    description:
      "Developed a neural network in TensorFlow/Keras for disease prognosis prediction. Created a Flask web app for real-time symptom-based disease predictions and visualized data using Seaborn/Matplotlib.",
    tags: ["TensorFlow", "Keras", "Flask", "Healthcare"],
    github: "https://github.com/aymen-hadj-mebarek/Disease_prediction_from_Symptoms",
    demo: null,
    image: "/medical.webp?height=200&width=400",
    categories: ["AI", "Web App"],
  },
  {
    title: "Simple Chatbot Project",
    description:
      "Built a chatbot using a JSON database to store and retrieve answers. Focused on efficient query response handling without user interface and designed for quick, lightweight deployment.",
    tags: ["NLP", "JSON", "Python", "Chatbot"],
    github: "https://github.com/aymen-hadj-mebarek/chatbot-project",
    demo: null,
    image: "/chatbot.webp?height=200&width=400",
    categories: ["AI", "NLP"],
  },
  {
    title: "Mini Max Tic-Tac-Toe",
    description:
      "This Tic-Tac-Toe game in Python uses Pygame and the Minimax algorithm, allowing the AI to play optimally. It includes a restart feature and evaluates game outcomes (win, loss, draw). The project showcases AI in games with potential upgrades like difficulty levels and multiplayer.",
    tags: ["MiniMax", "AI", "Python", "Game"],
    github: "https://github.com/aymen-hadj-mebarek/MiniMax-XO",
    demo: null,
    image: "/XO.png?height=200&width=400",
    categories: ["AI", "Game dev"],
  },
  {
    title: "Tweet Emotion Recognition",
    description:
      "This project uses a Sequential Neural Network and LSTM for sentiment analysis, preprocessing text and training with binary classification. Future work includes hyperparameter tuning and transformers like BERT. ",
    tags: ["NLP", "AI", "Python"],
    github: "https://github.com/aymen-hadj-mebarek/Tweet_Emotion_analysis",
    demo: null,
    image: "/emotions.webp?height=200&width=400",
    categories: ["NLP", "AI"],
  },
  {
    title: "Chat App",
    description:
      "Built a real-time messaging app with user profiles, chat rooms, private messaging, and settings. Built with Flask, SQLite, and Socket.io, it enables seamless communication. Users can sign up, join chat rooms, send messages, and customize settings.",
    tags: ["Flask", "Web App", "Python"],
    github: "https://github.com/aymen-hadj-mebarek/Chat-App-Flask",
    demo: null,
    image: "/chatapp.webp?height=200&width=400",
    categories: ["Web App"],
  },
  {
    title: "Real-Time Collaborative Editor",
    description:
      "A Real-Time Collaborative Editor that enables users to create and edit documents simultaneously. It supports role-based access control, allowing different permissions for users such as editors, viewers, and admins. The platform features real-time updates, inline comments, and seamless interactions, ensuring efficient collaboration. Built with WebSockets for live synchronization, it enhances teamwork by providing a dynamic and interactive editing experience.",
    tags: ["Flask", "Web App", "JavaScript"],
    github: null,
    demo: null,
    image: "/collaborative.webp?height=200&width=400",
    categories: ["Highlights", "Web App"],
  },
  {
    title: "Surface Corporelle de Brulures",
    description:
      "SCB (Surface Corporelle Brûlée) is an application made for doctors, which helps calculate the surface area and depth of burns in order to determine the appropriate course of action. Currently used in more than 20 hospitals around Algeria.",
    tags: ["Electron", "Web App", "GUI"],
    github: null,
    demo: null,
    image: "/SCB.png?height=00&width=400",
    categories: ["Highlights", "Web App", "GUI"],
  },
  {
    title: "Stereo Depth Estimation",
    description:
      "SA real-time stereo vision system using SIFT feature matching and stereo camera calibration to detect objects, calculate disparity, and estimate 3D coordinates. Developed as a Final Year Project at USTHB, it supports applications in robotics and depth sensing with real-time visualization and multi-threaded processing.",
    tags: ["Python", "Computer Vision", "SIFT"],
    github: "https://github.com/aymen-hadj-mebarek/stereo-depth-tracking?tab=readme-ov-file",
    demo: null,
    image: "/stereo.webp?height=200&width=400",
    categories: ["Computer Vision"],
  }, 
  {
    title: "Flask Task Manager",
    description:
      "A simple web-based task management application built with Flask and SQLite, allowing users to sign up, log in, and manage tasks with features like task creation, updating, deletion, and due date tracking. The app uses Flask sessions for user authentication and provides a personalized task overview.",
    tags: ["Python", "Flask", "SQL"],
    github: "https://github.com/aymen-hadj-mebarek/Todo-manager",
    demo: null,
    image: "/Task Manager.png?height=200&width=400",
    categories: ["Web App"],
  }, 
  {
    title: "Django Blog App Tutorial",
    description:
      " A beginner-friendly guide to building a Django blog app, covering project setup, CRUD operations, and user authentication.",
    tags: ["Python", "Django", "SQL"],
    github: "https://github.com/aymen-hadj-mebarek/django-blog-app",
    demo: null,
    image: "/django.webp?height=200&width=400",
    categories: ["Web App"],
  }, 
];

// Extract all unique categories from projects
const allCategories = Array.from(
  new Set(projects.flatMap((project) => project.categories))
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Highlights")

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" 
      ? projects 
      : projects.filter((project) => 
          project.categories.includes(activeCategory));
  
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center">
        <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">
            <span>5</span>
          </span>
          Projects
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            key="all"
            variant={activeCategory === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("All")}
            className="transition-all duration-300"
          >
            All
          </Button>
          {allCategories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="w-full"
            >
              <Card className="h-full flex flex-col">
              <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex gap-2">
                      {project.categories.map((category, i) => (
                        <Badge key={i}>{category}</Badge>
                      ))}
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                  {project.demo && (
                    <Button variant="default" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show message when no projects match the filter */}
                {filteredProjects.length === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                    <p className="text-muted-foreground">No projects found in this category.</p>
                  </motion.div>
                )}
      </motion.div>
    </section>
  )
}

export default Projects