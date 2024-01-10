import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  const fetchData = async (url, signal) => {
    try {
      let response = await fetch(url, { signal })

      if(!response.ok){
        throw new Error("Error occured in fetch");
      }
      
      setLoading(true)
      let data = await response.json();

      if (isMounted.current){
        setData(data);
      }
    }
    catch(error) {
      if (isMounted.current){
        setError(error)
      }
    }
    finally {
      if(isMounted.current){
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    isMounted.current = true;
    fetchData(url);

    return () => {
      isMounted.current = false;
      controller.abort();
    };
  },
  [url]);

  return {data, loading, error};
}

export default useFetch;
