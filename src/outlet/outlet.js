import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Users from "../components/Users/Users";
import Products from "../components/Products/Products";
import NotFound from "../components/NotFound/NotFound";
import Navbar from "../components/Navbar/Navbar";

const Outlet = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Outlet;
