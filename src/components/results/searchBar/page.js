import React from 'react';

// Libreria de Material ui
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container  from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import NavigationIcon from '@material-ui/icons/Navigation';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {fade, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';


//Estilios
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    flexBasis: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  columAdvanceSearch:{
    flexBasis: '66.66%',
  },
  
}));



//Componente presentacional
export default (props)=> {
  const classes = useStyles();
    const [searchOk, setSearckOk] = React.useState(false);
  
    const expandSearch = () =>{
      //Abre o cierra la busqueda avanzada
      setSearckOk(!searchOk);
      props.clearChecked();
    }
  return (
    <Container
    maxWidth='md' 
    className={classes.root}>
      <ExpansionPanel 
      defaultExpanded={false}
      expanded={searchOk}        
      >
        <ExpansionPanelSummary
          expandIcon={
              <Fab 
              size="small"
              color="default" 
              aria-label="Add" 
              className={classes.fab}>
                <NavigationIcon 
                onClick = {expandSearch}
                />
            </Fab>     
          }
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
        <Box 
            border={1}
            borderColor="grey.500"
            borderRadius={16}
            className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div >
            <InputBase
                name='search'
                fullWidth
                id='search'
                placeholder= "Search…"
                value = {props.search}
                onChange = {props.setSearch}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }
            }
              inputProps={{ 'aria-label': 'Search' }}
            />
          </Box> 
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className={classes.details}>
           <form>
            <Grid 
                container
                spacing={4} 
                justify="center"
                alignItems="center">
                
                <Grid item>
                <FormControlLabel
                  control={
                  <Switch
                  value ="city" 
                  disabled={!searchOk}
                  checked={searchOk && props.city}
                  onChange={props.setCity} 
                />}
                  label="City"
                />
                </Grid>

               
                <Grid item>
                <FormControlLabel
                  control={
                  <Switch
                  value="postalCode" 
                  disabled={!searchOk}
                  checked={searchOk && props.postalCode}
                  onChange={props.setPostalCode}  
                />}
                  label="Postal Code"
                />
                </Grid>

                <Grid item>
                <FormControlLabel
                  control={
                  <Switch
                  value ="street" 
                  disabled={!searchOk}
                  checked={searchOk && props.street}
                  onChange={props.setStreet}
                />}
                  label="Street"
                />
                </Grid>

                <Grid item>
                <FormControlLabel
                  control={
                  <Switch
                  value ="houseNumber" 
                  disabled={!searchOk}
                  checked={searchOk && props.houseNumber}
                  onChange={props.setHouseNumber} 
                />}
                  label="House Number"
                />
                </Grid>

                <Grid item>
                <FormControlLabel
                  control={
                  <Switch
                  value ="type" 
                  disabled={!searchOk}
                  checked={searchOk && props.type}
                  onChange={props.setType}
                />}
                  label="Type"
                />
                </Grid>
                

                <Grid item>
                <FormControlLabel
                  control={
                  <Switch
                  value ="distance" 
                  disabled={!searchOk}
                  checked={searchOk && props.distance}
                  onChange={props.setDistance} 
                />}
                  label="Distance"
                />
                </Grid>

                <Grid item>
                <FormControlLabel
                  control={
                  <Switch
                  value ="lat" 
                  disabled={!searchOk}
                  checked={searchOk && props.lat}
                  onChange={props.setLat} 
                />}
                  label="Latitude"
                />
                </Grid>

                <Grid item>
                <FormControlLabel
                  control={
                  <Switch
                  value ="lng" 
                  disabled={!searchOk}
                  checked={searchOk && props.lng}
                  onChange={props.setLng}
                />}
                  label="Length"
                />
                </Grid>



              </Grid>
            </form> 
        </ExpansionPanelDetails>
        
        </ExpansionPanel>
        
        <Button 
        variant="contained" 
        color="primary"
        fullWidth
        onClick={props.getResults}>
            Search
        </Button>

        {(props.results.length < 1 &&
        props.errorMessage !== '') ?
        (
        <Typography
        color = 'primary'
        component="h2" 
        variant="h5">
          <SnackbarContent
           style={{
            backgroundColor: '#ff5722',
            fontSize: '0.7em'
          }} 
            message={
             props.errorMessage 
          }/>             
        </Typography>
        )
        :
        ''
        }
    </Container>
  );
}
