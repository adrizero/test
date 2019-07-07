import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

// Lib Material ui
import { makeStyles} from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

// Accion para cerrar session
import {setLogout} from '../redux/actions/actionLogin';


// estilos
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
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
}));


function MenuAppBar({username, logged, setLogout}) {
  const classes = useStyles();
  let [anchorEl, setAnchorEl] = React.useState(null);
  let open = Boolean(anchorEl);
  

  const handleLogout = () => {
    //Cierra sesion y elimina el token de localSorage
    localStorage.setItem("token", null) 
    setLogout();
  }

  function handleMenu(event) {
    //abre y cierra el menu para cerrar sesion
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>  
          
             {logged ?
              (
              <Grid container justify="center" alignItems="center">
                <Avatar className={classes.avatar}>H</Avatar>
                <Typography variant="h6" className={classes.title}>
                  Hello {username}!
                </Typography>
              </Grid> 
              )
              :
              (
              <Typography variant="h6" className={classes.title}>
                Bienvenido
             </Typography>
              )}
          { logged ?
          (
          <div>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              <MenuItem>
                Profile
              </MenuItem>
              <MenuItem 
                onClick={handleLogout}>
                Logout</MenuItem>       
              </Menu>
            </div>
        
        )
        :
        (
         <Fragment>
           <Redirect 
            form='/results'
            to='/login'
           />
         </Fragment> 
        )
      }
        </Toolbar>
      </AppBar>

     

    </div>
    
  );
}

const mapStateToProps = state =>{
  //Mapeamos el estado general de la aplicacion
  return{
    username: state.logged.username,
    logged: state.logged.logged,
  }
}


const mapDispatchProps = dispatch =>{
  // Mapeamos las funciones para despachar acciones
  return{
    setLogout: ()=>{
      dispatch(setLogout())
    },
  }
}

export default connect(mapStateToProps,mapDispatchProps)(MenuAppBar)

