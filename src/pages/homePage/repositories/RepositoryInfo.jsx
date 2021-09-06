import React from "react";
import styled from "@emotion/styled/macro";
import { Block } from "../../../common/blockStyle";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RepositoryInfo = ({ repository }) => {
   return (
      <Block>
         <p>Name: {repository.name} </p>
         <p>Description: {repository.description} </p>
         <p>HomepageUrl: {repository.homepageUrl} </p>
         <p>URL: {repository.url} </p>

      </Block>
   )

}

export default RepositoryInfo;