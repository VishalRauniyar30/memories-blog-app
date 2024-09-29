import { makeStyles } from '@mui/styles';

const HomeStyles = makeStyles((theme) => ({
    appBarSearch: {
        borderRadius: 4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
    },
    pagination: {
        borderRadius: "10px !important",
        marginTop: '1rem',
        padding: '16px',
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
        flexDirection: 'column-reverse',
        },
    },
    searchButton : {
        backgroundColor : 'springgreen !important',
    }
}));

export default HomeStyles