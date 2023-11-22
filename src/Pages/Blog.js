import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogSkeletonLoader from "../components/BlogSkeletonLoader";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const query = `
  query {
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
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/queryjson",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });
    const data = await response.json();
    console.log(data);
    setPosts(data.data.publication.posts);
    console.log(posts)
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
            link={post.url}
            image={post.coverImage?.url}
            title={post.title}
            preview={post.brief}
            readMe={post.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
