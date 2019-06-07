import {connect} from 'react-redux';
import action from '../actions/index';
import HomeComponent from '../components/home/HomeComponent';

const mapStateToProps = (state) => {
    return {data: state}
};

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchAllTable: () => {
            dispatch(action.actFetchAllTable())
        }
    }
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;
