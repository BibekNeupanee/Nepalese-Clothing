import React from "react";
import "./FabricList.scss";
import useFetch from "../../../hooks/useFetch";

function FabricList({ fabrics }) {
  const handleSearchBox = async (id, userId) => {
    const fabrics = useFetch("http://localhost:3000/fabric");
  };

  return (
    <>
      <div className="search">
        <input type="text" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {fabrics?.map((fabric) => (
            <tr>
              <td>{fabric.name}</td>
              <td>
                <a href="#">Edit</a>
              </td>
              <td>
                <a href="#">Delete</a>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}

export default FabricList;
