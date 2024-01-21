import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVansDetails = () => {
  const [count, setCount] = useOutletContext();
  return <p>Host vans details{count}</p>;
};

export default HostVansDetails;
