import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { CircularProgress, Divider, Grid, Typography } from '@mui/material';

import { getPostsByCreator, getPostsBySearch } from '../../actions/posts';
import Post from '../Posts/Post/Post';
import CreatorOrTagStyles from './CreatorOrTagStyles';

function CreatorOrTag() {

    const { name } = useParams();
    const dispatch = useDispatch();
    const { posts, isLoading } = useSelector((state) => state.posts);

    const classes = CreatorOrTagStyles()
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.startsWith('/tags')) {
            dispatch(getPostsBySearch({ tags : name }));
        } else {
            dispatch(getPostsByCreator(name));
        }
    }, [])

    if(!posts.length && !isLoading) {
        return <Typography className={classes.noPosts}>No Posts</Typography>
    }

    return (
        <div className={classes.container}>
            <Typography variant='h2' className={classes.title}>
                {name}
            </Typography>
            <Divider className={classes.divider} />
            {isLoading ? <CircularProgress className={classes.circularProgress} /> : (
                <Grid container className={classes.gridContainer} alignItems='stretch' spacing={3}>
                    {posts?.map((post) => (
                        <Grid key={post._id} item xs={12} md={6} lg={4} >
                            <Post post={post} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    )
}

export default CreatorOrTag