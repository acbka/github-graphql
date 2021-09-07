import React from "react";
import styled from "@emotion/styled/macro";
import { Paragraph } from "../../../common/style";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
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
      <Paragraph>Name: {repository.name} </Paragraph>
      <Paragraph>Description: {repository.description} </Paragraph>
      {repository.isPrivate ? (
        <Paragraph>It is a private repository.</Paragraph>
      ) : (
        <Paragraph>
          URL:{" "}
          <a href={repository.url} target="_blank" rel="noreferrer">
            {repository.url}
          </a>{" "}
        </Paragraph>
      )}
    </Wrapper>
  );
};

export default RepositoryInfo;
