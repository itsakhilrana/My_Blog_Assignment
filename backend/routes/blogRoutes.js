import express from 'express'
import multer from 'multer'
import path from 'path'
const router = express.Router()

import Blog from '../models/blogsModel.js'

//------Multer Part ----------

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  },
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|PNG)$/)) {
      // not a jpg and png file then throw error
      return cb({ error: 'Please provide jgp file' })
    }
    // if(file.mimetype !== 'image/jpeg' || file.mimetype !== 'image/png'){ // not a jpg and png file then throw error
    //     return cb({error:"Please provide jgp file"})
    //  }
    cb(undefined, true)
  },
})

// @desc    Blog Post
// @route   POST /api/postblog
// @access  Public
router.post('/api/blogpost', upload.single('file'), async (req, res) => {
  console.log(req.body)
  const {
    body: { blogTitle, authorName, userName, aboutBlog },
    file,
  } = req
  if (!blogTitle || !authorName || !authorName || !aboutBlog || !file) {
    return res.json({ message: 'Please fill all the fields.' })
  }
  try {
    const blog = await Blog.create({
      blogTitle,
      authorName,
      userName,
      aboutBlog,
      file: req.file.path,
    })

    await blog.save()

    return res.json({
      _id: blog._id,
      blogTitle: blog.blogTitle,
      authorName: blog.authorName,
      userName: blog.userName,
      aboutBlog: blog.aboutBlog,
      file: blog.file,
      createdAt: blog.createdAt,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Server Error' })
  }
})

// @desc    Get all blog posts
// @route   GET /api/postblog
// @access  Public
router.get('/api/allposts', async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).limit(15)

    return res.json(blogs)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Server Error' })
  }
})

// @desc    get my blog posts
// @route   POST /api/myposts
// @access  Public
router.post('/api/myposts/', async (req, res) => {
  const { userName } = req.body
  console.log(userName)

  try {
    const blogs = await Blog.find({ userName })

    if (blogs.length === 0) {
      return res.json({ message: 'No Blogs' })
    } else {
      return res.json(blogs)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Server Error' })
  }
})

// @desc    Read the Blog
// @route   GET /api/read/:id
// @access  Public
router.get('/api/read/:id', async (req, res) => {
  const blogId = req.params.id

  try {
    const blogs = await Blog.findById(blogId).sort({ createdAt: -1 }).limit(15)

    return res.json(blogs)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Server Error' })
  }
})

export default router
