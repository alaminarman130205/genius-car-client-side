import React from "react";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="drop-shadow-2xl" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="text-2xl text-orange-500 font-semibold">${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline">buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
