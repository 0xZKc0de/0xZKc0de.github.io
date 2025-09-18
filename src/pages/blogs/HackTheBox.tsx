import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Box, ArrowRight, Clock, Calendar, Target } from "lucide-react";

const hacktheboxPosts = [
  {
    title: "Lame - Initial Foothold to Root",
    description: "Complete walkthrough of the Lame machine, demonstrating SMB exploitation and privilege escalation techniques.",
    date: "Sep 12, 2025",
    readTime: "10 min",
    difficulty: "Easy",
    osType: "Linux",
    topics: ["SMB Exploitation", "Privilege Escalation", "Network Services"],
    skills: ["Metasploit", "Linux Enumeration", "Service Exploitation"],
    href: "/blog/hackthebox/lame"
  },
  {
    title: "Legacy - Windows XP Challenge",
    description: "Step-by-step solution for the Legacy machine, focusing on Windows XP vulnerabilities.",
    date: "Sep 7, 2025",
    readTime: "12 min",
    difficulty: "Easy",
    osType: "Windows",
    topics: ["Windows Exploitation", "Legacy Systems", "Remote Code Execution"],
    skills: ["Windows Exploits", "Network Scanning", "Vulnerability Assessment"],
    href: "/blog/hackthebox/legacy"
  },
  {
    title: "Bank - Web App to System Shell",
    description: "Detailed writeup of the Bank machine, covering web application vulnerabilities and DNS exploitation.",
    date: "Sep 2, 2025",
    readTime: "15 min",
    difficulty: "Medium",
    osType: "Linux",
    topics: ["Web Exploitation", "DNS Enumeration", "File Upload Vulnerabilities"],
    skills: ["Web Security", "DNS Analysis", "Shell Exploitation"],
    href: "/blog/hackthebox/bank"
  }
];

const HackTheBox = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Box className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold font-mono">HACKTHEBOX</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Step-by-step solutions and methodologies for HackTheBox machines
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {hacktheboxPosts.map((post, index) => (
            <Card key={index} className="hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={post.difficulty === "Easy" ? "default" : "secondary"}
                      className="font-mono"
                    >
                      {post.difficulty}
                    </Badge>
                    <Badge 
                      variant={post.osType === "Linux" ? "outline" : "destructive"}
                      className="font-mono"
                    >
                      {post.osType}
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
                    <h3 className="text-sm font-semibold mb-2">Attack Vectors</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.topics.map((topic, i) => (
                        <Badge key={i} variant="outline" className="font-mono">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="font-mono">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="font-mono group w-full sm:w-auto" asChild>
                    <a href={post.href}>
                      Read Solution
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

export default HackTheBox;
