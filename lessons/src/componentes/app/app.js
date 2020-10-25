import React from "react";

import "./app.css";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
//import PostListItem from "../post-list-item/post-list-item";

const App = () => {
  //  data what we take  from imaginative server
  const data = [
    { label: "something one", important: true, id: "eknelnel" },
    { label: "something two", important: false, id: "eknelnedel" },
    { label: "something three", important: false, id: "ekededenelnel" },
  ];
  //  -------------------------------------------

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel  d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
