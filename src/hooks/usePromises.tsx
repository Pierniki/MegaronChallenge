import { useEffect, useState } from 'react';

const usePromises = <T,>(promises: Promise<T>[]) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      Promise.all(promises)
        .then((data) => {
          setIsLoading(false);
          setData(data);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    };
    fetchData();
  }, [promises]);

  return { data, isLoading, error };
};

export default usePromises;
