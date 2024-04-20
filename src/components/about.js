import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div class="page-heading about-page-heading" id="top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner-content">
                <h2>About this Website</h2>
                <span>
                  "Empowering seamless shopping experiences with our innovative
                  full stack e-commerce platform."
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-us">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="left-image">
                <img src="assets/images/about-left-image.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-content">
                <h4>About Us &amp; Our Skills</h4>
                <span>
                  "Our full stack e-commerce website combines cutting-edge
                  technology with a passion for customer satisfaction, offering
                  a seamless and enjoyable shopping experience for all."
                </span>
                <div class="quote">
                  <i class="fa fa-quote-left"></i>
                  <p>
                    Welcome to Hexashop, where we've embarked on an exciting
                    journey to revolutionize the online shopping experience! Our
                    full stack e-commerce project is the culmination of
                    dedication, innovation, and a passion for delivering
                    exceptional service to our customers..
                  </p>
                </div>
                <p>
                  Our full stack e-commerce website is powered by cutting-edge
                  technologies to ensure reliability, security, and performance.
                  Here are some of the key technologies we utilize:
                  <ul>
                    <li> Frontend: HTML, CSS, JavaScript, React.js</li>
                    <br />
                    <li> Backend: Node.js, Express.js, MongoDB</li>
                    <br />
                    <li> Payment Processing:PayPal</li> <br />
                    <li>
                      Authentication and Authorization: JSON Web Tokens (JWT),
                      OAuth
                    </li>
                  </ul>
                </p>

                <ul>
                  <li>
                    <Link to="/">
                      <i class="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa fa-behance"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
