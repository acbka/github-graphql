/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useQuery } from "@apollo/client";
import { REPOSITORIES_QUERY } from "../../../queries/repositoriesQuery";
import RepositoriesBlock from "./RepositoriesBlock";

const GetRepositories = ({ login, numberOfRepositories }) => {
  const { loading, error, data } = useQuery(REPOSITORIES_QUERY, {
    variables: {
      login: login,
      numberOfRepositories: numberOfRepositories,
    },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :((((</p>;
  const repositories = data.user.repositories.nodes;

  return <RepositoriesBlock repositories={repositories} />;
};
export default GetRepositories;
