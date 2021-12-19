import axios from "redaxios";

export const axiosGetRoutes = async (params = null) => {
  const { data } = await axios
    .get(`/api/routes`, {
      params,
    })
    .catch((res) => {
      throw new Error(res.data.res.data.error);
    });
  return data;
};

export const axiosGetRoute = async (params = null) => {
  const { data } = await axios
    .get(`/api/routes`, {
      params: {
        ...params,
        unique: true,
      },
    })
    .catch((res) => {
      throw new Error(res.data.res.data.error);
    });
  return data;
};
