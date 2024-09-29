
import { makeStyles } from '@mui/styles';

const FormStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        borderRadius : '10px !important',
        // backgroundColor : 'wheat !important'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
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