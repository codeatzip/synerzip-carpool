import React, { Component } from 'react';

import { Provider } from 'react-redux';

import RouterConfigComponent from './RouterConfigComponent';

import { applyMiddleware, createStore } from 'redux'
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import CombinedReducers from './js/reducers/CombinedReducers'

const middleware = applyMiddleware(promise(), thunk, logger())

const store = createStore(CombinedReducers, middleware)

export default class App extends Component {
    render() {
         return (
             <Provider store={store}>
                <RouterConfigComponent />
            </Provider>
        )
    }
}