import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Clock, Calendar } from "lucide-react";

const technicalPosts = [
  {
    title: "Building Secure Spring Boot Applications",
    description: "A comprehensive guide to implementing security best practices in Spring Boot applications.",
    date: "Sep 16, 2025",
    readTime: "15 min",
    category: "Backend Development",
    topics: ["Spring Security", "OAuth2", "JWT", "API Security"],
    level: "Advanced",
    href: "/blog/technical/spring-boot-security"
  },
  {
    title: "Modern React Patterns and Best Practices",
    description: "Exploring advanced React patterns, hooks, and state management techniques.",
    date: "Sep 11, 2025",
    readTime: "12 min",
    category: "Frontend Development",
    topics: ["React", "TypeScript", "State Management", "Performance"],
    level: "Intermediate",
    href: "/blog/technical/react-patterns"
  },
  {
    title: "DevOps Pipeline Security",
    description: "Implementing security measures in CI/CD pipelines and container deployments.",
    date: "Sep 6, 2025",
    readTime: "10 min",
    category: "DevOps",
    topics: ["CI/CD", "Docker", "Kubernetes", "Security"],
    level: "Advanced",
    href: "/blog/technical/devops-security"
  },
  {
    title: "Microservices Communication Patterns",
    description: "Understanding different communication patterns in microservices architecture.",
    date: "Sep 1, 2025",
    readTime: "13 min",
    category: "Architecture",
    topics: ["Microservices", "API Design", "Event-Driven", "Integration"],
    level: "Intermediate",
    href: "/blog/technical/microservices-patterns"
  }
];

const Technical = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold font-mono">TECHNICAL BLOG</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            In-depth technical articles about software development, architecture, and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {technicalPosts.map((post, index) => (
            <Card key={index} className="hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      {post.category}
                    </Badge>
                    <Badge 
                      variant={post.level === "Advanced" ? "destructive" : "secondary"}
                      className="font-mono"
                    >
                      {post.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="font-mono text-xl mb-2">{post.title}</CardTitle>
                <CardDescription className="text-base">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Topics Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.topics.map((topic, i) => (
                        <Badge key={i} variant="outline" className="font-mono">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="font-mono group w-full sm:w-auto" asChild>
                    <a href={post.href}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
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

export default Technical;
