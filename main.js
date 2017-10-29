import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import "babel-polyfill";

import styles from './app/styles/height-fix.css'

import App from './app/app.jsx'

import apolloClient from './app/apolloClient'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter className='height'>
	    <ApolloProvider client={apolloClient} className='height'>
            <App />
	    </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('container'));
