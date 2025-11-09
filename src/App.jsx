import React from "react";
import logo from "./assets/vfilms-logo.png";
import mandala from "./assets/mandala.png";
import background from "./assets/background.png";
import Navbar from "./Components/Navbar";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import HoverPage from "./Components/HoverPage";

export default function App() {
  return (
    <div className="overflow-x-hidden w-full">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-[100] bg-transparent">
        {/* <img src={logo} alt="VFilms Logo" className="w-[80px] md:w-[100px] object-contain" /> */}
        <Navbar />
      </header>

      {/* Hero Section */}
      {/* Hero Section */}
<section
  className="relative flex flex-col md:flex-row items-center justify-center min-h-screen w-full text-center md:text-left overflow-hidden bg-cover bg-center bg-no-repeat px-6 md:px-16"
  style={{ backgroundImage: `url(${background})` }}
>
  {/* Left: Mandala + Logo */}
  <div className="relative flex flex-col items-center md:items-center justify-center w-full md:w-1/2 mt-28 md:mt-0">
    {/* Mandala */}
    <img
  src={mandala}
  alt="Mandala"
  className="absolute h-[560px] w-[560px] md:h-[540px] md:w-[540px] opacity-60 animate-slow-spin"
/>


    {/* Logo */}
    <img
      src={logo}
      alt="VFilms Logo"
      className="relative h-[80px] md:h-[110px] z-10 object-contain"
    />
  </div>

  {/* Right: Text Section */}
   <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-2xl sm:text-4xl md:text-[50px] lg:text-[70px] font-halant leading-snug md:leading-tight text-[#192f51]">
          Varnan is where stories find their voice and form
        </h1>

        <p className="text-[#F15D2B] text-lg sm:text-xl md:text-2xl lg:text-3xl font-halant mt-4">
          Films . Brands . Art
        </p>

        <p className="text-[#333] text-sm sm:text-base md:text-lg lg:text-xl font-instrument leading-relaxed mt-6 max-w-md sm:max-w-lg md:max-w-xl">
          Since 2009, V’s been telling stories – stories of people, their journeys, and the places that shape them. Some begin in polished boardrooms, others in humble village squares. But every story starts the same way – by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters. V doesn’t just tell stories – V honors them.
        </p>
      </div>
</section>


      {/* Other Pages */}
      <Page2 />
      <Page3 />
      <Page6/>
      <Page4 />
      <Page5 />
      
      
    </div>
  );
}
