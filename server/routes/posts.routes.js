import { Router } from "express"
import { commentPost, createPost, deletePost, getPost, getPosts, getPostsByCreator, getPostsBySearch, likePost, updatePost } from "../controllers/posts.controllers.js"
import auth from "../middlewares/auth.middlewares.js"

const postRoutes = Router()


postRoutes.get('/creator', getPostsByCreator)
postRoutes.get('/search', getPostsBySearch)
postRoutes.get('/', getPosts)
postRoutes.get('/:id', getPost)

postRoutes.post('/', auth, createPost)
postRoutes.patch('/:id', auth, updatePost)
postRoutes.delete("/:id", auth, deletePost)
postRoutes.patch('/:id/likePost', auth, likePost)
postRoutes.post('/:id/commentPost', auth, commentPost)


export default postRoutes
