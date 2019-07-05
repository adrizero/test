import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//acciones
import {
    clearChecked,
    setSearch,
    setStreet,
    setHouseNumber,
    setPostalCode,
    setCity,
    setLat,
    setLng,
    setDistance,
    setType,
} from './../../redux/actions/actionSearchBar';

import {
    addSearchParams,

} from './../../redux/actions/actionResults';

import {fetchGetResult} from './../../redux/reducers/result';

import Page from './page';


function SearchBar(props = {...mapStateToProps, ...mapDispatchToProps}){

    const handleSearch = (e)  =>{   
        props.setSearch(e.target.value)
    }

    const handleStreet = () => {
        props.setStreet()
    }
    const handleHouseNumber = () => {
        props.setHouseNumber()
    }
    const handlePostalCode = () => {
        props.setPostalCode()
    }
    const handleCity = () => {
        props.setCity()
    }
    const handleLat = () => {
        props.setLat()
    }
    const handleLng = () => {
        props.setLng()
    }
    const handleDistance = e => {
        props.setDistance()
    }
    const handleType = () => {
        props.setType()
    }

    const getResults  =e => {
        e.preventDefault()
        props.addSearchParams()
        let q = props.search;
        let fields = props.paramsSearch;
        console.log(q);
        console.log(fields);
        props.fetchGetResult(q, fields)
    }


    return(
        <Fragment>
            <Page
                search = {props.search}
                street = {props.street}
                houseNumber = {props.houseNumber}
                postalCode = {props.postalCode}
                city = {props.city}
                lat = {props.lat}
                lng = {props.lng}
                distance = {props.distance}
                type= {props.type}

                setSearch = {handleSearch}
                setStreet = {handleStreet}
                setHouseNumber = {handleHouseNumber}
                setPostalCode = {handlePostalCode}
                setCity = {handleCity}
                setLat = {handleLat}
                setLng = {handleLng}
                setDistance = {handleDistance}
                setType = {handleType}
                getResults = {getResults}
                clearChecked = {props.clearChecked}
            />
        </Fragment>
    )    
}

const mapStateToProps = state => {
    return {
        paramsSearch: state.result.paramsSearch,
        search: state.result.search,
        street: state.result.userSearch.street,
        houseNumber: state.result.userSearch.houseNumber,
        postalCode: state.result.userSearch.postalCode,
        city: state.result.userSearch.city,
        lat: state.result.userSearch.lat,
        lng: state.result.userSearch.lng,
        distance: state.result.userSearch.distance,
        type: state.result.userSearch.type,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        setSearch: (data) =>{
            dispatch(setSearch(data))
        },
        setStreet: () => {
            dispatch(setStreet())
        },
        setHouseNumber: () =>{
            dispatch(setHouseNumber())
        },
        setPostalCode: () =>{
            dispatch(setPostalCode())
        },
        setCity: () =>{
            dispatch(setCity())
        },
        setLat: () => {
            dispatch(setLat())
        },
        setLng: () =>{
            dispatch(setLng())
        },
        setDistance: () => {
            dispatch(setDistance())
        },
        setType: () => {
            dispatch(setType())
        },
        addSearchParams: () =>{
            dispatch(addSearchParams())
        },
        fetchGetResult: (q, fields) => {
            dispatch(fetchGetResult(q, fields))
        },
        clearChecked: ()=>{
            dispatch(clearChecked())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)


