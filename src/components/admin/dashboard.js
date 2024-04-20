import React from "react";
import { useAuth } from "../../context/auth";
import Admindashboard from "./admindashboard";
import Userdashboard from "./userdashboard";
const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth);
  return (
    <div className="mx-12 my-12 ">
      {auth.token ? (
        <>
          {auth.user.role == 1 ? (
            <>
              <Admindashboard></Admindashboard>
            </>
          ) : (
            <>
              <Userdashboard></Userdashboard>
            </>
          )}
        </>
      ) : (
        <h1 className="mx-12 my-12 text-center text-2xl md:text-5xl font-bold">
          Please sign up/ login to continue
        </h1>
      )}
    </div>
  );
};

export default Dashboard;
