import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const serviceId = require('./config/keys').serviceID;
const GRAPHQL_ENDPOINT = `https://api.graph.cool/simple/v1/${serviceId}`;

if (!GRAPHQL_ENDPOINT) {
    throw Error('Provide a GraphQL endpoint');
}

const client = new ApolloClient({
    link: new HttpLink({
        uri: GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
});
const withApolloProvider = Comp => (
    <ApolloProvider client={client}>{Comp}</ApolloProvider>
  );

ReactDOM.render(
    withApolloProvider(<App />), 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
