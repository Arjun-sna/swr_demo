import React from "react";
import { useParams } from "react-router-dom";
import useSWR, { mutate } from "swr";
import { fetcher } from "./fetcher";

const GistDetails = () => {
  const { gistId } = useParams();
  const { data, error } = useSWR(
    `https://api.github.com/gists/${gistId}`,
    fetcher
  );

  const onRevalidate = () => {
    mutate("https://api.github.com/gists/public");
  };
  return (
    <>
      {error !== undefined ? (
        <div>{error}</div>
      ) : data !== undefined ? (
        <div>{data.description}</div>
      ) : null}

      <button onClick={onRevalidate}>{"Revalidate"}</button>
    </>
  );
};

export default GistDetails;
