import {Link} from 'react-router-dom'
import '../Styles/landingPage.css'
const Landingpage = () => {
    return ( 
        <div className="landingPage">
            <div className="logo">
                <img src="./images/Starbucks-Logo.jpg" alt="" />
            </div>
            <div className="botn">
             <button><Link to='/loginpage' className='' >MANAGER</Link></button>
            </div>
            <div className="btn">
            <button><Link to='/userlogin'>USER</Link></button>
            </div>
        </div>
     );
}
 
export default Landingpage;