import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/blo_logo.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-light text-center py-5 mb-4">
        <div className="container">
          <h1 className="display-4">Welcome to Rahul Blog</h1>
          <p className="lead">
            A simple, modern blog platform to share posts, updates, and insights about technology and programming.
          </p>
          <Link to="/posts" className="btn btn-light btn-lg mt-3">
            Explore Posts
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h2>About This Blog</h2>
            <p>
              Rahul Blog is built with React and Bootstrap. You can view the latest posts, add your own posts, and get inspired by content from different authors. Our goal is to make blogging simple, responsive, and visually appealing.
            </p>
            <p>
              Features include: dynamic post listing, add new posts via form, responsive layout, and a clean user interface.
            </p>
            <Link to="/posts" className="btn btn-primary mt-3">
              See Latest Posts
            </Link>
          </div>

          <div className="col-md-6 mb-4 text-center">
            <img
              src={logo}
              alt="Blog Illustration"
              className="img-fluid rounded shadow"
                style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
      </section>

      {/* Call-to-action Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h2>Start Sharing Your Ideas Today!</h2>
          <p className="mb-4">
            Join our blogging platform and start publishing posts in minutes.
          </p>
          <Link to="/posts" className="btn btn-primary btn-lg">
            Explore Posts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
