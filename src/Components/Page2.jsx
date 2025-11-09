import React from "react";
import notes from "../assets/notes.png";
import indiagate from "../assets/indiagate.png";
import people from "../assets/people.png";
import background from "../assets/background.png";

const Page2 = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* LEFT COLUMN */}
      <div className="flex-1 flex flex-col justify-start items-center pt-16 lg:pt-24 space-y-10 lg:space-y-14">
        <img
          src={notes}
          alt="Notes"
          className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] xl:w-[500px] h-auto drop-shadow-md transition-all duration-300"
        />
        <img
          src={indiagate}
          alt="India Gate"
          className="w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px] h-auto drop-shadow-md transition-all duration-300"
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1 flex flex-col justify-center items-center py-12 lg:py-0 space-y-10 relative">
        {/* PEOPLE + ARROWS CONTAINER */}
        <div className="relative flex justify-center items-center w-full max-w-[600px]">
          {/* PEOPLE IMAGE */}
          <img
            src={people}
            alt="People"
            className="w-[240px] sm:w-[320px] md:w-[400px] lg:w-[460px] xl:w-[500px] h-auto drop-shadow-lg transition-all duration-300"
          />

          {/* LEFT ARROW - Branding Experts */}
<div className="absolute left-[-5%] sm:left-[-8%] md:left-[-10%] lg:left-[-12%] top-1/2 -translate-y-1/2 flex flex-col items-center">
            <svg
              viewBox="0 0 201 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[70px] sm:w-[100px] md:w-[130px] lg:w-[150px] mb-2"
            >
              <path
                d="M1.00024 227.436C24.0292 166.967 86.6152 58.496 159.94 94.306C210.002 118.755 171.737 172.626 118.002 143.755C64.2673 114.884 80.0463 11.645 198.986 21.635M198.986 21.635L183.019 39.733M198.986 21.635L174.314 1"
                stroke="#103255"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[#103255] text-xs sm:text-sm md:text-base font-serif italic text-center whitespace-nowrap">
              Branding Experts
            </p>
          </div>

          {/* RIGHT ARROW - Art Curators */}
<div className="absolute right-[-4%] sm:right-[-15%] md:right-[-10%] lg:right-[-12%] top-1/2 -translate-y-1/2 flex flex-col items-center">
            <svg
              viewBox="0 0 106 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[55px] sm:w-[70px] md:w-[80px] lg:w-[90px] mb-2"
            >
              <path
                d="M102.853 1.00024C109.186 41.5002 97.753 122.5 1.35303 122.5M1.35303 122.5L26.353 86.0002M1.35303 122.5L32.353 147"
                stroke="#103255"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[#103255] text-xs sm:text-sm md:text-base font-serif italic text-center whitespace-nowrap">
              Art Curators
            </p>
          </div>

          {/* TOP ARROW - Film Makers */}
<div className="absolute -top-12 sm:-top-16 md:-top-20 lg:-top-24 flex flex-col items-center">
            <p className="text-[#103255] text-xs sm:text-sm md:text-base font-serif italic mb-1">
              Film Makers
            </p>
            <svg
              viewBox="0 0 154 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px]"
            >
              <path
                d="M1 1C3.25 18.4165 20.65 51.1 72.25 42.5C123.85 33.9 144.085 75.0835 147.75 96.75M147.75 96.75L136 87.75M147.75 96.75L152.5 83.75"
                stroke="#103255"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* TEXT + BUTTON */}
        <div className="text-center mt-4 px-4 sm:px-0">
          <p className="text-[#103255] text-sm sm:text-base md:text-lg mb-5 max-w-md leading-relaxed mx-auto">
            Take a closer look at the stories V bring to life.
          </p>
          <button className="bg-[#E85C3B] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-sm sm:text-base md:text-lg hover:bg-[#cf4e32] transition shadow-lg">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page2;
