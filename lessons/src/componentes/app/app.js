import React, { Component } from "react";

import "./app.css";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
//import PostListItem from "../post-list-item/post-list-item";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "something one", important: true, id: "eknelnel" },
        { label: "something two", important: false, id: "eknelnedel" },
        { label: "something three", important: false, id: "ekededenelnel" },
      ],
    };
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel  d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList onDelete={this.deleteItem} posts={this.state.data} />
        <PostAddForm />
      </div>
    );
  }
}

// const App = () => {
//   //  data what we take  from imaginative server
//   const data = [
//     { label: "something one", important: true, id: "eknelnel" },
//     { label: "something two", important: false, id: "eknelnedel" },
//     { label: "something three", important: false, id: "ekededenelnel" },
//   ];
//   //  -------------------------------------------
//
//   return (
//     <div className="app">
//       <AppHeader />
//       <div className="search-panel  d-flex">
//         <SearchPanel />
//         <PostStatusFilter />
//       </div>
//       <PostList onDelete={(id) => console.log(id)} posts={data} />
//       <PostAddForm />
//     </div>
//   );
// };
