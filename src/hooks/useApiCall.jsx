import { useDebugValue, useEffect, useState } from "react";

const useApiCall = (url = "", extra = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, extra);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        if (isMounted) {
          setData(jsonData);
        }
      } catch (error) {
        if (isMounted) {
          console.log(error);
          setError(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url, extra]);

  useDebugValue(loading ? "Loading..." : error ? "Error" : "Fetched");

  return { data, error, loading };
};

export default useApiCall;
