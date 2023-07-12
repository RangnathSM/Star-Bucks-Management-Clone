import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/landingPage";
import LoginPage from "./Components/loginpage"
import ManagerPortal from "./Components/managerportal";
import UserLogin from "./Components/userlogin";
import Userportal from "./Components/userportal"
import PageNotFound from "./Components/404";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage/>} />
            <Route path="/loginpage" element={<LoginPage/>} />
            <Route path='/userlogin' element={<UserLogin/>}/>
            <Route path="/manager/*" element={<ManagerPortal/>} />
            <Route path="/user/*" element={<Userportal/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
