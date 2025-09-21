import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Folder,
  BookOpen,
  Github,
  Linkedin
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const techStack = [
    { name: "C", color: "#A8B9CC" },
    { name: "C++", color: "#00599C" },
    { name: "Java", color: "#ffffff" },
    { name: "Go", color: "#00ADD8" },
    { name: "Python", color: "#ffffff" },
    { name: "Spring Boot", color: "#6DB33F" },
    { name: "Hibernate", color: "#ffffff" },
    { name: "Git", color: "#F05032" },
    { name: "GitHub", color: "#ffffff" },
    { name: "Docker", color: "#2496ED" },
    { name: "MySQL", color: "#4479A1" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "Linux", color: "#FCC624" },
    { name: "Windows", color: "#0078D6" }
  ];

  const coreCompetencies = [
    "Backend Development (Java Ecosystem)",
    "Binary Exploitation (PWN)",
    "System & Low-Level Programming", 
    "Competitive Programming"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-8 relative overflow-x-hidden">
        {/* Background Signature */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[15rem] font-mono font-bold text-gray-100 select-none opacity-5 transform -rotate-12">
            0xZKc0de
          </div>
        </div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-mono mb-4 text-gray-900">0xZKc0de</h1>
            <p className="text-lg text-gray-600 italic mb-8">
              Diving deep into the ones and zeros so you don't have to.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/el-haddad-mohamed-959385254/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/0xZKc0de" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
                    </div>
        </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-8">
          {/* About Section */}
          <Card className="border-gray-200">
              <CardHeader>
              <CardTitle className="font-mono text-xl">About Me</CardTitle>
              </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>• I'm a CompSci student who enjoys building robust backend stuff with Java and Spring Boot, focusing on best practices.</p>
                <p>• Most of my time is spent grinding problems on LeetCode and Codeforces. I mainly use C++, but I'll pivot to Java or Python depending on the task.</p>
                <p>• On the side, I like to dive into the low-level security world, mostly focusing on PWN and other binary exploitation stuff.</p>
                <p className="font-medium">• Feel free to reach out! I'm always open to talking about tech, code, or interesting challenges.</p>
                </div>
              </CardContent>
            </Card>

          {/* Tech Stack */}
          <Card className="border-gray-200">
              <CardHeader>
              <CardTitle className="font-mono text-xl">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center max-w-full overflow-hidden">
                  {techStack.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-gray-700 border-gray-300 hover:border-gray-400 transition-colors flex-shrink-0"
                      style={{ 
                        backgroundColor: '#f8f9fa',
                        borderColor: '#dee2e6',
                        color: '#495057'
                      }}
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

          {/* Core Competencies */}
          <Card className="border-gray-200">
          <CardHeader>
              <CardTitle className="font-mono text-xl">Core Competencies</CardTitle>
          </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="flex flex-wrap justify-center gap-4 max-w-full overflow-hidden">
                    {coreCompetencies.map((competency, index) => (
                      <span key={index} className="text-gray-700 font-medium flex-shrink-0">
                        {competency}
                        {index < coreCompetencies.length - 1 && <span className="mx-2 text-gray-400">•</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
          </Card>


          {/* Philosophy */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="font-mono text-xl">Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-600 font-mono text-lg italic">
                  Exploring the depths of code, one byte at a time.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="font-mono text-xl">Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/terminal" className="group">
                  <Card className="border-gray-200 hover:border-gray-300 transition-colors">
                    <CardContent className="p-6 text-center">
                      <Terminal className="h-8 w-8 text-gray-600 mx-auto mb-3 group-hover:text-gray-800 transition-colors" />
                      <h3 className="font-mono text-lg mb-2">Terminal</h3>
                      <p className="text-sm text-gray-500">Command Line Interface</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/projects" className="group">
                  <Card className="border-gray-200 hover:border-gray-300 transition-colors">
                    <CardContent className="p-6 text-center">
                      <Folder className="h-8 w-8 text-gray-600 mx-auto mb-3 group-hover:text-gray-800 transition-colors" />
                      <h3 className="font-mono text-lg mb-2">Projects</h3>
                      <p className="text-sm text-gray-500">Portfolio Showcase</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link to="/blog" className="group">
                  <Card className="border-gray-200 hover:border-gray-300 transition-colors">
                    <CardContent className="p-6 text-center">
                      <BookOpen className="h-8 w-8 text-gray-600 mx-auto mb-3 group-hover:text-gray-800 transition-colors" />
                      <h3 className="font-mono text-lg mb-2">Blog</h3>
                      <p className="text-sm text-gray-500">Technical Articles</p>
                    </CardContent>
                  </Card>
                </Link>
            </div>
          </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;