import React from "react";
import Swiper from "../components/Swiper";
import Tranding from "../components/Tranding";
import Reklame from "../components/Reklame";
import Product from "../components/Product";
import ReklamaIkki from "../components/ReklamaIkki";
import Allpage from "../components/Allpage";

const Home = () => {
  return(
    <section>
      <Swiper/>
      <Tranding/>
      <Reklame/>
      <Product/>
      <ReklamaIkki/> 
      <Allpage/>
    </section>
  );
};

export default Home;
