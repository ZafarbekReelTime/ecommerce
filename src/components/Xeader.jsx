import React, { useState } from "react";
import { Link } from "react-router-dom";
import { datacode, dataImage } from "../assets/js/data";
import Sidebar from "./Sidebar";
import '../assets/css/style.css'
const Xeader = () => {

    const [open, setopen] = useState(false);

    return (
        <header>

            <section>
                <section className="bg-[#d5d5d5] max-md:hidden">
                    <div className={`${datacode.container} flex items-center gap-5 px-4 py-3 justify-end font-medium`}>
                        <Link to="/futured">
                            <span>
                                Find a store
                            </span>
                        </Link>|
                        <Link to="/">
                            <span>
                                Help
                            </span>
                        </Link>|
                        <Link to="/">
                            <span>
                                Join Us
                            </span>
                        </Link>|
                        <Link to="/">
                            <span>
                                Sign In
                            </span>
                        </Link>
                    </div>
                </section>
                <section className={`${datacode.container} py-3 flex items-center justify-between max-md:hidden`}>
                    <Link aria-label="main page" to='/'>
                        <img className="w-full max-w-52 h-8" src={dataImage.logo} alt="" />
                    </Link>
                    <nav className="flex items-center gap-x-4 font-medium">
                        <Link to='/futured'>
                            New & Featured
                        </Link>
                        <Link to='/mens'>
                            Men
                        </Link>
                        <Link>
                            Women
                        </Link>
                        <Link>
                            Sale
                        </Link>
                    </nav>
                    <div className="flex items-center gap-x-5">
                        <div className="relative">
                            <img className="absolute top-[7px] right-[215px] z-20" width={35} height={35} src={dataImage.qidiruv} alt="Qidiruv Icon" />
                            <input className="inpcolor px-9 py-3 rounded-full focus:outline-none placeholder:text-white placeholder:font-medium" type="search" placeholder="Search" />
                        </div>
                        <div className="flex items-center gap-x-5">
                            <Link>
                                <img src={dataImage.yurak} alt="Yurak" />
                            </Link>
                            <Link>
                                <img src={dataImage.savat} alt="Savat" />
                            </Link>
                        </div>
                    </div>
                </section>
            </section>

            {/* responsive telefon uchun */}
            
            <section className={`${datacode.container} py-3 flex items-center justify-between sticky top-0 overflow-hidden bg-white z-50 md:hidden`}>
                <Link to='/'>
                    <img className="w-full max-w-44 mt-2 md:max-w-48 lg:max-w-52  h-8" src={dataImage.logo} alt="logo" />
                </Link>
                <div className="flex items-center gap-x-3">
                    <Link>
                        <img className="w-full max-w-7 h-8" src={dataImage.qidiruv} alt="qidiruv" />
                    </Link>
                    <Link>
                        <img className="w-full max-w-3 h-4" src={dataImage.savat} alt="savat" />
                    </Link>

                    {/* menu button */}
                    <button className="ml-2" onClick={() => setopen(true)}>
                        <img src={dataImage.menu} alt="Menu" />
                    </button>
                    <Sidebar open={open} setOpen={setopen} />
                </div>
            </section>

        </header>
    );
};

export default Xeader;
