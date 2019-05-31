import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';


class LogoComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../asset/images/logocoffee.png')} style={styles.logo} />
            </View>
        )
    }
}

export default LogoComponent;

const styles = StyleSheet.create({
    container: {
        flex: 5, //50% column
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        // tintColor: 'rgb(221, 97, 97)'
    },
})
