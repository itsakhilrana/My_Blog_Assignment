import React, { useEffect } from 'react'
import { Row, Col, Card, Button, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { myblogsActions } from '../reactRedux/actions/blogAction'

const MyBlogs = () => {
  const dispatch = useDispatch()

  const blogPost = useSelector((state) => state.blogPost)
  const { success } = blogPost

  const myBlog = useSelector((state) => state.myBlog)
  const { loading, blog, error, message } = myBlog
  console.log(blog)

  useEffect(() => {
    dispatch(myblogsActions(blogPost.userName))
  }, [dispatch])
 
  return (
    <div className="Myblogs">
      {loading ? (
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px',
            color: 'black',
            fontSize: '20px',
            fontWeight: '500',
          }}
        >
          Loading your Blogs.
        </p>
      ) : blog.message ? (
        <>
          <LinkContainer className="m-5" to={`/writeblogs`}style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '50px',
                color: 'black',
                fontSize: '20px',
                fontWeight: '500',
              }}>
            <p
              
            >
              <Button variant="dark">
                Sorry, please write some blogs! Refresh if you already wrote! <i className="bi bi-book"></i>
              </Button>
            </p>
          </LinkContainer>
        </>
      ) : (
        <Row xs={1} sm={2} md={3} style={{ margin: '20px' }} className="g-4">
          {blog.map((cards) => (
            <Col key={cards.createdAt}>
              <Card className="customCard">
                <Card.Img
                  style={{ height: '40vh', width: '100%' }}
                  variant="top"
                  src={`${cards.file}`}
                  bsPrefix="card-img-overlay"
                />
                <Card.Body>
                  <Card.Title>
                    {cards.blogTitle}
                    <span>
                      <small
                        className="text-muted customSmall"
                        style={{ fontSize: '12px' }}
                      >
                        <span style={{ color: 'black' }}>
                          @{cards.userName}
                        </span>
                      </small>
                    </span>
                  </Card.Title>
                  <Card.Footer>
                    <small className="text-muted customSmall">
                      <span style={{ color: 'black' }}>
                        <i class="bi bi-person-square"></i> {cards.authorName}
                      </span>
                      <span>{cards.createdAt.slice(0, 10)}</span>
                    </small>
                  </Card.Footer>
                  <br></br>
                  <Card.Text>{cards.aboutBlog.slice(0, 140)}...</Card.Text>
                  <LinkContainer to={`/${cards._id}`}>
                    <Button variant="primary">
                      Read <i className="bi bi-book"></i>
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default MyBlogs
