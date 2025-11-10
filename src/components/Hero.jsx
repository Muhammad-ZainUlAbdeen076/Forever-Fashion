import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section
      className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] bg-cover bg-center lg:bg-top"
      style={{ backgroundImage: `url(${assets.hero_img})` }}
    >
      {/* Subtle Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-[8vw] lg:px-[10vw] text-white">
        <h1
          className="Oswald font-bold leading-tight
                     text-3xl sm:text-5xl md:text-6xl lg:text-7xl
                     transition-all duration-300"
          style={{
            // Slightly thinner stroke on small screens
            WebkitTextStroke: window.innerWidth < 640 ? "0.5px #2c2c2c" : "1.5px #2c2c2c",
            textShadow: "1px 1px 3px rgba(255, 255, 255, 0.4)",
            color: "#bfa14a",
          }}
        >
          Elevate Your Style
        </h1>

        <p className="Montserrat text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mt-4 drop-shadow-sm text-gray-100">
          Discover the latest trends in men's fashion. From casual wear to formal attire, we’ve got something for every occasion.
        </p>

        <button className="mt-6 w-fit px-6 py-3 rounded-full bg-[#eec87d] text-black font-medium hover:bg-[#d8b56f] transition-all duration-300 shadow-md">
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero
