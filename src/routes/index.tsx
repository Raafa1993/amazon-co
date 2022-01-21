import React from 'react'
import { Route, Switch } from "react-router-dom";
import Layout from '../components/Layout';
import AppostileRequest from '../pages/AppostileRequest';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import MyRequests from '../pages/MyRequests';
import SignIn from "../pages/SignIn";
import SignInUp from '../pages/SignInUp';

function Routes({ props }: any) {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/cadastrar" component={SignInUp} />

            <Layout {...props}>
                <Route path="/home" exact component={Home} />
                <Route path="/minha-conta" component={MyAccount} />
                <Route path="/pedido/:slug" component={AppostileRequest} />
                <Route path="/meus-pedidos" component={MyRequests} />
            </Layout>
        </Switch>
    )
}

export default Routes;