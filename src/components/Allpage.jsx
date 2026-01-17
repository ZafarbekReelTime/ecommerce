import React from "react";
import { datacode } from "../assets/js/data";
import { Link } from "react-router-dom";

const Allpage = () => {
    return (
        <section>
            <section className={`${datacode.container} py-16 flex items-center justify-center gap-x-32 max-md:hidden`}>

                {/* 1 */}

                <div className="flex flex-col gap-y-4">
                    <h1 className="font-medium text-xl">
                        Featured
                    </h1>
                    <Link to='/futured'>
                        Sneakers Model 1
                    </Link>
                    <Link to='/futured'>
                        Cotton Mix Coat
                    </Link>
                    <Link to='/futured'>
                        Black Crew Master
                    </Link>
                    <Link to='/futured'>
                        Reversible Jacket
                    </Link>
                    <Link to='/futured'>
                        Pegasus
                    </Link>
                    <Link to='/futured'>
                        Blazer
                    </Link>
                </div>

                {/* 2 */}

                <div className="flex flex-col gap-y-4">
                    <h1 className="font-medium text-xl">
                        Shoes
                    </h1>
                    <Link>
                        All Shoes
                    </Link>
                    <Link>
                        Brutal Max
                    </Link>
                    <Link>
                        Running Shoes
                    </Link>
                    <Link>
                        Basketball Shoes
                    </Link>
                    <Link>
                        Custom Shoes
                    </Link>
                    <Link>
                        Sale Shoes
                    </Link>
                </div>

                {/* 3 */}

                <div className="flex flex-col gap-y-4">
                    <h1 className="font-medium text-xl">
                        Clothing
                    </h1>
                    <Link>
                        All Clothing
                    </Link>
                    <Link>
                        Tops & T-Shirts
                    </Link>
                    <Link>
                        Shorts
                    </Link>
                    <Link>
                        Hoodies & Pullovers
                    </Link>
                    <Link>
                        Joggers & Sweatpants
                    </Link>
                    <Link>
                        Sports Bras
                    </Link>
                </div>

            </section>

            <section className={`${datacode.container} flex flex-col items-start py-8 md:hidden`}>
                <Link className="font-medium text-lg" to='/futured'>
                    Featured
                </Link>
                <Link className="font-medium text-lg" to='/futured'>
                    Shoes
                </Link>
                <Link className="font-medium text-lg" to='/futured'>
                    Clothing
                </Link>
            </section>
        </section>
    )
};

export default Allpage;
