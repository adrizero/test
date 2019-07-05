import React, { Component, Fragment } from 'react'
import SearchBar from './searchBar/index';

import Typography from '@material-ui/core/Typography';




export default class Page extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){ 
        return(
            <Fragment>
                <SearchBar/>
            </Fragment>
         )      
    }
}