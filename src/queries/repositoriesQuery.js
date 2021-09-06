import { gql } from "@apollo/client";

export const REPOSITORIES_QUERY = gql`
  query GetUsersRepositories($numberOfRepositories: Int!, $login: String!) {
    user(login: $login) {
      repositories(
        last: $numberOfRepositories
        orderBy: { field: NAME, direction: ASC }
      ) {
        nodes {
          name
          createdAt
          updatedAt
          description
          homepageUrl
          url
        }
      }
    }
  }
`;
