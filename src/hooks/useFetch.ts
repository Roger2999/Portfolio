import { useEffect, useState } from "react";

export const useFetch = <T>(URL_BASE: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(URL_BASE);
        if (!response.ok) {
          throw new Error(
            `Ha ocurrido el siguiente error:${response.status}:${response.statusText}`
          );
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, [URL_BASE]);

  return {
    data,
    isLoading,
    error,
  };
};
