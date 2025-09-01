import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Airbnb Clone",
      description:
        "A full-featured Airbnb clone with property listings, booking system, user authentication, and payment integration. Features responsive design and real-time updates.",
      image: "/ProjectsImage/airbnb-original.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io"],
      liveUrl: "https://airbnb-clone-demo.vercel.app",
      githubUrl: "https://github.com/mustaque01/airbnb-clone",
    },
    {
      title: "ATLAS - Data Visualization Platform",
      description:
        "An advanced data visualization and analytics platform with interactive charts, real-time data processing, and comprehensive dashboard for business intelligence.",
      image: "/ProjectsImage/ATLAS.jpg",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      liveUrl: "https://atlas-analytics.vercel.app",
      githubUrl: "https://github.com/mustaque01/atlas-platform",
    },
    {
      title: "Mental Health Support App",
      description:
        "A comprehensive mental health support application with mood tracking, meditation guides, therapist booking, and community support features for mental wellness.",
      image: "/ProjectsImage/mentalhealth.jpg",
      technologies: ["React Native", "Firebase", "Node.js", "AI/ML", "WebRTC", "Push Notifications"],
      liveUrl: "https://mentalhealth-app.vercel.app",
      githubUrl: "https://github.com/mustaque01/mental-health-app",
    },
    {
      title: "Pawsitivity - Pet Care Platform",
      description:
        "A complete pet care management platform with vet appointments, pet profiles, health tracking, grooming services, and pet community features.",
      image: "/ProjectsImage/Pawsitivity.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "NextAuth"],
      liveUrl: "https://pawsitivity.vercel.app",
      githubUrl: "https://github.com/mustaque01/pawsitivity",
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
