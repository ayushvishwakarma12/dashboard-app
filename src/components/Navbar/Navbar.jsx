import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import Context from "../../context/Context";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => (
  <Context.Consumer>
    {(value) => {
      const { sidebarActive, setSidebarActive } = value;

      return (
        <div className="p-3 flex items-center justify-between bg-slate-100/80 sticky pl-5 pr-5">
          <div className="flex items-center bg-white p-1 md:p-2 rounded-lg overflow-hidden">
            <CiSearch className="mr-2" />
            <input
              placeholder="Search"
              className="bg-inherit outline-none w-full text-[12px] md:text-base"
              type="search"
            />
          </div>
          <ul className="flex items-center gap-1 md:gap-3">
            <li className="flex justify-center items-center">
              <span className="relative left-6 -top-2 md:-top-3 md:left-7 h-4 w-4 bg-red-500 rounded-full flex justify-center items-center text-[10px] text-white">
                2
              </span>
              <FaRegBell className="h-[20] w-[20] md:h-[24px] md:w-[24px]" />
            </li>
            {/* <li className="flex justify-center items-center">
              <span className="relative left-6 -top-2 md:-top-3 md:left-7  h-4 w-4 bg-yellow-500 rounded-full flex justify-center items-center text-[10px] text-white">
                4
              </span>
              <IoStatsChartOutline className="h-[20] w-[20] md:h-[24px] md:w-[24px]" />
            </li> */}
            <li className="flex justify-center items-center">
              <span className="relative left-6 -top-2 md:-top-3 md:left-7  h-4 w-4 bg-blue-500 rounded-full flex justify-center items-center text-[10px] text-white">
                2
              </span>
              <HiOutlineMailOpen className="h-[20] w-[20] md:h-[24px] md:w-[24px]" />
            </li>

            <li className="flex justify-center items-center pl-4 md:hidden">
              <button onClick={() => setSidebarActive(!sidebarActive)}>
                <GiHamburgerMenu className="h-[20] w-[20] md:h-[24px] md:w-[24px]" />
              </button>
            </li>
          </ul>
        </div>
      );
    }}
  </Context.Consumer>
);

export default Navbar;
