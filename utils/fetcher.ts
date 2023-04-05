import axios from "axios";

export const fetcher = async ({ url }: any) =>
  await axios
    .get(url)
    .then((response) => response?.data)
    .catch((error) => alert(`error:${error}`));
