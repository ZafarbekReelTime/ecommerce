import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { datacode, dataImage, ProductAPI } from "../assets/js/data";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import '../assets/css/style.css'

const Productz = () => {
  const { id } = useParams();
  const product = ProductAPI.find((item) => item.id === parseInt(id));

  // 🔹 Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // silliq scroll
    });
  }, [id]); // id o'zgarganda scroll tepaga

  if (!product) return <p>Product topilmadi</p>;

  const [mainImage, setMainImage] = useState(product.cardImage);
  const mainSwiper = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = product.cardimageType || [];
  const loopEnabled = slides.length > 1;

  return (
    <section>
      {/* Promo Banner */}
      <div className="bg-[#d5d5d5] py-3 max-md:hidden">
        <Link className="flex items-center justify-center gap-x-32">
          <img src={dataImage.chap} alt="Left arrow" />
          <span className="underline text-lg font-medium">
            Early Access to Spring Sale: Use code SPRING.
          </span>
          <img src={dataImage.ong} alt="Right arrow" />
        </Link>
      </div>

      {/* Product Section */}
      <section
        className={`${datacode.container} py-5 flex max-lg:flex-col justify-center`}
      >
        {/* Mobile Info */}
        <div className="flex flex-col gap-y-3 mb-2 md:hidden">
          <p>{product.lastday}</p>
          <h2 className="text-3xl">{product.cardName}</h2>
          <span className="font-medium">{product.clothesType}</span>
          <p className="font-medium text-lg">{product.value}</p>
        </div>

        {/* Images + Swiper */}
        <div className="flex max-md:flex-col-reverse gap-x-6">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-y-3 items-center gap-x-3 mx-3 max-md:mt-4 max-md:mx-0">
            {slides.map((img, index) => (
              <img
                key={index}
                className="rounded-lg cursor-pointer hover:scale-105 transition"
                width={65}
                height={100}
                onClick={() => {
                  setMainImage(img);
                  mainSwiper.current?.slideToLoop(index);
                }}
                src={img}
                alt={`${product.cardName} thumbnail ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Swiper */}
          <div className="relative w-full max-w-xl md:block">
            <SwiperReact
              modules={[Autoplay]}
              loop={loopEnabled}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              onSwiper={(swiper) => (mainSwiper.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full h-full"
            >
              {slides.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${product.cardName} image ${index + 1}`}
                    onClick={() => setMainImage(img)}
                    className="w-full max-w-80 cardimg object-cover rounded-md"
                  />
                </SwiperSlide>
              ))}
            </SwiperReact>

            {/* Pagination – bottom for mobile */}
            <div className="absolute bottom-5 left-[125px] flex items-center gap-2 z-20 md:hidden">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => mainSwiper.current?.slideToLoop(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-200 ${
                    activeIndex === index
                      ? "w-4 h-4 border-2 border-black rounded-full flex items-center justify-center"
                      : "w-2 h-2 bg-gray-400 rounded-full"
                  }`}
                >
                  {activeIndex === index && (
                    <span className="w-2 h-2 bg-black rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info Desktop */}
        <div className="flex flex-col gap-y-3 mt-10">
          <p className="max-md:hidden">{product.lastday}</p>
          <h2 className="text-3xl max-md:hidden">{product.cardName}</h2>
          <span className="font-medium max-md:hidden">{product.clothesType}</span>
          <p className="font-medium text-lg max-md:hidden">{product.value}</p>

          {/* Sizes */}
          <div className="flex flex-col gap-y-3 mt-16 max-md:mt-3">
            <div className="flex items-center justify-between">
              <span>Select size</span>
              <span>Select guide</span>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              {(product.cardnameSize || []).map((size, index) => (
                <div
                  className="border border-black rounded-lg p-3 hover:bg-black/5 cursor-pointer"
                  key={index}
                >
                  <p>{size}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Productz;
