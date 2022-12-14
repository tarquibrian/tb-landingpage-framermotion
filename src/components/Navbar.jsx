import React, { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "../styles/components/Navbar.scss";
import BrandName from "./BrandName";
import { motion } from "framer-motion";
import { navbarAnimation } from "../Animation";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navbarToggler = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <motion.div
      className={`navbar ${toggleNav ? "active" : ""}`}
      variants={navbarAnimation}
      transition={{ delay: 0.2 }}
    >
      <div className="col">
        <BrandName />
        <div className="collapseble-button">
          {!toggleNav ? (
            <GiHamburgerMenu onClick={navbarToggler} />
          ) : (
            <MdClose onClick={navbarToggler} />
          )}
        </div>
      </div>
      <nav>
        <div className="links">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#testimonials">Testimonial</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <Button content="Contact" />
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
