import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, Clock, Calendar } from "lucide-react";

const leetcodePosts = [
  {
    title: "Two Sum - HashMap Solution",
    description: "Solving the classic Two Sum problem using a HashMap approach for O(n) time complexity.",
    date: "Sep 15, 2025",
    readTime: "5 min",
    difficulty: "Easy",
    topics: ["Arrays", "Hash Table", "Algorithms"],
    href: "/blog/leetcode/two-sum"
  },
  {
    title: "Binary Tree Maximum Path Sum",
    description: "A deep dive into solving the hard Binary Tree Maximum Path Sum problem using DFS.",
    date: "Sep 10, 2025",
    readTime: "8 min",
    difficulty: "Hard",
    topics: ["Binary Tree", "DFS", "Dynamic Programming"],
    href: "/blog/leetcode/binary-tree-max-path"
  },
  {
    title: "3Sum Problem Optimization",
    description: "Optimizing the 3Sum problem from O(n³) to O(n²) with sorting and two pointers.",
    date: "Sep 5, 2025",
    readTime: "7 min",
    difficulty: "Medium",
    topics: ["Two Pointers", "Sorting", "Arrays"],
    href: "/blog/leetcode/3sum"
  }
];

const LeetCode = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold font-mono">LEETCODE</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Solutions and explanations for various LeetCode problems
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {leetcodePosts.map((post, index) => (
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.topics.map((topic, i) => (
                    <Badge key={i} variant="outline" className="font-mono">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="font-mono group" asChild>
                  <a href={post.href}>
                    Read Solution
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LeetCode;
