import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import Repository from "./Repository";

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

  return <div> <Wrapper>
  <Header>
    <div>Name</div>
    <div>Created At</div>
    <div>Updated At</div>
  </Header>
  <RepositoriesArray>
   {list}
  </RepositoriesArray>
</Wrapper></div>;
};
export default RepositoriesBlock;
