import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recentPosts = [
  "VulnHub - hackerkid writeup (LinuxMed...)",
  "Dynamically Extracting The Encryption K...",
  "Optimizing Windows Function Resolving ...",
  "HackTheBox - Openadmin write up",
  "HackTheBox - Codify write up"
];

const trendingTags = [
  "TryHackMe", "HackTheBox", "OS internals", "PE format", "PHP",
  "sqlite", "Apache", "base32", "base64", "bash history"
];

export const RecentlyUpdated = () => {
  return (
    <aside className="fixed right-8 top-8 w-80 space-y-6 hidden xl:block">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg">Recently Updated</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {recentPosts.map((post, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-accent transition-colors block"
                >
                  {post}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg">Trending Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};