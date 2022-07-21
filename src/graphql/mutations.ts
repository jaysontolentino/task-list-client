import {gql} from '@apollo/client'

export const REFRESH_TOKEN = gql`
mutation RefreshToken {
  refreshToken {
    accessToken
  }
}`

export const LOGIN = gql`
mutation Login($input: UserLoginInput!) {
  login(input: $input) {
    access_token
  }
}
`