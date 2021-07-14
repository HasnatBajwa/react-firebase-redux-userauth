import './LoginPage.css';
import UseLogin from './UseLogin';
function LoginPage() {
const [setemail,setpassword,doLoginUser] = UseLogin();
	return (
		<div>
			<div id="UserContainer">
				<h3>User Name :</h3>
				<input className="user" type="text"  placeholder="Enter Email" onChange={(e)=>setemail(e.target.value)} />
				<h3>Password :</h3>
				<input className="user" type="password" placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)} />
                <br /><br /><button id="login-btn" onClick={doLoginUser}>Login</button> <button id="signup-btn">SignUp</button>
			</div>
		</div>
	);
}
export default LoginPage;
