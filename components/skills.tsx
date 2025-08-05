"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600", icon: "🟨" },
    { name: "React", level: 80, color: "from-blue-400 to-blue-600", icon: "⚛️" },
    { name: "HTML5", level: 90, color: "from-orange-400 to-orange-600", icon: "🌐" },
    { name: "CSS3", level: 85, color: "from-blue-300 to-blue-500", icon: "🎨" },
    { name: "Python", level: 75, color: "from-green-400 to-green-600", icon: "🐍" },
    { name: "Java", level: 70, color: "from-red-400 to-red-600", icon: "☕" },
    { name: "C++", level: 65, color: "from-purple-400 to-purple-600", icon: "⚡" },
    { name: "C", level: 60, color: "from-gray-400 to-gray-600", icon: "🔧" },
    { name: "Node.js", level: 70, color: "from-green-500 to-green-700", icon: "🟢" },
    { name: "MongoDB", level: 65, color: "from-green-600 to-green-800", icon: "🍃" },
    { name: "MySQL", level: 70, color: "from-blue-500 to-blue-700", icon: "🗄️" },
    { name: "Git", level: 75, color: "from-orange-500 to-orange-700", icon: "📝" },
    { name: "GitHub", level: 80, color: "from-gray-700 to-gray-900", icon: "🐙" },
    { name: "Tailwind CSS", level: 85, color: "from-cyan-400 to-cyan-600", icon: "💨" },
    { name: "Bootstrap", level: 75, color: "from-purple-500 to-purple-700", icon: "🅱️" },
    { name: "Next.js", level: 70, color: "from-black to-gray-800", icon: "▲" },
    { name: "Express.js", level: 65, color: "from-gray-600 to-gray-800", icon: "🚀" },
    { name: "REST APIs", level: 70, color: "from-indigo-400 to-indigo-600", icon: "🔗" },
    { name: "Firebase", level: 60, color: "from-yellow-500 to-orange-500", icon: "🔥" },
    { name: "VS Code", level: 90, color: "from-blue-600 to-blue-800", icon: "💻" },
    { name: "Figma", level: 65, color: "from-pink-400 to-pink-600", icon: "🎯" },
    { name: "Postman", level: 70, color: "from-orange-400 to-orange-600", icon: "📮" },
    { name: "Responsive Design", level: 85, color: "from-teal-400 to-teal-600", icon: "📱" },
    { name: "Problem Solving", level: 80, color: "from-emerald-400 to-emerald-600", icon: "🧩" },
    { name: "DSA", level: 75, color: "from-red-500 to-red-700", icon: "🧠" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I've learned during my studies and personal projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer transform hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                animation: isVisible ? `slideInUp 0.6s ease-out ${index * 0.05}s both` : "none",
              }}
            >
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                <div className="w-full bg-secondary rounded-full h-1.5 mb-1">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-1.5 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transition: `width 1.5s ease-out ${index * 0.05}s`,
                    }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-center mb-8">Currently Learning</h3>
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl overflow-hidden">
              <div className="flex animate-scroll space-x-6 py-4">
                {[
                  { name: "TypeScript", icon: "📘" },
                  { name: "React Native", icon: "📱" },
                  { name: "GraphQL", icon: "🔍" },
                  { name: "Docker", icon: "🐳" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Vue.js", icon: "💚" },
                  { name: "Angular", icon: "🅰️" },
                  { name: "Redux", icon: "🔄" },
                  { name: "TypeScript", icon: "📘" },
                  { name: "React Native", icon: "📱" },
                  { name: "GraphQL", icon: "🔍" },
                  { name: "Docker", icon: "🐳" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Vue.js", icon: "💚" },
                  { name: "Angular", icon: "🅰️" },
                  { name: "Redux", icon: "🔄" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full border border-primary/30 backdrop-blur-sm hover:scale-105 transition-transform"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
