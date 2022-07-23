import {gql} from '@apollo/client'

export const PROFILE = gql`
query Profile {
    user {
      email,
      name,
      id
    }
  }
`