import React from "react";
import styled from "@emotion/styled/macro";
import { formattedDate } from "../../../common/formattedDate";
import { Paragraph } from "../style";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserPhoto = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
`;
const UserInfo = ({ user }) => {
  const date = formattedDate(user.createdAt);

  return (
    <Wrapper>
      <UserPhoto src={user.avatarUrl} />
      <Paragraph>Name: {user.name ? user.name : user.login}</Paragraph>
      {user.bio && <p>{user.bio}</p>}
      {user.email && <p>Email: {user.email}</p>}
      <Paragraph>On GitHub since {date}</Paragraph>
      <Paragraph>
        URL:{" "}
        <a href={user.url} target="_blank" rel="noreferrer">
          {user.url}
        </a>{" "}
      </Paragraph>
    </Wrapper>
  );
};
export default UserInfo;
