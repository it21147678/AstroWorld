export default function Danger({ast}){

 
  let name=ast.name;
  let isHazardous=ast.is_potentially_hazardous_asteroid;
  let dateTime=ast.close_approach_data[0].close_approach_date_full;
  let arr=dateTime.split(" ");
  let time=arr[1];
  
  let relativeVelocity=ast.close_approach_data[0].relative_velocity.kilometers_per_second;
  let missDistance=ast.close_approach_data[0].miss_distance.astronomical;
  let url=ast.nasa_jpl_url;
  
  return(
    <>
    <div className="flex w-6/7 sm:w-8/12 font-poppins  font-medium text-sm sm:text-lg p-4 mt-5 flex-col md:flex-row justify-between">
      {/*Left section */}
      <div className="flex-col items-start">
        <p>Name:{name}</p>
        <p>Hazardous: {
          isHazardous?(
            <span className="text-red-600">True</span>
          ):(
            <span className="text-green-500">False</span>
          )
        }
        </p>
        <p>Time: {time}</p>
      </div>
      {/*right section*/}
      <div className="flex-col items-start">
        <p>Relative Velocity: {relativeVelocity} km/s</p>
        <p>Miss Distance: {missDistance} Au</p>
        <a href={url} className="text-blue-500 underline ">Learn more</a>
      </div>
    </div>
    <div className="w-8/12 bg-slate-800 h-1 "></div>
    </>
  );
}