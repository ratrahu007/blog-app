// src/components/PostForm.jsx
import React, { useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";

// 🎯 Reducer function for form state
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { title: "", author: "", body: "" };
    default:
      return state;
  }
};

const PostForm = () => {
  const navigate = useNavigate();

  // 🔹 useReducer instead of multiple useState
  const [formData, dispatch] = useReducer(formReducer, {
    title: "",
    author: "",
    body: "",
  });

  // 🔹 useRef to autofocus first field
  const titleRef = useRef(null);
  React.useEffect(() => {
    titleRef.current.focus();
  }, []);

  // 🔹 Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.body) {
      alert("All fields are required!");
      return;
    }

    // New post object
    const newPost = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      body: formData.body,
    };

    // Save to localStorage
    const storedPosts = JSON.parse(localStorage.getItem("localPosts")) || [];
    storedPosts.unshift(newPost);
    localStorage.setItem("localPosts", JSON.stringify(storedPosts));

    dispatch({ type: "RESET" });

    // Redirect to Posts page
    navigate("/posts");
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center mb-4">Create New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Title</label>
            <input
              ref={titleRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter post title"
              value={formData.title}
              onChange={(e) =>
                dispatch({ type: "UPDATE_FIELD", field: "title", value: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Author</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter author name"
              value={formData.author}
              onChange={(e) =>
                dispatch({ type: "UPDATE_FIELD", field: "author", value: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Blog Content</label>
            <textarea
              className="form-control form-control-lg"
              rows="6"
              placeholder="Write your blog here..."
              value={formData.body}
              onChange={(e) =>
                dispatch({ type: "UPDATE_FIELD", field: "body", value: e.target.value })
              }
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 btn-lg">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
