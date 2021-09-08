import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import Repository from "./Repository";
import RepositoryInfo from "./RepositoryInfo";
import { Block, Title } from "../style";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const RepositoriesList = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px 0;
  border-bottom: 2px solid var(--color-dark);
  font-size: 16px;
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`;
const HeaderTitle = styled.div`
  cursor: pointer;
`;
const UpdateTitle = styled.div`
  cursor: pointer;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const RepositoriesArray = styled.div`
  height: 100%;
  overflow: auto;
`;

const RepositoriesBlock = ({ repositories }) => {
  const [selected, setSelected] = useState(null);
  const [sortedRepositories, setSortedRepositories] = useState(repositories);
  const [sortKey, setSortKey] = useState("name");

  const sortArray = (value) => {
    const newArray =
      sortKey === value
        ? [...sortedRepositories].reverse()
        : [...sortedRepositories].sort((a, b) => {
            return a[value].toLowerCase() < b[value].toLowerCase()
              ? -1
              : Number(a[value].toLowerCase() > b[value].toLowerCase());
          });
    setSortedRepositories(newArray);
    setSortKey(value);
  };

  const list = sortedRepositories.map((item, index) => {
    return (
      <Repository
        key={index}
        repository={item}
        selected={selected}
        getSelected={setSelected}
      />
    );
  });

  return (
    <Wrapper>
      <RepositoriesList>
        <Block>
          <Title>Repositories</Title>
          <Header>
            <HeaderTitle onClick={() => sortArray("name")}>Name</HeaderTitle>
            <HeaderTitle onClick={() => sortArray("createdAt")}>
              Created At
            </HeaderTitle>
            <UpdateTitle onClick={() => sortArray("updatedAt")}>
              Updated At
            </UpdateTitle>
          </Header>
          <RepositoriesArray>{list}</RepositoriesArray>
        </Block>
      </RepositoriesList>
      {selected && (
        <Block>
          <RepositoryInfo
            repository={repositories.find((item) => item.id === selected)}
          />
        </Block>
      )}
    </Wrapper>
  );
};
export default RepositoriesBlock;
