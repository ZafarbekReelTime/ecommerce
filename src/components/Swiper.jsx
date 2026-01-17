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

  return (
    <section className="relative w-full max-md:py-8">
      {/* SWIPER */}
      <SwiperReact
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 4000 }}
        onSwiper={(swiper) => (mainSwiper.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            {/* === SENING CODE (O‘ZGARMAGAN) === */}
            <section
              className="w-full h-[480px] md:h-[500px] lg:h-[525px] bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className={`${datacode.container} h-full`}>
                <div className="h-full flex max-md:mr-0 max-md:pb-28 items-end justify-end pb-12 mr-28">
                  <div className="max-w-md">
                    <h2 className="text-5xl font-medium mb-3 w-full max-w-5">
                      Denim Collection
                    </h2>

                    <p className="mb-6 max-w-[220px] text-sm">
                      An enigmatic and contemporary collection that exalts
                      nautical style through meticulous fabrics, prints, and
                      precise forms.
                    </p>

                    <div className="flex items-center gap-12">
                      <Link className="px-4 py-2 border border-black/30 bg-black text-white rounded-lg">
                        View Collection
                      </Link>

                      <button>Buy now</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* === /SENING CODE === */}
          </SwiperSlide>
        ))}
      </SwiperReact>

      {/* PAGINATION – O‘NG TEPADA */}
      <div className="absolute top-6 right-6 flex  gap-6 z-20">
        {images.map((_, index) => (
          <button
            aria-label="for swiper"
            key={index}
            onClick={() => mainSwiper.current?.slideToLoop(index)}
            className="flex items-center justify-center"
          >
            <span
              className={`transition-all duration-200
                ${activeIndex === index
                  ? "w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"
                  : "w-2 h-2 bg-gray-400 rounded-full"
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
