import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './screens/Login';
import Register from './screens/Register';
import Notfound from './screens/Notfound';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch,Route, Link} from "react-router-dom";


const routing =(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route  path="/Login" component={Login}/>
    <Route  path="/register" component={Register}/>
    <Route  component={Notfound}/>

  </Switch>
  </BrowserRouter>
);

ReactDOM.render( routing, document.getElementById('root'));
reportWebVitals();
