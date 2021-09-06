/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import styled from "@emotion/styled/macro";
import { useQuery } from "@apollo/client";
import { REPOSITORIES_QUERY } from "../../queries/repositoriesQuery";
import RepositoriesList from "./RepositoriesList";

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 0;
  border-bottom: 2px solid var(--color-dark);
  font-size: 16px;
`;
const RepositoriesArray = styled.div`
  overflow: auto;
`;

const Repositories = ({ login, numberOfRepositories }) => {
  const { loading, error, data } = useQuery(REPOSITORIES_QUERY, {
    variables: {
      login: login,
      numberOfRepositories: numberOfRepositories,
    },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :((((</p>;
  const repositories = data.user.repositories.nodes;

  return (
    <Wrapper>
      <Header>
        <div>Name</div>
        <div>Created At</div>
        <div>Updated At</div>
      </Header>
      <RepositoriesArray>
        <RepositoriesList repositories={repositories} />
      </RepositoriesArray>
    </Wrapper>
  );
};
export default Repositories;
