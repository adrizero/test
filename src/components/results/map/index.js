import React, { Component, Fragment } from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

 
export class AtmsMap extends Component {
  render() {  
    return (
 
          <Fragment
          container
          justyfyContent= 'center'>
          <CssBaseline/>
            <Map     
          style={{
            width: '550px',
            height:'450px',
          }}
          
          google={this.props.google} 
         zoom={14}
         center = { {
           lat : 40.854885 , 
           lng : - 88.081807, 
         } }
         >
           
  
         <Marker onClick={this.onMarkerClick}
                 name={'Current location'} />
  
         <InfoWindow onClose={this.onInfoWindowClose}>
           
         </InfoWindow>
       </Map>
     
          </Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCU3Asi9LRX2N40LLIBk60xdwb4dWmaMtc')
})(AtmsMap)