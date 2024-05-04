import { useEffect, useState } from "react";
import Danger from "../components/Danger";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

// Constants for API endpoints and API key
const API_KEY = "roCADWsb0gCLaFAJYRyVkHXqV6XZIcQE1vzorvIB";

export default function Earth() {
  const [asteroid, setAsteroid] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const [count, setCount] = useState(0);

  // Fetches near-earth objects from NASA API
  async function fetchAsteroids() {
    setLoading2(true);
    try {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${getFormattedDate()}&end_date=${getFormattedDate()}&api_key=${API_KEY}`);
      const data = await response.json();
      if (!data) {
        alert("Could not get near earth objects, server error");
        return;
      }
      setCount(data.element_count);
      setAsteroid(data.near_earth_objects[getFormattedDate()]);
    } catch (error) {
      alert("Error while fetching the near earth objects, server error");
    } finally {
      setLoading2(false);
    }
  }


  // Converts current date to ISO string
  function getFormattedDate() {
    const astDate = new Date();
    return astDate.toISOString().split("T")[0];
  }


  // Fetch data on component mount
  useEffect(() => {
    fetchAsteroids();
  }, []);

  return (
    <div className="h-full w-full">     

      {/* Near Earth Objects Section */}
      <div className="bg-white bg-opacity-5 flex flex-col items-center h-auto text-white w-10/12 mx-auto mt-10 gap-4 rounded-3xl py-10 font-poppins ">
        <div>
          <p className="sm:text-4xl text-2xl px-2 font-bold">Near Earth Objects</p>
        </div>
        <p className="text-center text-lg md:text-2xl font-bold">Total Count : {count}</p>
        <div className="w-8/12 mt-4 sm:mt-0 bg-slate-800 h-1"></div>
        {loading2 ? <Spinner /> : asteroid.map(ast => <Danger key={ast.id} ast={ast} />)}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
