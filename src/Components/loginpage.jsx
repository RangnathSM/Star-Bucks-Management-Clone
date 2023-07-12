import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../Styles/loginpage.css'
const ManagerLogin = () => {

    let [email, setEmail]=useState("")
    let [password, setPassword]=useState("")
    let navigate=useNavigate();

    let managerLogin =(a)=>{
        a.preventDefault()
        let data ={email,password}
        if (email=="manager@gmail.com" && password==1234)
        {
            navigate('/manager/')
        }
        
        else{
            alert(`Invalid credentials`)
        }
   
    }
    return ( 
       <div className="login">
         <div className="userLogin">
            <div className="form">
                <div className="S">
                    <img src="./images/logo (1).png" alt="" />
                </div>
                <h1>MANAGER LOGIN</h1>
                <div className="form_input">
                <form action="" onSubmit={managerLogin}>
                    <div className="email">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} required placeholder="Enter email adress" onChange={(a)=>setEmail(a.target.value)} />
                    </div>
                    <div className="password">
                    <label htmlFor="">Password</label>
                    <input type="Password" value={password} required placeholder="Enter Password" onChange={(a)=>setPassword(a.target.value)} />
                    </div>
                    <button className="Mit">Login</button>
                </form>
                </div>
            </div>
        </div>
       </div>
     );
}
 
export default ManagerLogin;