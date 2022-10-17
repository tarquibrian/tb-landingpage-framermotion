import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { HiLightBulb } from "react-icons/hi";
import { BsCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGo, SiGooglemessages } from "react-icons/si";
import "../styles/sections/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="details">
          <Title title="About CRYO" color="blue" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            cumque laborum temporibus eos commodi ducimus assumenda facilis
            quos, voluptate, quae tempore iure, quidem minima? Ipsa laborum
            magnam voluptate ad laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            cumque laborum temporibus eos commodi ducimus assumenda facilis
            quos, voluptate, quae tempore iure, quidem minima? Ipsa laborum
            magnam voluptate ad laudantium.
          </p>
          <Button content="Why Cryo?" />
        </div>
        <div className="cards">
          <Card title="Innovative Ideas" logo={<HiLightBulb />} />
          <Card title="Planning" logo={<BsCalendarFill />} />
          <Card title="Communication" logo={<BiSupport />} />
          <Card title="24/7 suppoer" logo={<SiGooglemessages />} />
        </div>
      </div>
    </div>
  );
};

export default About;
