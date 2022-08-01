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

export const ADD_TASK = gql`
mutation AddTask($input: InputAddTask!) {
  addTask(input: $input) {
    id,
    task,
    description,
    complete,
    created_at
  }
}
`;

export const COMPLETE_TASK = gql`
mutation CompleteTask($id: String!) {
  completeTask(id: $id) {
  	id,
    task,
    complete
  }
}
`;

export const UPDATE_TASK = gql`
mutation UpdateTask($payload: InputUpdateTask!, $id: String!) {
  updateTask(payload: $payload, id: $id) {
    id,
    task,
    description,
    complete
  }
}
`;

export const DELETE_TASK = gql`
mutation DeleteTask($id: String!) {
  deleteTask(id: $id) {
  	id,
    task,
    complete
  }
}
`;