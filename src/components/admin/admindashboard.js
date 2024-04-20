import { React, useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import AdminMenu from "./adminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { baseURL } from "../baseURL";
const Admindashboard = () => {
  const [auth] = useAuth();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const handlechange = async (userId) => {
    try {
      if (newpassword !== conpassword) {
        toast.error("New Password does not match");
        return;
      } else {
        const { data } = await axios.put(
          `${baseURL}/updatepassword/${userId}`,
          {
            name,
            email,
            password,
            newpassword,
          }
        );
        console.log(data);
        toast.success("Password updated successfully");
      }
    } catch (err) {
      toast.error("Password does not match");
      console.log(err);
    }
  };

  useEffect(() => {
    if (auth?.token) {
      console.log(auth);
    }
  }, [auth]);
  return (
    <div>
      {/* <div className="md:flex justify-between">
        <p>Home/My account</p>
        <p> Welcome {auth && auth.user && auth.user.name} !</p>
      </div> */}
      <div className="md:flex content-between gap-12 py-4">
        <AdminMenu />
        <div className="flex-1">
          <h2 className="font-semibold text-3xl md:text-5xl pb-8">
            Edit your profile
          </h2>
          <p className="text-xl pb-4">Basic info</p>
          <div className="md:flex gap-8">
            <div class="form-floating mb-3 flex-auto">
              <input
                value={name}
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setname(e.target.value)}
              />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3 flex-auto">
              <input
                value={email}
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setemail(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
          </div>
          <p className="text-xl pb-4">Change Password</p>
          <div class="form-floating mb-3">
            <input
              value={password}
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setpassword(e.target.value)}
            />
            <label for="floatingInput">Current password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              value={newpassword}
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setnewpassword(e.target.value)}
            />
            <label for="floatingInput">New password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              value={conpassword}
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setconpassword(e.target.value)}
            />
            <label for="floatingInput">Confirm password</label>
          </div>
          <button
            className="btn btn-primary my-4 py-2 px-4 "
            onClick={() => {
              handlechange(auth.user._id);
              console.log(auth.user._id);
            }}
          >
            Save Change
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Admindashboard;
