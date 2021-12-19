import { useQuery } from "react-query";
import { axiosGetStop, axiosGetStops } from "../axios/stops";

export const useGetStops = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["stops", params],
    async () => await axiosGetStops(params),
    {
      enabled: !!params,
    }
  );
  return {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  };
};

export const useGetStop = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["stop", params],
    async () => await axiosGetStop(params),
    {
      enabled: !!params,
    }
  );
  return {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  };
};
