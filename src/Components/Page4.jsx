import React from "react";
import logo from "../assets/vfilms-logo.png"; // optional, if needed for top
// Replace these with the actual filenames in your assets folder:
import group11 from "../assets/group11-min.png";
import camGroup from "../assets/cam-group-min.png";
import groupRight from "../assets/left.png"; // if you don't have, you can reuse camGroup
import footerVector from "../assets/footercontact01.png";
import background from "../assets/background.png";

export default function Page4() {
  return (
    <section
      id="page4"
      className="relative w-screen min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 md:px-20 py-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* ensure no horizontal overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Content container centered and constrained */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col items-center text-center">
        {/* Top small heading if present */}
        <h3 className="font-[Halant] text-[#192f51] text-lg md:text-xl mb-4">A montage of familiar faces and names</h3>

        {/* Big title */}
        <h2 className="font-[Island_Moments] text-[#192f51] text-3xl md:text-5xl leading-tight md:leading-tight mb-6">
          Their stories, told with heart
        </h2>

        {/* Optional description paragraph */}
        <p className="font-[Instrument_Sans] text-sm md:text-base text-[#444] max-w-3xl mb-12">
          We craft films and campaigns that sit at the intersection of art and purpose. Below are a few highlights
          from our collaborations across the world.
        </p>

        {/* Artwork area (center) */}
        <div className="relative w-full flex items-center justify-center">
  {/* Left decorative/illustration - camGroup */}
  <img
    src={camGroup}
    alt="Cam Group"
    className="hidden md:block absolute left-0 transform -translate-x-16 md:-translate-x-[10%] lg:-translate-x-[15%]"
    style={{
      zIndex: 5,
      width: '20%', // 20% of parent container width
      maxWidth: '200px', // optional cap
    }}
  />

  {/* Center focal group11 */}
  <div className="relative flex items-center justify-center mx-6 md:mx-12">
    <img
      src={group11}
      alt="Group 11"
      className="w-64 md:w-[520px] lg:w-[640px] object-contain"
      style={{ zIndex: 10 }}
    />
  </div>
</div>
y

        {/* Optional call-to-action below artwork */}
        <div className="mt-10">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-[Instrument_Sans]">
            View Projects
          </button>
        </div>
      </div>

      {/* Footer vector anchored bottom-right */}
      <img
        src={footerVector}
        alt="Footer Vector"
        className="absolute bottom-0 right-0 w-72 md:w-[400px] opacity-100 pointer-events-none select-none"
  style={{ transform: "scaleY(-1)" }}
      />
    </section>
  );
}
