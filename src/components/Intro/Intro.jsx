import React from 'react'
import { Container, Grid, Typography } from '@mui/material';
import { CoronaImg } from '../../assets/images';
import '../../assets/css/SvgStyles.css'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '5rem 0 2rem 0',
        [theme.breakpoints.down('md')]: {
            padding: '0',
        },
    },

    HeroImg: {
        '& svg': {
            width: '100%',
            maxWidth: '100%'
        }
    },
    titleContainer: {
        paddingTop: '2rem',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            paddingTop: '0',
            // marginTop: '-2rem'
        },
    }
}))

export default function Intro() {

    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} className={classes.HeroImg}>
                    <CoronaImg />
                </Grid>

                <Grid item xs={12} sm={12} md={6} className={classes.titleContainer}>
                    <Typography variant='h3' gutterBottom >
                        #IndiaFights Corona <span style={{ color: '#e23028', whiteSpace: 'nowrap', padding: '5px', backgroundColor: '#fdf2f2', borderRadius: '15px' }}>COVID-19</span>
                    </Typography>

                    <Typography variant='body1' color='secondary.dark'>
                        Government of India is taking all necessary steps to ensure that we are prepared well to face the challenge and threat posed by the growing pandemic of COVID-19 the Corona Virus.
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    )
}
