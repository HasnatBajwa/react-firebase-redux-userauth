import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { doLogin } from '../../store/Actions/AuthAction';


export default function UseLogin() {
    
        const [email, setemail] = useState("");
        const [password, setpassword] = useState("");
        const  dispatch = useDispatch();
        const doLoginUser = () =>{
            dispatch(doLogin(email, password));
        }

    return[setemail,setpassword,doLoginUser]

}
