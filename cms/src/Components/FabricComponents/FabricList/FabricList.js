import React, { useCallback, useEffect, useState } from "react";
import "./FabricList.scss";
import {
  deleteFabric,
  fetchFabric,
  searchFabric,
} from "../../../services/FabricService";
import {
  useSearchText,
  useSearchTextUpdate,
} from "../../../contexts/SearchContext";

function FabricList({ fabrics }) {
  const searchText = useSearchText();
  const [inputValue, setInputValue] = useState(searchText);
  const updateContextSearchText = useSearchTextUpdate();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      // Perform the expensive operation here, e.g., API request
      fetchData();
    }, 500); // Delay of 500 milliseconds

    return () => clearTimeout(debounceTimer); // Clear the timeout on component unmount or re-render
  }, [inputValue]); // Only run the effect when `inputValue` changes

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    updateContextSearchText(inputValue);
  };

  const deleteBtn = async (id) => {
    const deleteMessage = await deleteFabric(id);
    alert(deleteMessage);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
        />
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
          {fabrics?.map((fabric, i) => (
            <tr key={i}>
              <td>{fabric.name}</td>
              <td>
                <button className="btn">Edit</button>
              </td>
              <td>
                <button
                  className="btn"
                  title="Delete"
                  onClick={(_) => deleteBtn(fabric.id)}
                >
                  Delete
                </button>
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
