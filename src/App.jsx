import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import DashBoard from "./component/DashBoard.jsx";
import Login from "./component/Login.jsx";
import Logout from "./component/Logout.jsx";
import Navbar from "./component/Navbar.jsx";
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/dashboard",
    element:<DashBoard/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/logout",
    element:<Logout/>
  },
  
])
function App() {

  return (
    <>
    <Navbar/>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
