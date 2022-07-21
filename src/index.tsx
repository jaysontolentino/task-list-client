import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloProvider} from '@apollo/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthProvider from './context/auth.context'
import './index.css'
import App from './App'
import client from './graphql/client'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApolloProvider client={client}>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </ApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
