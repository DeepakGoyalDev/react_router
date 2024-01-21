import React from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
  const { id: vanId } = useParams();
  return <p>Van Details {vanId} </p>;
};
export default VanDetails;
