import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();
  return (
    <div>
      <h1 className="text-white">title {service.title}</h1>
    </div>
  );
};

export default Checkout;
