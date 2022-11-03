import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Checkout = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services/6361d8a8f56287de27fe630f")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const { user } = useContext(AuthContext);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.firstname.value;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;

    const order = {
      service: "service",
      serviceName: "title",
      price: 21,
      customer: name,
      email: email,
      phone: phone,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          alert("order placed successfully");
        }
      })
      .then((error) => console.error(error));
  };
  return (
    <div>
      <h1 className="text-white text-4xl"> {data.title}</h1>
      <form onSubmit={handlePlaceOrder} action="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstname"
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            name="secondname"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <button className="btn btn-outline">place a order</button>
      </form>
    </div>
  );
};

export default Checkout;
