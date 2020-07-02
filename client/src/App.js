import React from 'react';
import GlobalStyle from './styles/global';
import SessionComment from './pages/SessionComment';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './services/api'

function App() {
  return (
    <>
      <ApolloProvider client={client}> 
        <SessionComment/>
        <GlobalStyle/>
      </ApolloProvider>
   </>
  );
}

export default App;
