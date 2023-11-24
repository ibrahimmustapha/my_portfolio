import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogSkeletonLoader from "../components/BlogSkeletonLoader";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const query = `
  {
    publication(host: "codewithibrahim.hashnode.dev") {
      isTeam
      title
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
            content {
              markdown
            }
          }
        }
      }
    }
  }
    `;

  useEffect(() => {
    fetchPosts();
  });

  const fetchPosts = async () => {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    setPosts(data.data.publication.posts.edges);
    setLoading(false);
  };

  if (loading)
    return (
      <div className=" max-w-4xl m-auto px-5">
        <div className="mb-5 text-xl font-black">BLOGS</div>
        <BlogSkeletonLoader />
        <BlogSkeletonLoader />
        <BlogSkeletonLoader />
      </div>
    );
  return (
    <div className="px-5">
      <div className="mb-5 text-xl font-black">BLOGS</div>
      <div>
        {posts.map((post) => (
          <BlogCard
            postKey={post.node?.slug}
            link={post.node?.url}
            image={post.node.coverImage?.url}
            title={post.node?.title}
            preview={post.node?.brief}
            readMe={post.node?.slug}
            // content={post.node?.content?.markdown}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
