import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(uri) {
  const [data, setData] = useState({});
  const [error, setError] = useState(0);
  useEffect(() => {
    var result;
    async function fetchData() {
      try {
        result = await axios(uri);
        setData(result.data);
      } catch (e) {
        var error=e.description;
        console.log("Error: " + error);
        setError(error);
      }
    }
    fetchData();
  }, []);
  return {data: data, error: error};
}
