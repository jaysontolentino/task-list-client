import {gql} from '@apollo/client'

export const REFRESH_TOKEN = gql`
mutation RefreshToken {
  refreshToken {
    accessToken
  }
}`

export const REGISTER = gql`
mutation Register($input: UserRegisterInput!) {
    register(input: $input) {
      id,
      name,
      email
    }
  }
`

export const LOGIN = gql`
mutation Login($input: UserLoginInput!) {
  login(input: $input) {
    access_token,
    user {
        id,
        name,
        email
    }
  }
}
`

export const LOGOUT = gql`
mutation Logout {
  logout
}
`