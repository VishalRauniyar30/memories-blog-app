import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:8000' });
const API = axios.create({ baseURL: 'https://memories-blog-lf4zrlpm7-vishalrauniyar30s-projects.vercel.app/' });


API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

const fetchPost = (id) => API.get(`/posts/${id}`);
const fetchPosts = (page) => API.get(`/posts?page=${page}`);
const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
const createPost = (newPost) => API.post('/posts', newPost);
const likePost = (id) => API.patch(`/posts/${id}/likePost`);
const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
const deletePost = (id) => API.delete(`/posts/${id}`);
const commentPost = (value, id) => API.post(`/posts/${id}/commentPost`, { value })


const signIn = (formData) => API.post('/user/signin', formData);
const signUp = (formData) => API.post('/user/signup', formData);


export {
  fetchPost,
  fetchPosts,
  fetchPostsByCreator,
  fetchPostsBySearch,
  createPost,
  likePost,
  updatePost,
  deletePost,
  commentPost,
  signIn,
  signUp
}