import axios from "redaxios";

export const axiosGetShapes = async (params = null) => {
  const { data } = await axios
    .get(`/api/shapes`, {
      params,
    })
    .catch((res) => {
      throw new Error(res.data.res.data.error);
    });
  return data;
};

export const axiosGetShape = async (params = null) => {
  const { data } = await axios
    .get(`/api/shapes`, {
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
