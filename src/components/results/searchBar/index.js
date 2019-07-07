import React, {  Fragment } from 'react';
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
    setErrorMessage,
} from './../../redux/actions/actionSearchBar';
import {
    addSearchParams,
    orderResults,
} from './../../redux/actions/actionResults';

//Peticion de datos
import {fetchGetResult} from './../../redux/reducers/result';
//Elemento presentacional
import Page from './page';


function SearchBar(props = {...mapStateToProps, ...mapDispatchToProps}){
    
    const handleSearch = (e)  =>{
        //Obtiene la palabra a buscar   
        props.setSearch(e.target.value)
    }
    
    const getResults = e => {
        //Obtiene losdatos de la api y lo al estado
        e.preventDefault()
        props.addSearchParams()
        if(props.search === ''){
            props.setErrorMessage('You must fill the field');
            return
        }
        let q = props.search;
        let fields = props.paramsSearch;
        props.fetchGetResult(q, fields);
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
                errorMessage = {props.errorMessage}
                results ={props.results}

                setSearch = {handleSearch}
                setStreet = {props.setStreet}
                setHouseNumber = {props.setHouseNumber}
                setPostalCode = {props.setPostalCode}
                setCity = {props.setCity}
                setLat = {props.setLat}
                setLng = {props.setLng}
                setDistance = {props.setDistance}
                setType = {props.setType}
                getResults = {getResults}
                clearChecked = {props.clearChecked}
    
                
            />
        </Fragment>
    )    
}

const mapStateToProps = state => {
    //Mapea los estados de la aplicacion
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
        results: state.result.results,
        errorMessage: state.result.errorMessage,
    }
}

const mapDispatchToProps = (dispatch)=>{
    //Mapea las acciones a despachar
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
        },
        setErrorMessage: (msg)=>{
            dispatch(setErrorMessage(msg))
        },
        orderResults: () =>{
            dispatch(orderResults())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)


