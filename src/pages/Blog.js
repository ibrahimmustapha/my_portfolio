import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogSkeletonLoader from "../components/BlogSkeletonLoader";

const query = `
{
  publication(host: "codewithibrahim.hashnode.dev") {
    posts(first: 3) {
      edges {
        node {
          coverImage {
            url
          }
          title
          brief
          url
          slug
        }
      }
    }
  }
}
`;

const Blog = ({ surfaceClasses }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });
        const data = await response.json();
        const edges = data?.data?.publication?.posts?.edges ?? [];
        setPosts(edges);
      } catch (error) {
        console.error("Unable to fetch blog posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <section className={`${surfaceClasses} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-transparent blur-3xl opacity-90 dark:from-brand-primary/15" />
        <div className="relative text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
            Writing
          </span>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Notes from my learning journey and the experiments that follow.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
            I document what I learn while building products—covering discoveries,
            mistakes, and frameworks you can apply in your own work.
          </p>
        </div>
      </section>
      {loading ? (
        <div className="grid gap-6 md:grid-cols-2">
          <BlogSkeletonLoader surfaceClasses={surfaceClasses} />
          <BlogSkeletonLoader surfaceClasses={surfaceClasses} />
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map(({ node }) => (
            <BlogCard
              key={node?.slug}
              link={node?.url}
              image={node?.coverImage?.url}
              title={node?.title}
              preview={node?.brief}
              surfaceClasses={surfaceClasses}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
