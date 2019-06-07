/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';
import AppNavigator from './src/Router';
import {name as appName} from './app.json';

const sagaMiddleware = createSagaMiddleware();
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let store = createStore(
                        allReducers, applyMiddleware(sagaMiddleware)
                        // compose(applyMiddleware(sagaMiddleware), reduxDevTools)
                        );

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
