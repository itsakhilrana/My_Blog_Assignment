import {
    BLOG_LIST_FAIL,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_REQUEST,
    BLOG_POST_FAIL,
    BLOG_POST_REQUEST,
    BLOG_POST_SUCCESS,
    MY_BLOG_FAIL,
    MY_BLOG_REQUEST,
    MY_BLOG_SUCCESS,
    BLOG_READ_FAIL,BLOG_READ_REQUEST,BLOG_READ_SUCCESS
  } from '../constants/blogConstants'

  import axios from "axios"

  export const blogPostAction = (blogDetails) => async (dispatch, getState) => {
    dispatch({ type: BLOG_POST_REQUEST })
  
    fetch('/api/blogpost', {
      // here we used fetch instead of axios to try fetch method also
      method: 'Post',
      body: blogDetails,
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
  
       
          dispatch({ type: BLOG_POST_SUCCESS, payload: data, status: true })
          localStorage.setItem('blogPost', JSON.stringify(getState().blogPost.blog))
     
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: BLOG_POST_FAIL, payload: error.message })
      })
  }


  export const blogListAction = () => async (dispatch) => {
    try {
      dispatch({ type: BLOG_LIST_REQUEST })
      const {data} = await axios.get('/api/allposts')
      const blogs = data
      dispatch({ type: BLOG_LIST_SUCCESS, payload: blogs })
    } catch (error) {
      dispatch({ type: BLOG_LIST_FAIL, payload: error.message })
    }
  }

  export const myblogsActions = (userName) => async (dispatch, getState) => {
    try {
    dispatch({ type: MY_BLOG_REQUEST })
  
    const { data } = await axios.get(`/api/myposts/${userName}`)
    const blogs = data
    console.log(blogs)
      dispatch({ type: MY_BLOG_SUCCESS, payload: blogs })
    }
    catch (error) {
      dispatch({ type: MY_BLOG_FAIL, payload: error.message })
    }

  }


  export const readblogsActions = (blogId) => async (dispatch, getState) => {
    try {
    dispatch({ type: BLOG_READ_REQUEST })
    const { data } = await axios.get(`/api/read/${blogId}`)
   
    const blogs = data
      dispatch({ type: BLOG_READ_SUCCESS, payload: blogs })
    }
    catch (error) {
      dispatch({ type: BLOG_READ_FAIL, payload: error.message })
    }

  }