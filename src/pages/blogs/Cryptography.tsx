import BlogPost from "@/components/BlogPost";
import Layout from "@/components/Layout";

const Cryptography = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Cryptography</h1>
        <p className="text-muted-foreground">
          Exploring cryptographic algorithms, protocols, and security implementations.
        </p>
        <div className="grid gap-4">
          <BlogPost
            title="Modern Cryptography"
            description="Understanding modern cryptographic principles and implementations"
            date="2024-01-01"
            href="/blog/cryptography/modern-cryptography"
          />
          {/* Add more blog posts here */}
        </div>
      </div>
    </Layout>
  );
};

export default Cryptography;