import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

export default (props) => {
  const location = useLocation();

  return <span>{location.state.comments[0].text}</span>;
};
