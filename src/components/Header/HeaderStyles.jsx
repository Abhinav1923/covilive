import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '1184px',
        flexGrow: 1,
        margin: '0 auto',
        width: '100%',
    },
    list: {
        display: 'flex',
        listStyle: 'none',
        fontSize: "14px",
        margin: 0,
    },
    listItems: {
        color: '#505256',
        fontWeight: 500,
        letterSpacing: '-0.5px',
        marginRight: '2rem',
        [theme.breakpoints.down('sm')]: {
            margin: '1rem 0rem !important',
            justifyContent: 'center !important'
        },
    }
}))

const DocumentationButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '10px 15px',
    lineHeight: 1.5,
    backgroundColor: '#F1F2F4',
    color: '#505256',
    borderRadius: '12px',
    '&:hover': {
        backgroundColor: '#dedfe1',
    },
});

export { useStyles, DocumentationButton }