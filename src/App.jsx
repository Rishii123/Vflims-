import React, { useState } from "react";
import logo from "./assets/vfilms-logo.png";
import mandala from "./assets/mandala.png";
import background from "./assets/background.png";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <div className="overflow-x-hidden w-screen">
<section className="relative min-h-screen w-screen overflow-hidden bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url('../assets/background.png')" }}>
      {/* Navbar */}
<nav className="fixed top-0 left-0 w-screen flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur-md shadow-md z-50">
        {/* <nav className="absolute top-0 w-full flex justify-between items-center px-6 py-4 bg-white/60 backdrop-blur-md shadow-md"> */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="VFilms Logo" className="h-10" />
        </div>
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15" />
          </svg>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>Services</li>
          <li>Their Stories</li>
          <li>Our Story</li>
          <li>Varnan</li>
          <li><button className="bg-orange-500 text-white px-4 py-1 rounded-full">Let's Talk</button></li>
        </ul>
        {menuOpen && (
          <ul className="absolute right-6 top-16 bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-2 text-gray-700 font-medium md:hidden">
            <li>Services</li>
            <li>Their Stories</li>
            <li>Our Story</li>
            <li>Varnan</li>
            <li><button className="bg-orange-500 text-white px-4 py-1 rounded-full">Let's Talk</button></li>
          </ul>
        )}

      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
<section
  className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-screen text-center md:text-left overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${background})` }}
>
  {/* Mandala and Logo */}
  <div className="relative flex flex-col items-center justify-center mt-28 md:mt-0">
    {/* Rotating Mandala */}
    <img
      src={mandala}
      alt="Mandala"
      className="absolute h-64 w-64 md:h-80 md:w-80 animate-slow-spin opacity-60"
      style={{ zIndex: 1 }}
    />
    {/* Logo on top of mandala */}
    <img
      src={logo}
      alt="VFilms Logo"
      className="relative h-20 md:h-24 z-10"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col justify-center items-center md:items-start max-w-md md:max-w-2xl mt-10 px-6 md:px-12 text-gray-800 space-y-4">
    <h1 className="text-2xl md:text-4xl font-['Halant'] text-[#192f51] leading-snug">
      Varnan is where stories find
    </h1>
    <h2 className="text-xl md:text-3xl font-['Halant'] text-[#192f51]">
      their voice and form
    </h2>
    <p className="text-orange-600 text-base md:text-lg font-['Instrument_Sans']">
      Films . Brands . Art
    </p>
    <p className="text-sm md:text-base leading-relaxed font-['Instrument_Sans'] text-gray-700">
      Since 2009, V’s been telling stories – stories of people, their journeys, and the places that shape them.
      Some begin in polished boardrooms, others in humble village squares. But every story starts the same way – 
      by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what 
      truly matters. V doesn’t just tell stories – V honors them.
    </p>
  </div>
</section>


      {/* Page 2 */}
      <Page2 />
      <Page3 />
    </section>
    </div>
  );
}
