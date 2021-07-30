import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  blogListReducer,
  blogPostReducer,
  myBlogReducer,
  readBlogsReducer,
} from './reactRedux/reducers/blogReducers'

const reducer = combineReducers({
  blogList: blogListReducer,
  blogPost: blogPostReducer,
  myBlog: myBlogReducer,
  readBlogs: readBlogsReducer,
})

const blogPostInfoFromStorage = localStorage.getItem('blogPost')
  ? JSON.parse(localStorage.getItem('blogPost'))
  : {}
const initialState = {
  blogPost: {
    loading: false,
    success: false,
    error: '',
    blog: blogPostInfoFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// to available for all components we use provider from react-redux

export default store
