import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import Repository from "./Repository";
import RepositoryInfo from "./RepositoryInfo";
import { Block, Title } from "../style";
import _ from "lodash";

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
`;
const HeaderTitle = styled.div`
  cursor: pointer;
`;
const RepositoriesArray = styled.div`
  height: 100%;
  overflow: auto;
`;

const RepositoriesBlock = ({ repositories }) => {
  const [selected, setSelected] = useState(null);
  const [sortedRepositories, setSortedRepositories] = useState(repositories);
  const [sortKey, setSortKey] = useState("");

  const sortArray = (value) => {
    const newArray =
      sortKey === value
        ? [...sortedRepositories].reverse()
        : _.sortBy(sortedRepositories, value);
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
            <HeaderTitle onClick={() => sortArray("updatedAt")}>
              Updated At
            </HeaderTitle>
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
