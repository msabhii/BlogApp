import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appWrite/auth";
import { login, logout } from "./Store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import appwriteService from "./appWrite/config";
import { addPost } from "./Store/appwriteSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  async () => {
    const posts = appwriteService.getPosts([]);
    if (posts) {
      setAllPosts(posts);
    }
  };
  dispatch(addPost(allPosts));

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
