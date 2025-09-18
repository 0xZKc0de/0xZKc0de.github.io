import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, Code, Network, Bug, Database, Lock } from "lucide-react";

const skillCategories = [
  {
    title: "Penetration Testing",
    icon: Shield,
    description: "Web application and network security assessment",
    skills: [
      { name: "Web App Pentesting", level: 90 },
      { name: "Network Scanning", level: 85 },
      { name: "Social Engineering", level: 75 },
      { name: "Wireless Security", level: 70 }
    ]
  },
  {
    title: "Binary Exploitation",
    icon: Bug,
    description: "Low-level exploitation and reverse engineering",
    skills: [
      { name: "Buffer Overflows", level: 85 },
      { name: "Return-Oriented Programming", level: 80 },
      { name: "Assembly Language", level: 85 },
      { name: "Debugger Usage (GDB)", level: 90 }
    ]
  },
  {
    title: "Programming & Scripting",
    icon: Code,
    description: "Languages and frameworks for security tools",
    skills: [
      { name: "Python", level: 95 },
      { name: "C/C++", level: 80 },
      { name: "Bash Scripting", level: 90 },
      { name: "JavaScript", level: 75 }
    ]
  },
  {
    title: "Network Security",
    icon: Network,
    description: "Network protocols and infrastructure security",
    skills: [
      { name: "TCP/IP Analysis", level: 90 },
      { name: "Wireshark", level: 85 },
      { name: "Firewall Configuration", level: 80 },
      { name: "VPN Technologies", level: 75 }
    ]
  },
  {
    title: "Cryptography",
    icon: Lock,
    description: "Encryption, hashing, and cryptographic attacks",
    skills: [
      { name: "Symmetric Encryption", level: 85 },
      { name: "Public Key Infrastructure", level: 80 },
      { name: "Hash Function Analysis", level: 85 },
      { name: "Digital Signatures", level: 75 }
    ]
  },
  {
    title: "Database Security",
    icon: Database,
    description: "Database enumeration and injection techniques",
    skills: [
      { name: "SQL Injection", level: 90 },
      { name: "NoSQL Injection", level: 75 },
      { name: "Database Enumeration", level: 85 },
      { name: "Privilege Escalation", level: 80 }
    ]
  }
];

const certifications = [
  "OSCP - Offensive Security Certified Professional",
  "CEH - Certified Ethical Hacker",
  "Security+ - CompTIA Security+",
  "CISSP - Certified Information Systems Security Professional"
];

const Skills = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 font-mono">SKILLS</h1>
          <p className="text-muted-foreground text-lg">
            Technical expertise in cybersecurity, penetration testing, and exploit development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <category.icon className="w-6 h-6 text-primary" />
                  <div>
                    <CardTitle className="font-mono">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-mono">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-mono">CERTIFICATIONS & TRAINING</CardTitle>
            <CardDescription>
              Professional certifications and specialized training programs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="justify-start p-3 font-mono">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Skills;