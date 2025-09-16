import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/blo_logo.png";

const About = () => {
  // Static / hype data
  const totalBlogs = 120; // pretend number of blogs
  const totalAuthors = 15;

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4">About Rahul Blog</h1>
        <p className="lead">
          Our mission is to make blogging simple, engaging, and exciting for everyone!
        </p>
      </div>

      {/* Vision Section */}
      <section className="row align-items-center mb-5">
        <div className="col-md-6 mb-4">
          <h2>Our Vision</h2>
          <p>
            Rahul Blog was created to empower writers, tech enthusiasts, and learners to share their knowledge with the world.  
            We believe every idea deserves a platform, every voice deserves to be heard, and every post can inspire millions.
          </p>
          <p>
            Whether you’re a beginner programmer, a full-stack developer, or a tech blogger, this platform is your stage.
          </p>
          <Link to="/posts" className="btn btn-primary mt-3">
            Explore Posts
          </Link>
        </div>

        <div className="col-md-6 text-center mb-4">
          <img
            src={logo}
            alt="Our Vision"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </section>

      {/* Stats / Hype Section */}
      <section className="text-center bg-light py-5 rounded shadow">
        <h2 className="mb-4">The Numbers Speak!</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="display-5">{totalBlogs}+</h3>
              <p>Blogs Published</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="display-5">{totalAuthors}+</h3>
              <p>Active Authors</p>
            </div>
          </div>
        </div>
        <p className="mt-4 lead">
          Join our community and contribute your story today!
        </p>
        <Link to="/posts" className="btn btn-primary btn-lg mt-3">
          Start Reading
        </Link>
      </section>
    </div>
  );
};

export default About;
