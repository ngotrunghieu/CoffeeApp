import React, {Component} from 'react';
import {
    View
    , StyleSheet
    , Animated
    , Dimensions
} from 'react-native';

// var {height, width} = Dimensions.get('window');
export default class Splash extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        logoOpacity: new Animated.Value(0)
    };

    async componentDidMount(){
        Animated.sequence([
            Animated.timing(this.state.logoOpacity,
                {
                    toValue: 1,
                    duration: 1500,
                })
        ]).start(() => {
            //end of animations
            this.props.navigation.navigate('Login');
        })
    }
    render(){
        return (
            <View style={styles.container}>
                <Animated.Image source={require('../asset/images/logocoffee.png')}
                    style={{...styles.logo, opacity: this.state.logoOpacity}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(234, 195, 176)'
    },
    logo: {
        width: 130,
        height: 130,
        borderRadius: 130/2,
    },
    title: {
        color: 'rgb(221, 97, 97)',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    }
});

