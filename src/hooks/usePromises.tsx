import { useEffect, useRef, useState } from 'react';

const usePromises = <T,>(promises: Promise<T>[]) => {
  const { current: promisesArray } = useRef(promises);
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      Promise.all(promisesArray)
        .then((data) => {
          setIsLoading(false);
          setData(data);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    };
    fetchData();
  }, [promisesArray]);

  return { data, isLoading, error };
};

export default usePromises;
