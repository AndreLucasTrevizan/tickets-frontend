import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { ErrorHandler } from "./errors/ErrorHandler";

export function setupApiClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['@nextauth.token']}`,
    }
  });

  api.interceptors.response.use(response => {
    return response;
  }, (error: AxiosError) => {
    new ErrorHandler(error);
  });

  return api;
}
