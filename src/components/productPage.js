import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Checkbox } from "antd";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { baseURL } from "./baseURL";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const [products, setproducts] = useState("");
  const [avcategory, setavcategory] = useState([]);
  const [cart, setCart] = useCart();
  const [loading, setLoading] = useState(false);
  const { subCategory } = useParams();

  const getcategory = async () => {
    try {
      const data = await axios.get(`${baseURL}/getcategory`);
      setavcategory(data.data);
      // console.log(avcategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      let data = []
      const queryParams = new URLSearchParams(window.location.search);
      const subCategory = queryParams.get("subCategory");

      if (subCategory)
        data = await axios.get(`${baseURL}/products/get?subCategory=${subCategory}`);
      else
        data = await axios.get(`${baseURL}/products/get`);


      setproducts(data);
      setLoading(false);
      // console.log(products);
      // console.log(products.data[0].title);
      getcategory();
    };
    fetchdata();
  }, []);

  return (
    <div>
      <div class="page-heading" id="top">
        <div class="container mb-24">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner-content">
                <h2>Check Our Products</h2>
                <span>
                  Browse through our products and find the best one for you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-16">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-100 md:py-12 md:px-32 ">
        {loading ? (
          <div className="text-center mt-5 ">Loading...</div>
        ) : (
          <div className="mt-8  md:mt-0 grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-16">
            {products &&
              products?.data?.map((product) => (
                <div className="p-4 hover:border shadow">
                  <div className="flex flex-col content-between justify-between">
                    <div className="flex justify-center">
                      <img className="" src={product.imgURL} alt="..." />
                    </div>
                    <div className="mt-4 py-3">
                      <h5 class=" text-xl pb-4">{product.title}</h5>

                      <p class="text-xl font-semibold pb-4">
                        ₨.{product.price}
                      </p>

                      <div className="flex justify-between pb-4">
                        <button
                          onClick={() => {
                            setCart([...cart, product]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, product])
                            );
                            toast.success("Item added to cart");
                          }}
                        >
                          <button class="btn btn-primary text-xl">
                            Add to cart
                          </button>
                        </button>
                        <p class="text-xl rounded bg-green-600 text-white py-1 px-3">
                          {product.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      <Toaster></Toaster>
    </div>
  );
};
export default ProductPage;
