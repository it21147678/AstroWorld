import "../App.css"
export default function Home(){
  return (
    <div className="relative">   
       <div className="font-poppins w-full text-white sm:text-6xl  text-5xl font-bold  grid 
       h-[65vh] md:h-[79vh] lg:h-[69vh] 2xl:h-[79vh] place-items-center">
          <div className="grid justify-items-center w-10/12">
          <h1 className="neon text-5xl md:text-6xl lg:text-9xl sm:w-full text-center" data-text="U"><span className="flicker-slow " >Astro</span><span className="flicker-fast block sm:inline"> Verse</span></h1>
          </div>
        </div>   
    </div>
  );
}