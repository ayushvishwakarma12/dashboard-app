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
      <h1 className="text-center font-bold text-2xl border-b border-solid p-3">
        {heading}
      </h1>
      {data ? (
        <div className="w-full">
          <table className="w-full">
            <tr className="w-full text-left">
              <th className="border  p-3">Title</th>
              <th className="border p-3">Brand</th>
              <th className="border p-3">Category</th>
              <th className="border p-3">Rating</th>
              <th className="border p-3">Stock</th>
              <th className="border p-3">Price</th>
            </tr>

            {data.slice(0, limit).map((eachData, i) => {
              return (
                <tr key={i} className="">
                  <td key={eachData.title} className="border-b p-3">
                    {eachData.title}
                  </td>
                  <td key={eachData.brand} className="border-b p-3">
                    {eachData.brand}
                  </td>
                  <td key={eachData.category} className="border-b p-3">
                    {eachData.category}
                  </td>
                  <td key={eachData.rating} className="border-b p-3">
                    {eachData.rating}
                  </td>
                  <td key={eachData.stock} className="border-b p-3">
                    {eachData.stock}
                  </td>
                  <td key={eachData.price} className="border-b p-3">
                    {eachData.price}
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

export default Products;
