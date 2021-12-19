import axios from "redaxios";

export const axiosGetTrips = async (params = null) => {
  const { data } = await axios
    .get(`/api/trips`, {
      params,
    })
    .catch((res) => {
      throw new Error(res.data.res.data.error);
    });
  return data;
};

export const axiosGetTrip = async (params = null) => {
  const { data } = await axios
    .get(`/api/trips`, {
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
