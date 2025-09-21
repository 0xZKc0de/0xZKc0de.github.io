import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Blog-In - Blogging Platform",
    description: "A modern blogging platform similar to Medium, focused on technical content sharing. Features include rich text editing, categorization, user authentication, and analytics. Built with Spring Boot and modern security practices.",
    tags: ["Spring Boot", "Hibernate", "PostgreSQL", "JWT", "REST API", "Security"],
    features: [
      "JWT-based authentication and authorization",
      "Rich text editor for blog posts",
      "Category and tag management",
      "User profiles and analytics",
      "PostgreSQL for reliable data storage",
      "RESTful API architecture"
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "In Progress"
  },
  {
    title: "Distributed Calculation System",
    description: "A robust distributed computation system leveraging Java's powerful concurrency features. Implements both Socket-based and RMI communication for distributed processing across multiple nodes.",
    tags: ["Java", "Sockets", "Threads", "RMI", "Distributed Systems"],
    features: [
      "Multi-threaded task processing",
      "Socket-based communication between nodes",
      "RMI implementation for remote method calls",
      "Load balancing across nodes",
      "Fault tolerance and error handling",
      "Real-time task monitoring"
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed"
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

        <div className="grid grid-cols-1 gap-8">
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
                <CardTitle className="font-mono text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-2 mt-1">•</div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-2">
                  <Button variant="outline" size="sm" className="font-mono">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
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