import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px !important',
        objectFit: 'cover !important',
        width: '100% !important',
        maxHeight: '600px !important',
        backgroundColor : 'wheat !important',
    },
    card: {
        display: 'flex !important',
        width: '100% !important',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap !important',
            flexDirection: 'column !important',
        },
    },
    section: {
        borderRadius: '20px !important',
        margin: '10px !important',
        flex: `${1} !important`,
    },
    imageSection: {
        marginLeft: '20px !important',
        width : '50% !important',
        height : 'auto !important',
        [theme.breakpoints.down('sm')]: {
            marginLeft: `${0} !important`,
        },
    },
    recommendedPosts: {
        margin: '30px 0 !important',
        display: 'flex !important',
        flexDirection : 'row',
        // justifyContent: 'space-between',
        alignItems : 'center !important',
        gap : '20px !important',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column !important',
        },
    },
    recommendedPost: {
        border: '1px solid #ddd !important',
        borderRadius: '8px !important',
        backgroundColor : '#f1f3e2 !important',
        padding: '10px !important',
        width: 'calc(33.33% - 20px) !important', // This allows for 3 posts per row
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1) !important',
        transition: 'transform 0.3s, box-shadow 0.3s !important',
        '&:hover': {
            transform: 'translateY(-5px) !important',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15) !important',
        },
    },
    recommendedPostImage: {
        width: '100% !important',
        height: 'auto !important',
        maxHeight : '200px !important',
        borderRadius: '10px !important',
        marginTop: '10px !important',
    },
    loadingPaper: {
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        padding: '20px !important',
        borderRadius: '15px !important',
        height: '39vh !important',
        backgroundColor : 'wheat !important',
    },
    postTitle: {
        fontWeight: 'bold !important',
        fontSize: '1.5em !important',
        marginBottom: '5px !important',
        fontWeight : `${700} !important`
    },
    postCreator: {
        color: '#555 !important',
        margin: '5px 0 !important',
        fontStyle: 'italic !important',
        color : 'goldenrod !important'
    },
    postMessage: {
        color: '#333 !important',
        marginBottom: '5px !important',
    },
    postTags: {
        color: '#007BFF !important', // Example for link color
        marginBottom: '5px !important',
    },
    postLikes: {
        color: '#ff4081 !important', // Example for like section color
        fontWeight: 'bold !important',
    },
    commentsOuterContainer : {
        display : 'flex !important',
        justifyContent : 'space-between !important'
    },
    commentsInnerContainer : {
        height : '200px !important',
        overflowY : 'auto !important',
        marginRight : '30px !important'
    }
}));
