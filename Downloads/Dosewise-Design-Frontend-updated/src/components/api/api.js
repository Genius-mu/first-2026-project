import axios from "axios";

const API_BASE = "https://dosewise-2p1n.onrender.com/api/patient";

export const getPatientProfile = async (token) => {
  const res = await axios.get(`${API_BASE}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data;
};

export const getPatientRecords = async (token) => {
  const res = await axios.get(`${API_BASE}/records`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data;
};

export const uploadMedicalRecord = async (token, recordText) => {
  const res = await axios.post(
    `${API_BASE}/upload-record`,
    { recordText },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data.data;
};
