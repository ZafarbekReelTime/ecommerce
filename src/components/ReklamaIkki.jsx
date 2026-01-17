import React from "react";
import { datacode, dataImage, } from '../assets/js/data'
import { Link } from "react-router-dom";
const ReklamaIkki = () => {
  return (
    <section className={`${datacode.container} py-6 flex max-md:flex-col justify-between items-center max-md:gap-y-6 max-md:py-12`}>

      <div className="max-md:flex max-md:flex-col max-md:items-center">
        <h3 className="w-full max-w-[282px] max-md:max-w-[290px] max-md:text-center text-3xl font-medium">
          Dresses you’ll turn to again and again.
        </h3>
        <p className="w-full max-w-[244px] max-md:max-w-[222px] max-md:text-center max-md:my-6 text-sm font-medium text-black/60 my-8">
          Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both.
        </p>
        <div  className="max-md:flex max-md:flex-col max-md:items-center max-md:gap-y-3">
          <Link to='/' className="bg-black text-white px-4 py-3 rounded-md mr-4">
            View collection
          </Link>
          <button className="max-md:mr-5">
            Add to bag
          </button>
        </div>
      </div>


      <div className="relative max-md:left-10 max-md:mt-6">
        <img className="absolute top-20 right-80 max-md:w-full max-md:max-w-[164px] max-md:h-[252px] max-md:right-40" src={dataImage.frame1445} alt="Frame" />
        <img className="max-md:w-full max-md:max-w-[222px] max-md:h-[340px]" src={dataImage.frame1444} alt="Frame" />
      </div>
    </section>
  )
};

export default ReklamaIkki;
