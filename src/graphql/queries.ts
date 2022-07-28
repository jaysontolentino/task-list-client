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

export const TASKS = gql`
query UserTasks {
  userTasks {
    id,
    task,
    description,
    created_at
  }
}
`;