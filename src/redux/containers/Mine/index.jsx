import { connect } from "react-redux";
// import { showUserInfoAction } from "../../actions/Mine/index";
import * as Actions from '../../actions'
import Mine from "../../../pages/Mine";


// mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (state) => {
    return { 
        userInfo: state.showUserInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showUserInfo: () => dispatch(
            Actions.mineActions.showUserInfoAction()
        )  
    };
};
// 使用connect()()方法创建并暴露容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Mine);
