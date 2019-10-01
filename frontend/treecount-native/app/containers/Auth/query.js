import gql from 'graphql-tag';

export const GET_ALL_USERS_EMAIL = gql`
  query {
    users {
      email
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
      email
    }
  }
`;
