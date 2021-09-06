/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import styled from "@emotion/styled/macro";
import { useQuery } from "@apollo/client";
import { USER_QUERY } from "../../queries/userQuery";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const UserPhoto = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;
const UserName = styled.p`
  padding: 20px 0;
  text-align: left;
`;

const UserInfo = ({ login }) => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { login: login },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :((</p>;
  const user = data.user;

  console.log(user);
  return (
    <Wrapper>
      <div>
        <UserPhoto src={user.avatarUrl} />
        <UserName>Name: {user.name ? user.name : user.login}</UserName>
        <p>{user.bio}</p>
        <p>{user.email}</p>
      </div>
      <InfoWrap></InfoWrap>
    </Wrapper>
  );
};
export default UserInfo;
