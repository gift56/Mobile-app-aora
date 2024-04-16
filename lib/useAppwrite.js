import { useEffect, useState } from "react";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const res = await fn();
      setData(res);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const refetch = () => fetchData();

  return { data, refetch };
};

export default useAppwrite;
