import { connect } from 'react-redux';
import {atcLogin} from '../actions/index';
import LoginComponent from '../components/login/LoginComponent';

const mapStateToProps = (state) =>{
    return {data: state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitLogin: (userName, password) => {
            dispatch(atcLogin(userName, password))
        }
    }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default LoginContainer;

