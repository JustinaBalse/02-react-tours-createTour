import axiosClient from "../apiTours";

export async function getAllTours() {
  const res = await axiosClient.get("/");
  return res;
}

export async function createTour(data) {
  const response = await axiosClient.post("/", JSON.stringify(data));
  return response;
}
