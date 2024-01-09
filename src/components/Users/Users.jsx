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
      <h1 className="text-center font-bold text-2xl border-b border-solid p-3">
        {heading}
      </h1>
      {data ? (
        <div className="w-full">
          <table className="w-full">
            <tr className="w-full text-left">
              <th className="border  p-3">First Name</th>
              <th className="border p-3">Last Name</th>
              <th className="border p-3">City</th>
              <th className="border p-3">Age</th>
              <th className="border p-3">Birth Date</th>
              <th className="border p-3">Gender</th>
            </tr>

            {data.slice(0, limit).map((eachData, i) => {
              return (
                <tr key={i} className="">
                  <td key={eachData.firstName} className="border-b p-3">
                    {eachData.firstName}
                  </td>
                  <td key={eachData.lastName} className="border-b p-3">
                    {eachData.lastName}
                  </td>
                  <td key={eachData.address["city"]} className="border-b p-3">
                    {eachData.address["city"]}
                  </td>
                  <td key={eachData.age} className="border-b p-3">
                    {eachData.age}
                  </td>
                  <td key={eachData.birthDate} className="border-b p-3">
                    {eachData.birthDate}
                  </td>
                  <td key={eachData.gender} className="border-b p-3">
                    {eachData.gender}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Users;
