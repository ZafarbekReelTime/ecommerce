import React from "react";
import { datacode, dataImage } from "../assets/js/data";

const Tranding = () => {
    return (
        <section className={`${datacode.container} py-6`}>
            <h3 className="my-9">
                Trending
            </h3>
            <div className="flex max-md:flex-col items-center gap-x-5">
                <div>
                    <img src={dataImage.frame1437} alt="" />
                    <p className="mt-4 max-md:mb-5" >New from Jordan</p>
                </div>
                <div>
                    <img src={dataImage.frame1438} alt="" />
                    <p className="mt-4 max-md:mb-5">Trail Running Essentials</p>
                </div>
                <div>
                    <img src={dataImage.frame1439} alt="" />
                    <p className="mt-4">Tourney-Ready Gear</p>
                </div>
            </div>
        </section>
    )
};

export default Tranding;
