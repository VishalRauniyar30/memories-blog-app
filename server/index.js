import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.routes.js'
import userRoutes from './routes/users.routes.js'

const app = express()

dotenv.config();

app.use(bodyParser.json({
    limit : "30mb",
    extended : true
}))

app.use(bodyParser.urlencoded({
    limit : "30mb",
    extended : true
}))
const corsOptions = {
    origin: ['https://memories-blog-app-client.vercel.app'], // Include the frontend URL here
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],  // Add the methods you're using
    credentials: true,  // Allow credentials (if required)
}

app.use(cors(corsOptions)) // Use CORS with the specified options
app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('APP IS RUNNING')
})

const connectionUrl = process.env.CONNECTION_URL;
const port = process.env.PORT || 8000


mongoose.connect(connectionUrl)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log(`Server running on Port: ${port}`))
})
.catch((error) => console.log(error.message))