import { api } from "./api";

export async function getListCsv(){
  const response = await api.get('/csv-files');
  return response.data;
}