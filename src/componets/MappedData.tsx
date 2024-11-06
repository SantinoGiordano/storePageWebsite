import "../styles/gridContainers.css";
import "../styles/itemCard.css";
import "../styles/header.css";
import { useState } from "react";

export function MappedData() {
  const data = [
    {
      name: "Eco-Friendly Water Bottle",
      description:
        "A durable, reusable water bottle made from recycled materials.",
      price: 15.99,
    },
    {
      name: "Organic Cotton T-Shirt",
      description: "Soft and breathable t-shirt made from 100% organic cotton.",
      price: 22.49,
    },
    {
      name: "Bluetooth Headphones",
      description:
        "High-quality wireless headphones with noise-cancellation feature.",
      price: 89.99,
    },
    {
      name: "Smart Home Thermostat",
      description:
        "Programmable thermostat that learns your preferences and helps save energy.",
      price: 129.99,
    },
    {
      name: "Stainless Steel Travel Mug",
      description:
        "Leak-proof travel mug with double-wall insulation to keep beverages hot or cold.",
      price: 18.75,
    },
    {
      name: "LED Desk Lamp",
      description:
        "Adjustable desk lamp with multiple brightness settings and USB charging port.",
      price: 35.0,
    },
    {
      name: "Portable Charger",
      description:
        "Compact power bank with fast-charging capability for all your devices.",
      price: 25.5,
    },
    {
      name: "Fitness Tracker Watch",
      description:
        "Water-resistant fitness tracker with heart rate monitor and step counter.",
      price: 54.99,
    },
    {
      name: "Ceramic Plant Pot",
      description: "Stylish ceramic pot suitable for small indoor plants.",
      price: 12.3,
    },
    {
      name: "Multi-Tool Kit",
      description:
        "Versatile multi-tool kit with pliers, screwdriver, knife, and more.",
      price: 42.6,
    },
  ];

  const [total, setTotal] = useState(0);

  const handleClick = (price: number) => {
    setTotal(total + price);
  };

  return (
    <>
      <h1 className="title">Total: ${total.toFixed(2)}</h1>
      <hr />
      <div className="gridContainer">
        {data.map((data) => (
          <div
            key={data.name}
            className="itemCard"
            onClick={() => handleClick(data.price)}
          >
            <h4>{data.name}</h4>
            <p>{data.description}</p>
            <p>${data.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
