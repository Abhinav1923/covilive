import React from 'react'
import { Button, Card, CardActions, CardContent, IconButton, Skeleton, Stack, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        minWidth: 260,
        maxWidth: 325,
        margin: '16px 10px',
        boxShadow: '0 0 1px 0 rgba(8, 11, 14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1) !important',
        padding: '2rem',
        borderRadius: '12px !important',
        border: '1px solid #F7F8F9',
        '&:hover': {
            backgroundColor: props => `${props.hover} !important`,
            border: props => `1px solid ${props.hover}`,
        },
        '&:active': {
            backgroundColor: props => `${props.hover} !important`
        },
    }
}))


export default function Cards({ Icon, title, count, hover, lastUpdate, id }) {
    const classes = useStyles({ hover });
    return (
        <>
            {count && lastUpdate && (
                <Card elevation={0} classes={{
                    root: classes.root
                }} id={id}>
                    <IconButton aria-label="add to favorites">
                        <Icon />
                    </IconButton>
                    <CardContent sx={{ px: 0 }}>
                        <Typography sx={{ fontSize: 14, mb: 1.5 }} color="text.secondary" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {count}
                        </Typography>

                        <Typography sx={{ fontSize: 12 }} component="div">
                            Last updated: {lastUpdate}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ px: 0 }}>
                        <Button size="small" endIcon={<ArrowRightAltIcon />} >Show more</Button>
                    </CardActions>
                </Card>

            )}

            {!count && !lastUpdate && (
                <Stack spacing={2} className={classes.root}>
                    <Skeleton variant="circular" width={40} height={40} animation="wave" />
                    <Skeleton variant="text" width='60%' height={20} animation="wave" />
                    <Skeleton variant="text" width='50%' height={30} animation="wave" />
                    <Skeleton variant="text" width="80%" height={20} animation="wave" />
                    <Skeleton variant="text" width='70%' height={35} animation="wave" />
                </Stack>
            )
            }
        </>
    )
}
