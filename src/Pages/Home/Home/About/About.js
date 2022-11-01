import React from "react";
import person from "../../../../assets/images/about_us/person.jpg";
import parts from "../../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2">
            <img alt="/" src={person} className=" rounded-lg shadow-2xl" />
            <img alt="/" src={parts} className=" rounded-lg shadow-2xl" />
          </div>
          <div className="w-1/2">
            <p className="text-2xl text-orange-600"> about us</p>
            <h1 className="text-5xl font-bold">
              We are qualified for <br />
              & of experience <br />
              in this field
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              deleniti sapiente, distinctio obcaecati facere unde aliquam eum
              quia cupiditate harum mollitia at ab minus, aut quis minima est
              ipsam. Ab?
            </p>
            <button className="btn btn-outline">Get more info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
