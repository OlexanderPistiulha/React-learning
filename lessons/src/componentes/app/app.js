import React, { Component } from "react";

import "./app.css";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "something one",
          important: true,
          like: false,
          id: "eknelnel",
        },
        {
          label: "something two",
          important: false,
          like: false,
          id: "eknelnedel",
        },
        {
          label: "something three",
          important: false,
          like: false,
          id: "ekededenelnel",
        },
      ],
      term: "",
      filter: "all",
    };
    this.maxId = 4; // так не делать, гененрирываь на серваке или иногда на клиенте
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

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [newItem, ...data];
      return {
        data: newArr,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  };

  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  };

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term }); // новая запись обьекта вместо tern:term
  };

  onFilterSelect = (filter) => {
    this.setState({ filter }); // новая запись обьекта вместо tern:term
  };

  // commonToggle(id, data, nameElemArr, elemArr) {
  //   const index = data.findIndex((elem) => elem.id === id);
  //   const old = data[index];
  //   const newItem = { ...old, nameElemArr: !old.elemArr };
  //
  //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
  //
  //   return {
  //     data: newArr,
  //   };
  // }

  render() {
    const { data, term, filter } = this.state;

    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel  d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
          posts={visiblePosts}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
