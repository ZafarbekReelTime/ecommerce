import React, { memo } from "react";
import { datacode, dataImage } from "../assets/js/data";

const trendingItems = [
  { img: dataImage.frame1437, text: "New from Jordan" },
  { img: dataImage.frame1438, text: "Trail Running Essentials" },
  { img: dataImage.frame1439, text: "Tourney-Ready Gear" },
];

const Tranding = () => {
  return (
    <section className={`${datacode.container} py-6`}>
      <h3 className="my-9 text-xl font-semibold">Trending</h3>
      <div className="flex max-md:flex-col items-center gap-x-5">
        {trendingItems.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.text} loading="lazy" className="rounded-md" />
            <p className="mt-4 max-md:mb-5">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Memorize component to prevent unnecessary re-renders
export default memo(Tranding);
