import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import DamlLedger from "@daml/react";
import { useUserState } from "../../context/UserContext";
import { wsBaseUrl, httpBaseUrl } from "../../config";
import Profile from "../../pages/profile/Profile";
const FrontLayout = (props: any) => {

  const user = useUserState();
  if (!user.isAuthenticated) {
    return null;
  } else {
    return (
      <DamlLedger
        party={user.party}
        token={user.token}
        httpBaseUrl={httpBaseUrl}
        wsBaseUrl={wsBaseUrl}
      >
        {/* <WellKnownPartiesProvider>
                <PublicProvider> */}
        <Switch>
          <Route path="/main/profile" component={Profile} />
        </Switch>
        {/*  </PublicProvider>
            </WellKnownPartiesProvider> */}
      </DamlLedger>
    );
  }
};

export default withRouter(FrontLayout);
