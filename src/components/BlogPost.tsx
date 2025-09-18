import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  children: React.ReactNode;
}

export const BlogPost = ({ title, date, readTime, author, tags, children }: BlogPostProps) => {
  return (
    <article className="max-w-4xl mx-auto p-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <span className="text-accent hover:text-primary cursor-pointer">Home</span>
        <span className="mx-2">•</span>
        <span>{title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{title}</h1>
        
        <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Posted {date}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Updated {date}
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            By {author}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime} read
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        {children}
      </div>

      {/* Table of Contents Sidebar */}
      <aside className="fixed right-8 top-1/2 transform -translate-y-1/2 w-64 hidden xl:block">
        <div className="bg-card border border-border rounded-lg p-4">
          <h3 className="font-semibold mb-3 text-sm">Contents</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#recon" className="text-accent hover:text-primary transition-colors">
                recon
              </a>
            </li>
            <li className="ml-4">
              <a href="#http" className="text-muted-foreground hover:text-primary transition-colors">
                http
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </article>
  );
};