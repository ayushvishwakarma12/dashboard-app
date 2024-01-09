import { RiSingleQuotesL } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RiHome3Fill } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdSwitch } from "react-icons/io";
import { BsFileBarGraph } from "react-icons/bs";
import { FaUser, FaShoppingBag, FaTruck, FaBell } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" border-x-[1px] border-slate-300 h-screen p-5 flex-1 max-w-72">
      <div className="flex mt-8">
        <RiSingleQuotesL className=" text-blue-500 h-8 w-8 mb-[30px]" />
        <p className="font-bold  text-2xl">Admin</p>
      </div>
      <div className="flex items-center bg-slate-200 p-2 rounded-lg">
        <CiSearch className="mr-2" />
        <input
          placeholder="Search"
          className=" bg-inherit outline-none"
          type="search"
        />
      </div>
      <Link to={"/"}>
        <div className="bg-slate-200 p-2 rounded-lg mt-5 flex items-center font-semibold cursor-pointer">
          <RiHome3Fill className="mr-2 text-blue-500 w-6 h-6" />
          <p className="text-slate-500">Dashboard</p>
        </div>
      </Link>
      <hr className=" border mt-5 mb-5" />
      <ul className="text-blue-500 grid grid-cols-1 gap-2">
        <Link to={"/users"}>
          <li className="flex items-center p-1">
            <FaUser className="mr-1" />
            <span className="font-semibold text-base text-black/60">Users</span>
          </li>
        </Link>
        <Link to={"/products"}>
          <li className="flex items-center p-1">
            <FaShoppingBag className="mr-1" />
            <span className="font-semibold text-base text-black/60">
              Product
            </span>
          </li>
        </Link>
        <li className="flex items-center p-1">
          <AiFillShop className="mr-1" />
          <span className="font-semibold text-base text-black/60">Orders</span>
        </li>
        <li className="flex items-center p-1">
          <FaTruck className="mr-1" />
          <span className="font-semibold text-base text-black/60">
            Delivery
          </span>
        </li>
        <li className="flex items-center p-1">
          <BsFileBarGraph className="mr-1" />
          <span className="font-semibold text-base text-black/60">Stats</span>
        </li>
        <li className="flex items-center p-1">
          <FaBell className="mr-1" />
          <span className="font-semibold text-base text-black/60">
            Notification
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
