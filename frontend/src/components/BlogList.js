import React, { useEffect } from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {blogListAction} from '../reactRedux/actions/blogAction'



const BlogList = () => {

  const dispatch = useDispatch()

  const blogList = useSelector((state) => state.blogList)

  const {loading, blogs, error} = blogList
  console.log(blogs)
  
  

  useEffect(() => {
    dispatch(blogListAction())
  }, [dispatch])
    return (
        <div>
          {loading ? (
        <p style={{ marginTop: '400px', color: 'black' }}>Loading Blogs</p>
      ) : (
             <Row xs={1} sm={2} md={3} style={{ margin: '20px' }} className="g-4">
        {blogs.map((cards) => (
          <Col >
            <Card>
              
              <Card.Img
              style={{height:"40vh", width:"100%"}}
                variant="top"
                src={`${cards.file}`}
                bsPrefix="card-img-overlay"
              />
              <Card.Body>
                <Card.Title>{cards.blogTitle} <span><small className="text-muted customSmall" style={{fontSize:"12px"}}><span style={{color:"black"}}>@{cards.userName}</span></small></span></Card.Title>
                <Card.Footer>
                  <small className="text-muted customSmall"><span style={{color:"black"}}><i class="bi bi-person-square"></i> {cards.authorName}</span> <span>{cards.createdAt.slice(0,10)}</span></small>
                </Card.Footer>
                <br></br>
                <Card.Text>
                  {cards.aboutBlog.slice(0,140)}...
                </Card.Text>
                <LinkContainer  to={`/${cards._id}`}>
                <Button variant="primary">Read <i className="bi bi-book"></i></Button>
              </LinkContainer>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> )}
        </div>
    )
}

export default BlogList
