import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Code, Shield, Brain, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "TERMINAL",
    description: "Return to the interactive terminal interface for command-line exploration.",
    icon: Terminal,
    href: "/terminal",
    highlight: true
  },
  {
    title: "PROJECTS",
    description: "Explore my cybersecurity tools, research projects, and open-source contributions.",
    icon: Code,
    href: "/projects",
    stats: "5 Active Projects"
  },
  {
    title: "SECURITY RESEARCH",
    description: "Deep dives into vulnerability research, exploit development, and security analysis.",
    icon: Shield,
    href: "/blog/technical",
    stats: "Recent Findings"
  },
  {
    title: "SKILLS",
    description: "Technical expertise in penetration testing, malware analysis, and secure development.",
    icon: Brain,
    href: "/skills",
    stats: "Core Competencies"
  },
  {
    title: "BLOG",
    description: "Articles and write-ups covering CTFs, security challenges, and technical tutorials.",
    icon: BookOpen,
    href: "/blog",
    stats: "Latest Posts"
  }
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 font-mono">DASHBOARD</h1>
          <p className="text-muted-foreground text-lg">
            Welcome to my cybersecurity research and development hub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.title}
                to={section.href}
                className="block no-underline"
              >
                <Card className={`hover:shadow-lg transition-shadow ${
                  section.highlight ? 'border-primary' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Icon className="h-6 w-6" />
                      <CardTitle>{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {section.description}
                    </CardDescription>
                    {section.stats && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {section.stats}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;