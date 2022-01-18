import React from 'react'
import { Route, Switch } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../pages/Home';
import SignIn from "../pages/SignIn";
import SignInUp from '../pages/SignInUp';

function Routes({ props }: any) {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/cadastrar" component={SignInUp} />

            <Layout {...props}>
                <Route path="/home" exact component={Home} />
            </Layout>
        </Switch>
    )
}

export default Routes;