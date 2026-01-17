import React from "react";
import { datacode, dataImage } from "../assets/js/data";

const Reklame = () => {
    return (
        <section className={`${datacode.container} py-5 flex max-md:flex-col max-md:gap-y-5 items-center justify-center gap-x-12`}>
            <div className="relative">
                <img width={696} height={500} src={dataImage.image5} alt="" />
                <div className="absolute bottom-5 left-7">
                    <p className="text-2xl font-medium text-white">Reversible Denim Jacket</p>
                    <button className="border bg-white rounded-full px-4 py-1 text-sm mt-4 font-medium">
                        Shop
                    </button>
                </div>
            </div>
             <div className="relative">
                <img width={696} height={500} src={dataImage.image4} alt="" />
                <div className="absolute bottom-5 left-7">
                    <p className="text-2xl font-medium text-white">Reversible Denim Jacket</p>
                    <button className="border bg-white rounded-full px-4 py-1 text-sm mt-4 font-medium">
                        Shop
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Reklame;
