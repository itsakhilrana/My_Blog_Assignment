import express from 'express'
import morgan from 'morgan'
import path from 'path'
const app = express()

app.use(morgan('dev'))
const PORT = process.env.PORT || 6000

app.use(express.json())
app.use('/uploads',express.static('uploads'))
console.log('Started')

// All Credential Things in .env
import dotenv from 'dotenv'
dotenv.config()

// DataBase Conection
import connectDB from './dbConfig/MongoDb.js'
connectDB()

//All Routes Configration
import blogRoutes from './routes/blogRoutes.js'
app.use(blogRoutes)




const __dirname = path.resolve() 

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  // Server Testing
  app.use('/test', (req, res) => {
    res.send('Server Tested')
  })
}
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
  )