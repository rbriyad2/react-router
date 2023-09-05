import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const navigation =useNavigation()
  return (
    <div>
      <Header></Header>
      {
        navigation.state === "loading" ? <FontAwesomeIcon height='80px' width='80px' icon={faSpinner} /> : ""
      }
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
