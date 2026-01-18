import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { datacode, dataImage } from "../assets/js/data";

const images = [
  dataImage.mainoffer,
  dataImage.mainoffer,
  dataImage.mainoffer,
  dataImage.mainoffer,
];

const Swiper = () => {
  const mainSwiper = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const loopEnabled = images.length > 1;

  return (
    <section className="relative w-full max-md:py-8">
      {/* SWIPER */}
      <SwiperReact
        modules={[Autoplay]}
        loop={loopEnabled}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(swiper) => (mainSwiper.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <section className="w-full h-[480px] md:h-[500px] lg:h-[525px] relative">
              {/* ✅ LCP-friendly img */}
              <img
                src={img}
                alt={`Slide ${index + 1} - Denim Collection`}
                className="w-full h-full object-cover"
                fetchpriority={index === 0 ? "high" : "auto"} // birinchi rasm LCP
              />

              {/* Overlay va content */}
              <div className={`${datacode.container} h-full absolute top-0 left-0 flex items-end justify-end`}>
                <div className="max-w-md bg-black/30 p-4 rounded-md mb-12 mr-28 max-md:mr-0 max-md:mb-28">
                  <h2 className="text-4xl md:text-5xl font-medium mb-3 text-white">
                    Denim Collection
                  </h2>
                  <p className="mb-6 max-w-[220px] text-sm text-white/90">
                    An enigmatic and contemporary collection that exalts
                    nautical style through meticulous fabrics, prints, and
                    precise forms.
                  </p>
                  <div className="flex items-center gap-4 md:gap-12">
                    <Link
                      to="/collection"
                      className="px-4 py-2 border border-white/50 bg-black/70 text-white rounded-lg hover:bg-black/90 transition"
                    >
                      View Collection
                    </Link>
                    <button
                      className="px-4 py-2 border border-white/50 bg-white text-black rounded-lg hover:bg-gray-100 transition"
                      aria-label="Buy now"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </SwiperReact>

      {/* PAGINATION – TOP RIGHT */}
      <div className="absolute top-6 right-6 flex gap-5 md:gap-6 lg:gap-8 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => mainSwiper.current?.slideToLoop(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="focus:outline-none"
          >
            <span
              className={`transition-all duration-200 flex items-center justify-center
                ${activeIndex === index
                  ? "w-4 h-4 border-2 border-black rounded-full"
                  : "w-2 h-2 bg-black/50 rounded-full"
                }`}
            >
              {activeIndex === index && (
                <span className="w-2 h-2 bg-black rounded-full" />
              )}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Swiper;
