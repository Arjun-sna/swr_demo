import React from "react";
import useSWR from "swr";
import { fetcher } from "./fetcher";
import { useHistory, Link } from "react-router-dom";

export default () => {
  const history = useHistory();
  const { data, error } = useSWR(
    "https://api.github.com/gists/public",
    fetcher
  );
  console.log({ data, error });
  return (
    <div>
      <div>Public gists</div>
      {error != undefined ? (
        <div>{error}</div>
      ) : data == undefined ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {data.map(
            (gist) =>
              gist.description && (
                <Link to={`/${gist.id}`}>
                  <div
                    style={{
                      width: "500px",
                      border: `1px solid`,
                      marginTop: "5px",
                      cursor: "pointer",
                      padding: "5px",
                    }}
                  >
                    <div>{gist.description}</div>
                  </div>
                </Link>
              )
          )}
        </div>
      )}
    </div>
  );
};
