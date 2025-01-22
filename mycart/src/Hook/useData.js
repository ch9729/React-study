import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const useData = (url, customConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get(url, customConfig)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    },
    deps ? deps : [] // 카테고리가 기본적으로 없을때는 []를 나열하고, 카테고리를 선택했을 경우 해당 카테고리로 선택
  );
  return { data, error, isLoading };
};

export default useData;
