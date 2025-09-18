import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight, Clock, Calendar, Target } from "lucide-react";

const tryhackmePosts = [
  {
    title: "b3dr0ck Room Walkthrough",
    description: "Complete walkthrough of the b3dr0ck room, focusing on certificate exploitation and enumeration techniques.",
    date: "Sep 14, 2025",
    readTime: "12 min",
    difficulty: "Medium",
    topics: ["Certificate Exploitation", "Web Enumeration", "TLS Configuration"],
    skills: ["Nmap", "OpenSSL", "Web Security"],
    href: "/blog/tryhackme/bedrock"
  },
  {
    title: "Mr Robot CTF",
    description: "Detailed solution for the Mr Robot CTF room, exploring web vulnerabilities and privilege escalation.",
    date: "Sep 8, 2025",
    readTime: "15 min",
    difficulty: "Medium",
    topics: ["Web Exploitation", "Privilege Escalation", "CTF"],
    skills: ["WordPress", "Linux", "Brute Force"],
    href: "/blog/tryhackme/mr-robot"
  },
  {
    title: "Blue Room - EternalBlue",
    description: "Step-by-step guide to exploiting the EternalBlue vulnerability in the Blue room.",
    date: "Sep 3, 2025",
    readTime: "10 min",
    difficulty: "Easy",
    topics: ["Windows Exploitation", "SMB", "Metasploit"],
    skills: ["Network Security", "Exploit Development", "Post Exploitation"],
    href: "/blog/tryhackme/blue"
  }
];

const TryHackMe = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold font-mono">TRYHACKME</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Detailed writeups and walkthroughs for TryHackMe rooms
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {tryhackmePosts.map((post, index) => (
            <Card key={index} className="hover:border-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant={
                      post.difficulty === "Easy" ? "default" :
                      post.difficulty === "Medium" ? "secondary" : "destructive"
                    }
                    className="font-mono"
                  >
                    {post.difficulty}
                  </Badge>
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
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Skills Used</h3>
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
                      Read Walkthrough
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

export default TryHackMe;
