import Home from "./pages/home/Home";
import Topbar from "./Components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,

} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
function App() {
  const user = false;
  return (
    <Router>
     <Topbar />
     <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route exact path ="/register" element={user ? <Home/> : <Register/>}/>
      <Route exact path ="/login" element={user ? <Home/> : <Login/>}/>
      <Route exact path ="/setting" element={user ? <Settings/> : <Register/>}/>
      <Route exact path ="/write" element={user ? <Write/> : <Register/>}/>
      <Route exact path ="/post/:postId" element={<Single/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
