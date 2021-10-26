import React from "react";
import { Router, Switch, Route, Redirect } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import Home from "./pages/home";
import Auth from "./pages/auth";
import User from "./pages/user";
import NotFound from "./pages/404";
import Reset from "./pages/auth/reset_password";
import Verify from "./pages/auth/verify_email";
import Cart from "./pages/cart";


const routes = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/cart',
    component: Cart,
    exact: true
  },

  // auth routes 
  {
    path: `/auth/:page/`,
    component: Auth,
    exact: true
  },
  {
    path: `/auth/verify-password/:id`,
    component: Reset,
    exact: true
  },
  {
    path: `/auth/verify_email/:id`,
    component: Verify,
    exact: true
  },

  // user routes 
  {
    path: `/user/:page/`,
    component: User,
    exact: true
  },

  // 404 page 
  {
    path: `/page-not-found`,
    component: NotFound,
    exact: true
  },
]


function Routes({history}) {

  return (
    <ConnectedRouter history={history}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {
            routes.map((all , index)=>(
              <Route key={index} path={all.path} component={all.component} exact={all.exact} />
              ))
            }
            <Redirect to='/page-not-found' />
        </Switch>
      </Router>
    </ConnectedRouter>
  );
}

export default Routes;
