import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

import BlogList from '../components/BlogList'
import { useSelector, useDispatch } from 'react-redux'

const HomeScreen = () => {
  
  return (
    <div>
     <BlogList></BlogList>
    </div>
  )
}

export default HomeScreen
