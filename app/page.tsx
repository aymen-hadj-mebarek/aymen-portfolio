import { ModeToggle } from "@/components/mode-toggle"
import About from "@/components/about"
import Contact from "@/components/contact"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4">
        <ModeToggle />
      </div>
    </div>
  )
}

