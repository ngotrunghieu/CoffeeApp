import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';

import Splash from './components/Splash';
import LoginContainer from './containers/LoginContainer';
import MainComponent from './components/MainComponent';

const AppNavigator = createStackNavigator({
    //screen
    Splash: {
        screen: Splash,
    },
    Login: {
        screen: LoginContainer,
    },
    Main: {
        screen: MainComponent,
    }
}, {
        //setting
        initialRouteName: 'Splash',
    });

export default createAppContainer(AppNavigator);
