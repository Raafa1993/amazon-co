import { Route, Switch } from "react-router-dom";
import Layout from '../components/Layout';
import AppostileRequest from '../pages/AppostileRequest';
import ForgottenPassword from "../pages/ForgottenPassword";
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import MyAppostileRequest from '../pages/MyAppostileRequest';
import MyRequests from '../pages/MyRequests';
import NewRequest from '../pages/NewRequest';
import SignIn from "../pages/SignIn";
import SignInUp from '../pages/SignInUp';

function Routes({ props }: any) {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/cadastrar" component={SignInUp} />
            <Route path="/recuperar-senha" exact component={ForgottenPassword} />

            <Layout {...props}>
                <Route path="/home" exact component={Home} />
                <Route path="/minha-conta" exact component={MyAccount} />
                <Route path="/pedido/:slug" exact component={AppostileRequest} />
                <Route path="/meus-pedidos" exact component={MyRequests} />
                <Route path="/meus-pedidos/:slug" exact component={MyAppostileRequest} />
                <Route path="/novo-pedido" exact component={NewRequest} />

            </Layout>
        </Switch>
    )
}

export default Routes;