import { useEffect, useState } from "react";

const Users = ({ limit, heading = "Users" }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getUserData() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setData(data["users"]);
    }
    getUserData();
  }, []);
  console.log(data);
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-lg md:text-2xl border-b border-solid p-3">
        {heading}
      </h1>
      {data ? (
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr className="w-full text-left">
                <th className="border sm:p-1 text-[12px] md:text-base md:p-3">
                  First Name
                </th>
                <th className="border sm:p-1 text-[12px] md:text-base md:p-3">
                  Last Name
                </th>
                <th className="border sm:p-1 text-[12px] md:text-base md:p-3">
                  City
                </th>
                <th className="border sm:p-1 text-[12px] md:text-base md:p-3">
                  Age
                </th>
                <th className="border sm:p-1 text-[12px] md:text-base md:p-3">
                  Birth Date
                </th>
                <th className="border sm:p-1 text-[12px] md:text-base md:p-3">
                  Gender
                </th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, limit).map((eachData, i) => {
                return (
                  <tr key={i} className="">
                    <td
                      key={eachData.firstName}
                      className="border-b lg:p-3 text-[12px] md:text-base  p-1"
                    >
                      {eachData.firstName}
                    </td>
                    <td
                      key={eachData.lastName}
                      className="border-b lg:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.lastName}
                    </td>
                    <td
                      key={eachData.address["city"]}
                      className="border-b lg:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.address["city"]}
                    </td>
                    <td
                      key={eachData.age}
                      className="border-b lg:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.age}
                    </td>
                    <td
                      key={eachData.birthDate}
                      className="border-b lg:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.birthDate}
                    </td>
                    <td
                      key={eachData.gender}
                      className="border-b lg:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.gender}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Users;
