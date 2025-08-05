import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: Palette,
      title: "Algorithmic Problem Solving",
      description: "Developing optimized solutions for complex problems using algorithms, data structures, and analytical thinking.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that deliver excellent performance.",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly.",
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I build full-stack applications using modern technologies like React, Node.js, and MongoDB. I'm particularly interested in writing scalable backend logic and designing responsive frontends that enhance user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${feature.bg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                Hi, I’m Md Mustak, a passionate and results-driven software developer with hands-on experience in building dynamic web applications using modern technologies like React, Node.js, and MongoDB. Currently, I’m working as a React Developer Intern, where I contribute to scalable front-end solutions and collaborate within Agile teams.
              </p>
              <p className="text-muted-foreground mb-4">
                I'm excited to start my career in tech and contribute to innovative projects. I love learning new
                technologies and staying updated with the latest trends in web development. Looking forward to growing
                with a dynamic team!
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Frontend Development</span>
                  <span className="text-primary">88%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary to-purple-400 h-3 rounded-full transition-all duration-1000"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Backend Development</span>
                  <span className="text-blue-400">60%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full transition-all duration-1000"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Algorithmic Problem Solving</span>
                  <span className="text-purple-400">68%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-400 h-3 rounded-full transition-all duration-1000"
                    style={{ width: "68%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
