import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './index.css';
import App from './App';
import aboutus from './components/aboutus';
import Fincas from './components/Fincas';
import Appcss from './App.css'
import NotFound from './components/NotFound';
import {
    BrowserRouter,
    Switch,
  } from "react-router-dom";
  

import registerServiceWorker from './registerServiceWorker';
import crearNuevaFinca from './components/crearNuevaFinca';
import Procesos from './components/Procesos'

ReactDOM.render(
    <Router>
        <div>
            <Switch>

                <Route exact path='/' component={App} />

                <Route path='/aboutus' component={aboutus} />
                <Route path='/Fincas' component={Fincas} />
                <Route path='/crearNuevaFinca' component={crearNuevaFinca} />
                <Route path='/Procesos' component={Procesos} />

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