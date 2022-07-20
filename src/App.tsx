import {useQuery, gql, useMutation} from '@apollo/client'
import React, { useState } from 'react';
import { REFRESH_TOKEN } from './client';

const ME = gql`
query Me {
  me {
    email,
    user_id
  }
}
`

const LOGIN = gql`
mutation Login($input: UserLoginInput!) {
  login(input: $input) {
    access_token
  }
}
`


function App() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const {loading, error, data} = useQuery(ME)

  const [login, {loading: loginLoading, data: loginData}] = useMutation(LOGIN, {
    mutation: REFRESH_TOKEN
  })

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    login({variables: {input: {
      email,
      password
    }}})
  }

  return (
    <div className="App">
      <h1 className='font-2x text-blue-400'>React App</h1>

      {loading && <span>Loading...</span>}

      {error && <span>{JSON.stringify(error)}</span>}

      {data && <pre>{JSON.stringify(data)}</pre>}

      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange} />
        <input type="password" value={password} onChange={handlePasswordChange} />

        <button type="submit">{loginLoading ? 'Loading...' : 'submit'}</button>

        {loginData && <div>{JSON.stringify(loginData)}</div>}
      </form>
    </div>
  );
}

export default App;
