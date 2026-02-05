import api from "../../services/axios";

const PROFILE_BASE_URL = "/api/v1/profile";

export const getProfile = async () => {
  const data = await api.get(PROFILE_BASE_URL);
  return data;
};

export const addProfile = async (profile: any) => {
  const data = await api.post(`${PROFILE_BASE_URL}`, profile);
  return data;
};

export const updateProfile = async (profile: any) => {
  const data = await api.patch(PROFILE_BASE_URL, profile, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const deleteProfile = async () => {
  const data = await api.delete(PROFILE_BASE_URL);
  return data;
};
