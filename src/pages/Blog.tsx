import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, PenTool } from "lucide-react";

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-8 relative">
        {/* Background Signature */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[15rem] font-mono font-bold text-gray-100 select-none opacity-5 transform -rotate-12">
            0xZKc0de
          </div>
        </div>

        <div className="relative z-10">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4 font-mono bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BLOG
            </h1>
            <p className="text-muted-foreground text-lg">
              Technical articles and problem-solving insights
            </p>
          </div>

          {/* Empty State */}
          <div className="flex items-center justify-center min-h-[60vh]">
            <Card className="max-w-md w-full text-center border-dashed border-2 border-gray-400 bg-white shadow-lg">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-mono text-xl text-gray-800">
                  Nothing is posted yet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The blog is currently empty. Check back later for technical articles, 
                  problem-solving insights, and coding tutorials.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
                  <PenTool className="h-4 w-4" />
                  <span>Content coming soon...</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
