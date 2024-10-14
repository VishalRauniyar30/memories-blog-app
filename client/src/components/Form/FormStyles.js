
import { makeStyles } from '@mui/styles';

const FormStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: `${theme.spacing(1)} !important`,
        },
    },
    paper: {
        padding: `${theme.spacing(2)} !important`,
        borderRadius : '10px !important',
        // backgroundColor : 'wheat !important'
    },
    form: {
        display: 'flex !important',
        flexWrap: 'wrap !important',
        justifyContent: 'center !important',
    },
    fileInput: {
        width: '97% !important',
        margin: '10px 0 !important',
    },
    buttonSubmit: {
        marginBottom: "10px !important",
        backgroundColor : "slategray !important", 
    },
    buttonSubmit2 : {
        padding : '8px !important',
        backgroundColor : "crimson !important",
    }
}));

export default FormStyles