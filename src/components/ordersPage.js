import { React, useState, useEffect } from "react";
import axios from "axios";
import Usermenu from "./usermenu";
import { useAuth } from "../context/auth";
import { baseURL } from "./baseURL";
import moment from "moment";
const OrdersPage = () => {
  const [orders, setorders] = useState([]);
  const [auth] = useAuth();
  const getOrders = async () => {
    try {
      const user = auth.user.name;
      const { data } = await axios.post(`${baseURL}/order`, {
        buyer: user,
      });
      console.log(data[0].products);
      setorders(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (auth?.token) {
      // console.log(auth);
      getOrders();
    }
  }, [auth?.token]);
  return (
    <div className=" mx-2 md:mx-12 my-12 ">
      {/* <div className="md:flex justify-between">
        <p>Home/My account</p>
        <p> Welcome {auth && auth.user && auth.user.name} !</p>
      </div> */}
      <div className="md:flex content-between gap-12 py-4 ">
        <Usermenu className="flex-none" />
        <div className="flex-1">
          <h2 className="text-center font-bold text-5xl pb-8 ">All Orders</h2>
          {orders &&
            orders.map((p, i) => {
              return (
                <div className="border shadow md:p-8">
                  <table className="table">
                    <thead>
                      <tr className="text-xl">
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        {window.innerWidth > 768 && <th scope="col">Buyer</th>}
                        {/* <th scope="col">Buyer</th> */}
                        <th scope="col">Order date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Address</th>
                        <th scope="col">Area</th>
                        <th scope="col">pincode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-xl">
                        <td>{i + 1}</td>
                        <td>{p?.status}</td>
                        {window.innerWidth > 768 && <td>{p?.buyer}</td>}
                        {/* <td>{p?.buyer}</td> */}
                        <td>{moment(p?.createdAt).fromNow()}</td>
                        <td>{p?.payment.success ? "Success" : "Failed"}</td>
                        <td>{p?.address}</td>
                        <td>{p?.area}</td>
                        <td>{p?.pincode}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="py-8">
                    {p?.products?.map((p) => (
                      <div className="flex gap-6 items-center">
                        <div className="max-w-64">
                          <img src={p.imgURL}></img>
                        </div>
                        <div>
                          <p className="text-xl pb-2">
                            Product name : {p.title}
                          </p>
                          <p className="text-xl pb-2">
                            Category : {p.category}
                          </p>
                          <p className="text-xl pb-2">Price : {p.price}</p>
                          <p className="text-xl pb-2">Rating : {p.rating}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
