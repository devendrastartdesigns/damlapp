import { ClientRole, UserRoleRequest } from "@daml.js/cosmart-0.0.1/lib/Main";
import { useStreamQueries } from "@daml/react";
import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
const Profile = (props:any) => {
  const clientRole = useStreamQueries(ClientRole).contracts;
  const userRoleRequest = useStreamQueries(UserRoleRequest).contracts;
   console.log("clientRole",clientRole); 
   console.log("userRoleRequest",userRoleRequest); 
    return (
        <>
        <Header/>
        <Sidebar/>
          Welcome to profile
        <Footer/> 
        </>
    )
};
export default Profile;

