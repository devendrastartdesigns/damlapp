import React from "react";
import { withRouter,useHistory, Link } from "react-router-dom";
import { signOut, useUserDispatch } from "../../context/UserContext";
const Sidebar = () => {
  const history = useHistory();
  const userDispatch = useUserDispatch();
  return (
      <>
       <Link to="/main/profile"> Profile </Link> 
        <Link
          to="/" 
          onClick={(evt: any) => {evt.preventDefault();signOut(userDispatch, history, false);}}
         > Logout </Link>     
      </>
  );
};



export default withRouter(Sidebar);
