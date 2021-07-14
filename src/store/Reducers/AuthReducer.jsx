import { LOGIN } from "../Type";
const initialState = {
    isUserLoggedIn: false,
    user: {},
}
function AuthReducer(state=initialState, action) {

switch (action.type) {
    case LOGIN:
        return{
            ...state,
            isUserLoggedIn: true,
            user: action.payload
        };

    default:
        return state;
}
}
export default AuthReducer;