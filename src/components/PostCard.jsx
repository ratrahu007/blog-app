import React, { useReducer } from "react";

// 🎯 Reducer for like toggle
const likeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE":
      return {
        ...state,
        liked: !state.liked,
        count: state.liked ? state.count - 1 : state.count + 1,
      };
    default:
      return state;
  }
};

const PostCard = ({ userId, id, title, body,onDelete, isLocal }) => {
  // 🔹 useReducer for like state
  const [likeState, dispatch] = useReducer(likeReducer, {
    liked: false,
    count: 0,
  });

  return (
    <div className="card text-dark bg-light mb-4 shadow-lg h-100 border-0 rounded-3">
      <div className="card-body d-flex flex-column">
        {/* Post Title */}
        <h5 className="card-title">{title}</h5>

        {/* Post Info */}
        <h6 className="card-subtitle mb-2 text-muted">
          Post ID: {id} | User: {userId}
        </h6>

        {/* Post Body (truncate for better look) */}
        <p className="card-text flex-grow-1">
          {body.length > 120 ? body.substring(0, 120) + "..." : body}
        </p>

        {/* Action buttons aligned at bottom */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          {/* Like Button */}
          <button
            className={`btn ${likeState.liked ? "btn-danger" : "btn-outline-danger"}`}
            onClick={() => dispatch({ type: "TOGGLE_LIKE" })}
          >
            ❤️ {likeState.count}
          </button>

          {/* Read More button */}
          {isLocal && (
            <button className="btn btn-danger" onClick={onDelete}>
              Delete
            </button>
          )}
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
