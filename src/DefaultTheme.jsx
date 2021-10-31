import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#0284fe',
            light: '#eef7ff',
            dark: '#2378c9'
        },
        secondary: {
            main: '#000000',
            light: '#7e7f83',
            dark: '#505256'
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),

        h3: {
            fontSize: "3rem", //48px
            fontWeight: 500,
            lineHeight: '4.2rem'
        },
        body1: {
            lineHeight: '30px',
            letterSpacing: '1px'
        }
    },
});

export default theme