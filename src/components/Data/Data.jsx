import React, { useEffect, useState } from 'react'
import { Chip, Container, Skeleton, Stack, Typography } from '@mui/material';
import Cards from '../Cards/Cards';
import { ConfirmedCases, ActiveCases, RecoveredCases, DeceasedCases, DeathCases, TestCases } from '../../assets/images';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '4rem 0 2rem 0',
        position: 'relative'
    },

    chip: {
        maxWidth: '100px',
    },

    cardsContainer: {
        display: 'flex !important',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    populationBox: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    population: {
        marginLeft: 'auto !important',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0 !important',
            marginTop: '15px !important',
        },
    },
    populationData: {
        color: '#4540b1',
        padding: '5px',
        backgroundColor: '#e3e2f3',
        borderRadius: '5px'
    }

}))


export default function Data() {
    const classes = useStyles();
    const [data, setData] = useState([null]);
    const [cases, setCases] = useState([null]);
    const [death, setDeath] = useState([null]);
    const [test, setTest] = useState([null]);

    useEffect(() => {
        // const getCovidData = async () => {
        //     try {
        //         const response = await fetch('https://data.covid19india.org/data.json')
        //         const actualData = await response.json();
        //         setData(actualData.statewise[0]);
        //         console.log(actualData.statewise[0])
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        var options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            params: { country: 'india' },
            headers: {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': '58aa1ef2e5msh8fda820d901fa99p1eb31bjsnfdf3ab5c73e5'
            }
        };

        axios.request(options).then(function (response) {
            setData(response.data.response[0]);
            setCases(response.data.response[0].cases);
            setDeath(response.data.response[0].deaths);
            setTest(response.data.response[0].tests);
        }).catch(function (error) {
            console.error(error);
        });

        // getCovidData();
    }, [])

    return (
        <>
            <Container className={classes.root} maxWidth='lg'>
                <Box className={classes.populationBox} px={2} py={2}>
                    <Chip label="Cases" className={classes.chip} sx={{ backgroundColor: 'black', color: 'white', padding: 1 }} />

                    {data.population && (
                        <Typography variant='h6' className={classes.population}>
                            Population: <span className={classes.populationData}>{data.population}</span>
                        </Typography>
                    )}

                    {!data.population && (
                        <Skeleton variant="text" width='25%' height={25} animation="wave" className={classes.population} />
                    )}

                </Box>

                <Box className={classes.cardsContainer}>

                    <Cards
                        Icon={ConfirmedCases}
                        title='Critical Cases'
                        count={cases.critical}
                        hover='#fde9d1'
                        lastUpdate={data.day}
                    />

                    <Cards
                        Icon={ActiveCases}
                        title='Active Cases'
                        count={cases.active}
                        hover='#dfeeff'
                        lastUpdate={data.day}
                    />

                    <Cards
                        Icon={RecoveredCases}
                        title='Recovered Cases'
                        count={cases.recovered}
                        hover='#e4f4e8'
                        lastUpdate={data.day}
                        id='recoveredCases'
                    />

                    <Cards
                        Icon={DeceasedCases}
                        title='New Cases'
                        count={cases.new}
                        hover='#fff5e1'
                        lastUpdate={data.day}
                    />

                    <Cards
                        Icon={DeathCases}
                        title='Death Cases'
                        count={death.total}
                        hover='#ffe0e6'
                        lastUpdate={data.day}
                    />

                    <Cards
                        Icon={TestCases}
                        title='Tests Cases'
                        count={test.total}
                        hover='#eedffb'
                        lastUpdate={data.day}
                    />
                </Box>
            </Container>
        </>
    )
}
