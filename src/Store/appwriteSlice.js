import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};
const appwriteSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { addPost } = appwriteSlice.actions;
export default appwriteSlice.reducer;

//? I can but I have added few custom features hence introduced few bugs. And hence proved bugs are features . Further checking on it.

// So I can tell what exactly u need to do for post slice.

// STEPS:
// 1. update your store for post
// 2. create slice for posts
// 3. fetch all posts info in app.jsx and dispatch to store
// 4. fetch post info from store and diplay in Home.jsx (use filter to filter out inactive posts)
// 5. repeat 4 for all posts without filter

// NOTE: if u don't want to fetch post info when ur app load, u can also fetch it in ur HOME.jsx or AllPosts.jsx (either of one). Then dispatch to store and other will fetch info from store. But i recommend to fetch it as soon as ur app loads.
