import Widget from "../Widget/Widget";
import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";
import Users from "../Users/Users";
import Products from "../Products/Products";
import { useState } from "react";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("users");

  let renderTab;

  const getRenderTab = () => {
    switch (selectedTab) {
      case "users":
        renderTab = <Users limit={5} heading="" />;
        break;
      case "products":
        renderTab = <Products limit={5} heading="" />;
        break;
      default:
        break;
    }
  };
  getRenderTab();

  return (
    <div className="w-[100%] overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4  p-5 md:gap-5">
        <Widget type="users" widgetData="250" />
        <Widget type="orders" widgetData="350" />
        <Widget type="earnings" widgetData="560" />
        <Widget type="balance" widgetData="7780" />
      </div>
      <div className="md:flex grid p-5 gap-5">
        <Featured />
        <Chart />
      </div>

      <div className=" border shadow-lg p-5 m-5">
        <div className="flex items-center gap-5">
          <button
            className={`border p-2 md:p-4 rounded-lg w-20 md:w-32 text-sm md:text-lg ${
              selectedTab === "users"
                ? "bg-blue-500 text-white text-sm md:text-lg font-semibold"
                : ""
            }`}
            onClick={() => setSelectedTab("users")}
          >
            Users
          </button>
          <button
            className={`border p-2 md:p-4 rounded-lg w-20 md:w-32 text-sm md:text-lg ${
              selectedTab === "products"
                ? "bg-blue-500 text-white text-sm md:text-lg font-semibold"
                : ""
            }`}
            onClick={() => setSelectedTab("products")}
          >
            Products
          </button>
        </div>
        <div className="min-h-[350px] md:min-h-[400px] overflow-y-auto">
          {renderTab}
        </div>
      </div>
    </div>
  );
};

export default Home;
