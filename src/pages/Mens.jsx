import React, { useState } from "react";
import { datacode, dataImage, ProductAPI } from "../assets/js/data";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Mens = () => {


    const [open, setOpen] = useState(null);

    const toggle = (name) => {
        setOpen(open === name ? null : name);
    };

    return (
        <section>
            <div className="bg-[#d5d5d5] py-3 max-md:hidden">
                <Link className="flex items-center justify-center gap-x-32">
                    <img src={dataImage.chap} alt="" />
                    <span className="underline text-lg font-medium">
                        Early Access to Spring Sale: Use code SPRING.
                    </span>
                    <img src={dataImage.ong} alt="" />
                </Link>
            </div>



            <section className={`${datacode.container} py-8 flex max-md:flex-col max-md:py-2 justify-between gap-x-2`}>
                <div className="w-full max-w-[220px] px-5 h-screen sticky top-0 overflow-y-scroll py-8 max-md:hidden">
                    <h2 className="font-medium text-lg mb-8">New Releases (50)</h2>

                    {/* Category Links */}
                    <div className="flex flex-col gap-y-3">
                        <Link to='/'>
                            Tops & T-Shirts
                        </Link>
                        <Link to='/'>
                            Shorts
                        </Link>
                        <Link to='/'>
                            Hoodies & Pullovers
                        </Link>
                        <Link to='/'>
                            Jackets & Vests
                        </Link>
                        <Link to='/'>
                            Pants & Tights
                        </Link>
                        <Link to='/'>
                            Compression & Baselayer
                        </Link>
                        <Link to='/'>
                            Tracksuits
                        </Link>
                        <Link to='/'>
                            Socks
                        </Link>
                    </div>

                    {/* Accordion Section */}
                    <div className="max-md:hidden">
                        {[
                            {
                                title: "Sale & Offers",
                                key: "sale",
                                content: (
                                    <div className="flex flex-col gap-2">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" />
                                            Up to 50% Off
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" />
                                            Sale
                                        </label>
                                    </div>
                                ),
                            },
                            {
                                title: "Color",
                                key: "color",
                                content: (
                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                            { name: "Black", color: "bg-black" },
                                            { name: "Blue", color: "bg-blue-400" },
                                            { name: "Brown", color: "bg-rose-400" },
                                            { name: "Green", color: "bg-lime-400" },
                                            { name: "Grey", color: "bg-gray-400" },
                                            { name: "Multi C", color: "bg-black/50" },
                                            { name: "Orange", color: "bg-orange-400" },
                                            { name: "Pink", color: "bg-pink-400" },
                                            { name: "Purple", color: "bg-purple-600" },
                                        ].map((c) => (
                                            <div key={c.name} className="flex flex-col items-center">
                                                <div
                                                    className={`w-6 h-6 rounded-full border cursor-pointer ${c.color}`}
                                                ></div>
                                                <span className="text-xs mt-1">{c.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                ),
                            },
                            {
                                title: "Technology",
                                key: "technology",
                                content: (
                                    <div className="flex flex-col gap-2">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Waterproof
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Breathable
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Lightweight
                                        </label>
                                    </div>
                                ),
                            },
                            {
                                title: "Size",
                                key: "size",
                                content: (
                                    <div className="flex flex-wrap gap-2">
                                        {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                            <label
                                                key={size}
                                                className="border px-2 py-1 text-xs rounded cursor-pointer"
                                            >
                                                <input type="checkbox" className="mr-1" />
                                                {size}
                                            </label>
                                        ))}
                                    </div>
                                ),
                            },
                            {
                                title: "Collections",
                                key: "collections",
                                content: (
                                    <div className="flex flex-col gap-2">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Summer 2026
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Winter 2025
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Exclusive
                                        </label>
                                    </div>
                                ),
                            },
                            {
                                title: "Fit",
                                key: "fit",
                                content: (
                                    <div className="flex flex-col gap-2">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Slim
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Regular
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" /> Loose
                                        </label>
                                    </div>
                                ),
                            },
                        ].map((section) => (
                            <div key={section.key} className="border-t border-black mt-5">
                                <div
                                    onClick={() => toggle(section.key)}
                                    className="flex items-center justify-between mt-5 cursor-pointer"
                                >
                                    <span>{section.title}</span>
                                    <motion.img
                                        src={dataImage.top}
                                        className="p-1"
                                        animate={{ rotate: open === section.key ? 180 : 0 }}
                                    />
                                </div>

                                <AnimatePresence>
                                    {open === section.key && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden mt-3 text-sm"
                                        >
                                            {section.content}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* responsive telefon uchun */}

                <div className="md:hidden py-4 border-b">
                    <h2 className="font-medium text-lg mb-5">New Releases (50)</h2>
                    <div className="flex items-center gap-x-4 overflow-x-scroll w-full whitespace-nowrap">
                        <Link to='/'>
                            Tops & T-Shirts
                        </Link>
                        <Link to='/'>
                            Shorts
                        </Link>
                        <Link to='/'>
                            Hoodies & Pullovers
                        </Link>
                        <Link to='/'>
                            Jackets & Vests
                        </Link>
                        <Link to='/'>
                            Pants & Tights
                        </Link>
                        <Link to='/'>
                            Compression & Baselayer
                        </Link>
                        <Link to='/'>
                            Tracksuits
                        </Link>
                        <Link to='/'>
                            Socks
                        </Link>
                    </div>

                </div>

                <div className="flex items-center justify-between mt-3 md:hidden">
                    <span className="font-medium text-black/65">
                        Results {ProductAPI.length}
                    </span>
                    <button className="border border-black font-medium px-3 py-2 rounded-full">
                        Filter
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-md:mt-3">
                    {ProductAPI.map((item) => (
                        <Link key={item.id} to={`/product/${item.id}`}>
                            <div>
                                <img
                                    className="w-full max-w-[338px] h-[400px] max-md:max-w-[164px] max-md:h-[169px] hover:rounded-lg hover:transition-all hover:duration-200"
                                    src={item.cardImage}
                                    alt=""
                                />
                                <div className="flex items-center gap-x-5 max-md:hidden">
                                    <div className="flex items-center justify-start gap-x-3 mt-3">
                                        {item.cardimageType.slice(0, 3).map((img, index) => (
                                            <img
                                                className="rounded-lg"
                                                width={65}
                                                height={100}
                                                key={index}
                                                src={img}
                                                alt="card image"
                                            />
                                        ))}
                                    </div>
                                    <p>{item.age}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-red-700">{item.text}</span>
                                    <p className="font-medium">{item.value}</p>
                                    <p className="md:hidden">
                                        {item.cardName}
                                    </p>
                                    <p className="font-medium text-sm text-green-500 max-md:hidden">{item.prise}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </section>
    )
};

export default Mens;
