import { makeStyles } from "@mui/styles"
import { deepPurple } from "@mui/material/colors"


const NavbarStyles = makeStyles((theme) => ({
    appBar : {
        borderRadius : 15,
        margin : '30px 0',
        display : 'flex !important',
        flexDirection : 'row !important',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : '10px 50px',
        backgroundColor : "#e4821a !important" ,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    heading : {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '2em',
        fontWeight: 300,
    },
    image : {
        marginLeft : '40px',
        marginTop: '5px',
    },
    toolbar : {
        display : 'flex',
        justifyContent : 'flex-end',
        width : '400px',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    profile : {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            marginTop: 20,
            justifyContent: 'center',
        },
    },
    userName : {
        display : 'flex',
        alignItems : 'center',
        textAlign : 'center'
        // backgroundColor:'blue !important'
    },
    brandContainer : {
        display : 'flex',
        alignItems : 'center'
    },
    purple : {
        color : theme.palette.getContrastText(deepPurple[500]),
        // backgroundColor : deepPurple[500],
        backgroundColor: '#83e762 !important'
    },
    logout : {
        backgroundColor : 'red !important',
        borderRadius : '10px',
        // color : 'wheat !important'
    }
}))


export default NavbarStyles