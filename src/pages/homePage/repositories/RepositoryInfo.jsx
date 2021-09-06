import React from "react";
import styled from "@emotion/styled/macro";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100x;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h3`
  color: var(--color-dark);
  padding-bottom: 10px;
`;
const RepositoryInfo = ({ repository }) => {
  return (
    <Wrapper>
      <Title>Repository Info</Title>
      <p>Name: {repository.name} </p>
      <p>Description: {repository.description} </p>
      <p>
        URL:{" "}
        <a href={repository.url} target="_blank" rel="noreferrer">
          {repository.url}
        </a>{" "}
      </p>
    </Wrapper>
  );
};

export default RepositoryInfo;
