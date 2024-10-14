import { makeStyles } from "@mui/styles";


const CreatorOrTagStyles = makeStyles((theme) => ({
    container: {
        padding: `${theme.spacing(4)} !important`,
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(2)} !important`,
        },
    },
    title: {
        marginBottom: `${theme.spacing(2)} !important`,
        fontWeight: 'bold !important',
        textAlign: 'center !important',
        color : 'gray !important',
        // backgroundColor : 'aqua',
        // border : '2px solid black',
        // borderRadius : '20px'
    },
    divider: {
        margin : '20px 0 50px 0 !important',
    },
    noPosts: {
        textAlign: 'center !important',
        fontSize: '1.5rem !important',
        color: `${theme.palette.text.secondary} !important`,
    },
    gridContainer: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center !important',
        },
    },
    circularProgress: {
        display: 'block !important',
        margin: 'auto !important',
    },
}))

export default CreatorOrTagStyles