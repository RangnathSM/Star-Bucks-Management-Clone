import { Route, Routes } from "react-router-dom";
import AddItem from "./addItems";
import ItemsList from "./itemslist";
import ManagerHome from "./managerHome";
import PageNotFound from "./404";
import ManagerNav from "./managerNav";
import UserList from "./userlist";
import Footer from "./footer";


const ManagerPortal = () => {
    return ( 
        <div className="managerportal">
            <ManagerNav/>
            <Routes>
                <Route path="/" element={<ManagerHome/>}/>
                <Route path="/itemslist" element={<ItemsList/>}/>
                <Route path="/additems" element={<AddItem/>}/>
                <Route path="/userlist" element={<UserList/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
        </div>
     );
}
 
export default ManagerPortal;