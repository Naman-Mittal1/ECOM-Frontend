import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div class="main-banner pt-4 md:pt-24" id="top">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div class="left-content">
                <div class="thumb">
                  <div class="inner-content">
                    <h4 className="px-2">We Are Hexashop</h4>
                    <span>
                      "Unlocking Seamless Shopping: Your Gateway to E-commerce
                      Excellence."
                    </span>
                    <div class="main-border-button">
                      <Link to="productpage">Purchase Now!</Link>
                    </div>
                  </div>
                  <img src="assets/images/hero.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-content">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="right-first-image">
                      <div class="thumb">
                        <div class="inner-content">
                          <h4>Laptops</h4>
                          <span>Upto 30% off</span>
                        </div>
                        <div class="hover-content">
                          <div class="inner">
                            <h4>Laptops</h4>
                            <p>Buy best in category laptops</p>
                            <div class="main-border-button">
                              <a href="http://localhost:3000/productpage?subCategory=laptop" target="_blank">
                                Discover More
                              </a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/images/laptop3.jpg" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="right-first-image">
                      <div class="thumb">
                        <div class="inner-content">
                          <h4>Smartphones</h4>
                          <span>Best Technolgy, Best Brands</span>
                        </div>
                        <div class="hover-content">
                          <div class="inner">
                            <h4>Smartphones</h4>
                            <p>Latest smartphones at best prices</p>
                            <div class="main-border-button">
                              <a href="http://localhost:3000/productpage?subCategory=smartphones" target="_blank">
                                Discover More
                              </a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/images/mobile2.jpg" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="right-first-image">
                      <div class="thumb">
                        <div class="inner-content">
                          <h4>Headphones</h4>
                          <span>Fashionable headphones for everyone</span>
                        </div>
                        <div class="hover-content">
                          <div class="inner">
                            <h4>Headphones</h4>
                            <p>Best in class headphones for music lovers</p>
                            <div class="main-border-button">
                              <a href="http://localhost:3000/productpage?subCategory=headphones" target="_blank">
                                Discover More
                              </a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/images/headphones.jpg" />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="right-first-image">
                      <div class="thumb">
                        <div class="inner-content">
                          <h4>Accessories</h4>
                          <span>Best Trend Accessories</span>
                        </div>
                        <div class="hover-content">
                          <div class="inner">
                            <h4>Accessories</h4>
                            <p>Best in class accessories</p>
                            <div class="main-border-button">
                              <a href="http://localhost:3000/productpage?subCategory=accessories" target="_blank">
                                Discover More
                              </a>
                            </div>
                          </div>
                        </div>
                        <img src="assets/images/smart2.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
