import * as api from '../api/index.js'
import { AUTH } from '../constants/actionTypes'


const signin = (formData, navigate) => async(dispatch) => {
    try {

        const { data } = await api.signIn(formData);
        dispatch({ type : AUTH , data });
        navigate('/');

    } catch (error) {
        console.log(error);
    }
}
const signup = (formData, navigate) => async(dispatch) => {
    try {
        //sign up the user..
        const { data } = await api.signUp(formData);
        dispatch({ type : AUTH, data });
        navigate('/');
        
    } catch (error) {
        console.log(error);
    }
}


export {
    signin,
    signup
}
