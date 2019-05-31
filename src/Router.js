import {createStackNavigator, createAppContainer} from 'react-navigation';
import Splash from './components/Splash';
import LoginContainer from './containers/LoginContainer';
import HomeComponent from './components/HomeComponent';

const AppNavigator = createStackNavigator({
    //screen
    Splash: {
        screen: Splash,
    },
    Login: {
        screen: LoginContainer,
    },
    Home: {
        screen: HomeComponent
    }
},{
    //setting
    initialRouteName: 'Splash',
});

export default createAppContainer(AppNavigator);
