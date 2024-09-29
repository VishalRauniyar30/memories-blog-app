import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '600px',
        backgroundColor : 'wheat !important',
    },
    card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
    },
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
    },
    imageSection: {
        marginLeft: '20px',
        width : '50%',
        height : 'auto',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    recommendedPosts: {
        margin: '30px 0',
        display: 'flex',
        flexDirection : 'row',
        // justifyContent: 'space-between',
        alignItems : 'center',
        gap : '20px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    recommendedPost: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor : '#f1f3e2 !important',
        padding: '10px',
        width: 'calc(33.33% - 20px) !important', // This allows for 3 posts per row
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        },
    },
    recommendedPostImage: {
        width: '100%',
        height: 'auto',
        maxHeight : '200px',
        borderRadius: '10px',
        marginTop: '10px',
    },
    loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
        backgroundColor : 'wheat !important',
    },
    postTitle: {
        fontWeight: 'bold !important',
        fontSize: '1.5em !important',
        marginBottom: '5px',
        fontWeight : 700
    },
    postCreator: {
        color: '#555 !important',
        margin: '5px 0',
        fontStyle: 'italic',
        color : 'goldenrod'
    },
    postMessage: {
        color: '#333',
        marginBottom: '5px',
    },
    postTags: {
        color: '#007BFF !important', // Example for link color
        marginBottom: '5px',
    },
    postLikes: {
        color: '#ff4081', // Example for like section color
        fontWeight: 'bold !important',
    },
    commentsOuterContainer : {
        display : 'flex',
        justifyContent : 'space-between'
    },
    commentsInnerContainer : {
        height : '200px',
        overflowY : 'auto',
        marginRight : '30px'
    }
}));
