import React, { useState } from "react";
import axios from "axios";
import AdminMenu from "./adminMenu";
import { baseURL } from "../baseURL";
const ManageCategory = () => {
  const [category, setcategory] = useState("");
  const handlesubmit = () => {
    const response = axios
      .post(`${baseURL}/createcategory`, {
        name: category,
      })
      .then(() => {
        setcategory("");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="md:flex content-between gap-12 py-4 mx-12 my-12">
      <AdminMenu />
      <div className="p-5 bg-info bg-opacity-10 border border-info border-start-0 rounded-end py-28 flex-1 ">
        <p className="text-4xl font-bold pb-8">Add new Category</p>
        <input
          className="p-2 mr-7"
          placeholder="Enter category name"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        ></input>

        <button
          type="submit"
          onClick={handlesubmit}
          class="btn btn-outline-warning"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ManageCategory;
