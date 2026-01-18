import React from "react";
import { Link } from "react-router-dom";
import { datacode, dataImage } from "../assets/js/data";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <section className={`${datacode.container} py-5 flex max-md:flex-col max-md:items-start max-md:gap-y-3 items-center justify-between`}>
        
        {/* Company */}
        <div className="flex flex-col gap-y-3">
          <h2 className="text-xl font-medium">Company</h2>
          <p className="text-white/80">Find location nearest to you:</p>
          <Link to="/stores" className="underline">See Our Stores</Link>
          <Link to="tel:+998991234567">+998 99 123 45 67</Link>
          <Link to="mailto:hello@mail.com">hello@mail.com</Link>
        </div>

        {/* Information */}
        <div className="flex flex-col gap-y-3">
          <h2 className="text-xl font-medium">Information</h2>
          <Link to="/account">My Account</Link>
          <Link to="/login">LogIn</Link>
          <Link to="/cart">My Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-y-3">
          <h2 className="text-xl font-medium">Services</h2>
          <Link to="/about">About us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/delivery">Delivery Information</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* Subscribe */}
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl font-medium">Subscribe</h2>
          <p className="w-full max-w-[338px] mb-3">
            Enter your e-mail below to be the first to know about new collections and product launches.
          </p>
          <div className="relative">
            <img className="absolute z-10 bottom-4 left-3" src={dataImage.email} alt="Email icon" />
            <input
              className="px-12 py-4 rounded-full text-black placeholder:font-medium placeholder:text-black focus:outline-none"
              type="email"
              placeholder="Your email"
              autoComplete="off"
            />
            <img className="absolute z-10 bottom-5 right-20" src={dataImage.leave} alt="Send icon" />
          </div>
        </div>

      </section>

      <div className={`${datacode.container} flex items-center justify-between py-8`}>
        <div></div>
        <p>©Company 2024</p>
        <div className="flex items-center gap-x-3">
          <Link to="https://facebook.com" aria-label="Facebook">
            <img width={24} height={24} src={dataImage.facebook} alt="Facebook" />
          </Link>
          <Link to="https://twitter.com" aria-label="Twitter">
            <img width={24} height={24} src={dataImage.xd} alt="Twitter" />
          </Link>
          <Link to="https://instagram.com" aria-label="Instagram">
            <img width={24} height={24} src={dataImage.insta} alt="Instagram" />
          </Link>
          <Link to="https://youtube.com" aria-label="YouTube">
            <img width={24} height={24} src={dataImage.youtube} alt="YouTube" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
