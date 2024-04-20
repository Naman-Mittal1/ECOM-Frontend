import React from "react";
import Hero from "./hero";
import Product from "./product";
import rect from "../Images/Rect.png";
import feat1 from "../Images/feat1.png";
import feat2 from "../Images/feat2.png";
import feat3 from "../Images/feat3.png";
import { Toaster } from "react-hot-toast";
import Explore from "./explore";
const Home = () => {
  //
  return (
    <div>
      <div className="App gap-32 flex flex-col items-center justify-centerc px-4 md:px-10">
        <Hero />
        <div>
          <div className="flex gap-3 items-center w-full">
            <img src={rect} width={20}></img>
            <p className="font-bold text-xl text-rose-600">Our Products</p>
          </div>
          <div className="my-5">
            <p className="text-5xl font-bold">Trending Products</p>
          </div>
          <Product />
        </div>
        <Explore />
        <div className="flex flex-col md:flex-row gap-24 item-center mb-12">
          <img src={feat1} width={400}></img>
          <img src={feat2} width={400}></img>
          <img src={feat3} width={400}></img>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Home;
