import React, { useRef, useState } from 'react'
import useStyles from './styles'
import { Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';

function CommentSection({ post }) {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()

    const dispatch = useDispatch()

    const [comments, setComments] = useState(post?.comments)
    const [comment, setComment] = useState('')

    const commentsRef = useRef()

    const handleComment = async () => {
        const finalComment = `${user.result.name}: ${comment}`

        const newComments = await dispatch(commentPost(finalComment, post._id))
        setComment('')
        setComments(newComments)
        
        commentsRef.current.scrollIntoView({ behaviour : 'smooth' })
    }


    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant='h6'>
                        Comments
                    </Typography>
                    {comments?.map((comment, index) => (
                        <Typography key={index} gutterBottom variant='subtitle1'>
                            <strong>{comment.split(': ')[0]}</strong>
                            {comment.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                    <div style={{ width : '70%' }}>
                        <Typography gutterBottom variant='h6'>
                            Write a Comment
                        </Typography>
                        <TextField 
                            fullWidth
                            rows={4}
                            color='secondary'
                            variant='outlined'
                            label='Comment'
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <br />
                        <Button style={{ marginTop : '10px', backgroundColor : 'darkgreen', color : 'white'}} fullWidth disabled={!comment} variant='contained' onClick={handleComment}>
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CommentSection