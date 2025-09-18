import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Lock, Box, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "LEETCODE",
    description: "Solutions and explanations for various LeetCode problems, focusing on algorithms and data structures.",
    icon: Code,
    href: "/blog/leetcode",
    count: 12
  },
  {
    title: "TRYHACKME",
    description: "Detailed writeups of TryHackMe rooms, covering penetration testing and security concepts.",
    icon: Lock,
    href: "/blog/tryhackme",
    count: 8
  },
  {
    title: "HACKTHEBOX",
    description: "Step-by-step guides for HackTheBox machines, sharing techniques and methodologies.",
    icon: Box,
    href: "/blog/hackthebox",
    count: 6
  },
  {
    title: "TECHNICAL",
    description: "In-depth technical articles about web development, security, and software engineering.",
    icon: FileText,
    href: "/blog/technical",
    count: 15
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 font-mono">BLOG</h1>
          <p className="text-muted-foreground text-lg">
            Explore articles across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.title} to={category.href}>
                <Card className="cursor-pointer hover:border-primary transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground font-mono">
                        {category.count} posts
                      </span>
                    </div>
                    <CardTitle className="font-mono">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
