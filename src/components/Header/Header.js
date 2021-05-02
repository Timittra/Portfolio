import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AllInboxOutlinedIcon from '@material-ui/icons/AllInboxOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: 'black'
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:'black',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    icons:{
        color:'lightgray',
    },
    links:{
        listStyle:'none',
        color:'white'
    }
}));

function Header(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
             <ListItem button>
                <ListItemIcon className={classes.icons}><HomeOutlinedIcon /></ListItemIcon>
                    <Link className={classes.links} to='/'>
                        <ListItemText primary='HOME' />
                    </Link>
                 </ListItem>
            </List>
            <Divider />
            <List>
             <ListItem button>
                <ListItemIcon className={classes.icons}><PermIdentityOutlinedIcon /></ListItemIcon>
                    <Link className={classes.links} to='/about'>
                        <ListItemText primary='ABOUT ME' />
                    </Link>
                 </ListItem>
            </List>
            <Divider />
            <List>
             <ListItem button>
                <ListItemIcon className={classes.icons}><AllInboxOutlinedIcon /></ListItemIcon>
                    <Link className={classes.links} to='/resume'>
                        <ListItemText primary='RESUME' />
                    </Link>
                 </ListItem>
            </List>
            <Divider />
            <List>
             <ListItem button>
                <ListItemIcon className={classes.icons}><LocalMallOutlinedIcon /></ListItemIcon>
                    <Link className={classes.links} to='/projects'>
                        <ListItemText primary='PROJECTS' />
                    </Link>
                 </ListItem>
            </List>
            <Divider />
            <List>
             <ListItem button>
                <ListItemIcon className={classes.icons}><ReceiptOutlinedIcon /></ListItemIcon>
                    <Link className={classes.links} to='/blogs'>
                        <ListItemText primary='BLOGS' />
                    </Link>
                 </ListItem>
            </List>
            <Divider />
            <List>
             <ListItem button>
                <ListItemIcon className={classes.icons}><MailOutlineOutlinedIcon /></ListItemIcon>
                    <Link className={classes.links} to='/contact'>
                        <ListItemText primary='CONTACT' />
                    </Link>
                 </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" style={{ backgroundColor: 'black' }} className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

Header.propTypes = {
    window: PropTypes.func,
};

export default Header;
