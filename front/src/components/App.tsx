import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { damlPartyKey, damlTokenKey } from "../config";
import { useUserState, useUserDispatch } from "../context/UserContext";
import ErrorComponent from "../pages/error/Error";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import FrontLayout from "./FrontLayout/FrontLayout";

export default function App() {
  const userState = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/main" render={() => <Redirect to="/main/profile" />}/>
        <FrontPrivateRoute path="/main" component={FrontLayout} />
        <PublicRoute path="/home" component={Home} />
        <Route exact path="/" component={RootRoute} />
        <PublicRoute path="/login" component={Login} />
        <Route component={ErrorComponent} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function RootRoute({...rest}) {
    const userDispatch = useUserDispatch();

    useEffect(() => {
      const url = new URL(window.location.toString());
      const token = url.searchParams.get('token');
      if (token === null) {
        return;
      }
      const party = url.searchParams.get('party');
      if (party === null) {
        throw Error("When 'token' is passed via URL, 'party' must be passed too.");
      }
      localStorage.setItem(damlPartyKey, party);
      localStorage.setItem(damlTokenKey, token);

      userDispatch({ type: "LOGIN_SUCCESS", token, party });
    })

    return (
      // <Redirect to="/app/report" />
      <Redirect to="/main/profile" />
    )
  }

  /*function PrivateRoute({ component, ...rest } : any) {
    return (
      <Route
        {...rest}
        render={props =>
          userState.isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }*/

  function FrontPrivateRoute({ component, ...rest } : any) {
    return (
      <Route
        {...rest}
        render={props =>
          userState.isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest } : any) {
    return (
      <Route
        {...rest}
        render={props =>
          userState.isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
