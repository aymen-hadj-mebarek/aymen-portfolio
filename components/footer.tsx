import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Aymen.HM
            </Link>
            <p className="text-muted-foreground mt-2">AI Engineer / Python Developer</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/aymen-hadj-mebarek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:aymenhadjmebarek1834@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        {/* <div className="border-t border-border mt-6 pt-6 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            © {currentYear} Aymen Hadj Mebarek. All rights reserved. Made with
            <Heart className="h-4 w-4 mx-1 text-red-500" /> in Algeria
          </p>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer

