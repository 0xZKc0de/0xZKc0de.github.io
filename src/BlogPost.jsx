import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Dynamic import of raw markdown file
        const file = await import(`./blogs/${slug}.md?raw`);
        setContent(file.default);
      } catch (error) {
        setContent('# Post not found\nThe post you are looking for does not exist.');
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  return (
    <article className="section-block" style={{ marginTop: '0.5rem' }}>
      <Link
        to="/blog"
        className="project-link"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        &larr; Back to Blog
      </Link>
      
      {loading ? (
        <p>Loading post...</p>
      ) : (
        <div className="markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      )}
    </article>
  );
}
