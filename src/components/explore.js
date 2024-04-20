import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div>
      <section class="section" id="explore">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="left-content">
                <h2>Explore Our Products</h2>
                <span className="pb-16">
                  Welcome to our electronic wonderland! Dive into a world of
                  cutting-edge technology and innovative gadgets. Whether you're
                  looking for the latest smartphones, sleek laptops, or smart
                  home devices, we've curated an unparalleled collection just
                  for you. Discover the perfect blend of style, functionality,
                  and performance in every product we offer.
                </span>
                <div class="quote pb-16">
                  <i class="fa fa-quote-left "></i>
                  <p className="text-4xl">
                    "The future is already here - it's just not evenly
                    distributed."
                  </p>
                </div>
                <span>
                  Explore our wide range of electronic items and experience the
                  future today. From state-of-the-art entertainment systems to
                  powerful computing devices, we have everything you need to
                  stay connected and elevate your digital lifestyle.
                </span>
                <div class="main-border-button">
                  <Link to="productpage">Discover More</Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-content">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="leather">
                      <h4>Leather Bags</h4>
                      <span>Latest Collection</span>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="first-image">
                      <img src="assets/images/pro.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="second-image">
                      <img src="assets/images/pro2.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="types">
                      <h4>Different Types</h4>
                      <span>Over 304 Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
