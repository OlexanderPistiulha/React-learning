import React from "react";

import "./post-add-form.css";

const PostAddForm = ({ onAdd }) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="what are you think?"
        className="form-control new-post-label"
      />
      <button
        onClick={() => onAdd("bgbb")}
        type="submit"
        className="btn btn-outline-secondary"
      >
        Something here
      </button>
    </div>
  );
};

export default PostAddForm;
