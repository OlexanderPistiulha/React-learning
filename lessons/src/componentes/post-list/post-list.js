import React from "react";

import "./post-list.css";

import PostListItem from "../post-list-item/post-list-item";

const PostList = ({ posts, onDelete }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-gtoup-item">
        <PostListItem onDelete={() => onDelete(id)} {...itemProps} />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
