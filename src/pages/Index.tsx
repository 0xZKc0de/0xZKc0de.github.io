import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Code, 
  Lock, 
  Folder, 
  ArrowRight, 
  Clock,
  Calendar,
  User,
  BookOpen,
  Target,
  Box
} from "lucide-react";
import { Link } from "react-router-dom";

const featuredPosts = [
  {
    title: "TryHackMe: b3dr0ck Walkthrough",
    description: "Complete guide to solving the b3dr0ck room on TryHackMe",
    category: "CTF",
    date: "Sep 15, 2025",
    readTime: "12 min",
    icon: Target,
    href: "/blog/tryhackme/bedrock"
  },
  {
    title: "Spring Boot Security Best Practices",
    description: "Implementing secure authentication and authorization in Spring Boot",
    category: "Technical",
    date: "Sep 12, 2025",
    readTime: "15 min",
    icon: Lock,
    href: "/blog/technical/spring-security"
  },
  {
    title: "LeetCode: Dynamic Programming Guide",
    description: "Mastering dynamic programming patterns for coding interviews",
    category: "LeetCode",
    date: "Sep 10, 2025",
    readTime: "10 min",
    icon: Code,
    href: "/blog/leetcode/dp-guide"
  }
];

const latestProjects = [
  {
    title: "BlogVerse Platform",
    description: "Multi-tenant blogging platform built with Spring Boot and React",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    href: "/projects#blogverse"
  },
  {
    title: "Port Scanner",
    description: "Advanced network port scanner with service detection",
    tech: ["Python", "Networking", "Security"],
    href: "/projects#portscanner"
  }
];

const stats = [
  { label: "Projects", value: "12+", icon: Folder },
  { label: "CTF Writeups", value: "25+", icon: Target },
  { label: "Blog Posts", value: "40+", icon: BookOpen },
  { label: "Contributions", value: "100+", icon: User }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold font-mono mb-6">
            Security Researcher & <br />
            Full Stack Developer
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Exploring the intersection of application security, <br />
            software development, and ethical hacking.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12 border-t">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-none shadow-none">
                <CardHeader className="space-y-0 pb-2">
                  <Icon className="h-6 w-6 text-primary mb-2" />
                  <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="container mx-auto px-6 py-12 border-t">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-mono">Featured Posts</h2>
          <Button variant="outline" asChild>
            <Link to="/blog" className="group">
              View All 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <Card key={index} className="hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="font-mono">
                      {post.category}
                    </Badge>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-mono line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                    <Clock className="h-4 w-4 mx-2" />
                    {post.readTime}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="container mx-auto px-6 py-12 border-t">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-mono">Latest Projects</h2>
          <Button variant="outline" asChild>
            <Link to="/projects" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestProjects.map((project, index) => (
            <Card key={index} className="hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-mono">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
