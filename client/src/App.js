import React, {Suspense, lazy, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {auth} from "./firebase"
import {ToastContainer} from "react-toastify";
import {useDispatch} from "react-redux";

import {currentUser} from "./functions/auth";
import Layout from './componenets/Layout/Layout'
const Home = lazy(() => import('./pages/home'))
const Register = lazy(() => import('./pages/auth/Register'))
const Login = lazy(() => import('./pages/auth/Login'))
const RegisterComplete = lazy(() => import("./pages/auth/completeRegistration"));
const Development = lazy(() => import("./pages/Development/Outline"));
const Goals = lazy(() => import("./pages/Development/goals"));

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const user = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                // console.log("user", user);

                currentUser(idTokenResult.token)
                    .then((res) => {
                        dispatch({
                            type: "loggedIn",
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id,
                            },
                        });
                    })
                    .catch((err) => console.log(err));
            }
        });
        return () => user();
    }, [dispatch]);
    return (
        <Suspense
            fallback={
                <Layout text={<div></div>}></Layout>
            }
        >
            {/*<Template/>*/}
            {/*<Header/>*/}
            <ToastContainer/>
            {/*<SideBar/>*/}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register/complete" component={RegisterComplete}/>
                <Route exact path="/development" component={Development}/>
                <Route exact path="/goals" component={Goals}/>
            </Switch>

        </Suspense>
    );
}

export default App;
