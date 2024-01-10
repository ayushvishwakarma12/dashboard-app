import { RiSingleQuotesL } from "react-icons/ri";
import { RiHome3Fill } from "react-icons/ri";
import { BsFileBarGraph } from "react-icons/bs";
import { FaUser, FaShoppingBag, FaTruck, FaBell } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import adminImage from "../../assets/admin.jpg";
import { IoClose } from "react-icons/io5";
import Context from "../../context/Context";

const Sidebar = () => {
  return (
    <Context.Consumer>
      {(value) => {
        const { sidebarActive, setSidebarActive } = value;
        return (
          <div
            className={`border-x-[1px] border-slate-300 min-h-screen p-5 flex flex-col flex-1 max-w-72 fixed md:static z-50 bg-white ${
              sidebarActive
                ? "left-0  duration-700 transition-all"
                : "-left-[300px] transition-all duration-700"
            }`}
          >
            <div
              className={` md:hidden ${
                sidebarActive
                  ? "flex justify-end"
                  : "fixed left-2 top-2 items-end"
              }`}
            >
              {sidebarActive && (
                <button onClick={() => setSidebarActive(!sidebarActive)}>
                  <IoClose className="h-[30px] w-[30px] text-slate-500" />
                </button>
              )}
            </div>

            <div className="flex mt-8 items-center">
              <RiSingleQuotesL className=" text-blue-500 h-8 w-8 mb-5" />
              <div className="flex items-center">
                <Link to={"/"}>
                  <p className="font-bold  text-2xl pb-5">Admin</p>
                </Link>
                <div className="m-2 relative left-4 bottom-4 h-[100px] w-[100px] rounded-full overflow-hidden border-2 border-blue-500">
                  <img
                    className="relative bottom-6 object-fill"
                    src={adminImage}
                    alt={"admin"}
                  />
                </div>
              </div>
            </div>

            <Link to={"/"}>
              <div className="bg-slate-200 p-2 rounded-lg flex items-center font-semibold cursor-pointer">
                <RiHome3Fill className="mr-2 text-blue-500 w-6 h-6" />
                <p className="text-slate-500">Dashboard</p>
              </div>
            </Link>
            <hr className=" border mt-5 mb-5" />
            <ul className="text-blue-500 grid grid-cols-1 gap-2">
              <Link to={"/users"}>
                <li className="flex items-center hover:bg-blue-200 duration-500 ease-in-out rounded-lg p-2">
                  <FaUser className="mr-1" />
                  <span className="font-semibold text-base text-black/60">
                    Users
                  </span>
                </li>
              </Link>
              <Link to={"/products"}>
                <li className="flex items-center  hover:bg-blue-200 duration-500 ease-in-out rounded-lg p-2">
                  <FaShoppingBag className="mr-1" />
                  <span className="font-semibold text-base text-black/60">
                    Product
                  </span>
                </li>
              </Link>
              <Link to={"/orders"}>
                <li className="flex items-center  hover:bg-blue-200 duration-500 ease-in-out rounded-lg p-2">
                  <AiFillShop className="mr-1" />
                  <span className="font-semibold text-base text-black/60">
                    Orders
                  </span>
                </li>
              </Link>
              <Link to={"/delivery"}>
                <li className="flex items-center  hover:bg-blue-200 duration-500 ease-in-out rounded-lg p-2">
                  <FaTruck className="mr-1" />
                  <span className="font-semibold text-base text-black/60">
                    Delivery
                  </span>
                </li>
              </Link>
              <Link to={"/stats"}>
                <li className="flex items-center  hover:bg-blue-200 duration-500 ease-in-out rounded-lg p-2">
                  <BsFileBarGraph className="mr-1" />
                  <span className="font-semibold text-base text-black/60">
                    Stats
                  </span>
                </li>
              </Link>
              <Link to={"/notification"}>
                <li className="flex items-center  hover:bg-blue-200 duration-500 ease-in-out rounded-lg p-2">
                  <FaBell className="mr-1" />
                  <span className="font-semibold text-base text-black/60">
                    Notification
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Sidebar;
