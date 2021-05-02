import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 240,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Blogs = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <main style={{marginLeft:'240px'}} className={classes.content}>
        <div className={classes.toolbar} />
        <h1>Coming soon</h1>
        </main>
    );
};

export default Blogs;