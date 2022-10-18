import React from "react";
import { GoPlay } from "react-icons/go";
import Title from "../components/Title";
import "../styles/sections/Why.scss";

const Why = () => {
  return (
    <div className="why-container" id="services">
      <div className="container">
        <div className="top">
          <Title title="Why CRYO?" color="pink" lineCenter={true} />
          <div className="subTitle">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              molestias numquam ipsum maiores maxime qui? Pariatur illum odit at
              porro nisi deserunt rem, provident veniam quod eaque voluptatibus
              nulla mollitia!
            </p>
          </div>
        </div>
        <div className="content">
          <div className="">
            <div className="video">
              <GoPlay />
            </div>
          </div>
          <div className="reasons">
            <ul>
              <li>Over 10+ years of industry wide experience</li>
              <li>
                Provide solutions to our multiple global clients or website
                traffic generation and workflow
              </li>
              <li>Strong team of 150+ creative people</li>
              <li>99% adhere to service level contract</li>
              <li>Ready to receive service request 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
