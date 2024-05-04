import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

// Constants for API endpoints and API key
const EPIC_URL = "https://api.nasa.gov/EPIC/api/natural/images";
const API_KEY = "roCADWsb0gCLaFAJYRyVkHXqV6XZIcQE1vzorvIB";

export default function Earth() {
  const [url, setUrl] = useState("");
  const [loading1, setLoading1] = useState(false);



  // Fetches latest Earth image from NASA EPIC API
  async function fetchEarth() {
    setLoading1(true);
    try {
      const response = await fetch(`${EPIC_URL}?api_key=${API_KEY}`);
      const data = await response.json();
      const earthImage = data[0].image;
      const dateTime = data[0].date;
      const date = dateTime.split(" ")[0].split("-");
      const res = await fetch(`https://api.nasa.gov/EPIC/archive/natural/${date[0]}/${date[1]}/${date[2]}/png/${earthImage}.png?api_key=${API_KEY}`);
      setTimeout(() => {
        setUrl(res.url);
        setLoading1(false);
      }, 2000);
    } catch (error) {
      alert("Error while fetching the earth image, server error");
    }
  }

  // Downloads the Earth image
  const downloadFile = () => {
    const fileName = 'Earth-latest-image.png';
    fetch(`${url}`)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => alert("Error while downloading the file, server error"));
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchEarth();
  }, []);

  return (
    <div className="h-full w-full font-poppins">
      {/* Earth Image Section */}
      <div className="flex flex-col items-center h-auto text-white w-10/12 mx-auto mt-10 gap-10 rounded-3xl py-10 font-bold">
        <p className="sm:text-4xl text-2xl px-2">Our Sweet Home</p>
        {loading1 ? <Spinner /> : <img loading="lazy" alt="earth" src={url} className="w-auto sm:w-1/2 rounded-3xl " />}
        <button onClick={downloadFile} className="flex flex-row gap-2 px-8 py-4 items-center justify-center bg-white hover:bg-slate-300 text-black rounded-xl transition-all duration-200 ease-in">
          Download <FaDownload />
        </button>
      </div>  

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
