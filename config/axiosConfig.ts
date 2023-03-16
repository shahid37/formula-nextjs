import { BASE_URL } from "@/utils/constants";
import { codeMessage } from "@/utils/requests";
import axios from "axios";

const apiLocation = BASE_URL;

if (!apiLocation) {
  throw new Error("BASE_URL is not found");
}
axios.interceptors.response.use((response) => response, manageErrorConnection);

console.log(`API LOCATION IS ${apiLocation}`);

const initAxiosGlobalConfigs = (token: string) => {
  axios.defaults.baseURL = apiLocation;
  const _token = token;
  axios.defaults.headers.common["Authorization"] = "Bearer " + _token;
  axios.defaults.headers.common["session-token"] = _token;
  axios.defaults.headers.post["Content-Type"] = "application/json";
};

export default initAxiosGlobalConfigs;

function manageErrorConnection(err: any) {
  if (err.response && err.response.status !== 400) {
    // picking the right error message according to error code
    let statusCode: string = err?.response?.status;
    let errorMessage = codeMessage[500];
    // this will trigger the `handleError` function in the promise chain

    // TODO: Fix the error message when creating a module
    alert(errorMessage);
    return Promise.reject(new Error(errorMessage));
  } else if (err.code === "ECONNREFUSED") {
    // this will trigger the `handlerResponse` function in the promise chain
    // bacause we are not returning a rejection! Just an example
    return "nevermind";
  } else {
    // this will trigger the `handleError` function in the promise chain
    return Promise.reject(err);
  }
}
