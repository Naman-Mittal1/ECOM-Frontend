import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";

import Navbar from "./components/navbar";
import Dashboard from "./components/admin/dashboard";
import UserDetails from "./components/admin/users";
import ManageCategory from "./components/admin/manageCategory";
import Manageproducts from "./components/admin/manageproducts";
import Cartpage, { Checkout } from "./components/cartpage";
import OrdersPage from "./components/ordersPage";
import ManageOrders from "./components/admin/manageOrders";
import Footer from "./components/footerr";
import About from "./components/about";
import ProductPage from "./components/productPage";
// import Checkout from "./components/checkout";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/cart" element={<Cartpage />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/order" element={<OrdersPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/admin/manageproduct" element={<Manageproducts />} />
        <Route path="/admin/managecategory" element={<ManageCategory />} />
        <Route path="/admin/manageOrders" element={<ManageOrders />} />
        <Route path="/admin/users" element={<UserDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
