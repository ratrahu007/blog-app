import React from "react";

const PostCard = ({ userId, id, title, body }) => {
  return (
    <div className="card text-dark bg-light mb-4 shadow-lg h-100 border-0 rounded-3">
      <div className="card-body d-flex flex-column">
        {/* Post Title */}
        <h5 className="card-title">{title}</h5>

        {/* Post Info */}
        <h6 className="card-subtitle mb-2 text-muted">
          Post ID: {id} | User ID: {userId}
        </h6>

        {/* Post Body (truncate for better look) */}
        <p className="card-text flex-grow-1">
          {body.length > 120 ? body.substring(0, 120) + "..." : body}
        </p>

        {/* Read More button aligned at bottom */}
        <button className="btn btn-primary mt-3 align-self-start">Read More</button>
      </div>
    </div>
  );
};

export default PostCard;
