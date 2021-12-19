import axios from "redaxios";

export const axiosGetStopTimes = async (params = null) => {
  const { data } = await axios
    .get(`/api/stopTimes`, {
      params,
    })
    .catch((res) => {
      throw new Error(res.data.res.data.error);
    });
  return data;
};

export const axiosGetStopTime = async (params = null) => {
  const { data } = await axios
    .get(`/api/stopTimes`, {
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
