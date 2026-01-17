import React from "react";
import { Link } from "react-router-dom";
import { datacode, dataImage } from "../assets/js/data";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <section className={`${datacode.container} py-5 flex max-md:flex-col max-md:items-start max-md:gap-y-3 items-center justify-between`}>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl font-medium">
                        Company
                    </h2>
                    <p className="text-white/80">
                        Find location nearest to you:
                    </p>
                    <Link className="underline">
                        See Our Stores
                    </Link> 
                    <Link>
                        +998 99 123 45 67
                    </Link>
                    <Link> 
                        hello@mail.com
                    </Link>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl font-medium">
                        Information
                    </h2>
                    <Link >
                        My Account
                    </Link>
                    <Link >
                        LogIn
                    </Link>
                    <Link>
                        My Cart
                    </Link>
                    <Link>
                        Wishlist
                    </Link>
                </div>
                <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl font-medium">
                        Services
                    </h2>
                    <Link>
                        About us
                    </Link>
                    <Link >
                        Careers
                    </Link>
                    <Link>
                        Delivery Information
                    </Link>
                    <Link>
                        Privacy Policy
                    </Link>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-xl font-medium">
                        Subscribe
                    </h2>
                    <p className="w-full max-w-[338px] mb-3">
                        Enter your e-mail below to be the first to know about new collections and product launches.
                    </p>
                    <div className="relative">
                        <img className="absolute z-10 bottom-4 left-3" src={dataImage.email} alt="" />
                        <input className="px-12 py-4 rounded-full text-black placeholder:font-medium placeholder:text-black focus:outline-none" type="email" placeholder="Your email" autoComplete="off" />
                        <img className="absolute z-10 bottom-5 right-20" src={dataImage.leave} alt="" />
                    </div>
                </div>
            </section>
            <div className={`${datacode.container} flex items-center justify-between py-8`}>
                <div></div>
                <p>©Company 2024</p>
                <div className="flex items-center gap-x-3">
                    <Link>
                        <img width={24} height={24} src={dataImage.facebook} alt="" />
                    </Link>
                    <Link>
                        <img width={24} height={24} src={dataImage.xd} alt="" />
                    </Link>
                    <Link>
                        <img width={24} height={24} src={dataImage.insta} alt="" />
                    </Link>
                    <Link>
                        <img width={24} height={24} src={dataImage.youtube} alt="" />
                    </Link>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
