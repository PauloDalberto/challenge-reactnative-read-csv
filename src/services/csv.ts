import { api } from "./api";

export async function getListCsv(){
  const response = await api.get('/csv-files');
  return response.data;
}

export async function selectCsv(filename: string){
  const response = await api.post('/select-csv', { filename });
  return response.data;
}