import React from "react";
import PostsList from "./features/posts/PostsList";
import PostForm from "./features/posts/PostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import EditPostForm from "./features/posts/EditPostForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="posts">
          <Route index element={<PostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
