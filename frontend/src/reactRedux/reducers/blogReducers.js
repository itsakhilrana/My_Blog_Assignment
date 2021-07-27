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



const blogList = {
  loading: false,
  blogs: [],
  error: '',
}

export const blogListReducer = (state = blogList, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true, ...state }
    case BLOG_LIST_SUCCESS:
      return { loading: false, blogs: action.payload }
    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

const blogPost = {
  loading: false,
  blog: {},
  success: false,
  error: '',
}

export const blogPostReducer = (state = blogPost, action) => {
  switch (action.type) {
    case BLOG_POST_REQUEST:
      return { loading: true, ...state }
    case BLOG_POST_SUCCESS:
      return { loading: false, blog: action.payload, success:action.status }
    case BLOG_POST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

const myBlogs = {
  loading: true,
  blog: {},
  error: '',
}

export const myBlogReducer = (state = myBlogs, action) => {
  switch (action.type) {
    case MY_BLOG_REQUEST:
      return { loading: true, ...state }
    case MY_BLOG_SUCCESS:
      return { loading: false, blog: action.payload }
    case MY_BLOG_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

const readBlogs = {
  loading: true,
  blogs: {},
  error: '',
}

export const readBlogsReducer = (state = readBlogs, action) => {
  switch (action.type) {
    case BLOG_READ_REQUEST:
      return { loading: true, ...state }
    case BLOG_READ_SUCCESS:
      return { loading: false, blogs: action.payload }
    case BLOG_READ_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
