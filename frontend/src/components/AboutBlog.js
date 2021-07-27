import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { readblogsActions } from '../reactRedux/actions/blogAction'

const AboutBlog = ({ match, blogId }) => {
  const dispatch = useDispatch()

  const readBlogs = useSelector((state) => state.readBlogs)
  const { blogs, loading } = readBlogs
  

  useEffect(() => {
    dispatch(readblogsActions(blogId))
  }, [match])
  return (
    <div className="AboutBlog" style={{ marginLeft: '20px',marginRight: '20px',marginTop: '50px' , marginBottom:"100px"}}>
      {loading ? (
        <p style={{ marginTop: '400px', color: 'black' }}>Loading</p>
      ) : (
        <Card  >
        
          <Card.Img variant="top"  src={`${blogs.file}`} style={{height:"50vh", width:"100%"}}/>
          <Card.Body>
            <Card.Title>{blogs.blogTitle}<span><small className="text-muted customSmall" style={{fontSize:"12px"}}><span style={{color:"black"}}>@{blogs.userName}</span></small></span></Card.Title>
            <Card.Footer>
              <small className="text-muted customSmall">
              <span style={{color:"black"}}><i class="bi bi-person-square"></i> {blogs.authorName}</span> <span>{blogs.createdAt.slice(0,10)}</span>
              </small>
            </Card.Footer>
            <br></br>
            <Card.Text>
              {blogs.aboutBlog}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default AboutBlog
