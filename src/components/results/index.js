import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';



import Page from './page';



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