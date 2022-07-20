import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloProvider} from '@apollo/client'
import AuthContextProvider from './context/auth.context'
import './index.css'
import App from './App'
import client from './client'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
