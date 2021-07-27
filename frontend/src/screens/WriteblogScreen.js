import React from 'react'
import BlogForm from '../components/BlogForm'
const WriteblogScreen = ({ history }) => {
  return (
    <div className="WriteblogScreen" style={{ margin: '50px' }}>
      <BlogForm history={history}></BlogForm>
    </div>
  )
}

export default WriteblogScreen
