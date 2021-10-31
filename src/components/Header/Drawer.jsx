import React, { useState } from 'react';
import { SwipeableDrawer, IconButton, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useStyles, DocumentationButton } from './HeaderStyles'

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div>

            <SwipeableDrawer
                anchor='top'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                elevation={0}
            // hideBackdrop={true}
            >
                <List className={classes.list} sx={{ flexDirection: 'column' }}>
                    <ListItem className={classes.listItems}>
                        <Link href="#" underline="none" color='secondary.dark' >
                            Features
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listItems}>
                        <Link href="#" underline="none" color='secondary.dark' >
                            Github
                        </Link>
                    </ListItem>

                    <ListItem className={classes.listItems}>
                        <DocumentationButton variant="contained" disableElevation>
                            Documentation
                        </DocumentationButton>
                    </ListItem>

                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </div>
    );
}
