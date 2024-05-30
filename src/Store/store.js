import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import appwriteSlice from "./appwriteSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: appwriteSlice,

    // add more slices here for posts
    //? You have to get all the posts from appwrite and store in redux store and use the store to get and preview the posts
  },
});

export default store;
