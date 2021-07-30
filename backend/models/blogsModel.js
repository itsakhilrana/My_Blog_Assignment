import mongoose from 'mongoose'

const blogSchema = mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
    },
    blogTitle: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    aboutBlog: {
      type: String,
      required: true,
    },
    uploadStatus:{
      type:Boolean,
      required:true,
      default:false
    },
    file:{
      type:String,
      required:true  
  },
  },
  {
    timestamps: true,
  }
)

const Blog = mongoose.model('Blog', blogSchema)

export default Blog
