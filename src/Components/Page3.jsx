import React, { useState } from "react";
import logo from "../assets/vfilms-logo.png";
import menuIcon from "../assets/menu.png";
import tag from "../assets/tag.png";
import mountain from "../assets/mountain.png";
import background from "../assets/background.png";

export default function Page3() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
  className="relative min-h-screen w-screen overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${background})` }}
>
  {/* MAIN CONTENT */}
  <div className="grid md:grid-cols-2 gap-12 px-6 md:px-20 min-h-screen">
    {/* LEFT SIDE */}
    <div className="flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-[Halant] font-semibold text-[#192f51]">
        A montage of familiar faces and names.
      </h2>

      <p className="text-sm md:text-base leading-relaxed text-gray-700 font-[Instrument_Sans] max-w-md">
        Some stories come from the biggest names. <br />
        Others begin with bold, rising voices. <br />
        We’ve been fortunate to walk alongside both – <br />
        listening, creating, and building stories that matter.
      </p>

      {/* Lemon Boxes */}
      <div className="flex items-center justify-center md:justify-start space-x-4 mt-10">
        {[
          { number: "85+", label: "Projects" },
          { number: "50+", label: "Happy Clients" },
          { number: "10+", label: "Experts Team" },
        ].map((item, i) => (
          <div
            key={i}
            className="relative w-28 h-28 md:w-32 md:h-32 bg-[#FFFACD] rounded-xl shadow-md transform rotate-[-10deg] hover:rotate-0 transition-transform duration-300 flex flex-col items-center justify-center text-center border border-yellow-200"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#192f51] font-[Instrument_Sans]">
              {item.number}
            </h3>
            <p className="text-sm md:text-base text-orange-500 font-[Instrument_Sans]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex flex-col justify-start items-center md:items-end text-center md:text-right md:pr-10 h-full mt-70">
      {/* Text at the top */}
      <p className="text-xl md:text-3.6xl italic text-[#192f51] leading-relaxed font-[Island_Moments] max-w-md md:pr-10 mt-35">
        Every project is more than just a brief – <br />
        it’s a new chapter waiting to be written. <br />
        <span className="font-[Island_Moments]">
          Together, we’ve crafted tales that inspire, connect, and endure.
        </span>
      </p>
    </div>

    {/* Images pinned at bottom-left of the section */}
    <div className="absolute bottom-6 right-6 w-80 h-80 md:w-[450px] md:h-[450px]">
      {/* Rotating Tag */}
      <img
        src={tag}
        alt="Tag rotating"
        className="absolute top-0 left-0 w-full h-full object-contain animate-rotate-cw opacity-80"
        style={{ transformOrigin: "center" }}
      />

      {/* Mountain inside tag, slightly lower */}
      <img
        src={mountain}
        alt="Mountain"
        className="absolute bottom-20 left-2/4 mr-15 transform -translate-x-1/2 w-72 md:w-96"
      />
    </div>
  </div>
</section>


  );
}
