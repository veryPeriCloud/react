import { useState, useEffect, useCallback } from "react";

export function useFetch(url, initialOptions = {}) {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState(initialOptions);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async(url, query) => {
    setIsloading(true);
    try {
      await fetch(url + '?' + query)
        .then(res => res.json())
        .then(res =>  setData(res))
        
    } catch(err) {
      setError(true);
    } finally {
      setIsloading(false);
    }
  }

  const refetch = useCallback((options) => {
    const opt = options.params !== undefined ? options.params : {};
    const queryString = Object.keys(opt)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(opt[key]))
      .join('&');

    fetchData(url, queryString)
  }, [url]);

  useEffect(() => {   
    refetch(options);   
  }, [])

  return {
    data,
    isLoading,
    error,
    refetch
  }
}