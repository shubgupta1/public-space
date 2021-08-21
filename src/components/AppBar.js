import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import nswgov from "../images/nswgov.jpg"
import Paper from "@material-ui/core/Paper"

import { createTheme } from '@material-ui/core/styles';
import {blue, pink } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'left'
  },
  appBar: {
    height: '100px',
    // : ""
    alignItems: 'left'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // align: "left",
    // position: 'left'
  },
  image: {
    // marginTop: '10x',
    // paddingTop: '10px',
    height: '70px',
    width: '70px',
    padding: '10px 10px 10px 10px',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} color='primary'>
        <Toolbar>
        <Paper variant="outlined">
          <img src={nswgov} className={classes.image} />
        </Paper>
          <Typography variant="h6" className={classes.title}>
            Parks for People
          </Typography> 
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
