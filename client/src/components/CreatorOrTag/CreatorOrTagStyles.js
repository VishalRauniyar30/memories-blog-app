import { makeStyles } from "@mui/styles";


const CreatorOrTagStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    title: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        textAlign: 'center',
        color : 'gray',
        // backgroundColor : 'aqua',
        // border : '2px solid black',
        // borderRadius : '20px'
    },
    divider: {
        margin : '20px 0 50px 0',
    },
    noPosts: {
        textAlign: 'center',
        fontSize: '1.5rem',
        color: theme.palette.text.secondary,
    },
    gridContainer: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    circularProgress: {
        display: 'block',
        margin: 'auto',
    },
}))

export default CreatorOrTagStyles