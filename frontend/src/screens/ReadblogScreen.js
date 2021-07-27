import React from 'react'
import AboutBlog from '../components/AboutBlog'

const ReadblogScreen = ({match}) => {

    const blogId = match.params.id
    return (
        <div>
            <AboutBlog blogId= {blogId}></AboutBlog>
        </div>
    )
}

export default ReadblogScreen
