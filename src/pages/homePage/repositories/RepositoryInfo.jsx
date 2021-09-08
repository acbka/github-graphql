import React from "react";
import styled from "@emotion/styled/macro";
import { Title, Paragraph } from "../style";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RepositoryInfo = ({ repository }) => {
  return (
    <Wrapper>
      <Title>Repository Info</Title>
      <div>
        <Paragraph>
          <b>Name: </b> {repository.name}{" "}
        </Paragraph>
        <Paragraph>
          <b>Description: </b> {repository.description}
        </Paragraph>
        {repository.isPrivate ? (
          <Paragraph>It is a private repository.</Paragraph>
        ) : (
          <Paragraph>
            <b> URL: </b>
            <a href={repository.url} target="_blank" rel="noreferrer">
              {repository.url}
            </a>
          </Paragraph>
        )}
      </div>
    </Wrapper>
  );
};

export default RepositoryInfo;
