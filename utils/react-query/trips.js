import { useQuery } from "@chakra-ui/react";
import { axiosGetTrip, axiosGetTrips } from "../axios/trips";

export const useGetTrips = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["trips", params],
    async () => await axiosGetTrips(params),
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

export const useGetTrip = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["trip", params],
    async () => await axiosGetTrip(params),
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
