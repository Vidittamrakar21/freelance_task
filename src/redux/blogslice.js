import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    editBlog: (state, action) => {
      const index = state.blogs.findIndex(blog => blog.id === action.payload.id);
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
    },
  },
});

export const { addBlog, editBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;