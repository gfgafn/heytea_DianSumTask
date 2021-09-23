import { connect } from "react-redux";
import Register from "../../../pages/Register";
import * as Actions from '../../actions'
const mapStateToProps = (state) => {
    return { 
        registerState: state.registerState
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        register: (registerFormdata) => dispatch(Actions.registerActions.getRegisterFormData(registerFormdata)), 
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);