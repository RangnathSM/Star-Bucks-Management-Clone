import { Routes,Route } from "react-router-dom";
import UserNavbar from "./userNavbar";
import UserHome from "./userHome"
import ItemsList from "./itemslist";
import PageNotFound from "./404";
import Footer from "./footer";
const UserPortal = () => {
    return ( 
        <div className="userHome">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserHome/>} />
                <Route path="/itemslist" element={<ItemsList/>} />
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
        </div>
     );
}
 
export default UserPortal;
