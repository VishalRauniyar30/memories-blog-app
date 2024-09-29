import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, PaginationItem } from '@mui/material'
import { Link } from 'react-router-dom'

import { getPosts } from '../actions/posts'
import PaginateStyles from './PaginateStyles'


function Paginate({ page }) {
    const { numberOfPages } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const classes = PaginateStyles();

    useEffect(() => {
        if (page) {
            dispatch(getPosts(page));
        }
    }, [dispatch, page]);
    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="standard"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    )
}

export default Paginate