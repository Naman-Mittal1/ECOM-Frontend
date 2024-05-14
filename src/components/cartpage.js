import { React, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { baseURL } from "./baseURL";
import { json, useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import toast from "react-hot-toast";

export const Checkout = ({ totalPrice, clientToken, cart, instance, setinstance, handlePayment, loading }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold md:text-5xl md:font-bold">
        Cart Summary
      </h2>
      <p className="text-xl md:text-2xl py-3">Total|Checkout|Payment</p>
      <h4 className="text-xl md:text-3xl">Total: Rs{totalPrice()}</h4>
      <div className="mt-4">
        {console.log(clientToken, cart)}
        {!clientToken || !cart?.length ? (
          "Error"
        ) : (
          <>
            <DropIn
              options={{
                authorization: clientToken,
                paypal: {
                  flow: "vault",
                },
              }}
              onInstance={(instance) => setinstance(instance)}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log("Button clicked");
                handlePayment();
              }}
            // disabled={!loading || !instance || auth?.token}
            >
              {loading ? "Processing..." : "Make payment"}
            </button>
          </>
        )}
      </div>
      <p className="py-4">
        Please choose card option to make payment here
      </p>
    </div>
  )
}


const Cartpage = () => {
  const [auth] = useAuth();
  const [cart, setcart] = useCart();
  const [quantities, setQuantities] = useState({});
  const [clientToken, setclientToken] = useState("");
  const [instance, setinstance] = useState("");
  const [loading, setloading] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);


  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState(null);


  const navigate = useNavigate();
  useEffect(() => {
    let existingcart = localStorage.getItem("cart");
    if (existingcart) setcart(JSON.parse(existingcart));
    console.log(existingcart);
    totalPrice();
  }, []);

  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * quantities[item._id]; // Multiply price by quantity
    });
    return total;
  };
  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities({ ...quantities, [productId]: newQuantity });
  };

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setcart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (err) {
      console.log(err);
    }
  };

  //get gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/braintree/token`);
      setclientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  //payment code
  const handlePayment = async () => {
    try {
      const buyer = auth.user.name;
      const total = totalPrice();
      setloading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(`${baseURL}/braintree/payment`, {
        cart,
        nonce,
        buyer,
        total,
        address,
        area,
        pincode
      });
      setloading(false);
      window.localStorage.removeItem("cart");
      setcart([]);
      toast.success("Payment successful");
      navigate("/order");
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  };



  useEffect(() => {
    // console.log(cart);
    const initialQuantities = cart.reduce((acc, item) => {
      acc[item._id] = 1; // Default quantity is 1 for each item
      return acc;
    }, {});
    setQuantities(initialQuantities);
    getToken();
  }, [auth?.token]);

  return (
    <div className="md:m-8">
      {/* <p>Home/Cart</p> */}
      <h4 className="text-center text-2xl md:text-4xl py-8">
        {cart.length >= 1
          ? `You have ${cart.length} items in your cart ${auth.token ? "" : "Please login to checkout"
          }`
          : "Your cart is empty"}
      </h4>
      {!cart.length < 1 && auth.token && (
        <div className="md:mx-28 py-6 md:flex  justify-around items-center gap-24 p-8 border shadow">
          <div className="mb-4 md:mb-14">
            {cart?.map((p) => (
              <div className="flex gap-3 items-center mb-4">
                <div className="pb-8">
                  <img src={p.imgURL} alt={p.title} />
                </div>
                <div>
                  <p className="text-lg md:text-2xl">{p.title}</p>
                  <p className="text-lg md:text-2xl">Rs{p.price}</p>
                  <p className="text-lg md:text-2xl">{p.rating}</p>
                  <p className="text-lg md:text-2xl">{p.category}</p>
                  <div className="flex gap-10 pt-2">
                    <div className="border shadow px-2 pt-1 rounded">
                      <button
                        className="mr-2"
                        onClick={() => {
                          handleQuantityChange(
                            p._id,
                            quantities[p._id] - 1 > 0
                              ? quantities[p._id] - 1
                              : 1
                          );
                        }}
                      >
                        -
                      </button>
                      <span>{quantities[p._id] || 1}</span>
                      <button
                        className="ml-2"
                        onClick={() => {
                          handleQuantityChange(
                            p._id,
                            (quantities[p._id] || 1) + 1
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeCartItem(p._id)}
                      className="text-lg btn btn-primary"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <hr />
          </div>
          {
            !showCheckout ?

              <div className="w-96">

                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Address</label>
                <input onChange={(e) => setAddress(e.target.value)} type="address" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your address"></input>

                <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Area</label>
                <input onChange={(e) => setArea(e.target.value)} type="text" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your area/locality"></input>

                <label for="helper-text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Pincode</label>
                <input onChange={(e) => setPincode(e.target.value)} type="number" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your pincode"></input>


              </div>
              : <Checkout loading={loading} cart={cart} clientToken={clientToken} handlePayment={handlePayment} instance={instance} setinstance={setinstance} totalPrice={totalPrice} />}

          <button

            className="text-lg btn btn-primary mt-4"
            onClick={() => setShowCheckout(!showCheckout)}
          >
            {showCheckout ? "Cart" : "Checkout"}
          </button>

          {/*  */}
        </div>
      )}
    </div>
  );
};

export default Cartpage;


