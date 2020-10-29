import axios from "axios";

export const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `token 6597cea7b3a4a7c219acc5971dd287e616f9fb7d`,
      },
    })
    .then((res) => res.data);
