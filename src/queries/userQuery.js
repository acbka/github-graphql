import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query GetUserByLogin($login: String!) {
    user(login: $login) {
      id
      name
      login
      email
      avatarUrl
      createdAt
      repositories {
        totalCount
      }
    }
  }
`;
