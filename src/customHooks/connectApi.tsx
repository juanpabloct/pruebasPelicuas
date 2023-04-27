import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Api, ApiKey } from "../config";
export const useConnectApi = (url: string) => {
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const peticion = await axios.get(`${Api}/${url}?api_key=${ApiKey}`);
    setData(peticion.data);
  }, []);
  useEffect(() => {
    return () => {
      getData();
    };
  }, []);
  return { data };
};
