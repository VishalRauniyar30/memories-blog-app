import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'


import Icon from './Icon'
import { signin, signup } from '../../actions/auth'
import { AUTH } from '../../constants/actionTypes'
import AuthStyles from './AuthStyles'
import Input from './Input'

const ClientID = '266228385722-oqrl7tg1oo9mhmpocjvagfmtvol941os.apps.googleusercontent.com'

const initialState = {
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    confirmPassword : '',
}

function Auth() {

    const [formData, setFormData] = useState(initialState)
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = AuthStyles()

    const handleShowPassword = () => setShowPassword(!showPassword)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(isSignUp){
            dispatch(signup(formData, navigate))

        } else{
            dispatch(signin(formData, navigate))
        }
    }
    const handleChange = (e) => setFormData({ ...formData, [e.target.name] : e.target.value });

    const switchMode = () => {
        setFormData(initialState)
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }

    const googleSuccess = async(res) => {
        const result = res?.profileobj
        const token = res?.tokenId

        try {
            dispatch({ type : AUTH, data : { result, token } })
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = () => console.log('Google Sign In was unsuccessful. Try again later');

    return (
        <GoogleOAuthProvider clientId={ClientID}>
            <Container component='main' maxWidth='xs'>
                <Paper className={classes.paper} elevation={6}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon color='action' />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignUp && (
                                <>
                                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input  name='lastName' label='Last Name' handleChange={handleChange} half />
                                    <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                                </>
                            )}
                            {!isSignUp && <Input name='email' label='Email Address' handleChange={handleChange} type='email' autoFocus />}
                            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            { isSignUp  && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                        </Grid>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin
                            render={(renderProps) => (
                                <Button 
                                    className={classes.googleButton} 
                                    color='primary' 
                                    fullWidth 
                                    onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled} 
                                    startIcon={<Icon />} 
                                    variant='contained' 
                                >
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'
                        /> 
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignUp ? 'Already have an Account? Sign In' : "Don't have an Account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </GoogleOAuthProvider>
    )
}

export default Auth