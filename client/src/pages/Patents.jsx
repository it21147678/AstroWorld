import React, { useEffect, useState } from 'react';
import { GiNotebook } from 'react-icons/gi';
import { FaDownload } from 'react-icons/fa';
import Footer from '../components/Footer';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';


// Define the api_key variable
const api_key = 'roCADWsb0gCLaFAJYRyVkHXqV6XZIcQE1vzorvIB';

// Initialize pdfMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// Patents component
const Patents = () => {
  // State variables
  const [patents, setPatents] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Function to fetch patents based on user input
  const fetchPatents = async () => {
    try {
      const response = await fetch(`https://api.nasa.gov/techtransfer/patent/${userInput}?api_key=${api_key}`);
      const data = await response.json();
      if (data.results.length > 20) {
        setPatents(data.results.splice(0, 20));
      } else {
        setPatents(data.results);
      }
    } catch (error) {
      console.log("Couldn't fetch the patent you wanted");
    }
  };

  // Function to handle input change
  const changeHandler = (event) => {
    setUserInput(event.target.value);
  };

  // Function to handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    if (patents.length === 0) {
      alert(`No matching patents with the name ${userInput}`);
      return;
    }
    const document = {
      content: [{ text: 'Patents', fontStyle: 15, lineHeight: 2 }],
      styles: { link: { color: 'blue', decoration: 'underline' } },
    };
    patents.forEach((patent) => {
      document.content.push(
        {
          columns: [
            { text: 'Title:', width: 'auto' },
            { text: patent[2], width: 'auto' },
          ],
          lineHeight: 2,
        },
        {
          columns: [
            { text: 'Image:', width: 'auto' },
            { text: patent[10], style: 'link', width: '*' },
          ],
          lineHeight: 2,
        },
        { columns: [{ text: 'Description:' }], lineHeight: 2 },
        { columns: [{ text: patent[3] }], lineHeight: 2 },
        { columns: [{ text: '-------------------------------------------------------------------------------------------------------------------------------------------------------', width: '*' }] }
      );
    });
    await pdfMake.createPdf(document).download();
  };

  // Fetch patents on component mount and when user input changes
  useEffect(() => {
    fetchPatents();
  }, [userInput]);

  return (
    <div className="bg-black bg-opacity-40 w-full min-h-screen flex flex-col lg:justify-evenly pt-2 text-white font-poppins">
      <div className="w-10/12 mx-auto gap-10 flex-col flex justify-center items-center">
        <div className="mt-8 text-center text-4xl font-bold sm:text-5xl">          
          NASA Tech Transfer Data
        </div>       
        <p><GiNotebook size="250" /></p>
        <form onSubmit={submitHandler} className="w-3/4 justify-center items-center flex flex-col gap-8">
          <input onChange={changeHandler} type="text" className="text-black w-full py-3 px-5 rounded-3xl" placeholder="Search NASA Tech Transfer Data..." />
          <button className="flex flex-row gap-2 p-4 items-center bg-white hover:bg-slate-300 text-black justify-center font-bold w-[200px] rounded-xl transition-all duration-200 ease-in">
            Download <FaDownload />
          </button>
        </form>
      </div>
      <div className='xl:mt-0 2xl:mt-44'>
        <Footer />
      </div>
    </div>
  );
};

export default Patents;


/*    NASA TechTransfer API
NASA's Technology Transfer Program ensures that innovations developed for exploration and discovery are 
broadly available to the public. The NASA patent portfolio is available to benefit US citizens. Through 
partnerships and licensing agreements with industry, these patents ensure that NASA’s investments in pioneering 
research find secondary uses that benefit the economy, create jobs, and improve quality of life. This endpoint 
provides structured, searchable developer access to NASA’s patents, software, and technology spinoff 
descriptions that have been curated to support technology transfer.*/