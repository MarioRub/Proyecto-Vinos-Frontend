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
    Switch,
  } from "react-router-dom";
  

import registerServiceWorker from './registerServiceWorker';
import crearNuevaFinca from './components/crearNuevaFinca';
import Procesos from './components/Procesos'
import LLamadas from './components/LLamadas';
import Evaluaciones from './components/Evaluaciones';
import Inspecciones from './components/Inspecciones';
import editarFinca from './components/editarFinca';
import crearNuevaProceso from './components/crearNuevoProceso';
import Compras from './components/Compras';
import MostrarCompras from './components/MostrarCompras';
import crearNuevoProducto from './components/crearNuevoProducto';
import crearNuevaSemilla from './components/crearNuevaSemilla'



ReactDOM.render(
    <Router>
        <div>
            <Switch>

                <Route exact path='/' component={App} />

                <Route path='/aboutus' component={aboutus} />
                <Route path='/Fincas' component={Fincas} />
                <Route path='/crearNuevaFinca' component={crearNuevaFinca} />
                <Route path='/Procesos' component={Procesos} />
                <Route path='/LLamadas/:idProceso' component={LLamadas} />
                <Route path='/Evaluaciones/:idProceso' component={Evaluaciones} />
                <Route path='/Inspecciones/:idProceso' component={Inspecciones} />
                <Route path='/editarFinca' component={editarFinca} />
                <Route path='/crearNuevaProceso' component={crearNuevaProceso} />
                <Route path='/Compras' component={Compras} />
                <Route path='/MostrarCompras/:idProceso' component={MostrarCompras} />
                <Route path='/crearNuevoProducto' component={crearNuevoProducto} />
                <Route path='/crearNuevaSemilla' component={crearNuevaSemilla} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);


registerServiceWorker();