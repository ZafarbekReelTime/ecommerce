import React from "react";
import { dataImage } from "../assets/js/data";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariants = {
  hidden: {
    x: "-100%",
    transition: { duration: 0.3 }
  },
  visible: {
    x: 0,
    transition: { duration: 0.3 }
  }
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const Sidebar = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* SIDEBAR */}
          <motion.section
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full max-w-sm px-5 py-3 h-screen bg-white fixed left-0 top-0 z-50 overflow-y-scroll"
          >
            <div className="flex items-center justify-between">
              <div></div>

              {/* close button */}
              <button
                onClick={() => setOpen(false)}
                className="border rounded-full p-1 bg-black/30"
              >
                <img src={dataImage.yopish} alt="close" />
              </button>
            </div>

            <nav className="flex flex-col gap-y-3 mt-6">
              <NavLink to='/futured' className="flex items-center justify-between font-medium">
                New & Featured <img src={dataImage.ong} alt="" />
              </NavLink>
              <NavLink to="/mens" className="flex items-center justify-between font-medium">
                Men <img src={dataImage.ong} alt="" />
              </NavLink>
              <NavLink to="/" className="flex items-center justify-between font-medium">
                Women <img src={dataImage.ong} alt="" />
              </NavLink>
              <NavLink to="/" className="flex items-center justify-between font-medium">
                Sale <img src={dataImage.ong} alt="" />
              </NavLink>
            </nav>

            <div className="mt-8">
              <p className="text-black/45 w-full max-w-[201px] mt-5">
                Become a Brand Member for the best products, inspiration and stories in sport.
                <Link className="text-black font-medium"> Learn more</Link>
              </p>

              <div className="flex items-center gap-x-5 mt-5">
                <Link to="/" className="bg-black text-white py-2 px-3 rounded-full">
                  Join us
                </Link>
                <Link to="/" className="py-2 px-3 border border-black rounded-full font-medium">
                  Sign in
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-y-3 mt-12">
              <Link to="/"><img src={dataImage.savat} alt="" /></Link>
              <Link to="/"><img src={dataImage.group} alt="" /></Link>
              <Link to="/"><img src={dataImage.yurak} alt="" /></Link>
              <Link to="/"><img width={30} src={dataImage.soroq} alt="" /></Link>
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
