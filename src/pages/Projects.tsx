import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "BlogVerse - Multi-tenant Blogging Platform",
    description: "A robust Spring Boot blogging platform supporting multiple users, rich text editing, and real-time analytics. Features OAuth2 authentication and PostgreSQL database.",
    tags: ["Spring Boot", "React", "PostgreSQL", "OAuth2", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed"
  },
  {
    title: "Spring Boot Microservices Blog",
    description: "A microservices-based blogging system with separate services for posts, comments, and user management. Includes service discovery and API gateway.",
    tags: ["Spring Boot", "Microservices", "Docker", "Kubernetes", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    status: "In Progress"
  },
  {
    title: "TryHackMe - b3dr0ck",
    description: "A complete walkthrough of the b3dr0ck room focusing on certificate exploitation, web enumeration, and TLS configuration vulnerabilities.",
    tags: ["TryHackMe", "Web Hacking", "Certificates", "Enumeration"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed"
  },
  {
    title: "Real-time Chat Application",
    description: "Full-stack chat application with WebSocket integration, supporting private messages, group chats, and file sharing capabilities.",
    tags: ["Spring WebSocket", "React", "Redis", "WebSocket", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed"
  },
  {
    title: "Network Scanner Tool",
    description: "A Python-based network reconnaissance tool with advanced port scanning, service detection, and vulnerability assessment capabilities.",
    tags: ["Python", "Network Security", "Reconnaissance"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed"
  },
  {
    title: "E-Learning Platform API",
    description: "RESTful API for an e-learning platform with course management, user progress tracking, and content delivery features.",
    tags: ["Spring Boot", "AWS", "MySQL", "Spring Security", "JUnit"],
    demoUrl: "#",
    githubUrl: "#",
    status: "In Progress"
  }
];

const Projects = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 font-mono">PROJECTS</h1>
          <p className="text-muted-foreground text-lg">
            A collection of cybersecurity projects, exploits, and security tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className="font-mono text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="font-mono text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="font-mono">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="font-mono">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;