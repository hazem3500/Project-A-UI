import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import App from './app/app.jsx'

import apolloClient from './app/apolloClient'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
	    <ApolloProvider client={apolloClient}>
            <App />
	    </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('container'));
