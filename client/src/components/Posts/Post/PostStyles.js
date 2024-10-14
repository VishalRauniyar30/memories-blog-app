import { makeStyles } from "@mui/styles"

const PostStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25% !important',
        backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
        backgroundBlendMode: 'darken !important',
    },
    border: {
        border: 'solid !important',
    },
    fullHeightCard: {
        height: '100% !important',
    },
    card: {
        display: 'flex !important',
        flexDirection: 'column !important',
        justifyContent: 'space-between !important',
        borderRadius: '10px !important',
        height: '100% !important',
        position: 'relative !important',
        backgroundColor : '#f1f3e2 !important',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1) !important', // Subtle shadow by default
        '&:hover': {
            transform: 'translateY(-10px) !important', // Slightly reduce hover effect for smoothness
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2) !important', // Deeper shadow on hover
        },
    },
    overlay: {
        position: 'absolute !important',
        top: '20px !important',
        left: '20px !important',
        color: 'white !important',
    },
    overlay2: {
        position: 'absolute !important',
        top: '20px !important',
        right: '20px !important',
        color: 'white !important',
    },
    grid: {
        display: 'flex !important',
    },
    details: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        margin: '25px !important',
    },
    title: {
        padding: '0 16px !important',
    },
    cardActions: {
        padding: '0 16px 8px 16px !important',
        display: 'flex !important',
        justifyContent: 'space-between !important',
    },
    cardAction: {
        display: 'block !important',
        textAlign: 'initial !important',
    },
}));

export default PostStyles