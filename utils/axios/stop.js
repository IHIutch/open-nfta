import axios from "redaxios";

export const axiosGetStops = async (params = null) => {
  const { data } = await axios
    .get(`/api/stops`, {
      params,
    })
    .catch((res) => {
      throw new Error(res.data.res.data.error);
    });
  return data;
};

export const axiosGetStop = async (params = null) => {
  const { data } = await axios
    .get(`/api/stops`, {
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
