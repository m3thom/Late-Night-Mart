import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Link, Router } from "react-router-dom";
import { Home_path, About_path, Contact_path } from '../../config/path';
import '../asset/stylesheets/App.css'


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	fullwidt: {
		height: '100%',
	}
}));

const WebAppBar = () => {
	const classes = useStyles();

	return (

		<div className={classes.root}>
			{/* <AppBar position="static">
				<Toolbar>
					
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>

					
						<Link to={Contact_path}>
							<Button type="button" className={classes.fullwidt}>
								Contact
     						</Button>
						</Link>
						<Link to={About_path}>
							<Button >
								About
							</Button>
						</Link>
						<Link to="/topic">
							<Button >
								NoMatch
							</Button>
						</Link>
					</Typography>
					<Button>
						<Link to={Contact_path}>
								About
						</Link>
					</Button>
					
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar> */}
		</div>
	);
}
export default WebAppBar
