import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import SwipeableTemporaryDrawer from './Drawer';
import { useStyles, DocumentationButton } from './HeaderStyles'

function HideOnScroll(props) {

    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>

            <>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar sx={{ display: 'flex', justifyContent: 'center', py: 1.25 }} color='inherit' elevation={0}>
                        <Toolbar className={classes.root}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Logo />
                            </Typography>

                            {isMobile ? (
                                <SwipeableTemporaryDrawer />
                            ) : (
                                <List className={classes.list}>
                                    <ListItem>
                                        <Link href="#" underline="none" className={classes.listItems} color='secondary.dark'>
                                            Features
                                        </Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href="#" underline="none" className={classes.listItems} color='secondary.dark'>
                                            Github
                                        </Link>
                                    </ListItem>

                                    <ListItem>
                                        <DocumentationButton variant="contained" disableElevation>
                                            Documentation
                                        </DocumentationButton>
                                    </ListItem>

                                </List>
                            )}
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar />
            </>


        </>
    );
}