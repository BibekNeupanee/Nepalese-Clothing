import axios from "axios";

const insertFabric = async (fabric) => {
  try {
    const response = await axios.post("http://localhost:3000/fabric", fabric);
    return response.data.fabric;
  } catch (e) {
    return { message: e.response.data.message };
  }
};

const searchFabric = async (searchText) => {
  const response = await axios.post("http://localhost:3000/fabric/search", {
    name: searchText,
  });
  return response.data.fabric;
};

export { insertFabric, searchFabric };
