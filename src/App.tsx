import {useQuery, gql} from '@apollo/client'

const ME = gql`
query Me {
  me {
    email,
    user_id
  }
}
`;

function App() {

  const {loading, error, data} = useQuery(ME)

  return (
    <div className="App">
      <h1 className='font-2x text-blue-400'>React App</h1>

      {loading && <span>Loading...</span>}

      {error && <span>{JSON.stringify(error)}</span>}

      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
}

export default App;
