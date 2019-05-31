import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MainRouter from './Router';

class MainComponent extends Component{
    static navigationOptions = {
        header: null,
    }
    render(){
        return(
            <MainRouter/>
        )
    }
}

export default MainComponent;
