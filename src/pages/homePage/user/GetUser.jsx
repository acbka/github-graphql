import React from "react";
import { useQuery } from "@apollo/client";
import { USER_QUERY } from "../../../queries/userQuery";
import UserInfo from "./UserInfo"
import Spinner from "../../../components/Spinner";

const GetUser= ({ login, getNumberOfRepositories  }) => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { login: login },
  });
  if (loading) return <Spinner /> ;
  if (error) return <p>User doesn't exist.</p>;
  const user = data.user;
  getNumberOfRepositories(user.repositories.totalCount);

  return <UserInfo user={user} />;
};
export default GetUser;
