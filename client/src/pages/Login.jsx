import React, { useState, useRef ,useEffect  } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moon from '../assets/images/planet.png'

export default function Login() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()
  const loginFormRef = useRef(null);

  useEffect(() => {
    // Start the typing effect animation
    startTypingAnimation();
  }, []);

  // Function to simulate typing animation
  const startTypingAnimation = () => {
    const text = "Embark on an awe-inspiring adventure through the cosmos...";
    const typingEffectElement = document.getElementById("typing-effect");
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        typingEffectElement.textContent += text[index];
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 90);
  };


  const handleLogin = (e) => {
    e.preventDefault();
  
    const user = {
      Email,
      Password
    };
  
    axios.post("https://astroworld-production.up.railway.app/auth/", user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("authToken", response.data.token);
       localStorage.setItem("userData", JSON.stringify(response.data.user));
        navigate('/home');
      })
      .catch((error) => {
        toast.error('Inputs are Incorrect', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }

  const scrollToLoginForm = () => {
    // Scroll to the login form container
    loginFormRef.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="font-poppins bg-black">
      <div className="flex justify-between items-center h-screen ">
        <div className="flex flex-col items-start ml-5  sm:ml-44">
          <h1 className="text-white text-xl sm:text-3xl font-semibold mt-52 sm:mt-0">Discover What the Stars Hold for You.</h1>
          <p className="hidden text-white sm:block pt-2" id="typing-effect"></p>
        </div>
        <div className="flex flex-col items-center">
          <img src={moon} alt="comet" className="mr-16 -mt-20 sm:-mt-0 w-96  sm:mr-40" />
        </div>
      </div>
    <div ref={loginFormRef} className="flex flex-col items-center justify-center min-h-screen bg-cover " >
      <div className="absolute top-0 left-0 right-0 flex justify-between px-4 py-2">
      <a href="/" className="mt-3 ml-12 md:mt-5 md:ml-4 flex font-mono text-4xl font-bold text-white"><span className="flicker-slow " >Astro</span><span className="flicker-fast block sm:inline"> Verse</span></a>
        <div className="absolute right-0 flex justify-between px-4 py-2 space-x-4 top-4 ">
          <button className="hidden sm:block px-5 py-2 font-semibold bg-white hover:bg-gray-200 text-black rounded-lg" onClick={scrollToLoginForm}>Login</button>
          <button className="hidden sm:block px-4 py-2 font-semibold bg-white hover:bg-gray-200 text-black rounded-lg" onClick={() => window.location.href = '/register'}>Signup</button>
        </div>
      </div>
      <div className="w-full max-w-sm p-8 bg-white bg-opacity-50 rounded-lg shadow-lg md:max-w-md mt-20 mb-10 lg:mt-12 lg:mb-5 ml-2 mr-2">
        <h1 className="mb-4 text-3xl font-bold text-center md:text-4xl">Login</h1>
        <form className="space-y-4" onSubmit={handleLogin}> 
          <div>
            <label className="block mb-1 text-lg font-semibold md:text-xl" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 text-base border border-gray-300 rounded-md md:text-lg focus:outline-none focus:border-blue-500" type="email" id="email" name="email" placeholder="Enter your email" onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
          </div>
          <div>
            <label className="block mb-1 text-lg font-semibold md:text-xl" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 text-base border border-gray-300 rounded-md md:text-lg focus:outline-none focus:border-blue-500" type="password" id="password" name="password" placeholder="Enter your password" onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
          </div>
          <button type="submit" className="w-full px-2 py-2 text-lg text-white font-bold transition duration-300 bg-black hover:bg-stone-900 rounded-md md:text-xl ">Login</button>
  
          <div className="mt-4 text-center text-gray-800">
            <span className="block mb-2 text-black">Don’t have an account?</span>
            <a href="/register" className="text-white hover:underline">Signup here</a>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
    </div>
  );
  
}
