import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogSkeletonLoader from "../components/BlogSkeletonLoader";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const query = `
    query {
        user(username: "codewithibrahim") {
          publication {
            posts(page: 0) {
              title
              brief
              slug
              coverImage
            }
          }
        }
      }
    `;

  useEffect(() => {
    fetchPosts();
  });

  const fetchPosts = async () => {
    const token = "a584ae6b-3b8b-4ced-acd1-fe175b98c3d3";
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    console.log(data);
    setPosts(data.data.user.publication.posts);
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
            link={post.slug}
            image={post.coverImage}
            title={post.title}
            preview={post.brief}
            readMe={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
