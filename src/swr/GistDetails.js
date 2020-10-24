import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { gistId } = useParams();
  return <div>{gistId}</div>;
};
