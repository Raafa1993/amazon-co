import { Redirect, Switch } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Layout from "../components/Layout";
import AppostileRequest from "../pages/AppostileRequest";
import ForgottenPassword from "../pages/Login/ForgottenPassword";
import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";
import MyAppostileRequest from "../pages/MyAppostileRequest";
import MyRequests from "../pages/MyRequests";
import NewRequest from "../pages/NewRequest";
import SignIn from "../pages/Login/SignIn";
import SignInUp from "../pages/Login/SignInUp";
import HomeUser from "../pages/HomeUser";

import { useAuth } from '../hooks/Auth'
import RecoveryPassword from "../pages/Login/RecoverPassword";

function Routes({ props }: any) {
  const { user } = useAuth()

  return (
    <Switch>
      <PrivateRoutes path="/" exact component={SignIn} />
      <PrivateRoutes path="/cadastrar" component={SignInUp} />
      <PrivateRoutes path="/recuperar-senha" component={RecoveryPassword} />
      <PrivateRoutes path="/paginaderecuperarsenha/:id" component={ForgottenPassword} />


      <Layout {...props}>
        {user?.profile === "usuario" ? (
          <PrivateRoutes path="/home" component={HomeUser} isPrivate  />
        ) : (
          <PrivateRoutes path="/home" component={Home} isPrivate  />
        )}

        <PrivateRoutes path="/minha-conta" component={MyAccount} isPrivate  />
        <PrivateRoutes path="/pedido/:id" component={AppostileRequest} isPrivate  />
        <PrivateRoutes path="/meus-pedidos" component={MyRequests} isPrivate  />
        <PrivateRoutes path="/meus-pedidos/:id" component={MyAppostileRequest} isPrivate  />
        <PrivateRoutes path="/novo-pedido" component={NewRequest} isPrivate  />
      </Layout>
    </Switch>
  );
}

export default Routes;
