import React from "react";
import Xeader from "../components/Xeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return(
    <section className="flex flex-col min-h-screen select-none">
        <Xeader/>
        <main className="flex-grow">
            <Outlet/>
        </main>
        <Footer/>
    </section>
  );
};

export default Layout;
