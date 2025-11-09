import React from "react";
import notes from "../assets/notes.png";
import indiagate from "../assets/indiagate.png";
import people from "../assets/people.png";
import background from "../assets/background.png";

const Page2 = () => {
  return (
    // <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF8F5] to-[#FFF5F0]">
<section className="relative w-full min-h-screen overflow-hidden bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${background})` }}>
      {/* relativew-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/background.png')" }}> */}
      {/* DESKTOP LAYOUT (lg and above) */}
      <div className="hidden lg:block relative w-full min-h-screen">
        
        {/* Notes - Top Left */}
        <div className="absolute top-8 left-8 xl:left-16 w-[280px] xl:w-[340px] z-10">
          <img src={notes} alt="Notes" className="w-full h-auto object-contain drop-shadow-md" />
        </div>

        {/* India Gate - Bottom Left */}
        <div className="absolute bottom-12 left-12 xl:left-20 w-[180px] xl:w-[220px] z-10">
          <img src={indiagate} alt="India Gate" className="w-full h-auto drop-shadow-md" />
        </div>

        {/* People Silhouettes - Center */}
        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[420px] xl:w-[500px] z-20">
          <img src={people} alt="People" className="w-full h-auto drop-shadow-lg" />
        </div>

        {/* Left Arrow - Branding Experts */}
        <div className="absolute left-[15%] xl:left-[18%] bottom-[32%] z-30">
          <svg
            viewBox="0 0 201 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[160px] xl:w-[190px]"
          >
            <path
              d="M1.00024 227.436C24.0292 166.967 86.6152 58.496 159.94 94.306C210.002 118.755 171.737 172.626 118.002 143.755C64.2673 114.884 80.0463 11.645 198.986 21.635M198.986 21.635L183.019 39.733M198.986 21.635L174.314 1"
              stroke="#103255"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-[#103255] text-base xl:text-lg mt-2 font-serif" style={{ fontStyle: 'italic' }}>
            Branding Experts
          </p>
        </div>

        {/* Top Arrow - Film Makers */}
        <div className="absolute top-[25%] xl:top-[22%] left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
          <p className="text-[#103255] text-base xl:text-lg mb-2 whitespace-nowrap font-serif" style={{ fontStyle: 'italic' }}>
            Film Makers
          </p>
          <svg
            viewBox="0 0 154 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[130px] xl:w-[154px]"
          >
            <path
              d="M1 1C3.25 18.4165 20.65 51.1 72.25 42.5C123.85 33.9 144.085 75.0835 147.75 96.75M147.75 96.75L136 87.75M147.75 96.75L152.5 83.75"
              stroke="#103255"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Right Arrow - Art Curators */}
        <div className="absolute top-[28%] xl:top-[25%] right-[12%] xl:right-[15%] z-30">
          <svg
            viewBox="0 0 106 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[90px] xl:w-[106px]"
          >
            <path
              d="M102.853 1.00024C109.186 41.5002 97.753 122.5 1.35303 122.5M1.35303 122.5L26.353 86.0002M1.35303 122.5L32.353 147"
              stroke="#103255"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-[#103255] text-base xl:text-lg mt-2 text-right font-serif" style={{ fontStyle: 'italic' }}>
            Art Curators
          </p>
        </div>

        {/* Bottom Center - Text and Button */}
        <div className="absolute bottom-10 xl:bottom-12 left-1/2 -translate-x-1/2 text-center z-30">
          <p className="text-[#103255] text-lg xl:text-xl mb-5 max-w-2xl leading-relaxed">
            Take a closer look at the stories V bring to life.
          </p>
          <button className="bg-[#E85C3B] text-white px-8 xl:px-10 py-3 xl:py-3.5 rounded-full text-base xl:text-lg hover:bg-[#cf4e32] transition shadow-lg">
            View Portfolio
          </button>
        </div>
      </div>

      {/* TABLET LAYOUT (md to lg) */}
      <div className="hidden md:block lg:hidden relative w-full min-h-screen py-16">
        
        {/* Top Row - Notes and India Gate */}
        <div className="flex justify-center items-start gap-8 mb-12 px-8">
          <div className="w-[240px]">
            <img src={notes} alt="Notes" className="w-full h-auto object-contain drop-shadow-md" />
          </div>
          <div className="w-[160px] mt-6">
            <img src={indiagate} alt="India Gate" className="w-full h-auto drop-shadow-md" />
          </div>
        </div>

        {/* Film Makers Arrow - Top Center */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-[#103255] text-base mb-2 font-serif" style={{ fontStyle: 'italic' }}>
            Film Makers
          </p>
          <svg
            viewBox="0 0 154 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[120px]"
          >
            <path
              d="M1 1C3.25 18.4165 20.65 51.1 72.25 42.5C123.85 33.9 144.085 75.0835 147.75 96.75M147.75 96.75L136 87.75M147.75 96.75L152.5 83.75"
              stroke="#103255"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* People with Side Arrows */}
        <div className="relative flex items-center justify-center px-12 mb-12">
          
          {/* Left Arrow - Branding Experts */}
          <div className="flex flex-col items-center mr-6">
            <svg
              viewBox="0 0 201 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[110px] mb-2"
            >
              <path
                d="M1.00024 227.436C24.0292 166.967 86.6152 58.496 159.94 94.306C210.002 118.755 171.737 172.626 118.002 143.755C64.2673 114.884 80.0463 11.645 198.986 21.635M198.986 21.635L183.019 39.733M198.986 21.635L174.314 1"
                stroke="#103255"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[#103255] text-sm text-center font-serif" style={{ fontStyle: 'italic' }}>
              Branding Experts
            </p>
          </div>

          {/* People Image */}
          <div className="w-[320px]">
            <img src={people} alt="People" className="w-full h-auto drop-shadow-lg" />
          </div>

          {/* Right Arrow - Art Curators */}
          <div className="flex flex-col items-center ml-6">
            <svg
              viewBox="0 0 106 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[90px] mb-2"
            >
              <path
                d="M102.853 1.00024C109.186 41.5002 97.753 122.5 1.35303 122.5M1.35303 122.5L26.353 86.0002M1.35303 122.5L32.353 147"
                stroke="#103255"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[#103255] text-sm text-center font-serif" style={{ fontStyle: 'italic' }}>
              Art Curators
            </p>
          </div>
        </div>

        {/* Bottom Text and Button */}
        <div className="text-center px-8">
          <p className="text-[#103255] text-base mb-5 max-w-xl mx-auto leading-relaxed">
            Take a closer look at the stories V bring to life.
          </p>
          <button className="bg-[#E85C3B] text-white px-7 py-3 rounded-full text-base hover:bg-[#cf4e32] transition shadow-lg">
            View Portfolio
          </button>
        </div>
      </div>

      {/* MOBILE LAYOUT (below md) */}
      <div className="block md:hidden relative w-full min-h-screen py-10 px-4">
        
        {/* Top Row - Notes and India Gate */}
        <div className="flex justify-center items-start gap-4 mb-10">
          <div className="w-[150px]">
            <img src={notes} alt="Notes" className="w-full h-auto object-contain drop-shadow-md" />
          </div>
          <div className="w-[100px] mt-4">
            <img src={indiagate} alt="India Gate" className="w-full h-auto drop-shadow-md" />
          </div>
        </div>

        {/* Film Makers Arrow - Top */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-[#103255] text-sm mb-2 font-serif" style={{ fontStyle: 'italic' }}>
            Film Makers
          </p>
          <svg
            viewBox="0 0 154 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[90px]"
          >
            <path
              d="M1 1C3.25 18.4165 20.65 51.1 72.25 42.5C123.85 33.9 144.085 75.0835 147.75 96.75M147.75 96.75L136 87.75M147.75 96.75L152.5 83.75"
              stroke="#103255"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* People with Side Arrows */}
        <div className="relative flex items-center justify-center mb-8">
          
          {/* Left Arrow - Branding Experts */}
          <div className="flex flex-col items-center mr-2">
            <svg
              viewBox="0 0 201 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[65px] mb-1"
            >
              <path
                d="M1.00024 227.436C24.0292 166.967 86.6152 58.496 159.94 94.306C210.002 118.755 171.737 172.626 118.002 143.755C64.2673 114.884 80.0463 11.645 198.986 21.635M198.986 21.635L183.019 39.733M198.986 21.635L174.314 1"
                stroke="#103255"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[#103255] text-[10px] text-center font-serif leading-tight" style={{ fontStyle: 'italic' }}>
              Branding<br/>Experts
            </p>
          </div>

          {/* People Image */}
          <div className="w-[190px]">
            <img src={people} alt="People" className="w-full h-auto drop-shadow-lg" />
          </div>

          {/* Right Arrow - Art Curators */}
          <div className="flex flex-col items-center ml-2">
            <svg
              viewBox="0 0 106 148"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[55px] mb-1"
            >
              <path
                d="M102.853 1.00024C109.186 41.5002 97.753 122.5 1.35303 122.5M1.35303 122.5L26.353 86.0002M1.35303 122.5L32.353 147"
                stroke="#103255"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[#103255] text-[10px] text-center font-serif leading-tight" style={{ fontStyle: 'italic' }}>
              Art<br/>Curators
            </p>
          </div>
        </div>

        {/* Bottom Text and Button */}
        {/* People + Bottom Text */}
<div className="relative w-full flex flex-col items-center mt-24">
  {/* People Image */}
  <div className="w-[420px] xl:w-[500px]">
    <img src={people} alt="People" className="w-full h-auto drop-shadow-lg" />
  </div>
 </div>
  {/* Bottom Text + Button */}
  <div className="mt-8 text-center">
    <p className="text-[#103255] text-lg xl:text-xl mb-5 max-w-2xl leading-relaxed">
      Take a closer look at the stories V bring to life.
    </p>
    <button className="bg-[#E85C3B] text-white px-8 xl:px-10 py-3 xl:py-3.5 rounded-full text-base xl:text-lg hover:bg-[#cf4e32] transition shadow-lg">
      View Portfolio
    </button>
  </div>
</div>


     

    </section>
  );
};

export default Page2;