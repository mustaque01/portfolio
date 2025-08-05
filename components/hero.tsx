"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Md Mustak</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full Stack Developer & <span className="text-purple-400">final year student</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              passionate about creating modern web applications. Eager to apply my skills in React,
              JavaScript, and UI/UX design to build innovative solutions and grow as a developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 bg-transparent"
                onClick={() => {
                  try {
                    // Create a download link for resume
                    const link = document.createElement("a")
                    link.href = "/MDresume.pdf"
                    link.download = "Md_Mustak_Resume.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  } catch (error) {
                    console.error("Download failed:", error)
                    // Fallback - open in new tab
                    window.open("/MDresume.pdf", "_blank")
                  }
                }}
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-500/50 hover:bg-green-500/10 bg-transparent text-green-400"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open("https://github.com/mustaque01", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open("https://www.linkedin.com/in/md-mustak-dev/", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 hover:text-primary"
                onClick={() => window.open("mailto:mustakarman560@gmail.com", "_blank")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-purple-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                  <Image
                    src="/profile.jpg"
                    alt="Md Mustak - Full Stack Developer"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-purple-400 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-1000 opacity-30"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="animate-bounce hover:bg-primary/10"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
