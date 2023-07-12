import { Link } from "react-router-dom";
import '../Styles/managerNav.css'

const ManagerNav = () => {
    return ( 
           
             <div className="managernav">
                <div className="lo">
                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="" />
             </div>
                <div className="lists">
                <ul>
                    <li><Link to="/user/">Home</Link></li>
                    <li><Link to="/user/itemslist">Items</Link></li>
                    <li><Link to="/">LOGOUT</Link></li>
                    
                </ul>
                </div>
                <div className="F">
                    <form action="">
                        <input type="Search" placeholder="Search"/>
                        <button>Search</button>
                    </form>
                </div>
             </div>
           
     );
}
 
export default ManagerNav ;