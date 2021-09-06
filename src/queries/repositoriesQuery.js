import { gql } from "@apollo/client";

export const REPOSITORIES_QUERY = gql`
  query GetUsersRepositories($numberOfRepos: Int!, $login: String!) {
    user(login: $login) {
      repositories(
        last: $numberOfRepos
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


