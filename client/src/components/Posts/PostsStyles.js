import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

const PostsStyles = makeStyles((theme) => ({
    mainContainer: {
        borderRadius: `${15} !important`,
        margin: '30px 0 !important',
        display: 'flex !important',
        flexDirection: 'row !important',
        // justifyContent: 'space-between',
        alignItems: 'center !important',
        padding: '10px 33px !important',
    },
    heading: {
        color: 'rgba(0,183,255, 1) !important',
        textDecoration: 'none !important',
    },
    image: {
        marginLeft: '15px !important',
    },
    toolbar: {
        display: 'flex !important',
        justifyContent: 'flex-end !important',
        width: '400px !important',
    },
    profile: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        width: '400px !important',
    },
    userName: {
        display: 'flex !important',
        alignItems: 'center !important',
    },
    brandContainer: {
        display: 'flex !important',
        alignItems: 'center !important',
    },
    smMargin: {
        margin: `${theme.spacing(1)} !important`,
    },
    purple: {
        color: `${theme.palette.getContrastText(deepPurple[500])} !important`,
        backgroundColor: `${deepPurple[500]} !important`,
    },
    [theme.breakpoints.down('sm')]: {
        appBar: {
        padding: '10px 20px !important',
        },
        heading: {
        display: 'none !important',
        },
        userName: {
        display: 'none !important',
        },
        image: {
        marginLeft: '5px !important',
        },
        toolbar: {
        display: 'flex !important',
        justifyContent: 'flex-end !important',
        width: '160px !important',
        },
    },

    actionDiv: {
        textAlign: 'center !important',
    },
}));


export default PostsStyles