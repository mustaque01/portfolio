"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Md Mustak</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.open("https://github.com/mustaque01", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.open("https://www.linkedin.com/in/md-mustak-dev/", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.open("mailto:mustakarman560@gmail.com", "_blank")}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> MD MUSTAK
          </p>
        </div>
      </div>
    </footer>
  )
}
