import React, { Component } from 'React';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

export default class TableComponent extends Component {
    render(){
        const {TableID, TableName} = this.props.table.item;
        return(
            <View>
                <TouchableOpacity 
                    style={styles.container}
                    onPress={() => {Alert.alert(`${TableID} -- ${TableName}`)}}
                >
                    <Text>{TableName}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 61,
        height: 61,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgb(221, 97, 97)',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});
