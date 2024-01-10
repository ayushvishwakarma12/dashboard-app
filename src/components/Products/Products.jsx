import { useEffect, useState } from "react";

const Products = ({ limit, heading = "Products" }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getUserData() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data["products"]);
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
                <th className="border md:p-3 p-1 text-[12px] md:text-base">
                  Title
                </th>
                <th className="border md:p-3 p-1 text-[12px] md:text-base">
                  Brand
                </th>
                <th className="border md:p-3 p-1 text-[12px] md:text-base">
                  Category
                </th>
                <th className="border md:p-3 p-1 text-[12px] md:text-base">
                  Rating
                </th>
                <th className="border md:p-3 p-1 text-[12px] md:text-base">
                  Stock
                </th>
                <th className="border md:p-3 p-1 text-[12px] md:text-base">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, limit).map((eachData, i) => {
                return (
                  <tr key={i} className="">
                    <td
                      key={eachData.title}
                      className="border-b md:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.title}
                    </td>
                    <td
                      key={eachData.brand}
                      className="border-b md:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.brand}
                    </td>
                    <td
                      key={eachData.category}
                      className="border-b md:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.category}
                    </td>
                    <td
                      key={eachData.rating}
                      className="border-b md:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.rating}
                    </td>
                    <td
                      key={eachData.stock}
                      className="border-b md:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.stock}
                    </td>
                    <td
                      key={eachData.price}
                      className="border-b md:p-3 text-[12px] md:text-base p-1"
                    >
                      {eachData.price}
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

export default Products;
