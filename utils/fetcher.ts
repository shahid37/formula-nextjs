export const fetcher = ({ url }: any) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("PERSISTENT_STATE_auth") || "{}").data
          .access_token
      }`,
    },
  })
    .then((res) => res.json())
    .catch((error) => alert(`${error.message}`));
