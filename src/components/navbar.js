import React, { useEffect, useState } from "react";
import wishlist from "./../Images/Wishlist.png";
import cartimg from "./../Images/cart2.png";
import profile from "./../Images/user.png";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "antd";
const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const navigate = useNavigate();
  const [tap, settap] = useState("false");
  const location = useLocation();
  const handletap = () => {
    settap(!tap);
  };
  const handlelogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  useEffect(() => {
    settap(false);
  }, [location]);
  return (
    <div className=" mb-24">
      {window.innerWidth > 768 ? (
        <header class="header-area header-sticky mx-10">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav class="main-nav">
                  <Link to="/" class="logo pt-3">
                    <img src="assets/images/logo.png" />
                  </Link>

                  <ul class="nav">
                    <li>
                      <Link to="/" class="active">
                        Home
                      </Link>
                    </li>
                    <li class="scroll-to-section">
                      <Link to="/productpage" className="basis-1/4 text-2xl">
                        Products
                      </Link>
                    </li>
                    <li class="scroll-to-section">
                      <Link to="/about" className="basis-1/4 text-2xl">
                        About
                      </Link>
                    </li>
                    <li class="scroll-to-section">
                      {!auth.user ? (
                        <>
                          <Link className="basis-1/4 text-2xl" to="/signup">
                            Signup
                          </Link>
                        </>
                      ) : (
                        <>
                          <a className="text-2xl" onClick={handlelogout}>
                            Logout
                          </a>
                        </>
                      )}
                    </li>
                    <li class="scroll-to-section">
                      <div className="flex gap-12 justify-between items-center">
                        {/* <Link>
                          <img src={wishlist} width={40} height={40}></img>
                        </Link> */}
                        <Badge count={cart?.length} showZero>
                          <Link to="/cart">
                            <img
                              src={cartimg}
                              width={30}
                              height={30}
                              alt="Cart"
                            />
                          </Link>
                        </Badge>

                        <Link to="/admin">
                          <img src={profile} width={30} height={30}></img>
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <Link class="menu-trigger">
                    <span>Menu</span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <div className="border shadow p-2 position-absolute w-full position-fixed top-0 z-10 bg-white">
          <div className="flex justify-between">
            <div>
              <img width={150} src="assets/images/logo.png" />
            </div>
            <div
              onClick={() => {
                handletap();
              }}
            >
              <img src="assets/images/menu.png" width={30} height={30} />
            </div>
          </div>
          {tap ? (
            <div className="flex flex-col items-center  mt-4 ">
              <ul className="text-2xl text-center text-black font-semibold">
                <li className="pb-4">
                  <Link to="/">Home</Link>
                </li>
                <li className="pb-4">
                  <Link to="/productpage" className=" text-2xl">
                    Products
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="/about" className=" text-2xl">
                    About
                  </Link>
                </li>
                <li className="pb-4">
                  {!auth.user ? (
                    <>
                      <Link className=" text-2xl" to="/signup">
                        Signup
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link className="text-2xl" onClick={handlelogout}>
                        Logout
                      </Link>
                    </>
                  )}
                </li>
                <li>
                  <div className="items-center text-2xl flex flex-col pb-4">
                    <Badge count={cart?.length} showZero>
                      <Link className="text-2xl pb-8" to="/cart">
                        Cart
                      </Link>
                    </Badge>
                    <Link className="pt-3" to="/admin">
                      Account
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Navbar;
