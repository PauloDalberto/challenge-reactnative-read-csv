import { api } from "./api";

export async function getWinners(){
  const response = await api.get('/winners');
  return response.data;
}

export async function getIntervals(){
  const response = await api.get('/producers/intervals');
  return response.data;
}