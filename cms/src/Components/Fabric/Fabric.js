import React from "react";
import useFetch from "../../hooks/useFetch";

function Fabric() {
  const fabrics = useFetch("http://localhost:3000/fabric")?.fabric || [];

  return (
    <>
      {fabrics.map((fabric) => (
        <>{fabric.name}</>
      ))}
    </>
  );
}

export default Fabric;
