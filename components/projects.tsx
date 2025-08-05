import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark theme, and mobile-first design approach.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A feature-rich todo application with CRUD operations, local storage persistence, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current weather data and forecasts with beautiful visualizations and location-based services.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "API Integration", "CSS3", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Landing Page",
      description:
        "A modern, responsive landing page for a restaurant with smooth scrolling, image gallery, contact form integration, and online reservation system.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
