import BlogPost from "@/components/BlogPost";
import Layout from "@/components/Layout";

const SoftwareDev = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Software Development</h1>
        <p className="text-muted-foreground">
          Best practices, architecture patterns, and development insights.
        </p>
        <div className="grid gap-4">
          <BlogPost
            title="Clean Architecture"
            description="Building maintainable and scalable applications"
            date="2024-01-01"
            href="/blog/software-development/clean-architecture"
          />
          {/* Add more blog posts here */}
        </div>
      </div>
    </Layout>
  );
};

export default SoftwareDev;