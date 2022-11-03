import React from "react";

const OrderRow = ({ order }) => {
  const { _id, serviceName, price, customer, email, phone } = order;

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure you want to delete the order");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12"></div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-wide">
          Delete
        </button>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">{price}</button>
      </th>
    </tr>
  );
};

export default OrderRow;
