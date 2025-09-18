import BlogPost from "@/components/BlogPost";
import Layout from "@/components/Layout";

const CompetitiveProgramming = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Competitive Programming</h1>
        <p className="text-muted-foreground">
          Problem-solving strategies, algorithmic challenges, and coding competition insights.
        </p>
        <div className="grid gap-4">
          <BlogPost
            title="Data Structures and Algorithms"
            description="Advanced data structures and algorithms for competitive programming"
            date="2024-01-01"
            href="/blog/competitive-programming/data-structures"
          />
          {/* Add more blog posts here */}
        </div>
      </div>
    </Layout>
  );
};

export default CompetitiveProgramming;