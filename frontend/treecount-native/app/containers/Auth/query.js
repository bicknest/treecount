import gql from 'graphql-tag';

export const GET_ALL_USERS = gql`
  query {
    users {
      email
    }
  }
`;