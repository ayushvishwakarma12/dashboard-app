import {
  MdKeyboardArrowUp,
  MdOutlineShoppingCart,
  MdOutlineAttachMoney,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Widget = ({ type, widgetData }) => {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <IoPersonOutline className="h-[30px] w-[30px] p-1 rounded-md ml-auto text-red-500 font-bold bg-red-500/25" />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <MdOutlineShoppingCart className="h-[30px] w-[30px] p-1 rounded-md ml-auto text-yellow-500 bg-yellow-500/25" />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MdOutlineAttachMoney className="h-[30px] w-[30px] text-green-600 bg-green-500/25 p-1 rounded-md ml-auto" />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <MdOutlineAccountBalanceWallet className="h-[30px] w-[30px] text-purple-600 bg-purple-500/25 p-1 rounded-md ml-auto" />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="flex flex-1 justify-between p-3 shadow-lg h-[150px] border">
      <div className="flex flex-col justify-between">
        <span className="font-semibold text-gray-400 text-base">
          {data.title}
        </span>
        <span className="text-[28px]">
          {data.isMoney && "$"} {widgetData}
        </span>
        <Link to={`/${type}`}>
          <span className="text-sm border-b border-gray-400 w-max">
            {data.link}
          </span>
        </Link>
      </div>
      <div className="flex flex-col justify-between">
        <div
          className={`flex items-center text-sm ${
            true ? "text-green-500" : "text-red-500"
          }`}
        >
          <MdKeyboardArrowUp />
          20 %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
