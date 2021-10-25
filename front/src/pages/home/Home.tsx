import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
const Home = (props: RouteComponentProps) => {
  return (
      <>
        <Header/>
        <Link to="/login">Login</Link>
        <Footer/>
      </>
  );
};

export default Home;
