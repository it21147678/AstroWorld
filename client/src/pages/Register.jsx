import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import backIndex from '../assets/images/pixelated-space.jpg';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {

  const [Fullname, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [JobStatus, setJobStatus] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()

  const [setErrorMessage] = useState("");
  
const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8070/auth/register', { Fullname, Email, JobStatus, Password })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
        if (err.response && err.response.data && err.response.data.error) {
          // Set error message if response contains error message
          toast.error(err.response.data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          // Set a generic error message
          setErrorMessage("An error occurred while processing your request.");
        }
      });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: `url(${backIndex})` }}>
      <div className="absolute top-0 left-0 right-0 flex justify-between px-4 py-2">
        <a href="/" className="mt-3 ml-12 md:mt-5 md:ml-4 flex font-mono text-4xl font-bold text-white">
          <span className="flicker-slow">Astro</span><span className="flicker-fast block sm:inline"> Verse</span>
        </a>
        <div className="absolute right-0 flex justify-between px-4 py-2 space-x-4 top-4">
          <button className="hidden sm:block px-5 py-2 font-semibold bg-white hover:bg-gray-200 text-black rounded-lg" onClick={() => window.location.href = '/'}>Login</button>
          <button className="hidden sm:block px-4 py-2 font-semibold bg-white hover:bg-gray-200 text-black rounded-lg" onClick={() => window.location.href = '/register'}>Signup</button>
        </div>
      </div>
      <div className="w-full max-w-sm p-8 bg-white bg-opacity-50 rounded-lg shadow-lg md:max-w-md mt-20 mb-10 lg:mt-24 lg:mb-12 ml-2 mr-2 ">
        <h1 className="mb-4 text-4xl font-bold text-center">Sign up</h1>
        <form className="space-y-4 " onSubmit={handleSubmit}>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="fullname">Fullname</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="fullname" name="fullname" placeholder="Enter your fullname" 
                onChange={(e)=>{
                  setName(e.target.value);
                }} required/>
            </div>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="email" id="email" name="email" placeholder="Enter your email" onChange={(e)=>{
                  setEmail(e.target.value);
                }} required/>
            </div>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="jobstatus">Job Status</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" id="jobstatus" name="jobstatus" placeholder="Enter your job status" onChange={(e)=>{
                  setJobStatus(e.target.value);
                }} required/>
            </div>
            <div>
                <label className="block mb-1 text-xl font-semibold" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="password" id="password" name="password" placeholder="Enter your password" onChange={(e)=>{
                  setPassword(e.target.value);
                }} required/>
            </div>
            
            <button type="submit" className="w-full px-2 py-2 text-lg text-white font-bold transition duration-300 bg-black hover:bg-stone-900 rounded-md md:text-xl ">Sign up</button>

            <div className="mt-4 text-center text-gray-800">
              <span className="block mb-2 text-black">If you already have an account?</span>
              <a href="/" className="text-white hover:underline">Login here</a>
            </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}