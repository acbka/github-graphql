import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import Repository from "./Repository";
import RepositoryInfo from "./RepositoryInfo";
import { Block } from "../../../common/style";

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
const RepositoriesArray = styled.div`
  height: 100%;
  overflow: auto;
`;

const RepositoriesBlock = ({ repositories }) => {
  const [selected, setSelected] = useState(null);

  const list = repositories.map((item, index) => (
    <Repository
      key={index}
      repository={item}
      selected={selected}
      getSelected={setSelected}
    />
  ));

  return (
    <Wrapper>
      <RepositoriesList>
        <Block>
          <Header>
            <div>Name</div>
            <div>Created At</div>
            <div>Updated At</div>
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
