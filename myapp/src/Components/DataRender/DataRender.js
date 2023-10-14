import { useState } from "react";

const DataRender = (props) => {
  const [product, setproduct] = useState([
    { name: "laptop", price: 20000, model: "hp", order: "one" },
    { name: "bag", price: 50000, model: "dell", order: "two" },
    { name: "desktop", price: 450000, model: "lenovo", order: "three" },
    { name: "palmtop", price: 25000, model: "asus", order: "four" },
  ]);

  return (
    <div style={{ width: "30%", display: "flex", gap: "9px" }}>
      {product.map((data) => {
        return (
          <>
            <h2>
              This is number {data.order} name {data.name}
            </h2>
            <h2>This is the price {data.price}</h2>
            <h2>This is the model {data.model}</h2>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default DataRender;
