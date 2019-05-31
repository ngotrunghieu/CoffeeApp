import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import FontIcon from 'react-native-vector-icons/FontAwesome';

import HomeComponent from './HomeComponent';
import CategoryComponent from './CategoryComponent';
import UserComponent from './UserComponent';
import SettingComponent from './SettingComponent';

export const HomeStack = createStackNavigator({
    "Home": { screen: HomeComponent }
});

export const CategoryStack = createStackNavigator({
    "Category": { screen: CategoryComponent }
});

export const UserStack = createStackNavigator({
    "User": { screen: UserComponent }
});

export const SettingStack = createStackNavigator({
    "Setting": { screen: SettingComponent }
});

export const MainRouter = createBottomTabNavigator({
    HomeTab: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <FontIcon name="home" size={40} color={tintColor} />
        }
    },
    CategoryTab: {
        screen: CategoryStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <FontIcon name="book" size={40} color={tintColor} />
        }
    },
    UserTab: {
        screen: UserStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <FontIcon name="user" size={40} color={tintColor} />
        }
    },
    SettingTab: {
        screen: CategoryStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <FontIcon name="cogs" size={40} color={tintColor} />
        }
    }
},
{
    tabBarOptions: {
        activeTintColor: 'rgb(221, 97, 97)',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: 'rgb(234, 195, 176)',
        },
        showLabel: false,
        showIcon: true,
        swipeEnabled: true,
        // animationEnabled: true,
    }
});

export default createAppContainer(MainRouter);
