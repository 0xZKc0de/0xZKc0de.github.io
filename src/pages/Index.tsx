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
  Box,
  Zap,
  Shield,
  Cpu,
  Github,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Code2,
  Bug,
  Database,
  Globe,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  MousePointer,
  Keyboard,
  Monitor,
  Smartphone,
  Wifi,
  WifiOff
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const skills = [
  {
    category: "Cyber Security",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-50",
    items: ["PWN", "Reverse Engineering", "Penetration Testing"]
  },
  {
    category: "Web Development", 
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    items: ["Spring Boot", "RESTful APIs", "Backend Development"]
  },
  {
    category: "Problem Solving",
    icon: Code2,
    color: "text-green-500", 
    bgColor: "bg-green-50",
    items: ["Algorithms", "Data Structures", "Competitive Programming"]
  },
  {
    category: "Cryptography",
    icon: Lock,
    color: "text-purple-500",
    bgColor: "bg-purple-50", 
    items: ["Security Protocols", "Digital Signatures", "Encryption"]
  }
];

const featuredProjects = [
  {
    title: "TechShare Platform",
    description: "Modern blogging platform with Spring Boot backend and advanced security features",
    tech: ["Spring Boot", "PostgreSQL", "JWT", "Security"],
    status: "In Progress",
    icon: Database
  },
  {
    title: "Distributed Calculation System", 
    description: "Robust distributed computation system with Java concurrency and RMI communication",
    tech: ["Java", "Sockets", "Threads", "RMI"],
    status: "Completed",
    icon: Cpu
  }
];

const stats = [
  { label: "Active Projects", value: "2+", icon: Folder, color: "text-blue-600" },
  { label: "Technologies", value: "15+", icon: Code, color: "text-green-600" },
  { label: "Security Focus", value: "100%", icon: Shield, color: "text-red-600" },
  { label: "Code Quality", value: "A+", icon: Zap, color: "text-purple-600" }
];

// Animated typing effect component
const TypingEffect = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '3s'
          }}
        />
      ))}
    </div>
  );
};

// Interactive code block component
const InteractiveCodeBlock = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const codeLines = [
    "const developer = {",
    "  name: '0xZKc0de',",
    "  passion: 'breaking & building',",
    "  skills: ['PWN', 'Crypto', 'Web'],",
    "  philosophy: 'zeros and ones dance'",
    "};",
    "",
    "while (curious) {",
    "  explore();",
    "  learn();",
    "  build();",
    "}"
  ];

  useEffect(() => {
    if (isPlaying && currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentLine, codeLines.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setCurrentLine(0);
    }
  };

  return (
    <Card className="bg-gray-900 border-gray-700 text-green-400 font-mono p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={togglePlay}
            className="text-green-400 hover:text-green-300"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsVisible(!isVisible)}
            className="text-green-400 hover:text-green-300"
          >
            {isVisible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      {isVisible && (
        <div className="space-y-1">
          {codeLines.slice(0, currentLine + 1).map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                index === currentLine ? 'animate-pulse' : ''
              }`}
            >
              {line || '\u00A0'}
            </div>
          ))}
          {isPlaying && currentLine < codeLines.length && (
            <div className="animate-pulse">_</div>
          )}
        </div>
      )}
    </Card>
  );
};

// Live activity feed component
const LiveActivityFeed = () => {
  const [activities, setActivities] = useState([
    { id: 1, action: "Compiling", target: "security_protocol.c", status: "success", time: "now" },
    { id: 2, action: "Testing", target: "encryption_module", status: "running", time: "2s ago" },
    { id: 3, action: "Deploying", target: "web_app", status: "pending", time: "5s ago" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities(prev => {
        const newActivities = [...prev];
        const randomIndex = Math.floor(Math.random() * newActivities.length);
        const statuses = ['success', 'running', 'pending', 'error'];
        newActivities[randomIndex] = {
          ...newActivities[randomIndex],
          status: statuses[Math.floor(Math.random() * statuses.length)],
          time: 'now'
        };
        return newActivities;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-400';
      case 'running': return 'text-blue-400';
      case 'pending': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <Card className="bg-gray-900 border-gray-700 text-white p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <h3 className="font-mono text-lg">Live Activity</h3>
      </div>
      <div className="space-y-3">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <span className="text-gray-400">{activity.action}</span>
              <span className="text-blue-400">{activity.target}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`font-mono ${getStatusColor(activity.status)}`}>
                {activity.status}
              </span>
              <span className="text-gray-500 text-xs">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsConnected(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section with Dynamic Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen flex items-center">
        <FloatingParticles />
        
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
        
        {/* Mouse follower effect */}
        <div 
          className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* Status indicator */}
              <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
                <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                <span className="font-mono">
                  {isConnected ? 'SYSTEM ONLINE' : 'CONNECTION LOST'}
                </span>
              </div>
              
              {/* Main title with typing effect */}
              <h1 className="text-6xl md:text-8xl font-bold font-mono mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                <TypingEffect text="0xZKc0de" speed={150} />
              </h1>
              
              {/* Animated subtitle */}
              <div className="text-2xl text-gray-300 mb-4 font-light">
                <TypingEffect text="Security Researcher & Full Stack Developer" speed={50} />
              </div>
              
              {/* Dynamic description */}
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono">
                <TypingEffect 
                  text="Where zeros and ones dance in perfect harmony, and every address is a world waiting to be built or broken." 
                  speed={30} 
                />
              </p>
            </div>
            
            {/* Interactive buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="font-mono group bg-green-600 hover:bg-green-700 text-white border-green-500 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300" 
                asChild
              >
                <Link to="/terminal">
                  <Terminal className="mr-2 h-5 w-5" />
                  Enter Terminal
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-mono group border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300" 
                asChild
              >
                <Link to="/projects">
                  <Folder className="mr-2 h-5 w-5" />
                  Explore Projects
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Code Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4 text-white">Live Code Execution</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Watch the code come to life in real-time
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <InteractiveCodeBlock />
            <LiveActivityFeed />
          </div>
        </div>
      </section>

      {/* Dynamic Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4 text-white">Technical Arsenal</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Specialized tools and knowledge across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-gray-700 bg-gray-800 hover:bg-gray-700 overflow-hidden">
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${skill.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12`}>
                      <Icon className={`h-8 w-8 ${skill.color}`} />
                    </div>
                    <CardTitle className="font-mono text-lg text-white">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skill.items.map((item, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects with Hover Effects */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold font-mono mb-4 text-white">Featured Projects</h2>
              <p className="text-lg text-gray-400">Showcasing cutting-edge work and technical achievements</p>
            </div>
            <Button variant="outline" className="font-mono group border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-gray-700 bg-gray-900 hover:bg-gray-800 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-900/50 rounded-lg group-hover:bg-blue-800/50 transition-colors group-hover:scale-110">
                          <Icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="font-mono text-xl text-white">{project.title}</CardTitle>
                          <Badge 
                            variant={project.status === "Completed" ? "default" : "secondary"}
                            className="mt-1 font-mono text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="font-mono text-xs border-gray-600 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="font-mono group border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white" asChild>
                      <Link to="/projects">
                        View Details
                        <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-mono mb-4 text-gray-900">About Me</h2>
              <p className="text-lg text-gray-600 italic">
                Diving deep into the ones and zeros so you don't have to.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Personal Info */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">Who I Am</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    I'm a CompSci student who enjoys building robust backend stuff with Java and Spring Boot, 
                    focusing on best practices.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Most of my time is spent grinding problems on LeetCode and Codeforces. I mainly use C++, 
                    but I'll pivot to Java or Python depending on the task.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    On the side, I like to dive into the low-level security world, mostly focusing on PWN and 
                    other binary exploitation stuff.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Feel free to reach out! I'm always open to talking about tech, code, or interesting challenges.
                  </p>
                </CardContent>
              </Card>

              {/* Core Competencies */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="font-mono text-xl">Core Competencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                      <Code className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">Backend Development (Java Ecosystem)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                      <Shield className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">Binary Exploitation (PWN)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                      <Brain className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">System & Low-Level Programming</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                      <Target className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700 font-medium">Competitive Programming</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tech Stack */}
            <Card className="border-gray-200 mb-12">
              <CardHeader>
                <CardTitle className="font-mono text-xl">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { category: 'Languages', items: ['C', 'C++', 'Java', 'Go', 'Python'] },
                    { category: 'Frameworks', items: ['Spring Boot', 'Hibernate'] },
                    { category: 'Tools', items: ['Git', 'GitHub', 'Docker'] },
                    { category: 'Databases', items: ['MySQL', 'PostgreSQL'] },
                    { category: 'Systems', items: ['Linux', 'Windows'] }
                  ].map((section, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 mb-3">{section.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.items.map((item, itemIndex) => (
                          <Badge key={itemIndex} variant="outline" className="text-gray-700 border-gray-300">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Philosophy */}
            <Card className="border-gray-200 mb-12">
              <CardHeader>
                <CardTitle className="font-mono text-xl">Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 font-mono p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-sm">terminal@0xZKc0de:~$</span>
                  </div>
                  <div className="text-sm">
                    <div>$ cat /home/0xZKc0de/philosophy.txt</div>
                    <div className="mt-2">Exploring the depths of code, one byte at a time.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dynamic CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-mono text-white mb-6">
              Ready to Connect?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss cybersecurity, software development, or collaborate on your next project. 
              I'm always excited to explore new challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-mono group bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link to="/terminal">
                  <Terminal className="mr-2 h-5 w-5" />
                  Start Conversation
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-mono bg-transparent border-white text-white hover:bg-white hover:text-blue-600 group" asChild>
                <a href="https://github.com/0xZKc0de" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-mono bg-transparent border-white text-white hover:bg-white hover:text-blue-600 group" asChild>
                <a href="https://www.linkedin.com/in/el-haddad-mohamed-959385254/" target="_blank" rel="noopener noreferrer">
                  <Users className="mr-2 h-5 w-5" />
                  LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
