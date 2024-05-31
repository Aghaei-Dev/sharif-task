import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios'
import { showLoading, hideLoading, getPosts } from './postSlice'
export const getAllPostsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/posts`)
    console.log(resp)

    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const getSinglePostThunk = async (id, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/posts/${id}`)
    console.log(resp)
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
export const deletePostThunk = async (postId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  try {
    const resp = await customFetch.delete(`/posts/${postId}`)
    thunkAPI.dispatch(getPosts())
    console.log(resp)

    return resp.data.msg
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const createPostThunk = async (payload, thunkAPI) => {
  try {
    const resp = await customFetch.post('/posts', payload)
    console.log(resp)

    return resp.data.msg
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const editPostThunk = async (payload, thunkAPI) => {
  try {
    const resp = await customFetch.put(`/posts/${payload.id}`, payload)
    console.log(resp)
    return resp.data.msg
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
