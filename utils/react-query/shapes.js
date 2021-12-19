import { useQuery } from "@chakra-ui/react";
import { axiosGetShape, axiosGetShapes } from "../axios/shapes";

export const useGetShapes = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["shapes", params],
    async () => await axiosGetShapes(params),
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

export const useGetShape = (params = null) => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["shape", params],
    async () => await axiosGetShape(params),
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
