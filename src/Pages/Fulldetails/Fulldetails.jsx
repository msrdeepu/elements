import React from "react";
import { useParams } from "react-router-dom";
import elementdData from "../../Elements";

const Fulldetails = () => {
  const params = useParams();

  //console.log(params);

  let elementDetailsFull = elementdData.find(
    (eachElementItem) => eachElementItem.atomicNumber == params.id
  );
  console.log(elementDetailsFull);

  return (
    <>
      <h1>Full Details</h1>
      <h2>{elementDetailsFull.name}</h2>
    </>
  );
};

export default Fulldetails;
