import React from "react";
import background from "../assets/background.png";
import tag from "../assets/tag.png";
import mountain from "../assets/mountain.png";

export default function Page3() {
  const lemonBoxes = [
    { number: "85+", label: "Projects", left: "5%" },
    { number: "50+", label: "Happy Clients", left: "38%" },
    { number: "10+", label: "Experts Team", left: "71%" },
  ];

  return (
    <section
      className="relative min-h-screen w-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* MAIN CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 px-6 md:px-20 min-h-screen">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-8 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[Halant] font-semibold text-[#192f51]">
            A montage of familiar faces and names.
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 font-[Instrument_Sans] max-w-md">
            Some stories come from the biggest names. <br />
            Others begin with bold, rising voices. <br />
            We’ve been fortunate to walk alongside both – <br />
            listening, creating, and building stories that matter.
          </p>

          {/* Lemon Boxes */}
          <div className="relative w-full h-48 mt-6">
            {lemonBoxes.map((item, i) => (
              <div
                key={i}
                className="absolute w-32 h-32 md:w-36 md:h-36 bg-[#FFFACD] rounded-xl shadow-md transform rotate-[-10deg] hover:rotate-0 transition-transform duration-300 flex flex-col items-center justify-center text-center border border-yellow-200"
                style={{ left: item.left }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#192f51] font-[Instrument_Sans]">
                  {item.number}
                </h3>
                <p className="text-base md:text-lg text-orange-500 font-[Instrument_Sans]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-start items-center md:items-end text-center md:text-right md:pr-10 h-full mt-16 md:mt-0">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-[#192f51] leading-relaxed font-[Island_Moments] max-w-md md:pr-10 mt-8">
            Every project is more than just a brief – <br />
            it’s a new chapter waiting to be written. <br />
            <span className="font-[Island_Moments]">
              Together, we’ve crafted tales that inspire, connect, and endure.
            </span>
          </p>
        </div>

        {/* Images pinned at bottom-right */}
        <div className="absolute bottom-6 right-6 w-72 h-72 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
          {/* Rotating Tag */}
          <img
            src={tag}
            alt="Tag rotating"
            className="absolute top-0 left-0 w-full h-full object-contain animate-rotate-cw opacity-90"
            style={{ transformOrigin: "center" }}
          />

          {/* Mountain inside tag */}
          <img
            src={mountain}
            alt="Mountain"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 sm:w-52 md:w-64"
          />
        </div>
      </div>
    </section>
  );
}
