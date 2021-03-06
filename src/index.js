import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink } from 'apollo-link';

import constants from './constants';

const serviceId = require('./config/keys').serviceID;
const GRAPHQL_ENDPOINT = `https://api.graph.cool/simple/v1/${serviceId}`;
const SUBSCRIPTIONS_ENDPOINT = `wss://subscriptions.graph.cool/v1/${serviceId}`;

if (!SUBSCRIPTIONS_ENDPOINT) {
    throw Error('Provide a GraphQL Subscriptions endpoint');
}

if (!GRAPHQL_ENDPOINT) {
    throw Error('Provide a GraphQL endpoint');
}

const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT
});

const apolloLinkWithToken = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem(constants.shortlyToken);
    const authHeader = token ? `Bearer ${token}` : null;
    operation.setContext({
        headers: {
            authorization: authHeader,
        },
    });
    return forward(operation);
});

const httpLinkWithToken = apolloLinkWithToken.concat(httpLink);

const wsLink = new WebSocketLink({
    uri: SUBSCRIPTIONS_ENDPOINT,
    options: {
        reconnect: true
    }
});

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLinkWithToken,
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

const withApolloProvider = Comp => (
    <ApolloProvider client={client}>{Comp}</ApolloProvider>
);

ReactDOM.render(
    withApolloProvider(<AppRouter />), 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
