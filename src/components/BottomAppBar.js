import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 10,
    marginBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const BottomAppBar = ({ openAddGiftModal }) => {
  const classes = useStyles();

  // const openAddGiftModal = () => {
  //   window.alert('Add gift');
  // };

  return (
    <>
      <CssBaseline />
      <Paper square className={ classes.paper }>
        <Typography className={ classes.text } variant="h5" gutterBottom>
          Gift List
        </Typography>
      </Paper>
      <AppBar position="fixed" color="primary" className={ classes.appBar }>
        <Toolbar>
          <Fab onClick={ openAddGiftModal } color="secondary" aria-label="add" className={ classes.fabButton }>
            <AddIcon />
          </Fab>
          <div className={ classes.grow } />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default BottomAppBar;