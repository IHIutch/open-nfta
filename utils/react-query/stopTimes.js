import { useQuery } from "@chakra-ui/react";
import { axiosGetStopTime, axiosGetStopTimes } from "../axios/stopTimes";

export const useGetStopTimes = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["stopTimes", params],
    async () => await axiosGetStopTimes(params),
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

export const useGetStopTime = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["stopTime", params],
    async () => await axiosGetStopTime(params),
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
