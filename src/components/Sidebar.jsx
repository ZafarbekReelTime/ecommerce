import React from "react";
import { dataImage } from "../assets/js/data";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll"; // 🔹 import scroll

const sidebarVariants = {
  hidden: { x: "-100%", transition: { duration: 0.3 } },
  visible: { x: 0, transition: { duration: 0.3 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Sidebar = ({ open, setOpen }) => {
  const links = [
    { name: "New & Featured", to: "/futured" },
    { name: "Men", to: "/mens" },
    { name: "Women", to: "/women" },
    { name: "Sale", to: "/sale" },
  ];

  const handleClick = () => {
    setOpen(false);       // sidebar yopiladi
    scroll.scrollToTop({   // sahifa tepasiga scroll
      duration: 500,      // 0.5s davomida
      smooth: true,
    });
  };

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

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="border rounded-full p-1 bg-black/30"
              >
                <img src={dataImage.yopish} alt="close" />
              </button>
            </div>

            {/* NAV LINKS */}
            <nav className="flex flex-col gap-y-3 mt-6">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className="flex items-center justify-between font-medium"
                  onClick={handleClick} // 🔹 link bosilganda sidebar yopiladi va scroll tepaga
                >
                  {link.name} <img src={dataImage.ong} alt="" />
                </NavLink>
              ))}
            </nav>

            {/* INFO SECTION */}
            <div className="mt-8">
              <p className="text-black/45 w-full max-w-[201px] mt-5">
                Become a Brand Member for the best products, inspiration and
                stories in sport.
                <NavLink to="/" className="text-black font-medium" onClick={handleClick}>
                  Learn more
                </NavLink>
              </p>

              <div className="flex items-center gap-x-5 mt-5">
                <NavLink
                  to="/"
                  className="bg-black text-white py-2 px-3 rounded-full"
                  onClick={handleClick}
                >
                  Join us
                </NavLink>
                <NavLink
                  to="/"
                  className="py-2 px-3 border border-black rounded-full font-medium"
                  onClick={handleClick}
                >
                  Sign in
                </NavLink>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex flex-col gap-y-3 mt-12">
              {[dataImage.savat, dataImage.group, dataImage.yurak, dataImage.soroq].map((icon, i) => (
                <NavLink key={i} to="/" onClick={handleClick}>
                  <img src={icon} alt="" width={i === 3 ? 30 : undefined} />
                </NavLink>
              ))}
            </div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
