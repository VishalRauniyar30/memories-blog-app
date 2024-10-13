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

app.use(cors(
    {
        origin : ['https://memories-blog-of3362oz1-vishalrauniyar30s-projects.vercel.app'],
        methods : ["POST", "GET", "PATCH", "DELETE"],
        credentials : true
    }
))
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