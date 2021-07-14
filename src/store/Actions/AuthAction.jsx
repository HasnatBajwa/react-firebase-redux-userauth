import { LOGIN } from "../Type";
import { auth } from "../../config/Firebase";
export const doLogin = (email, password) => async (dispatch) =>{
    try {
        const userCredential =await auth.signInWithEmailAndPassword(email, password)
        var user = userCredential.user;
        console.log(user)
        dispatch({
            type: LOGIN,
            payload: user,
        });
    } catch (error) {
        console.log("AuthActionError = ", error );
    }
}
