import React from "react";
import WorkImage from '../assets/work.svg'

const Starter = () => {
  return (
    <div className="main-container">
      <div className="container">
        <h1>We Provide Solutions Hwlp You to Build or Grow Your Business!</h1>
        <p>
          A professional web and mobile app develpent agency with 100+ web adn
          app developd. We provide a high-quality service in web and mobile app
          development as well as in diesign.
        </p>
        <div className="button-container"></div>
      </div>
      <div className="image">
        <img src={WorkImage} alt="work Image " />
      </div>
    </div>
  );
};

export default Starter;
