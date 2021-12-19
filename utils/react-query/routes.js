import { useQuery } from "@chakra-ui/react";
import { axiosGetRoute, axiosGetRoutes } from "../axios/routes";

export const useGetRoutes = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["routes", params],
    async () => await axiosGetRoutes(params),
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

export const useGetRoute = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["route", params],
    async () => await axiosGetRoute(params),
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
