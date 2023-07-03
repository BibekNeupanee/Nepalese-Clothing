import React from "react";
import "./FabricList.scss";

function FabricList({ fabrics }) {
  
  return (
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
  );
}

export default FabricList;
