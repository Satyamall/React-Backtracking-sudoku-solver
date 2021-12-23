import React from "react";
import Row from "./Row";

function Grid({ arr }) {
  return (
    <>
      {arr.map((item, i) => (
        <Row arr={item} i={i} />
      ))}
    </>
  );
}

export default Grid;
