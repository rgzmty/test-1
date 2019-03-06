import React from 'react'
import CareTakerFormContainer from './containers/CareTakerFormContainer.js'
import CareTakerListContainer from './containers/CareTakerListContainer.js'
import LoadingAlertContainer from './containers/LoadingAlertContainer.js'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () =>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href=".">Cuida Mi Mascota</a>
        </nav>
        <div className="container-fluid">
            <CareTakerFormContainer />
        </div>
        <div className="container-fluid">
            <CareTakerListContainer />
        </div>
        <div className="container-fluid">
            <LoadingAlertContainer />
        </div>
    </div>

export default App
