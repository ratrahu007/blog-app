import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5>About Rahul Blog</h5>
            <p>
              A simple blog platform built with React & Bootstrap. Stay updated with latest posts and tech insights!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/posts" className="text-light text-decoration-none">Posts</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5>Contact</h5>
            <p>Email: <a href="mailto:contact@rahulblog.com" className="text-light">contact@rahulblog.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="text-light">+91 1234567890</a></p>
            <div className="mt-2">
              <a href="#" className="text-light me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

        </div>

        <hr className="bg-light" />

        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Rahul Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
