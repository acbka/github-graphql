import React from "react";
import styled from "@emotion/styled/macro";
import { useQuery } from "@apollo/client";
import { USER_QUERY } from "../../queries/userQuery";
import { formattedDate } from "../../common/formattedDate";

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
const UserName = styled.p`
  padding-top: 20px;
  text-align: left;
`;

const UserInfo = ({ login, getNumberOfRepositories }) => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { login: login },
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>User doesn't exist.</p>;
  const user = data.user;
  const date = formattedDate(user.createdAt);
  getNumberOfRepositories(user.repositories.totalCount)
   
  console.log(user);
  return (
    <Wrapper>
      <UserPhoto src={user.avatarUrl} />
      <UserName>Name: {user.name ? user.name : user.login}</UserName>
      {user.bio && <p>{user.bio}</p>}
      {user.email && <p>Email: {user.email}</p>}
      <p>On GitHub since {date}</p>
    </Wrapper>
  );
};
export default UserInfo;
