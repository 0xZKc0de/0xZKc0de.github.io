import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, Download, MapPin, Calendar } from "lucide-react";
import { TerminalBlock, CommandLine } from "@/components/TerminalBlock";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-32 h-32 border-4 border-primary">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-muted text-4xl font-bold font-mono">
                      0x
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="font-mono text-2xl">0xzkc0de</CardTitle>
                <CardDescription className="text-center">
                  Cybersecurity Specialist & Penetration Tester
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Remote / Global</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>5+ Years Experience</span>
                </div>
                
                <div className="flex flex-col gap-2 pt-4">
                  <Button variant="outline" className="justify-start font-mono">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </Button>
                  <Button variant="outline" className="justify-start font-mono">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="justify-start font-mono">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                  <Button variant="default" className="justify-start font-mono">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-mono">ABOUT ME</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate cybersecurity professional specializing in penetration testing, 
                  binary exploitation, and web application security. With over 5 years of experience 
                  in the field, I've helped organizations identify and remediate critical security 
                  vulnerabilities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans across various domains including network security, OS internals, 
                  reverse engineering, and exploit development. I'm particularly interested in 
                  low-level system exploitation and advanced persistent threat (APT) techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-mono">EXPERIENCE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-mono font-semibold">Senior Penetration Tester</h3>
                    <Badge variant="outline">2021 - Present</Badge>
                  </div>
                  <p className="text-primary text-sm mb-2">CyberSec Solutions Inc.</p>
                  <p className="text-muted-foreground text-sm">
                    Lead penetration testing engagements, conduct red team exercises, 
                    and develop custom exploitation tools for enterprise clients.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-mono font-semibold">Security Researcher</h3>
                    <Badge variant="outline">2019 - 2021</Badge>
                  </div>
                  <p className="text-primary text-sm mb-2">SecureNet Labs</p>
                  <p className="text-muted-foreground text-sm">
                    Researched zero-day vulnerabilities, published security advisories, 
                    and contributed to open-source security tools.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-mono font-semibold">Jr. Security Analyst</h3>
                    <Badge variant="outline">2018 - 2019</Badge>
                  </div>
                  <p className="text-primary text-sm mb-2">InfoSec Corp</p>
                  <p className="text-muted-foreground text-sm">
                    Performed vulnerability assessments, incident response, 
                    and security monitoring for financial institutions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-mono">PHILOSOPHY</CardTitle>
              </CardHeader>
              <CardContent>
                <TerminalBlock>
                  <CommandLine
                    lineNumber={1}
                    command="cat /home/0xzkc0de/philosophy.txt"
                    output={
                      <div className="space-y-2 text-muted-foreground">
                        <div>"Security through obscurity is not security at all."</div>
                        <div>"Every system is penetrable, it's just a matter of time and creativity."</div>
                        <div>"The best defense comes from understanding offense."</div>
                        <div>"Knowledge shared is security improved for everyone."</div>
                      </div>
                    }
                  />
                </TerminalBlock>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;