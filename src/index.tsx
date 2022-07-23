import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloProvider} from '@apollo/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App'
import client from './graphql/client'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
);
