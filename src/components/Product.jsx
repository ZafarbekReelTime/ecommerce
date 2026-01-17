import React from "react";
import { datacode, ProductAPI } from "../assets/js/data";
import { Link } from "react-router";

const Product = () => {
  return (
    <section className={`${datacode.container} py-5`}>
      <h3 className="text-xl font-medium mb-4">
        Popular right now
      </h3>

      <div className="grid max-md:grid-cols-1 lg:grid-cols-4 gap-4">
        {ProductAPI.slice(0, 4).map((item) => (
          <Link className="hover:border hover:rounded-lg hover:p-1 hover:shadow-sm hover:shadow-blue-500 hover:transition-all hover:duration-200" key={item.id} to={`/product/${item.id}`}>
            <img
              src={item.cardImage}
              alt="product"
              className="w-full h-auto"
            />
            <div className="flex items-center gap-x-3 mt-3">
              {item.cardimageType.slice(0, 3).map((img, index) => (
                <img width={65} height={100} key={index} src={img} alt="" />
              ))}
            </div> 
            <div className="flex items-center gap-x-5">
              <span className="font-medium text-red-700">
                {item.text}
              </span>
              <p>
                {item.age}
              </p>
              <p className="font-medium text-yellow-600 text-lg">
                {item.value}
              </p>
            </div>
            <p className="font-medium text-sm text-green-500">
              {item.prise}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Product;
