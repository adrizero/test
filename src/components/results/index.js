import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import MenuAppBar from '../appBar/MenuAppBar';
import Atms from './atms/Atms'
import Page from './page';

import {fetchGetResult} from '../redux/reducers/result'


import SearchBar from './searchBar/index';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

 class Results extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
   
    render(){
        if (this.props.logged){
            return(
                <Fragment>
                    <MenuAppBar/>
                    <Typography component="h1" variant="h5">        
                        Search of ATMs      
                    </Typography>
                    <Atms/>
                    <Page/>
                </Fragment>
            )
        } else {
            return(
                <Redirect from='/results' to='/login'/>
            )
        }
            
        
    }
}

const mapStateToProps = state =>{
    return {
        logged: state.logged.logged,
    }
}



export default connect(mapStateToProps, {})(Results)