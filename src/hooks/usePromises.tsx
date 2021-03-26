import { useEffect, useRef, useState } from 'react';

const usePromises = <T,>(promises: Promise<T>[]) => {
  const { current: promisesArray } = useRef(promises);
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = () => {
      Promise.all(promisesArray)
        .then((data) => {
          if (!isMounted) return;
          setIsLoading(false);
          setData(data);
        })
        .catch((error) => {
          if (!isMounted) return;
          setIsLoading(false);
          setError(error);
        });
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [promisesArray]);

  return { data, isLoading, error };
};

export default usePromises;
