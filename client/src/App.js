import React, {Suspense} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import { auth } from "./firebase"
import Home from './pages/home'
import Header from './componenets/nav/Header'

const App = () => {
    test = auth
    return (
        <>
            <Header/>

            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>

        </>
    );
}

export default App;
