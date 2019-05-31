/**
 * Sample React Native LoginComponent
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet
  , View
  , TouchableWithoutFeedback
  , Keyboard
  , TextInput
  , TouchableOpacity
  , Text
  , Alert
} from 'react-native';

import LogoComponent from './LogoComponent';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
			username: '',
			password: '',
			status: false,
			message: ''
		}
  }

  static navigationOptions = {
    header: null
  };

  _onPress = (username, password) => {
    this.props.onSubmitLogin(username, password);
  
		// this.setState({
		// 	status: LoginReducer.status,
		// 	message: LoginReducer.message
		// });

		// const {status, message} = this.state;
		// if (status === true) {
		// 	this.setState({
    //     status: false,
    //     message: ''
    //   });
    //   Alert.alert('dung roi')
		// } else {
    //   this.setState({
    //     status: false,
    //     message: ''
    //   });
		// 	Alert.alert('sai roi')
		// }
  }
  
  render() {
    const {LoginReducer} = this.props.data;

    return (
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <LogoComponent />
          <View style={styles.form}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                returnKeyType='Next'
                autoCorrect={false}
                placeholder={'Enter your Username'}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
                onChangeText={(text) => this.setState({ username: text })}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder={'Enter your password'}
                secureTextEntry={true}
                returnKeyType='Go'
                autoCorrect={false}
                ref={"txtPassword"}
                onChangeText={(text) => this.setState({ password: text })}
              />
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                const { username, password } = this.state;
                this._onPress(username, password);
              }}
            >
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(234, 195, 176)',
  },
  form: {
		flex: 5, //50% column
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	textInputContainer: {
		paddingHorizontal: 10,
		borderRadius: 6,
		marginTop: 20,
		backgroundColor: 'rgba(255, 255, 255, 0.2)' //a = alpha = opacity = 0.5
	},
	textInput: {
		width: 280,
		height: 45
	},
	loginButton: {
		width: 300,
		height: 45,
		backgroundColor: 'rgb(221, 97, 97)',
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	loginButtonTitle: {
		fontSize: 18,
		color: 'white'
	},
});
