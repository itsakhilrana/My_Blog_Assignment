import React from 'react'
import { Card } from 'react-bootstrap'
import AboutBlog from '../components/AboutBlog'
import MyBlogs from '../components/MyBlogs'

const MyblogScreen = () => {
  return (
    <div className="MyblogScreen" style={{margin: "0px"}}>
     {/* <AboutBlog></AboutBlog> */}
     <MyBlogs></MyBlogs>
    </div>
  )
}

export default MyblogScreen
