// src/pages/AddPost.jsx
import React from "react";
import PostForm from "../components/PostForm";

const AddPost = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Create New Blog Post</h2>
      <PostForm />
    </div>
  );
};

export default AddPost;
