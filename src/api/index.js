import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://jsonplaceholder.typicode.com/photos";

export function getData() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
