import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import { HiLightBulb } from "react-icons/hi";
import { BsCalendarFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { SiGo, SiGooglemessages } from "react-icons/si";
import { reveal } from "../Animation";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import "../styles/sections/About.scss";

const About = () => {
  const [element, controls] = useScroll();
  return (
    <div className="about-container" id="about" ref={element}>
      <div className="container">
        <motion.div
          className="details"
          animate={controls}
          variants={reveal}
          transition={{ delay: 0.1, stiffness: 300 }}
        >
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
        </motion.div>
        <div className="cards" ref={element}>
          <Card
            title="Innovative Ideas"
            logo={<HiLightBulb />}
            animateCustom={controls}
          />
          <Card
            title="Planning"
            logo={<BsCalendarFill />}
            animateCustom={controls}
          />
          <Card
            title="Communication"
            logo={<BiSupport />}
            animateCustom={controls}
          />
          <Card
            title="24/7 suppoer"
            logo={<SiGooglemessages />}
            animateCustom={controls}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
