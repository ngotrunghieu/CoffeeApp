import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class FloorComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgb(221, 97, 97)',
        height: 45
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10
    }
});