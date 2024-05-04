import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-black w-full h-auto">
      {/* Header Section */}
      <div className="flex w-10/12 mx-auto flex-col gap-5 justify-center items-center">
        <div>
          <p className="text-center font-bold text-5xl sm:text-6xl text-white font-poppins pt-5">
            ASTRO VERSE
          </p>
          <p className="text-center font-bold text-base sm:text-lg text-white font-poppins">
            Embark on a Celestial Journey
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 w-2/5 bg-slate-900 mx-auto mt-2"></div>

      {/* Quote Section */}
      <div className="flex w-10/12 mx-auto flex-col sm:flex-row gap-5 mt-8 justify-between items-center">
        <div>
          <img src="../57731.gif" alt="Carl Sagan" />
        </div>
        <div className="sm:w-[40%]">
          <p className="text-center font-semibold text-3xl sm:text-4xl text-white font-poppins">
            -Carl Sagan
          </p>
          <p className="text-center mt-2 text-sm sm:text-base text-white font-poppins italic">
            “Space is for questing and wondering, for exploring unanswered
            questions about the universe and ourselves.”
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="flex w-10/12 mx-auto flex-col sm:flex-row-reverse gap-5 mt-8 justify-between items-center">
        <div>
          <img src="../astronaut_1.png" alt="Sir Arthur Eddington" />
        </div>
        <div className="sm:w-[40%]">
          <p className="text-center font-semibold text-3xl sm:text-4xl text-white font-poppins">
            -Sir Arthur Eddington
          </p>
          <p className="text-center mt-2 text-sm sm:text-base text-white font-poppins italic">
            “The universe is not only stranger than we imagine, it is stranger
            than we can imagine.”
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 w-10/12 bg-slate-900 mx-auto mt-8"></div>

      {/* Developer Message */}
      <div className="w-10/12 mx-auto mt-8 sm:mt-16 flex flex-col gap-5 items-center text-white font-poppins text-center">
        <p className="font-bold text-3xl sm:text-5xl text-center">
          Word From the Developer : ) Esitha Jay 
        </p>
        <img src="../b1.jpg" width="600" alt="Developer" />
        <p className="text-sm sm:text-base italic text-center ">
          Do you remember nights spent lying under a vast, inky canvas,
          captivated by the twinkling tapestry of stars? Those childhood dreams
          of blasting off into the cosmos, a lone astronaut reaching for the
          unknown? This space is for you, a rekindled ember of those long-lost
          aspirations. It's a launchpad for the dreamers, a haven for those
          who yearn to push past the horizon and explore the mysteries that
          lie beyond. Here, aboard this celestial vessel, we embark on a shared
          journey into the boundless wonders of the universe.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
