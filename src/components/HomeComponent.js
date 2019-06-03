import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class HomeComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Home component</Text>
            </View>
        )
    }
}

export default HomeComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(234, 195, 176)',
    }
});