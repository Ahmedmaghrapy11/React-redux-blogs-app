import React from "react";
import PostsList from "./features/posts/PostsList";
import PostForm from "./features/posts/PostForm";

const App = () => {
  return (
    <main className="App">
      <PostForm />
      <PostsList />
    </main>
  );
};

export default App;
