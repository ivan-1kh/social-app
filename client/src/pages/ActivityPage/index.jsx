import React from "react";
import "./style.css";

import Navigation from "../../components/Navigation";

export default (props) => {
  return (
    <>
      <span>Component!</span>
      <Navigation loggedUser={props.loggedUser} />
    </>
  );
};
