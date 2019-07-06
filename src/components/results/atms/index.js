import React, {Fragment } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Page from './page';

import {setSelectedOrder} from '../../redux/actions/actionSearchBar'
import {
    addResults,
    orderResults,
} from '../../redux/actions/actionResults'

function Atms(props={...mapStateToProps, ...mapDispatchToProps}){
    return(
        <Fragment>
            <Page 
                results={props.results}
                selectedOrder = {props.selectedOrder}
                setSelectedOrder = {props.setSelectedOrder}
                addResults = {props.addResults}
                orderResults = {props.orderResults}
            />
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        results: state.result.results,
        selectedOrder: state.result.selectedOrder,
        setSelectedOrder: state.result.setSelectedOrder,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setSelectedOrder: (order) =>{
            dispatch(setSelectedOrder(order))
        },
        addResults: data =>{
            dispatch(addResults(data))
        },
        orderResults: () => {
            dispatch(orderResults())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Atms)