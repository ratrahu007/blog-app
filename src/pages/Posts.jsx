// src/pages/Posts.jsx
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import PostCard from "../components/PostCard";

const Posts = () => {
  const { data: apiPosts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [localPosts, setLocalPosts] = useState([]);

  // Load local posts from localStorage
  const loadLocalPosts = () => {
    const storedPosts = JSON.parse(localStorage.getItem("localPosts")) || [];
    setLocalPosts(storedPosts);
  };

  useEffect(() => {
    loadLocalPosts();
  }, []);

  // Handle delete post
  const handleDelete = (id) => {
    const updatedPosts = localPosts.filter((post) => post.id !== id);
    setLocalPosts(updatedPosts);
    localStorage.setItem("localPosts", JSON.stringify(updatedPosts));
  };

  // Merge local + API posts
  const allPosts = [...localPosts, ...(apiPosts || [])];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Latest Posts</h2>
      <div className="row">
        {allPosts.slice(0, 10).map((post) => (
          <div key={post.id} className="col-md-6 mb-4">
            <PostCard
              title={post.title}
              body={post.body}
              userId={post.userId || post.author}
              onDelete={() => handleDelete(post.id)} // 👈 pass delete function
              isLocal={!!post.author} // optional: only show delete for local posts
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
