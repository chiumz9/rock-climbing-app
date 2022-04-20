import api from "./apiConfig.js";

export const getGyms = async () => {
  try {
    const response = await api.get("/gyms");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getGym = async (id) => {
  try {
    const response = await api.get(`/gyms/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
};
export const createGym = async (gym) => {
  try {
    const response = await api.post('/gyms', gym);
    return response.data
  } catch (error) {
    throw error;
  }
};
export const updateGym = async (id, gym) => {
  try {
    const response = await api.put(`/gyms/${id}`, gym);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteGym = async (id) => {
  try {
    const response = await api.delete(`/gyms/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
