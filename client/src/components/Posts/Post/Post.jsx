import React, { useState } from 'react'
import { ButtonBase, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

import PostStyles from './PostStyles'
import { deletePost, likePost } from '../../../actions/posts'

function Post({ post, setCurrentId }) {
    const user = JSON.parse(localStorage.getItem('profile'))

    const classes = PostStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [likes , setLikes] = useState(post?.likes)

    const userId = user?.result?.googleId || user?.result?._id
    const hasLikedPost = post?.likes?.find((like) => like === userId)


    const handleLike = async () => {
        dispatch(likePost(post._id))
        if(hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId))
        } else {
            setLikes([ ...post.likes, userId ])
        }
    }

    const Likes = () => {
        if (likes?.length > 0) {
            return likes.find((like) => like === userId)
            ? (
                <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
            ) : (
                <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    }
    
    const openPost = (e) => {
        // dispatch(getPost(post._id, history));
        navigate(`/posts/${post._id}`);
    };

    return (
        <Card className={classes.card} raised elevation={12}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={openPost}
                style={{ display: 'block', textAlign: 'initial' }}
            >
                <CardMedia 
                    className={classes.media} 
                    image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}  
                    title={post.title}
                />
                <div className={classes.overlay}>
                    <Typography variant='h6'>
                        {post.name}
                    </Typography>
                    <Typography variant='body2'>
                        {moment(post.createdAt).fromNow()}
                    </Typography>
                </div>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (        
                    <div className={classes.overlay2} name='edit'>
                        <Button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentId(post._id);
                            }}
                            className={classes.postButton}
                            style={{ color: 'white' }}
                            size="small"
                        > 
                            <MoreHorizIcon fontSize='default' />
                        </Button>
                    </div>
                )}
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component='h2'>
                        {post.tags.map((tag) =>`#${tag} `)}
                    </Typography>
                </div>
                <Typography className={classes.title} variant='h5' gutterBottom component='h2'>
                    {post.title}
                </Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {/* {post.message} */}
                        {post.message.split(' ').splice(0, 50).join(' ')}...
                    </Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size='small' style={{ color : 'green' }} disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size='small' style={{ color : 'red' }} onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize='small' />
                        &nbsp;Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post