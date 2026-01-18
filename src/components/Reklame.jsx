import React from "react";
import { datacode, dataImage } from "../assets/js/data";

const Reklame = () => {
  return (
    <section className={`${datacode.container} py-5 flex max-md:flex-col max-md:gap-y-5 items-center justify-center gap-x-12`}>
      
      {/* Slide 1 */}
      <div className="relative w-full max-w-[696px] h-auto">
        <img
          src={dataImage.image5}
          alt="Reversible Denim Jacket"
          width={696}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
          loading="lazy"
        />
        <div className="absolute bottom-5 left-5 bg-black bg-opacity-40 p-4 rounded-md">
          <p className="text-2xl font-medium text-white">Reversible Denim Jacket</p>
          <button className="border bg-white rounded-full px-4 py-1 text-sm mt-4 font-medium hover:bg-gray-200 transition">
            Shop
          </button>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative w-full max-w-[696px] h-auto">
        <img
          src={dataImage.image4}
          alt="Reversible Denim Jacket"
          width={696}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
          loading="lazy"
        />
        <div className="absolute bottom-5 left-5 bg-black bg-opacity-40 p-4 rounded-md">
          <p className="text-2xl font-medium text-white">Reversible Denim Jacket</p>
          <button className="border bg-white rounded-full px-4 py-1 text-sm mt-4 font-medium hover:bg-gray-200 transition">
            Shop
          </button>
        </div>
      </div>

    </section>
  );
};

export default Reklame;
