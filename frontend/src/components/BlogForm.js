import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { blogPostAction } from '../reactRedux/actions/blogAction'

const BlogForm = ({ history }) => {
  const [blogTitle, setblogTitle] = useState('')
  const [userName, setuserName] = useState('')
  const [authorName, setauthorName] = useState('')
  const [aboutBlog, setaboutBlog] = useState('')
  const [file, setFile] = useState('')

  //Form error
  const [blogTitleErr, setblogTitleErr] = useState({})
  const [userNameErr, setuserNameErr] = useState({})
  const [authorNameErr, setauthorNameErr] = useState({})
  const [aboutBlogErr, setaboutBlogErr] = useState({})
  const [fileErr, setFileErr] = useState({})

  //Form Validation
  const formValidation = () =>{
    const blogTitleErr ={}
    const userNameErr = {}
    const authorNameErr = {}
    const aboutBlogErr = {}
    const fileErr = {}
    let isValid = true
    
    if(!blogTitle){
        blogTitleErr.required = "Title required"
        isValid = false 
    }

    if(!userName){
        userNameErr.required = "Username required"
       isValid = false 
    }

    if(!authorName){
        authorNameErr.required = "Author required"
        isValid = false
    }
    if(!aboutBlog){
      aboutBlogErr.required = "About Blog required"
      isValid = false
  }
  if(!file){
    fileErr.required = "File required"
    isValid = false
}
    setblogTitleErr(blogTitleErr)
    setuserNameErr(userNameErr)
    setauthorNameErr(authorNameErr)
    setaboutBlogErr(aboutBlogErr)
    setFileErr(fileErr)

    return isValid
}

  const dispatch = useDispatch()

  const blogPost = useSelector((state) => state.blogPost)
  const { loading, error, success } = blogPost

  const formHandler = (e) => {
    e.preventDefault()

    const isValid = formValidation()

    if(isValid){
    const formData = new FormData()
    formData.append('blogTitle', blogTitle)
    formData.append('userName', userName)
    formData.append('authorName', authorName)
    formData.append('aboutBlog', aboutBlog)
    formData.append('file', file)

    dispatch(blogPostAction(formData))
    // if (!error) {
    //   history.push('/')
    // }
  }
  }

  useEffect(()=>{

    if(success){
      history.push('/')
      dispatch({ type: "CLEAR_SUCCESS_STATUS", payload: false})
    }
  },[success])
  
      


  return (
    <div>
      <Form onSubmit={formHandler}>
        <Row xs={1} sm={2}  className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write your title"
              value={blogTitle}
              onChange={(e) => setblogTitle(e.target.value)}
            />
            {Object.keys(blogTitleErr).map((key)=>{
                 return <p style={{color:"red", fontSize:"12px"}}>{blogTitleErr[key]}</p>
             })}
         
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John"
              value={authorName}
              onChange={(e) => setauthorName(e.target.value)}
            />
   {Object.keys(authorNameErr).map((key)=>{
                 return <p style={{color:"red", fontSize:"12px"}}>{authorNameErr[key]}</p>
             })}
          </Form.Group>
          
          
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label className="mt-1">
              Username{' '}
              <span className="customSpan">
                @username should be same for your Blogs.
              </span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="@johnhey"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
            {Object.keys(userNameErr).map((key)=>{
                 return <p style={{color:"red", fontSize:"12px"}}>{userNameErr[key]}</p>
             })}
          </Form.Group>

          <Form.Group
            style={{ marginTop: '20px' }}
            controlId="formFileSm"
            className="mb-3"
          >
            <Form.Control
              type="file"
              size="sm"
              files={file}
              onChange={(e) => {
                setFile(e.target.files[0])
              }}
            />
       {Object.keys(fileErr).map((key)=>{
                 return <p style={{color:"red", fontSize:"12px"}}>{fileErr[key]}</p>
             })}
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>About Blog</Form.Label>
          <Form.Control
            as="textarea"
            rows={12}
            value={aboutBlog}
            onChange={(e) => setaboutBlog(e.target.value)}
          />
         {Object.keys(aboutBlogErr).map((key)=>{
                 return <p style={{color:"red", fontSize:"12px"}}>{aboutBlogErr[key]}</p>
             })}
        </Form.Group>
        <Button className="w-25 h-25" type="submit" variant="primary">
          Post <i class="bi bi-cursor-fill"></i>
        </Button>
      </Form>
    </div>
  )
}

export default BlogForm
