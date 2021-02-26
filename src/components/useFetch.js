import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [list, setList] = useState([]);
  const getPlanets = useCallback(async () => {
    const response = await axios.get(url);
    setList(response.data);
  }, [url]);

  useEffect(() => {
    getPlanets();
  }, [url, getPlanets]);
  return { list };
};
