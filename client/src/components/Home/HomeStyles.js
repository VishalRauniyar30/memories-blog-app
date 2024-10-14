import { makeStyles } from '@mui/styles';

const HomeStyles = makeStyles((theme) => ({
    appBarSearch: {
        borderRadius: `${4} !important`,
        marginBottom: '1rem !important',
        display: 'flex !important',
        padding: '16px !important',
    },
    pagination: {
        borderRadius: "10px !important",
        marginTop: '1rem !important',
        padding: '16px !important',
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]: {
        flexDirection: 'column-reverse !important',
        },
    },
    searchButton : {
        backgroundColor : 'springgreen !important',
    }
}));

export default HomeStyles