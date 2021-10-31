import { Stack, Typography, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Dribbble } from '../../assets/images';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    iconButton: {
        '&:hover': {
            backgroundColor: 'initial !important'
        }
    },
    github: {
        color: 'grey',
        '&:hover': {
            color: 'black'
        }
    },
    linkedin: {
        color: 'grey',
        '&:hover': {
            color: '#43A4FF'
        }
    },
    dribbble: {
        fill: 'grey',
        width: '26px',
        '&:hover': {
            fill: '#ea4c89'
        }
    },
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <Box py={3} sx={{ textAlign: 'center' }}>
                <Typography variant='body2' gutterBottom sx={{ color: '#000000' }}>
                    Designed &amp; Developed by Abhinav Gupta
                </Typography>

                <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', marginTop: 1 }}>
                    <IconButton disableRipple aria-label="github" color='secondary' className={classes.iconButton}>
                        <Link href="https://github.com/Abhinav1923">
                            <GitHubIcon className={classes.github} />
                        </Link>
                    </IconButton>
                    <IconButton disableFocusRipple disableRipple aria-label="linkedin" color="secondary" className={classes.iconButton}>
                        <Link href="https://www.linkedin.com/in/abhinav-gupta2319/">
                            <LinkedInIcon className={classes.linkedin} />
                        </Link>
                    </IconButton>
                    <IconButton disableRipple color="secondary" aria-label="dribbble" className={classes.iconButton}>
                        <Link href="https://dribbble.com/Abhinav_19">
                            <Dribbble className={classes.dribbble} />
                        </Link>
                    </IconButton>
                </Stack>

            </Box>
        </>
    )
}
