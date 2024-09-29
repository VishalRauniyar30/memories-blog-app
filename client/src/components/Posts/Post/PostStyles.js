import { makeStyles } from "@mui/styles"

const PostStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '10px !important',
        height: '100%',
        position: 'relative',
        backgroundColor : '#f1f3e2 !important',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow by default
        '&:hover': {
            transform: 'translateY(-10px)', // Slightly reduce hover effect for smoothness
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)', // Deeper shadow on hover
        },
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '25px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    },
}));

export default PostStyles