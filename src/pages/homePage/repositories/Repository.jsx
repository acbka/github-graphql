import React from "react";
import styled from "@emotion/styled/macro";
import { formattedDate } from "../../../common/formattedDate";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: inset 0px -1px 0px #f59bff;
  cursor: pointer;
  background: ${(props) =>
    props.isActive ? "var(--color-superlight)" : "transparent"};
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`;
const RepositoryWrap = styled.div`
  padding: 20px 0;
`;
const UpdateWrap = styled.div`
  padding: 20px 0;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Repository = ({ repository, selected, getSelected }) => {
  const createdDate = formattedDate(repository.createdAt);
  const updatedDate = formattedDate(repository.updatedAt);
  return (
    <Wrapper
      onClick={() =>
        getSelected(selected === repository.id ? null : repository.id)
      }
      isActive={selected === repository.id}
    >
      <RepositoryWrap>{repository.name}</RepositoryWrap>
      <RepositoryWrap>{createdDate}</RepositoryWrap>
      <UpdateWrap>{updatedDate}</UpdateWrap>
    </Wrapper>
  );
};
export default Repository;
