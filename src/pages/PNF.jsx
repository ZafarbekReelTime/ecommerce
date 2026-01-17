import React from "react";
import { Link } from "react-router-dom";

const PNF = () => {
    return <section>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-2xl text-gray-600">Page Not Found</p>
            <Link to='/' className="bg-black/30 backdrop-blur-sm px-5 py-3 mt-5 rounded-xl font-semibold text-white">
                Bosh sahifa
            </Link>
        </div>
    </section>;
};

export default PNF;
