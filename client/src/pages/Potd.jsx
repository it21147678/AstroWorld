import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import "../App.css";

const api_key = `roCADWsb0gCLaFAJYRyVkHXqV6XZIcQE1vzorvIB`;

export default function Potd() {
  const [video, setVideo] = useState(false); // State for video type
  const [potd, setPotd] = useState([]); // State for picture of the day data
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [date, setDate] = useState(""); // State for selected date

  // Function to handle date change
  const handleChange = (e) => {
    setDate(e.target.value);
  };

  // Function to fetch picture of the day data from NASA API
  const fetchData = () => {
    setLoading(true);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.media_type === "video") {
          setVideo(true);
        } else {
          setVideo(false);
        }
        setPotd(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw new Error("Error fetching data. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Fetch data on component mount and whenever date changes
  useEffect(() => {
    fetchData();
  }, [date]);

  return (
    <div className="flex flex-col bg-cover min-h-screen font-poppins text-white">
      {/* Date picker section */}
      <div className="mx-auto mt-8 flex items-center">      
        <div className="sm:flex-row sm:flex">
          <p className="ml-8 mb-1 sm:mb-0 sm:mr-5 mt-2">Enter a Date</p>
          <input type="date" value={date} onChange={handleChange} className="text-black rounded-md p-2 mr-2" placeholder="Enter a Date"/>
        </div>
      </div>

      {/* Picture of the day section */}
      <div className="mx-auto mt-9 rounded-3xl bg-white bg-opacity-5 w-10/12">
        <div className="w-10/12 mt-8 mx-auto">
          <p className="text-2xl sm:text-4xl text-center font-semibold">PICTURE OF THE DAY</p>
          <div className="bg-slate-800 h-1 w-2/12 mx-auto"></div>
        </div>
        <div className="w-10/12 relative flex flex-col gap-10 justify-center items-center mx-auto">
          {/* Display picture of the day title */}
          <p className="text-2xl sm:text-6xl text-center font-bold potd-header">{potd.title}</p>

          {/* Display loading spinner or image/video */}
          {loading ? (
            <Spinner />
          ) : video ? (
            <video controls width="100%" height="65%">
              <source src={potd.url} />
              Your Browser can't play the Video :-(
            </video>
          ) : (
            <img alt="picoftheday" className="rounded-xl w-auto" src={potd.url} />
          )}

          {/* Display explanation of picture of the day */}
          <p className="font-poppins text-center text-sm sm:text-lg mb-5">{potd.explanation}</p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
