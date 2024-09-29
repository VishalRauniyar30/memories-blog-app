import React from 'react'
import { Container, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import PostDetails from './components/PostDetails/PostDetails'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import theme from './theme'
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag'

function App() {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Container maxWidth='xl'>
                    <Navbar />
                    <Routes>
                    <Route path="/" element={<Navigate to="/posts" />} />
                        <Route path="/posts" element={<Home />} />
                        <Route path="/posts/search" element={<Home />} />
                        <Route path="/posts/:id" element={<PostDetails />} />
                        <Route path="/creators/:name" element={<CreatorOrTag />} />
                        <Route path="/tags/:name" element={<CreatorOrTag />} />
                        <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/posts" />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App