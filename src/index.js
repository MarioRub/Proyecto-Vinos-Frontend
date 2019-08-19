import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './index.css';
import App from './App';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import aboutus from './components/aboutus';
import catalogo from './components/catalogo';
import mostrarcatalogo from './components/mostrarcatalogo';
import cuentavendedor from './components/cuentavendedor';
import Appcss from './App.css'
import NotFound from './components/NotFound';
import {
    BrowserRouter,
    Switch,
  } from "react-router-dom";
  

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Switch>

                <Route exact path='/' component={App} />
                <Route path='/edit/:id' component={Edit} />
                <Route path='/create' component={Create} />
                <Route path='/show/:id' component={Show} />

                <Route path='/cuentavendedor' component={cuentavendedor} />
                <Route path='/aboutus' component={aboutus} />
                <Route path='/catalogo' component={catalogo} />
                <Route path='/mostrarcatalogo/:id' component={mostrarcatalogo} />

                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();