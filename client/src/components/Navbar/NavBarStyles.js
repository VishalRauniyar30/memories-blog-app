import { makeStyles } from "@mui/styles"
import { deepPurple } from "@mui/material/colors"


const NavbarStyles = makeStyles((theme) => ({
    appBar : {
        borderRadius : 15,
        margin : '30px 0 !important',
        display : 'flex !important',
        flexDirection : 'row !important',
        justifyContent : 'space-between',
        alignItems : 'center !important',
        padding : '10px 50px !important',
        backgroundColor : "#e4821a !important" ,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column !important',
        },
    },
    heading : {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        fontSize: '2em',
        fontWeight: 300,
    },
    image : {
        marginLeft : '40px !important',
        marginTop: '5px !important',
    },
    toolbar : {
        display : 'flex !important',
        justifyContent : 'flex-end !important',
        width : '400px !important',
        [theme.breakpoints.down('sm')]: {
            width: 'auto !important',
        },
    },
    profile : {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        width: '400px !important',
        alignItems: 'center !important',
        [theme.breakpoints.down('sm')]: {
            width: 'auto !important',
            marginTop: 20,
            justifyContent: 'center !important',
        },
    },
    userName : {
        display : 'flex !important',
        alignItems : 'center !important',
        textAlign : 'center !important'
        // backgroundColor:'blue !important'
    },
    brandContainer : {
        display : 'flex !important',
        alignItems : 'center !important'
    },
    purple : {
        color : theme.palette.getContrastText(deepPurple[500]),
        // backgroundColor : deepPurple[500],
        backgroundColor: '#83e762 !important'
    },
    logout : {
        backgroundColor : 'red !important',
        borderRadius : '10px !important',
        // color : 'wheat !important'
    }
}))


export default NavbarStyles