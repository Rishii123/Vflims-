import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frame31 from "../assets/frame31-min.png";
import frame311 from "../assets/frame31-2-min.png";
import frame312 from "../assets/frame31-2-min.png";
import frame33 from "../assets/frame-33-min.png";
import tape from "../assets/tape.png";
import underline from "../assets/underline.png";
import background from "../assets/background.png";
import HoverPage from "./HoverPage";

export default function Page6() {
  const [isHovered, setIsHovered] = useState(false);

  // Open and close overlay manually (also used for mobile tap)
  const openHover = () => setIsHovered(true);
  const closeHover = () => setIsHovered(false);

  return (
    <section
      id="page6"
      className="relative w-screen min-h-screen flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat overflow-hidden py-16 sm:py-20 px-4 sm:px-8 md:px-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Heading */}
      <div className="relative text-center mb-10 sm:mb-12 z-10 px-2">
        <h2 className="font-[Halant] text-[#1c2f50] text-xl sm:text-2xl md:text-4xl font-semibold leading-snug">
          The storyboard reveals the breadth of our craft.
        </h2>
        <img
          src={underline}
          alt="underline"
          className="mx-auto mt-2 w-[80%] sm:w-[400px] md:w-[520px] object-contain"
        />
      </div>

      {/* FRAMES */}
      <div
        className="relative flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-[1200px] z-10"
        onMouseEnter={openHover}
        onMouseLeave={closeHover}
        onClick={() => openHover()} // for mobile (tap to show)
      >
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
          {[frame31, frame311, frame312].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Frame ${i}`}
              className="w-56 sm:w-64 md:w-80 lg:w-96 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>

        {/* Tape image (hidden on mobile for better spacing) */}
        <img
          src={tape}
          alt="Tape"
          className="hidden sm:block w-16 sm:w-20 md:w-28 object-contain ml-4 self-start"
        />
      </div>

      {/* Bottom full-width frame */}
      <img
        src={frame33}
        alt="Frame 33"
        className="absolute bottom-0 left-0 w-full object-cover z-0"
      />

      {/* Animated HoverPage */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-30"
            onMouseEnter={openHover}
            onMouseLeave={closeHover}
          >
            <div className="w-full h-full bg-white/95 shadow-2xl overflow-hidden">
              <HoverPage onBack={closeHover} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
