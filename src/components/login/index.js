import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

//Componente presentacional del login
import Page from './page';

//Barra de menu
import MenuAppBar from './../appBar/MenuAppBar'

//Acciones que nos permiten hacer cambios en los estados
import {
    setUsername,
    setPassword,
    setMessage,
} from '../redux/actions/actionLogin';

import {fetchGetAuthentication} from '../redux/reducers/logged'


// Componente que contiene solo la logica 
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

        }

        //Asegura que no se pierda el scope de las funciones
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.onLogin = this.onLogin.bind(this);
        
  
    }

    setUsername(e){
        // Modifica el usuario en el login
        this.props.setUsername(e.target.value);
    }
     
    setPassword(e){
        // Modifica la contraseña en el login
        this.props.setPassword(e.target.value)
    }


    setMessage(msg){
        //Guarda un mensaje de error
        this.props.setMessage(msg)
    }


    onLogin(e){
        // verifica el acceso a la pagina
        e.preventDefault()
        const userData= {
            username: this.props.username,
            password: this.props.password
        };
       if(this.props.username !== '' && this.props.password !== ''){
            this.props.fetchGetAuthentication(userData);
            
        } else {
            this.setMessage('Debe llenar los campos');
        };
    }


    render(){
        
        if(this.props.logged){
            
            return(
                
                <Fragment>
                 
                    <Redirect 
                        from='/login' 
                        to='/results'/>
                </Fragment>
            )
        } else {
            return(
                <Fragment>
                    <MenuAppBar/>
                    <Page
                        username={this.props.username}
                        password={this.props.password}
                        logged={this.props.logged}
                        message={this.props.message}
                        setPassword = {this.setPassword}
                        setUsername = {this.setUsername}
                        onLogin = {this.onLogin}
                    />
                </Fragment>
            )
        }
        
        
        
    }
}

// react-redux
 const mapStateToProps = (state) => {
    // Obtiene los estados del login
    return{
        username: state.logged.username,
        password: state.logged.password,
        logged: state.logged.logged,
        message: state.logged.message,
        token: state.logged.token,
    }
};

 const mapDispatchToProps = (dispatch)=>{
    // Obtine los metodos que nos permiten acceder y modificar el estado del login
    return {
        setPassword: (pwd) => {
            dispatch(setPassword(pwd))
        },
        setUsername: (user) =>{
            dispatch(setUsername(user))
        },
        setMessage: (msg) => {
            dispatch(setMessage(msg))
        },
        fetchGetAuthentication: (userData)=>{
            dispatch(fetchGetAuthentication(userData))
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)