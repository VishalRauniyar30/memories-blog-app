import React, { useEffect, useState } from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material'
import { useDispatch ,useSelector } from 'react-redux'
import FileBase from 'react-file-base64'
import { useNavigate } from 'react-router-dom'

import ChipInput from '../ChipInput.jsx'
import { createPost, updatePost } from '../../actions/posts.js'
import FormStyles from './FormStyles'

function Form({ currentId, setCurrentId }) {
    const [postData, setPostData] = useState({
        title : '',
        message : '',
        tags : [],
        selectedFile : ''
    });

    const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null))
    const dispatch = useDispatch();
    const classes = FormStyles();
    const user = JSON.parse(localStorage.getItem('profile'))
    const navigate = useNavigate()


    const clear = () => {
        setCurrentId(0)
        setPostData({ title : '', message : '', tags : [], selectedFile : ''})
    }

    useEffect(() => {
        if(!post?.title) clear();
        if(post) setPostData(post);
    } ,[post])

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === 0) {
            dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
            clear();

        } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        }
    };
    
    if(!user?.result?.name){
        return (
            <Paper className={classes.paper} elevation={6}>
                <Typography variant='h6' align='center'>
                    Please Sign In to Create Your Own Memories and Like Other's Memories
                </Typography>
            </Paper>
        );
    }

    const handleAddChip = (tag) => {
        setPostData({ ...postData, tags: [...postData.tags, tag] });
    };
    
    const handleDeleteChip = (chipToDelete) => {
        setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
    };

    return (
        <Paper className={classes.paper} elevation={6}>
            <form 
                autoComplete='off' 
                noValidate 
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant='h6'>
                    {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
                </Typography>
                <TextField 
                    name='title' 
                    variant='outlined' 
                    label='Title' 
                    fullWidth
                    color='secondary'
                    value={postData.title}
                    onChange={(e) => setPostData({
                        ...postData,
                        title : e.target.value
                    })}
                />
                <TextField 
                    name='message' 
                    variant='outlined' 
                    label='Message' 
                    color='secondary'
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) => setPostData({
                        ...postData,
                        message : e.target.value
                    })}
                />
                {/* <div style={{ padding: '5px 0', width: '95%', paddingRight: '15px' }}>
                    <ChipInput
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onAdd={(chip) => handleAddChip(chip)}
                        onDelete={(chip) => handleDeleteChip(chip)}
                    />
                </div> */}
                <TextField 
                    name='tags'
                    variant='outlined' 
                    label='Tags (comma separated)' 
                    fullWidth
                    color='secondary'
                    value={postData.tags}
                    onChange={(e) => setPostData({
                        ...postData,
                        tags : e.target.value.split(',') 
                    })}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type='file'
                        multiple={false}
                        color='secondary'
                        onDone={({ base64 }) => setPostData({
                            ...postData,
                            selectedFile : base64
                        })}
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit}
                    variant='contained'
                    color='primary'
                    size='large'
                    type='submit'
                    fullWidth
                >
                    Submit
                </Button>
                <Button 
                    className={classes.buttonSubmit2}
                    variant='contained'
                    color='secondary'
                    size='small'
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form