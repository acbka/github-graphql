import React from "react";
import { useQuery } from "@apollo/client";
import { REPOSITORIES_QUERY } from "../../../queries/repositoriesQuery";
import RepositoriesBlock from "./RepositoriesBlock";
import Spinner from "../../../components/Spinner";

const GetRepositories = ({ login, numberOfRepositories }) => {
  const { loading, error, data } = useQuery(REPOSITORIES_QUERY, {
    variables: {
      login: login,
      numberOfRepositories: numberOfRepositories,
    },
  });
  if (loading) return <Spinner /> ;
  if (error) return <></>;
  const repositories = data.user.repositories.nodes;

  return <RepositoriesBlock repositories={repositories} user={login} />;
};
export default GetRepositories;
