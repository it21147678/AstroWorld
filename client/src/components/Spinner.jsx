import "./Spinner.css"
import planetGif from "../assets/images/Planet.gif";

export default function Spinner() {
  return (
    <div className="spinner">
      <img src={planetGif} alt="Loading"/>
    </div>
  );
}
