/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reduecers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';
import AppNavigator from './src/Router';
import {name as appName} from './app.json';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

export default class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);
sagaMiddleware.run(rootSaga);
