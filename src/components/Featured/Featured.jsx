import { CircularProgressbar } from "react-circular-progressbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className=" flex-[2] border shadow-lg p-5">
      <div className="flex justify-between items-center text-gray-500 font-[500]">
        <h1>Total Revenue</h1>
        <BsThreeDotsVertical />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-5">
        <div className=" h-28 w-28">
          <CircularProgressbar value={70} strokeWidth={5} text="70%" />
        </div>
        <p className="text-gray-500 text-base font-semibold">
          Total sales made today
        </p>
        <p className="text-[20px] lg:text-[30px]">$420</p>
        <p className="text-sm text-gray-500 font-normal text-center">
          Previous transaction processing Last payments may not be included
        </p>
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-base text-gray-500 flex justify-center items-center">
              Target
            </div>
            <div className="flex items-center text-base mt-2 text-red-500 gap-1">
              <FaAngleDown />
              <div>$12.4k</div>
            </div>
          </div>
          <div className="text-green-500">
            <div className="text-base text-gray-500 flex justify-center items-center">
              Last Week
            </div>
            <div className="flex items-center text-base mt-2">
              <FaAngleUp />
              <div>$12.4k</div>
            </div>
          </div>
          <div className="text-green-500">
            <div className="text-base text-gray-500 flex justify-center items-center">
              Last Month
            </div>
            <div className="flex items-center text-base mt-2">
              <FaAngleUp />
              <div>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
