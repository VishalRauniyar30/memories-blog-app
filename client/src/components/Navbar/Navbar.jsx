import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { jwtDecode } from 'jwt-decode';

import memoriesLogo from '../../images/memoriesLogo.png'
import memoriesText from '../../images/memoriesText.png'
import * as actionType from '../../constants/actionTypes'
import NavbarStyles from './NavBarStyles';

function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    
    const classes = NavbarStyles()

    const logout = () => {
        dispatch({ type : actionType.LOGOUT })

        navigate("/auth")
        
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token
        if(token){
            const decodedToken = jwtDecode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                logout()
            }
        }
        
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <AppBar className={classes.appBar} position='static' color='inherit' >
            <Link to='/' className={classes.brandContainer}>
                <img src={memoriesText} alt="icon" height="45px" />
                <img className={classes.image} src={memoriesLogo} alt="icon" height='40px' />
            </Link>
            <Toolbar className={classes.toolbar} >
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
                            {user?.result.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <Typography className={classes.userName} variant='h6'>
                            {user?.result.name}
                        </Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar