import React from "react";

const Letter = props => {
  const { data } = props;
  return <div className="letter">{data}</div>;
};

export default Letter;
