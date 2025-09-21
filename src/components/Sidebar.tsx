import { Home, User, FolderOpen, Code, Github, Mail, Rss, Lock, Box, FileText, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: "HOME", icon: Home, href: "/dashboard" },
  { name: "TERMINAL", icon: Code, href: "/terminal" },
  { name: "PROJECTS", icon: FolderOpen, href: "/projects" },
  { name: "BLOG", icon: FileText, href: "/blog" },
];

const social = [
  { icon: Github, href: "#" },
  { icon: Mail, href: "#" },
  { icon: Rss, href: "#" },
];

export const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <Avatar className="w-20 h-20 border-2 border-primary">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-muted text-2xl font-bold">
                0x
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-background rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-xl font-bold mb-1">0xzkc0de</h1>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className={`w-full justify-start text-left font-mono text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                  location.pathname === item.href ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''
                }`}
              >
                <Link to={item.href} className="flex items-center w-full">
                  <Icon className="mr-3 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            );
          })}
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex justify-center space-x-4">
            {social.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-8 w-8 p-0 hover:text-primary"
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};