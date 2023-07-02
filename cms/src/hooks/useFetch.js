import React, { useEffect, useState } from "react";
import axios from "axios"; // If using Axios

function useFetch(url) {
  const [data, setData] = useState({});
  useEffect(
    (_) => {
      (async function () {
        try {
          const response = await axios.get(url);
          const responseData = response.data;
          setData(responseData);
        } catch (e) {
          console.log(e);
        }
      })();
    },
    [url]
  );

  return data;
}

export default useFetch;
