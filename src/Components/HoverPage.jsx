import React from "react";
import frame31 from "../assets/Frame-31-Hover.png";
import leftSide from "../assets/left-side-min.png";
import rightSide from "../assets/right-side-min.png";
import underline from "../assets/underline.png";
import arrow from "../assets/arrow-min.png";
import background from "../assets/background.png";

export default function HoverPage({ onBack }) {
  return (
    <section
      id="hoverpage"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden px-4 sm:px-8 md:px-16 py-16 sm:py-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Decorative PNGs */}
      <img
        src={leftSide}
        alt="Left decoration"
        className="absolute left-2 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 w-14 sm:w-20 md:w-28 opacity-80 z-0"
      />
      <img
        src={rightSide}
        alt="Right decoration"
        className="absolute right-2 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 w-14 sm:w-20 md:w-28 opacity-80 z-0"
      />

      {/* Quote */}
      <div className="relative text-center z-10 mb-8 sm:mb-12 px-3">
        <h2 className="font-[Halant] text-[#1c2f50] text-lg sm:text-2xl md:text-3xl font-semibold leading-snug mb-2">
          “Filmmaking is a chance to live many lifetimes.” – Robert Altman
        </h2>
        <img
          src={underline}
          alt="underline"
          className="mx-auto mt-2 w-[85%] sm:w-[400px] md:w-[520px] object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-12 w-full max-w-6xl">
        {/* Left: Frame + Back button */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <button
            onClick={onBack}
            className="mb-4 bg-transparent border border-[#1c2f50] text-[#1c2f50] hover:bg-[#1c2f50] hover:text-white px-5 py-2 rounded-full transition-all duration-300 font-[Instrument_Sans] text-sm sm:text-base"
          >
            ← Back
          </button>

          <img
            src={frame31}
            alt="Frame 31"
            className="w-64 sm:w-80 md:w-96 lg:w-[440px] object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left px-2 sm:px-0">
          <p className="font-[Instrument_Sans] text-[#333] text-sm sm:text-base leading-relaxed mb-6 max-w-md">
            Who says films are just an escape? We see them as a way to live many
            lives — to feel, to explore, and to tell stories that stay. With
            each film, we carry new memories and reasons to keep creating.
          </p>

          <div className="font-[Instrument_Sans] text-[#1c2f50] text-sm sm:text-base md:text-lg leading-7 mb-10">
            <p className="font-semibold mb-2">V crafts:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Documentaries</li>
              <li>Corporate Videos</li>
              <li>2D Animation Videos</li>
              <li>3D Animation Videos</li>
            </ul>
          </div>

          <img
            src={arrow}
            alt="Arrow"
            className="mt-2 w-8 sm:w-10 md:w-12 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
