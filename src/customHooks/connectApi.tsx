import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Api, ApiKey } from "../config";
interface useConnectApiProps {
  url?: string;
  recurso: string;
}
export const useConnectApi = <T,>({ url, recurso }: useConnectApiProps) => {
  let urlComplete = `${Api}/${recurso}?api_key=${ApiKey}`;
  if (url) {
    urlComplete += url;
  }
  const initialData = Object.create([]);
  const [data, setData] = useState<T>(initialData);

  const [state, setState] = useState({
    loading: false,
    hasData: false,
    error: false,
  });

  const getData = useCallback(async () => {
    setState((current) => ({ ...current, loading: true }));
    try {
      const peticion = await axios.get(urlComplete);
      setState((current) => ({
        ...current,
        hasData: Object.keys(peticion.data).length > 0,
        loading: false,
      }));

      setData(peticion.data);
    } catch (error) {
      setState((current) => ({
        ...current,
        hasData: false,
        loading: false,
        error: true,
      }));
      setData(initialData);
    }
  }, []);
  useEffect(() => {
    return () => {
      getData();
    };
  }, [recurso, url]);
  return { data, state };
};
