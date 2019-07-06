
import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import MenuAppBar from '../appBar/MenuAppBar';
import Atms from './atms/index';
import SearchBar from './searchBar/index';
import Typography from '@material-ui/core/Typography';


export default function Page(props) {
    return(
        <Fragment>
            <MenuAppBar/>
            <Typography component="h1" variant="h5">        
                Search of ATMs      
            </Typography>
            <SearchBar/>
            <Atms/>
           
        </Fragment>
    ) 
} 











