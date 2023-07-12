import {useNavigate} from 'react-router-dom'
import '../Styles/userlogin.css'
const UserLogin = () => {
    let navigate=useNavigate()
    let userLogin = ()=>{
           navigate('/user/')
    }
    return ( 
        <div className="login">
            <div className="userLogin">
            <div className="form">
            <div className="S">
                    <img src="./images/logo (1).png" alt="" />
                </div>
                <h1>USER LOGIN</h1>
                <div className="form_input">
                <form action="" onSubmit={userLogin}>
                    <div className="email">
                    <label htmlFor="">Email</label>
                    <input type="email"  required placeholder="Enter email adress"  />
                    </div>
                    <div className="password">
                    <label htmlFor="">Password</label>
                    <input type="Password" required placeholder="Enter Password"  />
                    </div>
                    <button className="Mit">Login</button>
                </form>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default UserLogin;