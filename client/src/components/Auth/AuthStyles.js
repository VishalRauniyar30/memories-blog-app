import { makeStyles } from "@mui/styles";

const AuthStyles = makeStyles((theme) => ({
    paper : {
        marginTop : theme.spacing(8),
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        // padding : theme.spacing(2),
        padding : "10px 30px",
        borderRadius : '10px !important',
        // padding : "40px"
    },
    root : {
        '& .MuiTextField-root' : {
            margin : theme.spacing(1)
        }
    },
    avatar : {
        margin : theme.spacing(1),
        backgroundColor : theme.palette.secondary.main
    },
    form : {
        width : '100%',
        marginTop : theme.spacing(3)
    },
    submit : {
        margin : theme.spacing(3, 0, 2),
        marginTop : '10px !important',
        marginBottom : '10px !important'
    },
    googleButton : {
        marginBottom : theme.spacing(2)
    }
}))

export default AuthStyles