import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import {
  createPostThunk,
  deletePostThunk,
  editPostThunk,
  getAllPostsThunk,
  getSinglePostThunk,
} from './postThunk'
const initialState = {
  isLoading: true,
  posts: [],
  post: {},
}
export const getPosts = createAsyncThunk('posts/getPosts', getAllPostsThunk)
export const getSpecificPost = createAsyncThunk(
  'posts/getSinglePost',
  getSinglePostThunk
)

export const deletePost = createAsyncThunk('posts/deletePost', deletePostThunk)
export const createPost = createAsyncThunk('posts/createPost', createPostThunk)
export const editPost = createAsyncThunk('posts/editPost', editPostThunk)

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true
    },
    hideLoading: (state) => {
      state.isLoading = false
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1
      state[name] = value
    },

    changePage: (state, { payload }) => {
      state.page = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.posts = payload
      })
      .addCase(getPosts.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })

      .addCase(getSpecificPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSpecificPost.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.post = payload
      })
      .addCase(getSpecificPost.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })

      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state) => {
        state.isLoading = false
        toast.success('post Created')
      })
      .addCase(createPost.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })

      .addCase(editPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editPost.fulfilled, (state) => {
        state.isLoading = false
        toast.success('post edited')
      })
      .addCase(editPost.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        toast.success('post deleted')
      })
      .addCase(deletePost.rejected, (state, { payload }) => {
        toast.error(payload)
      })
  },
})

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
} = postSlice.actions

export default postSlice.reducer
