import { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";
import { Link, useParams } from "react-router-dom";
import { datacode, dataImage, ProductAPI } from "../assets/js/data";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import '../assets/css/style.css';

// Memoized Thumbnails component
const Thumbnails = memo(({ slides, onClick, activeIndex, name }) => {
  return (
    <div className="flex md:flex-col gap-y-3 items-center gap-x-3 mx-3 max-md:mt-4 max-md:mx-0">
      {slides.map((img, index) => (
        <img
          key={index}
          className={`rounded-lg cursor-pointer hover:scale-105 transition transform ${
            index === activeIndex ? "border-2 border-black" : ""
          }`}
          width={65}
          height={100}
          onClick={() => onClick(index)}
          src={img}
          alt={`${name} thumbnail ${index + 1}`}
          loading="lazy"
        />
      ))}
    </div>
  );
});

const Productz = () => {
  const { id } = useParams();
  const product = useMemo(() => ProductAPI.find((item) => item.id === parseInt(id)), [id]);

  const [mainImage, setMainImage] = useState(product?.cardImage || "");
  const mainSwiper = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = useMemo(() => product?.cardimageType || [], [product]);
  const loopEnabled = slides.length > 1;

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Handle thumbnail click
  const handleThumbnailClick = useCallback(
    (index) => {
      setMainImage(slides[index]);
      mainSwiper.current?.slideToLoop(index);
      setActiveIndex(index);
    },
    [slides]
  );

  if (!product) return <p>Product topilmadi</p>;

  return (
    <section>
      {/* Promo Banner */}
      <div className="bg-[#d5d5d5] py-3 max-md:hidden">
        <Link className="flex items-center justify-center gap-x-32">
          <img src={dataImage.chap} alt="Left arrow" loading="lazy" />
          <span className="underline text-lg font-medium">
            Early Access to Spring Sale: Use code SPRING.
          </span>
          <img src={dataImage.ong} alt="Right arrow" loading="lazy" />
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
          <Thumbnails
            slides={slides}
            onClick={handleThumbnailClick}
            activeIndex={activeIndex}
            name={product.cardName}
          />

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
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </SwiperReact>

            {/* Pagination – bottom for mobile */}
            <div className="absolute bottom-5 left-[100px] flex items-center gap-4 z-20 md:hidden">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
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

export default memo(Productz);
