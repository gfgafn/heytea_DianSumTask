import { connect } from "react-redux";
import Login from "../../../pages/Login";
import * as Actions from '../../actions'
const mapStateToProps = (state) => {
    return { 
        loginState: state.loginState
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        login: (state) => dispatch(Actions.loginActions.getLoginFormData(state)), 
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
