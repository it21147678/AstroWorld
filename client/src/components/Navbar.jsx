import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";

export default function Navbar(){
  const [pressed,setPress]=useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
   // Clear any stored authentication tokens or user data from local storage
   localStorage.clear();
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Redirect the user to the login page or any other desired page
  navigate('/');
  };

  return(

    <div className="font-poppins">
      <div className="w-10/12 mx-auto flex flex-row  justify-between items-center">

          <div className="mt-3">
            <Link to="./home">
              <img className="w-[100px] rounded-full" src="../earth1.webp" alt="Logo Here" />
            </Link>
          </div>

        <div className="text-white text-lg relative flex font-semibold">

          <div className="hidden sm:flex  flex-row items-center space-x-4">
            <Link to="./home">
              <p className="hover:text-[#9fc5f7] hover:font-bold hover:text-2xl transiton-all duration-200 ease-in">Home</p>
            </Link>

            <Link to="./earth">
              <p className="hover:text-[#9fc5f7] hover:font-bold hover:text-2xl transiton-all duration-200 ease-in">Earth</p>
            </Link>

            <Link to="./neo">
              <p className="hover:text-[#9fc5f7] hover:font-bold hover:text-2xl transiton-all duration-200 ease-in">NEO</p>
            </Link>

            <Link to="./potd">
              <p className="hover:text-[#9fc5f7] hover:font-bold hover:text-2xl transiton-all duration-200 ease-in">POTD</p>
            </Link>

            <Link to="./patents">
              <p className="hover:text-[#9fc5f7] hover:font-bold hover:text-2xl transiton-all duration-200 ease-in">Patents</p>
            </Link>
            <div className=" pl-10">            
              <button className="-mr-10 hidden sm:block px-4 py-2 bg-white hover:bg-gray-200 text-black rounded-xl text-base" onClick={handleSignOut}>Sign out</button>
            </div>
          </div>
   
          <div onClick={()=>setPress(true)} className="sm:hidden cursor-pointer">
            <GiHamburgerMenu className={pressed?("hidden "):("block")} color="white" size="25"/>
          </div>

          <div onClick={()=>setPress(false)} className="sm:hidden cursor-pointer">
          <ImCross className={pressed?("block "):("hidden")} color="white" size="20"/>
          </div> 

        </div>
      </div>

      <div className={pressed?("flex transition-all duration-300 ease-in bg-stone-500 flex-col items-center justify-center sm:hidden text-white font-bold"):("hidden")}>

        <Link className="py-3  hover:bg-burger w-full flex justify-center hover:text-[#9fc5f7] hover:font-bold hover:text-2xl  transition-all duration-300 ease-in" to="./home">Home</Link>        
        <Link className="py-3 hover:bg-burger w-full flex justify-center hover:text-[#9fc5f7] hover:font-bold hover:text-2xl transition-all duration-300 ease-in" to="./earth">Earth</Link>        
        <Link className="py-3 hover:bg-burger w-full flex justify-center hover:text-[#9fc5f7] hover:font-bold hover:text-2xl transition-all duration-300 ease-in" to="./neo">NEO</Link>        
        <Link className="py-3 hover:bg-burger w-full flex justify-center hover:text-[#9fc5f7] hover:font-bold hover:text-2xl  transition-all duration-300 ease-in" to="./potd">Potd</Link>        
        <Link className="py-3  hover:bg-burger w-full flex justify-center hover:text-[#9fc5f7] hover:font-bold hover:text-2xl transition-all duration-300 ease-in" to="./patents">Patents</Link>    
        <button className="mt-6 rounded-xl mb-4 px-4 py-2 bg-white hover:bg-slate-300 text-black" onClick={handleSignOut}>Sign out</button>
    
      </div>
    </div>
    


  );
}
