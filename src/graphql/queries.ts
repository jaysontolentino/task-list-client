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
    complete,
    created_at
  }
}
`;

export const GET_TASK = gql`
query GetTaskByID($id: String!) {
  getTask(id: $id) {
    id,
    task,
    description,
    complete,
    created_at
  }
}
`;