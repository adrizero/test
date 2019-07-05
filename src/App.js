import React from 'react';
import {Provider} from 'react-redux'


//import ReactDOM  from 'react-dom';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Results from './components/results/index';
import Login from './components/login/index';
import store from './components/redux/store';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route 
              path='/login' 
              component={Login}/>
            <Route 
              path='/results' 
              component={Results} 
              />
            <Redirect 
              from='/' 
              to='/login'/>
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
