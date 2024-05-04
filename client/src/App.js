import { Route, Routes, useLocation } from "react-router-dom";
import useAuth from './utils/useAuth';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Earth from "./pages/Earth";
import Neo from "./pages/Neo";
import Potd from "./pages/Potd";
import Patents from "./pages/Patents";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "../src/App.css";

function App() {

  useAuth();

  const location = useLocation();
  // Check if the current location is not "/login" or "/register"
  const showNavbar = location.pathname !== "/" && location.pathname !== "/register";

  
  return (
    <div className="bg-space overflow-x-hidden relative w-[100vw] bg-cover h-[100vh]">
      {showNavbar && (
        <div className="w-full bg-burger bg-repeat-x">
          <Navbar />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} /> 
        <Route path="/home" element={<Home/>} />
        <Route path="/earth" element={<Earth/>} />
        <Route path="/neo" element={<Neo/>} />
        <Route path="/potd" element={<Potd/>} />
        <Route path="/patents" element={<Patents/>} />
        <Route path="/about" element={<About/>} />             
      </Routes>
    </div>
  );
}


export default App;