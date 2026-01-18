import React from "react";
import { datacode } from "../assets/js/data";
import { Link } from "react-router-dom";

const Allpage = () => {
    return (
        <section>
            <section className={`${datacode.container} py-16 flex items-center justify-center gap-x-32 max-md:hidden`}>

                {/* 1 */}
                <div className="flex flex-col gap-y-4">
                    <h1 className="font-medium text-xl">Featured</h1>
                    <Link to='/futured'>Sneakers Model 1</Link>
                    <Link to='/futured'>Cotton Mix Coat</Link>
                    <Link to='/futured'>Black Crew Master</Link>
                    <Link to='/futured'>Reversible Jacket</Link>
                    <Link to='/futured'>Pegasus</Link>
                    <Link to='/futured'>Blazer</Link>
                </div>

                {/* 2 */}
                <div className="flex flex-col gap-y-4">
                    <h1 className="font-medium text-xl">Shoes</h1>
                    <Link to='/shoes/all'>All Shoes</Link>
                    <Link to='/shoes/brutal-max'>Brutal Max</Link>
                    <Link to='/shoes/running'>Running Shoes</Link>
                    <Link to='/shoes/basketball'>Basketball Shoes</Link>
                    <Link to='/shoes/custom'>Custom Shoes</Link>
                    <Link to='/shoes/sale'>Sale Shoes</Link>
                </div>

                {/* 3 */}
                <div className="flex flex-col gap-y-4">
                    <h1 className="font-medium text-xl">Clothing</h1>
                    <Link to='/clothing/all'>All Clothing</Link>
                    <Link to='/clothing/tops'>Tops & T-Shirts</Link>
                    <Link to='/clothing/shorts'>Shorts</Link>
                    <Link to='/clothing/hoodies'>Hoodies & Pullovers</Link>
                    <Link to='/clothing/joggers'>Joggers & Sweatpants</Link>
                    <Link to='/clothing/sports-bras'>Sports Bras</Link>
                </div>

            </section>

            {/* Mobile */}
            <section className={`${datacode.container} flex flex-col items-start py-8 md:hidden`}>
                <Link className="font-medium text-lg" to='/futured'>Featured</Link>
                <Link className="font-medium text-lg" to='/shoes/all'>Shoes</Link>
                <Link className="font-medium text-lg" to='/clothing/all'>Clothing</Link>
            </section>
        </section>
    )
};

export default Allpage;
